var helperFunctions = {
  getProfitForDate: function (arr, startDate) {

    var tracker = {
      "profit": -1,
      "startDate": startDate,
      "endDate": null
    };
    for (let i = startDate + 1; i < arr.length; i++) {
      var profit = arr[i] - arr[startDate];

      if (profit > tracker.profit && profit > 0) {
        tracker.profit = profit;
        tracker.endDate = i;
      }
    }

    return tracker;
  }
};

module.exports = helperFunctions;