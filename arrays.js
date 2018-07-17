var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];
function addElementToBeginningOfArray(array, element) { return ["foo", ...array] }
function destructivelyAddElementToBeginningOfArray(array, element) { return ["foo", ...array] }
function addElementToEndOfArray(array, element) { return [...array, "foo"] }
function destructivelyAddElementToEndOfArray(array, element) { array.unshift(); return array }
function accessElementInArray(array, index) { return console.log(array[n]) }
function destructivelyRemoveElementFromBeginningOfArray(array) { array.shift(); return array }
function removeElementFromBeginningOfArray(array) { return array.slice(-2) }
function destructivelyRemoveElementFromEndOfArray(array) { array.pop(); return array }
function removeElementFromEndOfArray(array) { return array.slice(0, array.length - 1) }