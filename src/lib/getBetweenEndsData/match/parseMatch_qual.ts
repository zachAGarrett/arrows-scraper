import parseAthlete from "../athlete/parseAthlete";
import parseSet from "../set/parseSet";
import splitSets from "../set/splitSets";
import { BeAth, BeDivision, BeEventType, BeScoresObj, Season } from "../types";
import { PartialMatchInput } from "./loadMatch";
import mapMatchGender from "./mapMatchGender";
import mapMatchStyle from "./mapMatchStyle";

interface ParseMatch_qualProps {
  eventId: string;
  arrowsPerEnd: number;
  scores: BeScoresObj;
  athletes: BeAth[];
  division: BeDivision;
  season: Season;
}
export default function parseMatch_qual({
  athletes,
  division,
  arrowsPerEnd,
  scores,
  eventId,
  season,
}: ParseMatch_qualProps) {
  const divisionMatchInput: PartialMatchInput = {
    style: mapMatchStyle(BeEventType.RankingEvent),
    gender: mapMatchGender(division),
    division: {
      connectOrCreate: {
        onCreate: { node: { name: division } },
        where: { node: { name: division } },
      },
    },
    event: {
      connect: {
        where: {
          node: {
            dataSourcesConnection_SINGLE: { edge: { id: eventId } },
          },
        },
      },
    },
  };
  return {
    matchInput: divisionMatchInput,
    division,
    // Call the constructor once we have the internal match id obtained by creating the match
    athleteInputsConstructor: (matchId: string) =>
      athletes.map((athlete) => {
        const matchSets = splitSets(scores.ars[athlete.aid], arrowsPerEnd);

        const athleteSets = matchSets.map((setString, i) =>
          parseSet({
            setString,
            setNumber: i,
            internalMatchId: matchId,
            division,
            season,
          })
        );
        return parseAthlete({
          athlete: athlete,
          sets: athleteSets,
          matchId,
        });
      }),
  };
}
