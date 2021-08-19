function mapCreator(keys, values) {
  const map = new Map();
  values.map((city, keyOfCity) =>
    typeof city === 'string' ? map.set(keys[keyOfCity], city) : null
  );
  return map;
}