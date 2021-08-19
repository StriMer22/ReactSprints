const func = require('./Checker.js');

function overloadedFunc(
  first = [1, 2, 3],
  second = 2,
  third = function (firstOne, secondOne) {
    if (Array.isArray(firstOne)) {
      return firstOne.map((element) => element * secondOne);
    }
    return first * second;
  }
) {
  return third(first, second);
}
