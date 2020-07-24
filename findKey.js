const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const findKey = function(object, callback) {
  for (let key of Object.keys(object)) {
    let childObject = object[key];
    if (callback(childObject)) {
      return key;
    }
  }
};

assertEqual(findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, object => object.stars === 2), "noma"); //should pass

assertEqual(findKey({
  "raccoon":    { sightings: 3 },
  "skunk":      { sightings: 1 },
  "stray dog":  { sightings: 4 },
  "squirrel":   { sightings: 8 }
}, object => object.sightings > 4), "squirrel"); //should pass

assertEqual(findKey({
  "class A":  { students: 32 },
  "class B":  { students: 14 },
  "class C":  { students: 20 },
  "class D":  { students: 18 }
}, object => object.students > 14 && object.students < 20), "class D"); //should pass

assertEqual(findKey({
  "fullName1":  { first: "Ava" },
  "fullName2":  { first: "Bea" },
  "fullName3":  { first: "Josh" },
  "fullName4":  { first: "Max" }
}, object => object.first === "Ava"), "fullName4"); //should fail