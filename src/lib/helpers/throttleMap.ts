export default async function throttleMap<T, R>(
  arr: T[],
  processItem: (item: T, i: number, arr: T[]) => Promise<R>,
  delay: number,
  callback?: () => void
): Promise<R[]> {
  const results: R[] = [];

  async function processQueue(queue: T[], i: number) {
    if (queue.length === 0) {
      if (typeof callback === "function") {
        callback();
      }
      return;
    }

    const item = queue.shift();
    if (item !== undefined) {
      try {
        const result = await processItem(item, i, arr);
        results.push(result);
      } catch (error) {
        console.error(`Error processing item: ${error}`);
      }
      await new Promise((resolve) => setTimeout(resolve, delay));
      await processQueue(queue, i + 1);
    }
  }

  await processQueue([...arr], 0);
  return results;
}
