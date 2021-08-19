const maxInterv = (...numbers) => {
  if (numbers.length <= 1) return 0;
  let storedInterv = [];
  numbers.reduce((prev, curr) => {
    storedInterv.push(Math.abs(prev - curr));
    return curr;
  });
  return Math.max(...storedInterv);
};
