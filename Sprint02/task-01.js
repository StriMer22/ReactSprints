const filterNums = (arrayToCheck, numToCompare = 0, degree = 'greater') => {
  return arrayToCheck.filter((item) => 
    (degree === 'greater' ?  item > numToCompare : item < numToCompare));
};