function combineArray(arr1, arr2) {
   const arrayOneCombined = arr1.filter(typeOfElement => typeof typeOfElement === 'number');
   const arrayTwoCombined =  arr2.filter(typeOfElement => typeof typeOfElement === 'number');
   return [...arrayOneCombined, ...arrayTwoCombined];
}
