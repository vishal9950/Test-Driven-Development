function addArray(first, second) {

  var result = [];
  for (var i = 0; i < first.length; i++) {
    result[i] = first[i] + second[i];
  }
  return result;
}

function compareArrays(first, second) {
  var flag = true;
  for (var i = 0; i < first.length; i++) {
    if(first[i] != second[i]){
      flag = false;
      break;
    }
  }
  return flag;
}

{
  //var check = [7, 9, 11, 13, 15];
  console.log("Should add", compareArrays(addArray([1, 2, 3, 4, 5], [6, 7, 8, 9,10]), [7, 9, 11, 13, 15]));
}
