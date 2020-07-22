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

const middle = function(array) {
  let middleElement = [];
  if (array.length % 2 !== 0) {
    let middleIndex = ((array.length - 1) / 2);
    middleElement.push(array[middleIndex]);
  }
  return middleElement;
};

let array = ["1 cat", "2 dogs", "3 birds"];
console.log(middle(array));

let array2 = ["1 horse", "2 sheep"];
console.log(middle(array2));

console.log(middle(["1 cow", "2 goats", "3 owls"]));

assertArraysEqual(middle(["1 cat", "2 dogs", "3 birds"]), ["2 dogs"]);

assertArraysEqual(middle(["1 horse", "2 sheep"]), []);

assertArraysEqual(middle(["1 cow", "2 goats", "3 owls"]), ["2 goats"]);