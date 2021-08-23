// What happened when 'new'  operator is used

/*
1. A new object is created instantly
2. The constructor function is called along with empty 'this' keyword and constructor fn will 
fill the properties to this keyword
3. The new object is linked to (__proto__) prototype property of constructure function 
4. The new object is returned automatically unless something else is returned explicitly 

*/

/*********************************/
// //a closer Look at Prototype
/*********************************/

// const Person1 = function (name, year) {
//   this.name = name;
//   this.year = year;
//Never define method this way because what is defined here is whole object and they are under
//hasOwnProperty. And due to large copy fo this code performance will degrade so method should
//lie in prototype.
//   this.calcAge = function () {
//     console.log(2031 - this.year);
//   };
// };

//Only one copy of function is available in object prototype and all the object will delegate
//the method request here with this variable which distinct them
// Person1.prototype.greet = function () {
//   console.log(`welcome ${this.name}`);
// };
// Person1.prototype.calcAge = function () {
//   console.log(2031 - this.year);
// };
// const ks = new Person1('kshitij', 1999);
// ks.calcAge();
// console.dir(ks);
// console.log(Person1.prototype);
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

/*********************************/
// Inheritance using prototype//
/*********************************/

// const Person = function (name, sex) {
//   this.name = name;
//   this.sex = sex;
// };

// Person.prototype.showName = function () {
//   console.log(`${this.name} is ${this.sex}`);
// };

// const Teacher = function (name, sex, subject) {
//   Person.call(this, name, sex);
//   this.subject = subject;
// };
// //If we just do above then Teacher will not inherit Person.prototype so we need to assign it
// //manually
// Teacher.prototype = Object.create(Person.prototype);
// //At this point of time the constructor of Teacher will be equal to Person constructor so
// // we have to set that value to teacher constructor manually
// Object.defineProperty(Teacher.prototype, 'constructor', {
//   value: Teacher,
//   enumarable: false,
//   writable: true,
// });

//setting construtor can be done easier as
// Teacher.prototype.constructor = Teacher;

// Teacher.prototype.showSubject = function () {
//   console.log(`${this.name} teaches ${this.subject}`);
// };

// Now we can move this inheritance any level deep with prototype inheritance
// const Principle = function (name, sex, subject, powers) {
//   Teacher.call(this, name, sex, subject);
//   this.powers = powers;
// };
// //Again we have to inherit the property from Teacher manually
// Principle.prototype = Object.create(Teacher.prototype);
//Fix the constructor
// Object.defineProperty(Principle.prototype, 'constructor', {
//   value: Principle,
//   enumerable: false,
//   writable: true,
// });
//can be done easily as
// Principle.prototype.constructor = Principle;

// we could have done above easier

// Principle.prototype.showPower = function () {
//   console.log(`principle has ${Object.keys(this.powers)} powers`);
// };
// const normal = new Person('hari', 'male');
// const teacher = new Teacher('shyam', 'female', 'english');
// const principal = new Principle('shyam', 'female', 'english', {
//   sheduling: true,
//   assign: true,
// });
// principal.showPower();
// console.log();
// console.dir(Person.prototype);
// console.log(normal.__proto__);
// console.log(Person.prototype === normal.__proto__);
// console.log('////////////////////////////////');
// console.dir(teacher.__proto__);
// console.log('////////////////////////////////');
// console.log(Object.getOwnPropertyNames(teacher.__proto__));
// console.log('////////////////////////////////');
// console.dir(principal.__proto__);
// console.log('////////////////////////////////');
// console.log(principal instanceof Principle);
/*********************************/
// ES6 classes//
/*********************************/
//Facts about classes
// 1. Classes are not hoisted
// 2. Classes are first class citizens
// 3. Class body are executed in strict mode

// IN js classes are just syntactical sugar behind the scene they are also functional constructors
// at the end of the day they are converted into constructor and all the mehod are put into
// prototype just like function constructor

// class Car {
//   constructor(name) {
//     this.name = name;
//   }
//   showName() {
//     console.log(`name is ${this.name}`);
//   }
//   static random() {
//     console.log(`random`);
//   }
// }

// Car.random();
// const lamborgini = new Car('lambo');
// // lamborgini.random();
// lamborgini.showName();
// console.log(lamborgini.__proto__);
//class organizes code better and performance is same

//

// const a = function (name) {
//   this.name = name;

//   this.hey = function () {
//     console.log(`${this.name} hey`);
//   };
// };

// //this is a static method because it is not inherited by any instances and only available to
// //function constructor
// a.wow = function () {
//   console.log(`wow`);
// };
// a.wow();
// const b = new a('a');

// b.hey();
// // b.wow(); // this is not accesible because wow is only available to constructor

// /*********************************/
// // Object.Create//
// /*********************************/
// // this is the most straight forward way to create an object.
// //It will create new object and prototype of that object will be the object being passed

// const proto = {
//   printName() {
//     console.log(`${this.name} `);
//   },
//   init(name) {
//     this.name = name;
//   },
// };

// const newobj = Object.create(proto);
// newobj.init('wow');
// console.dir(newobj);

// //if we really need to initialize some property in new obje better to implement init function
