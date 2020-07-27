const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

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

const eqObjects = function(objectA, objectB) {
  if (Object.values(objectA).length !== Object.values(objectB).length) {
    return false;
  }
  for (let i of Object.keys(objectA)) {
    if (Array.isArray(objectA[i]) && Array.isArray(objectB[i])) {
      return eqArrays(objectA[i], objectB[i]);
    }
    if (objectA[i] !== objectB[i]) {
      return false;
    }
  }
  return true;
};

assertEqual(eqObjects({ a: "1", b: "2" }, { b: "2", a: "1" }), true);
assertEqual(eqObjects({ a: "1", b: "2" }, { a: "1", b: "2", c: "3" }), false);
assertEqual(eqObjects({ c: "1", d: ["2", 3] }, { d: ["2", 3], c: "1" }), true);
assertEqual(eqObjects({ c: "1", d: ["2", 3] }, { c: "1", d: ["2", 3, 4] }), false);

module.exports = eqObjects;