const eqArrays = function(arrayA, arrayB) {
  if (arrayA.length !== arrayB.length) {
    return false;
  }
  for (let i = 0; i < arrayA.length; i++) {
    if (arrayA[i] !== arrayB[i]) {
      return false;
    }
  }
  return true;
};

const assertArraysEqual = function(arrayA, arrayB) {
  if (eqArrays(arrayA, arrayB)) {
    console.log(`✅✅✅ Assertion Passed: [${JSON.stringify(arrayA)}] === [${JSON.stringify(arrayB)}]`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: [${JSON.stringify(arrayA)}] !== [${JSON.stringify(arrayB)}]`);
  }
};

const words = ["ground", "control", "to", "major", "tom"];

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

const results1 = map(words, word => word[0]);
console.log(results1);

assertArraysEqual(map(["what", "is", "going", "on"], word => word[0]), ["w", "i", "g", "o"]); //should pass
assertArraysEqual(map([1, 2, 3], num => num * 100), [100, 200, 300]); //should pass
assertArraysEqual(map(["I", "think", "I", "get", "it"], word => word.length), [1, 5, 1, 3, 2]); //should pass
assertArraysEqual(map([100, 200, 300], num => num / 1), [1, 2, 3]); //should fail