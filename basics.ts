// Lesson 1: Standard types
console.log("Learning Typescript!");
console.log("Hello!");

function add(n1: number, n2: number, showResult: boolean, phrase: string) {
  const result = n1 + n2;
  if (showResult) {
    console.log(phrase + result);
  }
  return result;
}

const number1 = 10;
const number2 = 10;
const showResult = true;
const phrase = "The result is: ";

const result = add(number1, number2, showResult, phrase);

// Lesson 2: Array & object types:
enum Role {
  ADMIN = "Admin",
  EDITOR = "Editor",
  READ_ONLY = "Read-only Member",
} // Enum

const person = {
  name: "Scott",
  age: 27,
  hobbies: ["Gaming", "Technology"],
  // role: [1, "Developer"], // Tuples (fixed-length array)
  role: Role.EDITOR,
};

console.log(person.name);

for (const hobby of person.hobbies) {
  console.log(hobby.toLowerCase());
}

console.log(person.role);
