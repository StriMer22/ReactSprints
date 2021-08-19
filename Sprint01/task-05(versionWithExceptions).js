function checkAdult(age) {
  const ageErr = 'Please, enter ';
  try {
    throw new Error(
      !age
        ? ageErr + 'your age'
        : age < 0
        ? ageErr + 'positive number'
        : isNaN(age)
        ? ageErr + 'number'
        : !Number.isInteger(age)
        ? ageErr + 'Integer number'
        : age < 18
        ? 'Access denied - you are too young!'
        : 'Access allowed'
    );
  } catch (exception) { 
    console.log( age >= 18 && Number.isInteger(age) ?  exception.message : exception.name + ' ' + exception.message);
  } finally {
    console.log('Age verification complete');
  }
}
