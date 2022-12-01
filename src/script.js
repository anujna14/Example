let symbolData = [
  { symbol: "ABN", price: 23.45, volume: 1237 },
  { symbol: "SDF", price: 287.45, volume: 6789 },
  { symbol: "POIU", price: 209.45, volume: 8765 },
];
const minPrice = 150;

let exchangeStock = [
  [
    { symbol: "HHK", price: 45.98, volume: 98765 },
    { symbol: "FRTW", price: 823.98, volume: 9878 },
  ],
  [
    { symbol: "ASD", price: 487.98, volume: 3456 },
    { symbol: "GHJ", price: 120.98, volume: 8787 },
  ],
];
let  exchanges = [
  {
    name: "NYSE",
    stocks: [
      {
        symbol: "XFX",
        closes: [
          {
            date: new Date(2014, 11, 24),
            price: 240.1,
          },
          {
            date: new Date(2014, 11, 23),
            price: 241.12,
          },
          {
            date: new Date(2014, 11, 22),
            price: 140.1,
          },
        ],
      },
      {
        symbol: "TNZ",
        closes: [
          {
            date: new Date(2014, 11, 24),
            price: 76.1,
          },
          {
            date: new Date(2014, 11, 23),
            price: 541.12,
          },
          {
            date: new Date(2014, 11, 22),
            price: 876.1,
          },
        ],
      },
    ],
  },
  {
    name: "ASDF",
    stocks: [
      {
        symbol: "POI",
        closes: [
          {
            date: new Date(2014, 11, 24),
            price: 240.1,
          },
          {
            date: new Date(2014, 11, 23),
            price: 241.12,
          },
          {
            date: new Date(2014, 11, 22),
            price: 140.1,
          },
        ],
      },
      {
        symbol: "UYT",
        closes: [
          {
            date: new Date(2014, 11, 24),
            price: 76.1,
          },
          {
            date: new Date(2014, 11, 24),
            price: 541.12,
          },
          {
            date: new Date(2014, 11, 12),
            price: 876.1,
          },
        ],
      },
    ],
  },
];
const getStockSymbols = (stocks) => {
  let symbols = [];
  stocks.forEach((value) => symbols.push(value.symbol));
  return symbols;
};
const getStockSymbols2 = (stocks) => {
  return stocks.map(function (value) {
    return value.symbol;
  });
};

const getExpensiveStocks = (stocks, minprice) => {
  return stocks.filter((stock) => stock.price >= minprice);
};

Array.prototype.concatAll = function () {
  var results = [];
  this.forEach(function (subArray) {
    subArray.forEach(function (item) {
      results.push(item);
    });
  });
  return results;
};

let symbols1 = getStockSymbols(symbolData);
let symbols2 = getStockSymbols2(symbolData);
let expensiveStocks = getExpensiveStocks(symbolData, minPrice);
let filteredStocks = symbolData.filter((stock) => stock.price >= 150).map((value) => value.symbol);

console.log(JSON.stringify(symbols1));
console.log(JSON.stringify(symbols2));
console.log(JSON.stringify(expensiveStocks));
filteredStocks.forEach((value) => console.log(value));
var stocks = exchangeStock.concatAll();

stocks.forEach(function (stock) {
  console.log(JSON.stringify(stock));
});

var christmasEveCloses = exchanges
  .map(function (exchange) {
    return exchange.stocks
      .map(function (stock) {
        return stock.closes
          .filter(function (close) {
            return close.date.getMonth() === 11 && close.date.getDate() === 24;
          })
          .map(function (close) {
            return {
              symbols: stock.symbol,
              price: close.price,
            };
          });
      })
      .concatAll();
  })
  .concatAll();

christmasEveCloses.forEach(function (christmasEveClose) {
    console.log("in inside")
  console.log(JSON.stringify(christmasEveClose));
});
