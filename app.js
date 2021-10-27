// Lesson 4: Function return types, function types
function addNumber(n1, n2) {
    return n1 + n2;
}
// Function return type
function printResult(res) {
    console.log("Result: " + res);
}
// printResult(addNumber(40, 60));
var combineNumbers; // Function types
combineNumbers = addNumber; // Assign to the function
// combineNumbers = printResult;
console.log(combineNumbers(50, 50));
// Callback example
function addNumberHandle(num1, num2, callback) {
    var sum = num1 + num2;
    callback(sum);
}
addNumberHandle(20, 20, function (result) {
    console.log(result);
});
