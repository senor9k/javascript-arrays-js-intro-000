var chocolateBars = ["snickers", "hundred grand", "kitkat",  "skittles"]

function addElementToBeginningOfArray(array, element){
  var newArray = [element, ...array]
  return newArray
}
function destructivelyAddElementToBeginningOfArray(array, element){
  var newArray = [element, ...array]
  array = newArray
  return array.unshift
}
