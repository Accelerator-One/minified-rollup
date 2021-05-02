(function(){'use strict';function isEven(val) {
  if (val % 2 === 0)
    console.log(`${val} is an even number`);
  else
    console.log(`${val} is an odd number`);
}function fixedPrecision(val, precision) {
  console.log("Output: ", Number(val).toPrecision(precision));
}(async () => {
  isEven(12);
  fixedPrecision(123.456789, 3);
})();}());