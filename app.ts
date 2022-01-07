// Unknown and Never types
let userInput: unknown
let userName: string

userInput = 5
userInput = 'Scott'
if (typeof userInput === 'string') {
  userName = userInput
}
console.log(typeof userInput)
console.log(typeof generateError)
console.log(userName != userInput)

function generateError(message: string, code: number): never {
  throw { message: message, errorCode: code }
}

const errorMessage = generateError('Not found. Check your address', 500)
console.log(errorMessage)
