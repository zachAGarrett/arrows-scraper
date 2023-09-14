import { BeEndpoint, BeTournamet } from "../types";
import { fetchData } from "../helpers/fetchData.js";
import { filterByName } from "./filterByName";

export interface TournamentFilters {
  name?: string;
}
export default async function getTournaments(filters?: TournamentFilters) {
  const tournaments = await fetchData(BeEndpoint.tournaments).then(
    async (event) => (await event.json()) as BeTournamet[]
  );

  if (filters !== undefined) {
    const { name } = filters;
    // todo : abstract filters to allow for more complex filter types
    return tournaments?.filter((tournament) => {
      return name && filterByName(tournament, name);
    });
  } else {
    return tournaments;
  }
}
