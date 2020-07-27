const assert = require("chai").assert;
const middle = require("../middle");

describe("#middle", () => {
  it("returns [2] for [1, 2, 3]", () => {
    assert.deepEqual(middle([1, 2, 3]), [2]);
  });

  it("returns ['2 dogs'] for ['1 cat', '2 dogs', '3 birds']", () => {
    assert.deepEqual(middle(['1 cat', '2 dogs', '3 birds']), ['2 dogs']);
  });

  it("returns [] for ['1 horse', '2 sheep']", () => {
    assert.deepEqual(middle(['1 horse', '2 sheep']), []);
  });
});