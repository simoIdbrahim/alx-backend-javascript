export default function updateUniqueItems(map) {
  if (!(map instanceof Map)) {
    throw new Error('Cannot process');
  }

  map.forEach((val, ind) => {
    if (val === 1) {
      map.set(ind, 100);
    }
  });
}
