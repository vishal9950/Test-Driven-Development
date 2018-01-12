function addArrays(first, second) {
  var check1 = verifyLength(first, second);
  var check2 = verifyIfOnlyNumbers(first) && verifyIfOnlyNumbers(second);
  if(check1 && check2){
    var result = [];
    for (var i = 0; i < first.length; i++) {
      result[i] = first[i] + second[i];
    }
    return result;
  }
  else{
    return null;
  }
}

function verifyLength(arr1, arr2) {
  if(arr1.length === arr2.length){
    return true;
  }
  else {
    console.log("Err1: Supply equal length arrays!");
    return false;
  }
}

function verifyIfOnlyNumbers(arr) {
  for (var i = 0; i < arr.length; i++) {
    if(typeof arr[i] != 'number' || arr[i] === NaN){
      console.log("Err2: Supply only valid numbers!");
      return false;
    }
  }
  return true;
}

function areEqualArrays(first, second) {
  var flag = true;
  for (var i = 0; i < first.length; i++) {
    if(first[i] != second[i]){
      flag = false;
      break;
    }
  }
  return flag;
}

console.log("Should add ", areEqualArrays(addArrays([1, 2, 3, 4, 5], [6, 7, 8, 9,10]), [7, 9, 11, 13, 15]));

console.log("Should not add irregular arrays ", addArrays([1, 2, 3], [4, 5, 6, 7]) === null);

console.log("Should not add invalid numbers or other types ", addArrays(['r', 4], [9, 8]) === null);
