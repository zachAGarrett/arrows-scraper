import { SetCreateInput, Target } from "../../../generated/ogm";
import { BeDivision, Season } from "../types";
import resolveTarget from "./resolveTarget";

export type PartialSetInput = Pick<
  SetCreateInput,
  "arrows" | "arrowsInOrder" | "complete" | "match" | "target"
>;
export interface ParseSetProps {
  /**
   * Between Ends stores match results as strings.
   * A 72 arrow ranking round is a 72 character string.
   * End order is preserved.
   * This is actually a very smart way to store arrow values minimally.
   * Additionally, this format is very useful for simple, single dimension, pattern recognition algorithms.
   */
  setString: string;
  setNumber: number;
  internalMatchId?: string;
  division: BeDivision;
  season: Season;
}
export default function parseSet({
  setString,
  setNumber,
  internalMatchId,
  division,
  season,
}: ParseSetProps) {
  // const regexstr = `.{1,${setSize}}`,
  //   regex = new RegExp(regexstr, "g");
  // const sets = matchScoreString.match(regex);
  // if (sets === null || sets === undefined) {
  //   throw new Error(`Unexpected format for set: ${matchScoreString}`);
  // }
  // const setInputs = sets.map((s, i) => {
  const set = setString.match(/\w/g);

  if (set === null) throw new Error(`Null score for match score string`);

  /**
   * Parse the arrow value to integer values
   * Treat x as 11, but make sure to revert to 10 when doing stats.
   */
  const arrowInputs = set.map((arrow) => {
    let value: number;
    if (arrow === "M") {
      value = 0;
    } else if (arrow === "X") {
      value = 11;
    } else if (arrow === "T") {
      value = 10;
    } else {
      value = parseInt(arrow);
    }
    const arrowInput = { node: { value } };
    return arrowInput;
  });
  const setInput: { node: PartialSetInput } = {
    node: {
      complete: true,
      arrowsInOrder: false,
      arrows: { create: arrowInputs },
      target: {
        connectOrCreate: resolveTarget(division, season),
      },
      match:
        internalMatchId === undefined
          ? undefined
          : {
              connect: {
                where: { node: { id: internalMatchId } },
                edge: { number: setNumber },
              },
            },
    },
  };
  return setInput;
  // });
  // return setInputs;
}
