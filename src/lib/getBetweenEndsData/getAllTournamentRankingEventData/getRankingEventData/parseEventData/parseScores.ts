export default function parseScores(scoreString: string, ape: number) {
  const regexstr = `.{1,${ape}}`,
    regex = new RegExp(regexstr, "g");
  const sets = scoreString.match(regex);
  if (sets === null || sets === undefined) return null;
  const setArrows = sets.map((s) => {
    const set = s.match(/\w/g);

    if (set === null) throw new Error(`Null score for set string`);

    // parse the scores into numbers
    // note: this treats X as 11, whish can cause problems later when doing stats
    return set.map((arrow) => {
      if (arrow === "M") {
        return 0;
      } else if (arrow === "X") {
        return 11;
      } else if (arrow === "T") {
        return 10;
      } else {
        return parseInt(arrow);
      }
    });
  });
  return setArrows;
}
