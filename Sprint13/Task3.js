const upperCase = (string) => string.toUpperCase();
const tripleExclaim = (string) => `${string}!!!`; // your code
const split = (separator) => (string) => string.split(separator); // your code
const join = (separator) => (array) => array.join(separator); // your code
const copy = (string) => `${string} ${string}`; // your code

const createComposition = (...args) => (initialValue) =>
  args.reduce((value, arg) => arg(value), initialValue); // implementation of createComposition function

const result = createComposition(
  upperCase,
  tripleExclaim,
  split("_"),
  join(" "),
  copy
); // 5 function-arguments )
