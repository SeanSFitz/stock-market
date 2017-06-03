const chai    = require("chai");
const assert  = chai.assert;

const lib = require("../lib/helper-functions");
const stocks = require("../stocks");

describe("maxProfit", () => {

  it("maxProfit([45, 24, 35, 31, 40, 38, 11]) === 16", () => {
      assert.equal(stocks.maxProfit([45, 24, 35, 31, 40, 38, 11]).profit, 16);
  });


  it("maxProfit([50, 43, 36, 35, 35, 34, 18, 10]) === -1", () => {
      assert.equal(stocks.maxProfit([50, 43, 36, 35, 35, 34, 18, 10]).profit, -1);
  });

});
