var maxProfit = require('./stocks').maxProfit;

var dataset1 = [45, 24, 35, 31, 40, 38, 11];
var dataset2 = [2, 5, 9, 31, 40, 65];

var results = maxProfit(dataset1);
console.log(`The largest possible profit is $${results.profit}, \n -If you started investing on day ${results.startDate + 1} and cashed out on day ${results.endDate + 1}.`);


var results = maxProfit(dataset2);
console.log(`The largest possible profit is $${results.profit}, \n -If you started investing on day ${results.startDate + 1} and cashed out on day ${results.endDate + 1}.`);
