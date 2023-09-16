import { BeEndpoint, BeTournamet } from "../../types";
import { fetchData } from "../../helpers/fetchData.js";
import { filterByName } from "./filterByName";

export interface CompetitionFilters {
  name?: string;
  offset?: number;
  limit?: number;
}
export default async function getCompetition(filters?: CompetitionFilters) {
  const competitions = await fetchData(BeEndpoint.tournaments).then(
    async (event) => (await event.json()) as BeTournamet[]
  );

  if (filters === undefined) return competitions;
  const { name, offset, limit } = filters;
  // todo : abstract filters to allow for more complex filter types
  return competitions
    ?.filter((comp) => {
      return name && filterByName(comp, name);
    })
    .slice(offset || 0, limit === undefined ? competitions.length : limit);
}
