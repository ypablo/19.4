"use strict";

//Zadanie 1 
var h = "Hello";
var w = "World";

var hw = h + " " + w + "!";
console.log(hw);

//Zadanie 2
var multiply = function multiply(x) {
  var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
  return x * y;
};
console.log(multiply(5));

//Zadanie 3
var average = function average(arr) {
  return arr.reduce(function (x, y) {
    return x + y;
  }, 0) / arr.length;
};
console.log(average([8, 25, 1, 30, 6, 20]));

//Zadanie 4
var grades = [1, 5, 5, 5, 4, 3, 3, 2, 1];
console.log(average([].concat(grades)));

//Zadanie 5
var foo = [1, 4, 'Iwona', false, 'Nowak'];
var x = foo[2],
    y = foo[4];

console.log(x + " " + y);
