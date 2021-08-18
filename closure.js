'use strict';
// const random = () => {
//   let randomVal = 10;
//   return function () {
//     const returning = 15;
//     console.log(randomVal, '-', returning);
//   };
// };

// const randomReturn = random();
// console.dir(randomReturn);
// console.dir(random);

// let a = 10;
// console.log(a);
// var b = 100;

//A common mistake to create closure in a loop

// function showHelp(help) {
//   document.getElementById('help').textContent = help;
// }

// function setupHelp() {
//   var helpText = [
//     { id: 'email', help: 'Your e-mail address' },
//     { id: 'name', help: 'Your full name' },
//     { id: 'age', help: 'Your age (you must be over 16)' },
//   ];

//Doesn't work as expected
//   for (var i = 0; i < helpText.length; i++) {
//     var item = helpText[i];
//     //what happens here is the anonymus function on "onfocus" event use shared closure 'item'
//     //for all the helpText array members and 'item' is changing and remember the closure points
//     //to reference and due to those reason on all the input field the last help message will be printed
//     // to fix this problem create a new closure in different scope or just use a block scope 'let'
//     //statement
//     document.getElementById(item.id).onfocus = function () {
//       showHelp(item.help);
//     };
//   }

//work as expected
//   helpText.forEach(function (text) {
//     document.getElementById(text.id).onfocus = function () {
//       showHelp(text.help);
//     };
//   });
// }

// setupHelp();
