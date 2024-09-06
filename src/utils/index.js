function multiplyArray(arr, n) {
  return [...Array(n)].flatMap(() => arr);
}

export { multiplyArray };