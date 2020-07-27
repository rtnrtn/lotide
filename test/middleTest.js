const assertArraysEqual = require("../assertArraysEqual");
const middle = require("../middle");

assertArraysEqual(middle(["1 cat", "2 dogs", "3 birds"]), ["2 dogs"]);
assertArraysEqual(middle(["1 horse", "2 sheep"]), []);
assertArraysEqual(middle(["1 cow", "2 goats", "3 owls"]), ["2 goats"]);