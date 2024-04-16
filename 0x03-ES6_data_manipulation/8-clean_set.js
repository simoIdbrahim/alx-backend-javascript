export default function cleanSet(set, startString) {
  const result = [];
  if (!set || !startString || !(set instanceof Set) || typeof startString !== 'string') {
    return '';
  }
  for (const val of set.values()) {
    if (typeof val === 'string' && val.startsWith(startString)) {
      const str = val.substring(startString.length);

      if (str && str !== val) {
        result.push(str);
      }
    }
  }
  return result.join('-');
}
