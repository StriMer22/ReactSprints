function getPromise(delay, message) {
  return new Promise(resolve => {
    if (delay >= 0 && delay <= 2000) setTimeout(resolve, delay, message);
  });
}
