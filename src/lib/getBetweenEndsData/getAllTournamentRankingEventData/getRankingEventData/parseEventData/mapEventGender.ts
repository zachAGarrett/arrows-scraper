import { MatchGender } from "../../../../../generated/ogm";
import { BeDivision } from "../../../types";

export default function mapEventGender(division: BeDivision) {
  return division.includes("W") ? MatchGender.F : MatchGender.M;
}
