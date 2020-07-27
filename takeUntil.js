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

const takeUntil = function(array, callback) {
  const results = [];
  for (let item of array) {
    if (!callback(item)) {
      results.push(item);
    } else {
      break;
    }
  }
  return results;
};

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);

assertArraysEqual(takeUntil(["what", "is", "going", "on"], word => word === "is"), ["what"]); //should pass
assertArraysEqual(takeUntil([5, 6, 7, 8, 9, 10, 11], num => num >= 10), [5, 6, 7, 8, 9]); //should pass
assertArraysEqual(takeUntil(["I", "think", "I'm", "getting", "the", "hang", "of", "it"], word => word.length === 7), ["I", "think", "I'm"]); //should pass
assertArraysEqual(takeUntil([153, 279, 300], num => num % 2 === 0), [153, 279, 300]); //should fail

module.exports = takeUntil;