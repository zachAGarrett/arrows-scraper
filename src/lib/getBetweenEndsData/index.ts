import getTournaments, {
  CompetitionFilters,
} from "./competition/getCompetition";
import throttleMap from "../helpers/throttleMap";
import parseQualificationEventData from "./event/parseEventData/parseEventData_qual";
import { BeEvent, BeEventType, Season } from "./types";
import loadCompetition, {
  CreatedCompetition,
} from "./competition/loadCompetition";
import loadQualificationMatch from "./match/loadMatch";
import getEventData from "./event/getEventData";
import initializeProcess from "../initializeProcess";
import loadAthlete from "./athlete/loadAthlete";

export default async function getBetweenEndsData(
  filters: CompetitionFilters,
  season: Season
) {
  const { neoSchema, ogm, driver, production } = await initializeProcess();
  ogm.init();
  const beTournaments = await getTournaments(filters);
  const settledResults = await Promise.allSettled(
    beTournaments.map(async (comp, i, comps) => {
      const decorator = `[${i + 1}/${comps.length}]`;
      console.debug(decorator + ": Loading");
      const { competition, events } = await loadCompetition(
        comp,
        "https://resultsapi.herokuapp.com",
        ogm
      );
      return events.map((event) => ({ event, competition }));
    })
  );
  let fulfilledResults: {
    event: BeEvent;
    competition: CreatedCompetition;
  }[][] = [];
  settledResults.forEach((result, i, results) => {
    if (result.status === "fulfilled") {
      fulfilledResults.push(result.value);
    } else {
      console.error(`[${i + 1}/${results.length}]: ${result.reason}`);
    }
  });

  const flatEvents = fulfilledResults.flat();

  await Promise.allSettled(fulfilledResults);
  await throttleMap(
    flatEvents,
    async ({ competition, event }, i_0, arr_0) => {
      const decorator_0 = `[Event ${i_0 + 1}/${arr_0.length}]`;
      console.debug(`${decorator_0}: Getting data`);
      const eventData = await getEventData(event.id);
      if (eventData.event.etp === BeEventType.RankingEvent) {
        const inputs = parseQualificationEventData({
          eventId: String(event.id),
          event: eventData.event,
          scores: eventData.scores,
          season,
        });
        await throttleMap(
          inputs,
          async (
            { matchInput, athleteInputsConstructor, division },
            i_1,
            arr_1
          ) => {
            const decorator_1 =
              decorator_0 +
              `[Match ${i_1 + 1}/${arr_1.length}][${division} ${
                matchInput.style
              }]`;
            const newMatch = await loadQualificationMatch(
              matchInput,
              ogm,
              decorator_1
            );
            const athleteInputs = athleteInputsConstructor(newMatch.id);
            await Promise.all(
              athleteInputs.map(async (input, i_2, arr_2) => {
                const decorator_2 =
                  decorator_1 +
                  `[Athlete ${i_2 + 1}/${arr_2.length}][${input.familyName} ${
                    input.givenName
                  }]`;

                await loadAthlete(input, ogm, decorator_2);
              })
            );
            // await throttleMap(
            //   athleteInputs,
            //   async (input, i_2, arr_2) => {
            //     const decorator_2 =
            //       decorator_1 +
            //       `[Athlete ${i_2 + 1}/${arr_2.length}][${input.familyName} ${
            //         input.givenName
            //       }]`;

            //     await loadAthlete(input, ogm, decorator_2);
            //   },
            //   500
            // );
          },
          500
        );
      }
    },
    500
  );
  // console.log(fulfilledResults);
  console.log("Finished loading data, closing driver");

  await driver.close();
}
