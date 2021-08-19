function factorial(n) {
  return n <= 1 ? 1 : n * factorial(n - 1);
}

function processArray(arr, factorial) {
  return arr.map(element => {
    return factorial(element);
  });
}
