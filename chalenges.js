//coding challenge 2

export default (function () {
  const header = document.querySelector('h1');
  header.style.color = 'red';
  function eventHandler() {
    let toggle = false;
    return function () {
      toggle = !toggle;
      if (toggle) {
        header.style.color = 'blue';
      } else {
        header.style.color = 'red';
      }
    };
  }
  // let toggler = eventHandler();
  document.body.addEventListener('click', eventHandler()); //in this line we should only pass
  //eventHandler without parethesis and js will call the callback which will return a anonymus
  //function which will not be called because js has already call its event handler function
  // that's why I put parentheses around so that the returned function will be called we shouldn't
  // code this way but it is just for notice we should use toggler function instead
})();

//challenge function with

/*
const addTax = (rate) => {
  return function (value) {
    return value * rate + value;
  };
};

const calc = addTax(0.23);
console.log(calc(1000));
console.log(calc(30000));
*/

//coding chalenges
// const poll = {
//   question: `what is you fav programming language?`,
//   options: ['0: js', '1: python', '2: c', '3: other'],
//   answers: new Array(4).fill(0),
//   registerNew() {
//     const message = this.question + this.options.map((el) => `\n${el}`);
//     const userAnswer = parseInt(prompt(message));
//     const result = this.validate(userAnswer);
//     console.log(typeof userAnswer);
//     if (result) {
//       this.answers[userAnswer]++;
//       this.display();
//     }
//   },
//   display() {
//     console.log();
//     console.log(`result now ${this.answers}`);
//   },
//   validate: function (userAnswer) {
//     if (typeof userAnswer === 'number') {
//       if (userAnswer >= 0 && userAnswer <= 3) return true;
//       console.log('out of range');
//       return false;
//     } else {
//       console.log('must be number');
//       return false;
//     }
//   },
// };
// const arr1 = [5, 6, 2];
// poll.display.call({ answers: arr1 });
// const button = document.getElementById('vote');
// console.log(button);
// button.addEventListener('click', poll.registerNew.bind(poll));
