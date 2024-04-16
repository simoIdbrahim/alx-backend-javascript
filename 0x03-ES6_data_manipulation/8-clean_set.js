export default function cleanSet(set, startString) {
  const result = [];

  for (const str of set.values()) {
    if (str.startsWith(startString)) {
      const substr = str.substring(startString.length);

      if (substr !== str) {
        result.push(substr);
      }
    }
  }
  return result.join('-');
}
