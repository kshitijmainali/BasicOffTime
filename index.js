// import * as chalenges from './chalenges';
/*
{
  const button = document.getElementsByClassName('debouncing');
button[0].addEventListener('keyup', Debouncing(expensive, 300));

function Debouncing(fn, delay) {
  let timer,
    times = 0;
  return function () {
    context = this;
    arg = arguments;
    clearTimeout(timer);
    timer = setTimeout(() => {
      times++;
      fn.call(context, times, ...arg);
    }, delay);
  };
}

function expensive(times) {
  console.log(`event fired ${times} times`);
  //   return 'some expensive work';
}

}
*/

//A little about the apply, call , bind
/* The fact here to remember is that javascript has a first class function i.e. function are like
value. And function is also an object. That is reason why function in js has property and method 
and properties. apply , call , bind are method of function.*/

/* The apply and call method are almost same and apply is old version of call. They both allow to 
call a function with specified this operator. The apply method accept all the argument as a single 
array while call allow to pass arguments as usual.*/
/*
const me = {
  name: 'kshitij',
  greet(times) {
    return `greetings from ${this.name} total ${times}`;
  },
};

const her = {
  name: 'raksha',
};

console.log(me.greet(10));
console.log(me.greet.call(her, 20));

//Bind return a new function with this keyword assign forever in the new fucntion
//We can set some arguments with bind method so that the function will always has that
//arguments preset which is also called partial application
const greetHer = me.greet.bind(her);
console.log(greetHer(30));

/*Some important use cases of bind **
//1. using object method with eventlistener
//2. creating a brand new function with partial application
*/
