function modifyArray(array) {
    array.splice(0,1,'Start');
    array.splice(array.length-1,1,'End');
    return array;
}
