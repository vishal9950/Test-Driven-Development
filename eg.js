function addArrays(first, second) {
  var check1 = verifyLength(first, second);
  if(check1){
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
