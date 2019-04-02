//Zadanie 1 
const h = "Hello";
const w = "World";

const hw = `${h} ${w}!`;
console.log(hw);

//Zadanie 2
const multiply = (x, y = 1) => x*y;
console.log(multiply(5));

//Zadanie 3
const average = arr => arr.reduce( ( x, y ) => x + y, 0 ) / arr.length;
console.log(average( [ 8, 25, 1, 30, 6, 20 ] ));

//Zadanie 4
const grades = [1, 5, 5, 5, 4, 3, 3, 2, 1]
console.log(average([...grades]));

//Zadanie 5
const foo = [1, 4, 'Iwona', false, 'Nowak'];
const [, ,x, ,y] = foo;
console.log(`${x} ${y}`);