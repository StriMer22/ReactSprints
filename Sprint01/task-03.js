function longestLogin(loginList) {
  return loginList.reduce(function (firstParam, secondParam) {
    return firstParam.length > secondParam.length ? firstParam : secondParam;
  });
}
