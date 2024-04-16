export default function cleanSet(set, startString) {
  const result = [];

  for (const str of set.values()) {
    if (str.startsWith(startString)) {
      const subStr = str.slice(startString.length);

      if (subStr !== str) {
        result.push(subStr);
      }
    }
  }

  return result.join('-');
}
