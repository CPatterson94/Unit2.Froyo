const froyo = prompt(
  "Please enter what flavor ice cream you want seperated by commas. \n For more than one of one flavor type that flavor for as many as you need."
);
const flavorsarr = froyo.split(",");

const flavornum = {};

flavorsarr.forEach(function (flavor) {
  flavor = flavor.trim();
  if (flavornum[flavor]++) {
  } else {
    flavornum[flavor] = 1;
  }
});
console.log("Flavor Count:");
console.log(flavornum);
