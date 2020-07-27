const assertEqual = require("./assertEqual");

const tail = function(array) {
  let allButFirstElement = array.slice(1);
  return allButFirstElement;
};

module.exports = tail;