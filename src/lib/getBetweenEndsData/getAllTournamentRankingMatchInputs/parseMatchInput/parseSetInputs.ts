import {
  MatchSetsCreateFieldInput,
  SetArrowsCreateFieldInput,
} from "../../../../generated/ogm";
interface ParseSetInputsProps {
  /**
   * Between Ends stores match results as strings.
   * A 72 arrow ranking round is a 72 character string.
   * End order is preserved.
   * This is actually a very smart way to store arrow values minimally.
   * Additionally, this format is very useful for simple, single dimension, pattern recognition algorithms.
   */
  matchScoreString: string;
  setSize: number;
  athleteId: string;
}
export default function parseSetInputs({
  matchScoreString,
  setSize,
  athleteId,
}: ParseSetInputsProps) {
  const regexstr = `.{1,${setSize}}`,
    regex = new RegExp(regexstr, "g");
  const sets = matchScoreString.match(regex);
  if (sets === null || sets === undefined) {
    throw new Error(`Unexpected format for set: ${matchScoreString}`);
  }
  const setInputs = sets.map((s, i) => {
    const set = s.match(/\w/g);

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
      const arrowInput: SetArrowsCreateFieldInput = { node: { value } };
      return arrowInput;
    });
    const setInput: MatchSetsCreateFieldInput = {
      node: {
        complete: true,
        arrowsInOrder: false,
        arrows: { create: arrowInputs },
        athlete: {
          connect: {
            where: {
              node: {
                dataSourcesConnection_SINGLE: { edge: { id: athleteId } },
              },
            },
          },
        },
      },
      edge: { number: i },
    };
    return setInput;
  });
  return setInputs;
}
