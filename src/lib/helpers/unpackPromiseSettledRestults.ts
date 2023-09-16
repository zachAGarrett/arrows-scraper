export default function unpackPromiseSettledResults<T, R>(
  results: PromiseSettledResult<T>[],
  onFulfilledResult?: (arg0: T, i: number) => R | Promise<R>,
  onRejectedResult?: (arg0: any, i: number) => any
) {
  const fulfilledResults: (R | Promise<R> | T)[] = [];
  results.forEach((res, i) => {
    if (res.status === "fulfilled") {
      if (onFulfilledResult) {
        const result = onFulfilledResult(res.value, i);
        fulfilledResults.push(result);
      } else {
        fulfilledResults.push(res.value);
      }
    } else if (res.status === "rejected") {
      onRejectedResult && onRejectedResult(res.reason, i);
    }
  });

  if (onFulfilledResult) {
    return fulfilledResults as (R | Promise<R>)[];
  } else {
    return fulfilledResults as T[];
  }
}
