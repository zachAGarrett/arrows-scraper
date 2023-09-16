export default function splitSets(matchString: string, size: number) {
  const regexstr = `.{1,${size}}`,
    regex = new RegExp(regexstr, "g");
  const sets = matchString.match(regex);
  if (sets === null || sets === undefined) {
    throw new Error(`Unexpected format for set: ${matchString}`);
  }
  return sets;
}
