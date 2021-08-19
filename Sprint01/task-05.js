function checkAdult(age) {
  const ageErr = 'Error Please, enter ';
  console.log(
    !age
      ? ageErr + 'your age'
      : age < 0
      ? ageErr + 'positive number'
      : isNaN(age)
      ? ageErr + 'number'
      : !Number.isInteger(age)
      ? ageErr + 'Integer number'
      : age < 18
      ? 'Error Access denied - you are too young!'
      : 'Access allowed'
  );
  console.log('Age verification complete');
}
