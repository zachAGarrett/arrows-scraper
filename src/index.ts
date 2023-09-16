import getBetweenEndsData from "./lib/getBetweenEndsData";
import { Season } from "./lib/getBetweenEndsData/types";

(async () =>
  await getBetweenEndsData(
    { name: "USAT", offset: 1, limit: 5 },
    Season.OUT
  ))();
