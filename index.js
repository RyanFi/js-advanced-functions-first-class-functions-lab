//Declare a variable with const that is assigned an anonymous function.
//The assigned function should accept an array of drivers as an argument and return the first two drivers in the array.
const returnFirstTwoDrivers = function(drivers) {
  return drivers.slice(0, 2);
};

//Declare a variable with const that is assigned an anonymous function.
//The assigned function should accept an array of drivers as an argument and return the last two drivers in the array.
const returnLastTwoDrivers = function(drivers) {
  return drivers.slice(Math.max(drivers.length - 2, 1));
};

//make variable that is an array containing above variables
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

//make a function that take an integer and returns a function that will multiply the fare.
const createFareMultiplier = function(num1) {
  return function(num2) {
    return num1 * num2;
  };
};

//Declare a variable with const and assign a function returned by createFareMultiplier() to it. 
//Invoke createFareMultiplier() in such a way that the new fareDoubler() function 
//accepts a fare as its lone argument and doubles it.
const fareDoubler = createFareMultiplier(2);

//same as above but triple
const fareTripler = createFareMultiplier(3);

//Take two arguments, an array of drivers and either the returnFirstTwoDrivers() or returnLastTwoDrivers() function. 
//Based on these two arguments, selectDifferentDrivers() will return either the first two drivers or the last two drivers.
const selectDifferentDrivers = function(drivers, selection) {
  return selection(drivers);
};
