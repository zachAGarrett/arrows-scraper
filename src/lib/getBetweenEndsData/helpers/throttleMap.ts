export default function throttleMap<T, R>(
  arr: T[],
  processItem: (item: T, i: number) => Promise<R>,
  delay: number,
  callback?: () => void
) {
  const queue = [...arr];
  let i = 0;

  function processNext() {
    if (queue.length === 0) {
      if (typeof callback === "function") {
        callback();
      }
      return;
    }

    const item = queue.shift();
    if (item !== undefined) {
      try {
        const result = processItem(item, i);
      } catch (error) {
        console.error(`Error processing item: ${error}`);
      }
      setTimeout(processNext, delay);
    }
    i += 1;
  }

  processNext();
}
