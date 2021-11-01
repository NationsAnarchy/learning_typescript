function combine(firstObj, secondObj, resultType // Literal types
) {
    var combResult;
    if ((typeof firstObj === "number" && typeof secondObj === "number") ||
        resultType === "as-number") {
        combResult = +firstObj + +secondObj;
    }
    else {
        combResult = firstObj.toString() + " " + secondObj.toString();
    }
    return combResult;
}
var ageCombine = combine("25", "30", "as-number"); // const ageCombine = combine(25, 30, "as-number");
var ageStringCombine = combine("25", "30", "as-text");
var phraseCombine = combine("Scott", "Ravencroft", "as-text");
console.log(ageCombine);
console.log(ageStringCombine);
console.log(phraseCombine);
