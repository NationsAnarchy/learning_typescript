// Lesson 4: Function return types, function types
function addNumber(n1, n2) {
    return n1 + n2;
}
// Function return type
function printResult(res) {
    console.log("Result: " + res);
}
printResult(addNumber(40, 60));
var combineNumbers; // Function types
combineNumbers = addNumber;
// combineNumbers = printResult;
console.log(combineNumbers(50, 40));
// Callback
function addNumberHandle(num1, num2, callback) {
    var sum = num1 + num2;
    callback(sum);
}
addNumberHandle(20, 60, function (result) {
    console.log(result);
});
