import { MatchGender } from "../../../generated/ogm";
import { BeDivision } from "../types";

export default function mapMatchGender(division: BeDivision) {
  return division.includes("W") ? MatchGender.F : MatchGender.M;
}
