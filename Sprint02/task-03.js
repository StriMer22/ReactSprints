const howMuchSec = (...timeInfo) => {
  let equivalent = [1, 60, 60, 24, 30, 12];
  for (let i = 2; i < equivalent.length; i++) {
    equivalent[i] *= equivalent[i - 1];
  }
  return timeInfo
    .map((val, i) => (val *= equivalent[i]))
    .reduce((a, b) => a + b, 0);
};
