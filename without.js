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

const without = function(source, itemsToRemove) {
  let arrayWithoutItems = [];
  for (let i = 0; i < source.length; i++) {
    let itemShouldBeAddedToArray = true;
    for (let j = 0; j < itemsToRemove.length; j++) {
      if (source[i] === itemsToRemove[j]) {
        itemShouldBeAddedToArray = false;
        break;
      }
    }
    if (itemShouldBeAddedToArray) {
      arrayWithoutItems.push(source[i]);
    }
  }
  return arrayWithoutItems;
};

console.log(without([1, 2, 3], [1]));
console.log(without(["1", "2", "3"], [1, 2, "3"]));
console.log(without([4, 5, 6],[1, 2, 3, 4, 5, 6]));

assertArraysEqual(without([1, 2, 3], [1]), [2, 3]);
assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]);

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]);
assertArraysEqual(words, ["hello", "world", "lighthouse"]);