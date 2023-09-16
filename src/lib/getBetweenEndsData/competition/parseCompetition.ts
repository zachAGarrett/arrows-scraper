import { DataSourceType } from "../../../generated/ogm";
import { PartialCompetitionInput } from "./loadCompetition";
import { BeTournamet } from "../types";

export default function parseCompetition(
  competition: BeTournamet,
  sourceName: string
) {
  const { id, tournament_name, start_date, end_date, events } = competition;
  const competitionInput: PartialCompetitionInput = {
    name: tournament_name,
    start: start_date,
    end: end_date,
    events: {
      create: events.map((event, i) => ({
        node: {
          name: `${event.event_name} ${i + 1}`,
          start: start_date,
          end: end_date,
          dataSources: {
            connectOrCreate: [
              {
                where: { node: { name: sourceName } },
                onCreate: {
                  node: { name: sourceName, type: DataSourceType.Web },
                  edge: { id: String(event.id) },
                },
              },
            ],
          },
        },
        edge: { number: event.display_order },
      })),
    },
    dataSources: {
      connectOrCreate: [
        {
          where: { node: { name: sourceName } },
          onCreate: {
            node: { name: sourceName, type: DataSourceType.Web },
            edge: { id: String(id) },
          },
        },
      ],
    },
  };
  return competitionInput;
}
