// What happened when 'new'  operator is used

/*
1. A new object is created instantly
2. The constructor function is called along with empty 'this' keyword and constructor fn will 
fill the properties to this keyword
3. The new object is linked to (__proto__) prototype property of constructure function 
4. The new object is returned automatically unless something else is returned explicitly 

*/

//a closer Look at Prototype
const Person = function (name, year) {
  this.name = name;
  this.year = year;
  //Never define method this way because what is defined here is whole object and they are under
  //hasOwnProperty. And due to large copy fo this code performance will degrade so method should
  //lie in prototype.
  //   this.calcAge = function () {
  //     console.log(2031 - this.year);
  //   };
};

//Only one copy of function is available in object prototype and all the object will delegate
//the method request here with this variable which distinct them
// Person.prototype.greet = function () {
//   console.log(`welcome ${this.name}`);
// };
// Person.prototype.calcAge = function () {
//   console.log(2031 - this.year);
// };
// const ks = new Person('kshitij', 1999);
// ks.calcAge();
// // console.log(ks.__proto__);
// // console.log('......................................');
// // console.log(ks.__proto__);
// // console.log('......................................');
// // console.log(Person.prototype);
// // console.log('......................................');
// // //Person.prototype i.e. constructor.prototype is the prototype which its instances will inherit
// // //so its is not prototype of Person actually to illustrate that it should
// // console.log(ks.__proto__ === Person.prototype);
// console.log('......................................');
// // console.dir(Person.prototype.__proto__);
// // console.log(Object.getPrototypeOf(Object.getPrototypeOf(Person)).__proto__);
// // console.log(Object.getPrototypeOf(Person));
// console.dir(Person);
// console.log(Person.__proto__);
// console.dir(Object);
// console.log(Object.getPrototypeOf(Object));
//Person.prototype.constructor actualy points back to person itself i.e. the function itself
