const data = require("./data");

const numbersConstraintArray = [205, 101, 118, 30, 48, 97, 11, 168];
const firstNameConstraint = "a";

const constraints = {
  numbers: numbersConstraintArray,
  firstName: firstNameConstraint,
};

const result = data.filter(({ first_name, ip_address }) => {
  if (first_name.toLowerCase().includes(constraints.firstName)) {
    return false;
  }

  const numbersFromIpAddress = ip_address.split(".");
  const helperObj = {};

  numbersFromIpAddress.forEach((ipNumber) => (helperObj[ipNumber] = true));

  for (let i = 0; i < constraints.numbers.length; i++) {
    if (helperObj[constraints.numbers[i]]) {
      return true;
    }
  }
  return false;
});

console.log(result);
