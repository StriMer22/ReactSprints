function* take(n, iterable) {
  for (let i = 0; i < n; i++) yield iterable[i];
}
