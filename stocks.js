var lib = require('./lib/helper-functions');

var stocks = {
  maxProfit: function (stockData) {
    var currentMax = {
      "profit": -1,
      "startDate": 0,
      "endDate": 0
    };

    for (let i = 0; i < stockData.length; i++) {
      var maxForDate = lib.getProfitForDate(stockData, i);

      if (maxForDate.profit > currentMax.profit) {
        currentMax = maxForDate;
      }

    }

    return currentMax;
  }
}

module.exports = stocks;