// Lesson 1: Standard types
console.log("Learning Typescript!");
console.log("Hello!");
function add(n1, n2, showResult, phrase) {
    var result = n1 + n2;
    if (showResult) {
        console.log(phrase + result);
    }
    return result;
}
var number1 = 10;
var number2 = 10;
var showResult = true;
var phrase = "The result is: ";
var result = add(number1, number2, showResult, phrase);
// Lesson 2: Array & object types:
var Role;
(function (Role) {
    Role["ADMIN"] = "Admin";
    Role["EDITOR"] = "Editor";
    Role["READ_ONLY"] = "Read-only Member";
})(Role || (Role = {})); // Enum
var person = {
    name: "Scott",
    age: 27,
    hobbies: ["Gaming", "Technology"],
    // role: [1, "Developer"], // Tuples (fixed-length array)
    role: Role.EDITOR
};
console.log(person.name);
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby.toLowerCase());
}
console.log(person.role);
