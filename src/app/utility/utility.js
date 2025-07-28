export const chunkArray = (exclusive, size) => {
  const result = [];
  for (let i = 0; i < exclusive.length; i += size) {
    result.push(exclusive.slice(i, i + size));
  }
  return result;
};
