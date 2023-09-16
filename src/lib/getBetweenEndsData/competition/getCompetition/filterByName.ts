import type { BeTournamet } from "../../types";

export const filterByName = (tournament: BeTournamet, substring: string) =>
  tournament.tournament_name.includes(substring);
