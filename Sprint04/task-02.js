function add(x, y) {
  return new Promise((resolve, reject) => {
    return typeof (x + y) !== 'number' ? reject("Error!") : resolve(x + y);  
  });
}