// Unknown and Never types
var userInput;
var userName;
userInput = 5;
userInput = 'Scott';
if (typeof userInput === 'string') {
    userName = userInput;
}
console.log(typeof userInput);
console.log(userName != userInput);
function generateError(message, code) {
    throw { message: message, errorCode: code };
}
var errorMessage = generateError('Not found. Check your address', 500);
console.log(errorMessage);
