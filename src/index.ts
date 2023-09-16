import getBetweenEndsData from "./lib/getBetweenEndsData";
import { Season } from "./lib/getBetweenEndsData/types";

(async () =>
  await getBetweenEndsData({ name: "USAT", first: 1 }, Season.OUT))();
