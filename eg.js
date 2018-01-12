function addArrays(first, second) {
  let check1 = verifyLength(first, second);
  let check2 = verifyIfOnlyNumbers(first) && verifyIfOnlyNumbers(second);
  let check3 = verifyIfEmptyArray(first) && verifyIfEmptyArray(second);
  let check4 = verifyIfArray(first) && verifyIfArray(second);
  if(check1 && check2 && check3 && check4){
    let result = [];
    for (let i = 0; i < first.length; i++) {
      result[i] = first[i] + second[i];
    }
    return result;
  }
  else{
    return null;
  }
}

//check1
function verifyLength(arr1, arr2) {
  if(arr1.length === arr2.length){
    return true;
  }
  else {
    console.log("Err1: Supply equal length arrays!");
    return false;
  }
}

//check2
function verifyIfOnlyNumbers(arr) {
  for (var i = 0; i < arr.length; i++) {
    if(typeof arr[i] != 'number' || arr[i] === NaN){
      console.log("Err2: Supply only valid numbers!");
      return false;
    }
  }
  return true;
}

//check3
function verifyIfEmptyArray(arr) {
  if(arr.length === 0){
    console.log('Err3: Empty array supplied!');
    return false;
  }
  else {
    return true;
  }
}

//check4
function verifyIfArray(arr) {
  if(!Array.isArray(arr)){
    console.log('Err4: Supply arrays only!');
    return false;
  }
  else {
    return true;
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

console.log('Should add ', areEqualArrays(addArrays([1, 2, 3, 4, 5], [6, 7, 8, 9,10]), [7, 9, 11, 13, 15]));

console.log('Should not add irregular arrays ', addArrays([1, 2, 3], [4, 5, 6, 7]) === null);

console.log('Should not add invalid numbers or other types ', addArrays(['r', 4], [9, 8]) === null);

console.log('Should not add empty arrays ', addArrays([], [1, 2, 3]) === null);

console.log('Should not add anything other than arrays ', addArrays({}, [1, 2, 3]) === null);
