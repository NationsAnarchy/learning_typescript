// Lesson 4: Function return types, function types

function addNumber(n1: number, n2: number) {
  return n1 + n2;
}

// Function return type
function printResult(res: number): void {
  console.log("Result: " + res);
}

printResult(addNumber(40, 60));

let combineNumbers: (num1: number, num2: number) => number; // Function types

combineNumbers = addNumber;
// combineNumbers = printResult;

console.log(combineNumbers(50, 40));

// Callback
function addNumberHandle(
  num1: number,
  num2: number,
  callback: (result: number) => void
) {
  const sum = num1 + num2;
  callback(sum);
}

addNumberHandle(20, 60, (result) => {
  console.log(result);
});
