// let exclusivePriceComputer = 50000;
// let taxRatePrice = 2000;
// let inclusivePrice = exclusivePriceComputer + taxRatePrice;
// console.log(inclusivePrice);

// function calculateInclusivePrice() {
//   let exclusivePriceComputer = 50000;
//   let taxRatePrice = 2000;
//   let inclusivePrice = exclusivePriceComputer + taxRatePrice;
//   console.log(inclusivePrice);
// }

// calculateInclusivePrice();

// function calculateInclusivePrice(exclusivePriceComputer, taxRatePrice) {
//   console.log(exclusivePriceComputer, taxRatePrice);
//   let inclusivePrice = exclusivePriceComputer + taxRatePrice;
//   return inclusivePrice;
// }

// calculateInclusivePrice();

function calculateInclusivePrice(exclusivePriceComputer, taxRatePrice) {
  let inclusivePrice = exclusivePriceComputer + taxRatePrice;
  console.log(exclusivePriceComputer, taxRatePrice);
  return inclusivePrice;
}

calculateInclusivePrice(50000, 2000);
