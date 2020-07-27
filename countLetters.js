const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countLetters = function(string) {
  let results = {};
  let stringNoSpaces = string.split(" ").join("");
  for (let char of stringNoSpaces) {
    if (results[char] === undefined) {
      results[char] = 1;
    } else {
      results[char] += 1;
    }
  }
  return results;
};

const string1 = countLetters("This function counts letters not spaces.");

assertEqual(string1["T"], 1);
assertEqual(string1["s"], 5);
assertEqual(string1["n"], 4);

module.exports = countLetters;