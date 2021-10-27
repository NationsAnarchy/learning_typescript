// Lesson 3: Union type
// Type aliases:
type Combinable = number | string;
type CombinableResult = "as-number" | "as-text"; // Literal types

function combine(
  firstObj: Combinable,
  secondObj: Combinable,
  resultType: CombinableResult // Literal types
) {
  let combResult: string | number;
  if (
    (typeof firstObj === "number" && typeof secondObj === "number") ||
    resultType === "as-number"
  ) {
    combResult = +firstObj + +secondObj;
  } else {
    combResult = firstObj.toString() + " " + secondObj.toString();
  }
  return combResult;
}

const ageCombine = combine("25", "30", "as-number"); // const ageCombine = combine(25, 30, "as-number");
const ageStringCombine = combine("25", "30", "as-text");
const phraseCombine = combine("Scott", "Ravencroft", "as-text");
console.log(ageCombine);
console.log(ageStringCombine);
console.log(phraseCombine);
