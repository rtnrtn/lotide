const eqArrays = require("./eqArrays");
const assertArraysEqual = require("./assertArraysEqual");

const middle = function(array) {
  let middleElement = [];
  if (array.length % 2 !== 0) {
    let middleIndex = ((array.length - 1) / 2);
    middleElement.push(array[middleIndex]);
  }
  return middleElement;
};

module.exports = middle;