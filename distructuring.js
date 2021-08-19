'use strict';

//array and object distructuring
const arr = [0, 1, 2, 4, 5];
//we can pass default value too
//the order of variable declaration matters
let [a1, b1, c1, d1, f1 = 2] = arr;
console.log(a1, b1, c1, d1, f1);
//we can skip position  also
const [a11, , c11, d11, f11 = 2] = arr;
console.log(a11, c11, d11, f11);

let [a12, b12, c12, d12, f12 = 2] = arr;
console.log(a1, b1, c1, d1, f1);

//in case of swapping
[b1, a1] = [a1, b1];
console.log(a1, b1, c1, d1, f1);
//here b1 and a1 are swapped

//object distructuring
//you have to name exact element
const obj = { a0: 1, b0: 2, c0: 3, d0: 4, f0: 5, g0: 7 };
//renaming with default value
const { a0: aNew = 0, c0, g0 } = obj;
console.log(aNew, c0, g0);

///mutating variable
let x1 = 3,
  x2 = 4;
const obj2 = { x1: 5, x2: 7 };

//when line start with {} js expect a code block and we can't assign a value
// {x1, x2} = obj
//that's why we have to wrap the code in () parenthesis
({ x1, x2 } = obj2);
console.log(x1, x2);
