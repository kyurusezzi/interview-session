const data = require("./data");

const numbers = [205, 101, 118, 30, 48, 97, 11, 168];

const result = data.filter(({ ip_address }) => {
  const numbersFromIpAddress = ip_address.split(".");
  const helperObj = {};

  numbersFromIpAddress.forEach((ipNumber) => (helperObj[ipNumber] = true));

  for (let i = 0; i < numbers.length; i++) {
    if (helperObj[numbers[i]]) {
      return true;
    }
  }
  return false;
});

console.log(result);
