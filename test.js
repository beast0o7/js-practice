// const arrTest = [10, 20, 30, 40, 50][2,1,10];
// console.log( arrTest);

// let a = 3;
// var b = {
//   a: 9,
//   b: ++a
// };
// console.log(a + b.a + ++b.b);

// const arr1 = [1, 2, undefined, NaN, null, false, true, "", 'abc', 3];
// console.log(arr1.filter(Boolean));
// const arr = [1, 2, undefined, NaN, null, false, true, "", 'abc', 3];
// console.log(arr.filter(!Boolean));

// const person = {
//     name: 'Ayush Verma',
//     .25e2: 25
//   };
//   console.log(person[25]);
//   console.log(person[.25e2]);
//   console.log(person['.25e2']);
//   console.log(person[100]);

// console.log(new Array(3).toString());

// const arr1 = [{name: "shiv"}, {name: "abc"}];

// for (const ele of arr1) {
// //   console.log(ele)
//   for (const key in ele) {
//     if (ele[key]=="abc" ) {
//         console.log(ele)
//     }
//   }
// }

// const shiv = (arr1) => {
//     if(arr1.name == "abc"){
//         return arr1
//     }
// }

// const shiv1 = arr1.find(shiv);

// console.log(shiv1);

// let obj = {
//     x: 2,
//     getX: function() {
//         setTimeout(() => console.log('a'), 0);
//         new Promise( res =>  res(1)).then(v => console.log(v));
//         setTimeout(() => console.log('b'), 0);
//     }
// }
// obj.getX();

// const shape = {
//     radius: 10,
//     diameter() {
//       return this.radius * 2;
//     },
//     perimeter: () => 2 * Math.PI * this.radius,
//   };
//   console.log(shape.diameter());
//   console.log(shape.perimeter());

// function Person(firstName, lastName) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//   }

// //   console.log(member)
//   Person.getFullName = function() {
//       return `${this.firstName} ${this.lastName}`;
//     };
//     const member = new Person('Ayush', 'Verma');

//   console.log(member.getFullName());

// console.log(1 + true);

// let number = 0;
// console.log(number++);
// console.log(++number);
// console.log(number);

// for (let i = 1; i < 5; i++) {
//   if (i === 3) continue;
//   console.log(i);
// }

// function sayHi() {
//   return (() => 0)();
// }

// console.log(typeof sayHi());
// const a = [..."ayush"][2,3]
// console.log(a);

// console.log([...'Ayush'],'asdwa');

// const namee = 'ayush';
// const ind = [...namee][4,3] ;
// console.log(ind)

// function sum(){
//   // return arguments.reduce((a, b) => a + b);
//   return arguments.length
// }

// console.log(sum(1,2,3));
// function sum1(...arguments){
//   return arguments.reduce((a, b) => a + b);
// }

// console.log(sum1(1,2,3))

// (function(){
//   console.log(typeof this);
// }).call(10);

// console.log(typeof this)

// console.log("ayushv.medium.com/" instanceof String);
// const s = new String('ayushv.medium.com/');
// console.log(s instanceof String);
// console.log(s.endsWith('/'))

// let a = 3;
// let b = new Number(3);
// let c = 3;
// console.log(a == b);
// console.log(a === b);
// console.log(b === c);

// function sum(a) {
//     return function (b) {
//         return function (c) {
//             return a + b + c;
//         }
//     }
// };
// console.log(sum(1)(2)(4));

// function sum(a) {
//     return function (b) {
//     if (b) return sum(a + b);
//     return a;
//     }
// };
// console.log(sum(1)(2)(4)(1)()); //infinite currying

// const isMerchantAugmont = false;
// const urlData = "dwhdahd.com";
// console.log({...(!isMerchantAugmont && {where: { 'merchantUrl': urlData }})}); //

// const obj1= {name:"mahad"};
// const obj2= {name:"mahad"};
// console.log((JSON.stringify(obj1) === JSON.stringify(obj2))); //compare two objects //also you can deep clone them with stringify and parse

// console.log(false && {awd:"DAWd"});

// console.log([] + []);
// console.log([1] + []);
// console.log([1] + "abc");
// console.log([1, 2, 3] + [1, 3, 4]);

// const obj1 ={
//     a:{a:1},
//     b:2
//     };
// const obj2 = {
//     a:{a:1},
//     b:2
//     };
// console.log(obj1.a === obj2.a);
// console.log(obj1.b == obj2.b);

// const a = {};
// const b = { key: 'b' };
// const c = { key: 'c' };

// a[b] = 123;
// a[c] = 456;

// console.log(a[b]);

// arr = [1, 2, 3].map(num => {
//     if (typeof num === 'number') return;
//     return num * 2;
//   });
//   console.log(arr);

// const ans1 = NaN === NaN;
// const ans2 = Object.is(NaN, NaN);
// console.log(ans1, ans2);

// var a = 3;
// var b = {
//   a: 9,
//   b: ++a
// };
// console.log(a + b.a + ++b.b);

// var a = '';
// var n = 80;
// var m = (n-1);
// for(i=1; i <= n; i++)
// {
//     a = a.trim();
//     a = ' '.repeat(m) + a + (i > 1 ? ' ' : '') + '*';
//     console.log(a);
//     m--;
// }

// for (let i = 0; i<11 ; i++) {
//     // some statements
//     console.log(i)
//   }

// const a = {
//     a:1,
//     b:{c:10}
// }
// const copy = {...a};
// copy.a = 2;
// copy.b.c = 1000;
// console.log(a);
// console.log(copy);// deep copying a nested obj can't be done with spread or obj.assign

// const copy = JSON.parse(JSON.stringify(a)); //this way of deep copying works with nested ibj or array
// copy.a = 2;
// copy.b.c = 1000;
// console.log(a);
// console.log(copy);

// (function (params) {
//   for (i = 0; i < 9; i++) {
//     setTimeout(() => {
//       console.log(i)
//     }, 1000);
//   }
// })();

// const callBack = function () {
//   console.log(3)
// }
// async function testCall(params) {
//   console.log(1)
//   setTimeout(() => {
//   console.log(2);
//   params();
//   }, 1000);
// }
// testCall(() => console.log(3));

// const func1 = ()=>{
//   const closure = 10;
//   return ()=>{
//       console.log(closure);
//   }
// }

// const func2 = func1();
// func2(); // closure eg

// function we(){
//     let i = 10
//     setTimeout(()=>{
//         console.log(i);
//     },2000);
//     return i++;
// };
// console.log(we()); //closure with delay eg

// const obj = {
//     a: "a",
//     b: {
//       c: "c",
//       d: {
//         e: "e",
//         f: {
//           g: "g",
//         }
//       }
//     }
//   };

//   const util = require('util');
//   console.log(util.inspect(obj, {depth: null}));
//   console.log(util.inspect(obj, {depth: 0})); // prints: '{ a: \'a\', b: [Object]}'

// console.log(0.1+0.2)

// console.log(0.1+0.2==0.1+0.2)

//  const obj1= {
//     name:"mahad"
// };
// const obj2={
//     name:"mahaad"
// }

// // const obj2 = JSON.parse(JSON.stringify(obj1));

//  console.log(obj1);
//  console.log(obj2);

//  console.log(JSON.stringify(obj1)  === JSON.stringify(obj2));
// console.log(JSON.stringify(obj2));

// class Cal{
//     constructor(name,address){
//      this.name = name;
//      this.address = address;
//      this.clear();
//     }

//     clear(){
//         console.log("hh");
//     }

//     roll(){
//         console.log("roll");
//     }
// }

// let obj = new Cal(name,address);

// obj.roll()

// Callback Function Example
// function greet(firstName, myFunction) {
//     console.log('Hello world');
//      firstName = 'Wickyy';
//     // callback function
//     // executed only after the greet() is executed
//     // myFunction(name);
//     return function(name) {
//         console.log('Hello' + ' ' + name + ' ' + firstName);
//     }
// }
// console.log(firstName)

// // callback function
// function sayName(name) {
//     console.log('Hello' + ' ' + name + ' ' + firstName);
// }

// // calling the function after 2 seconds
// // setTimeout(greet, 2000, 'John', sayName);
// greet("Wick",sayName)("John");

// var x = 5;
// x = 0;
// setTimeout(() => {
//     x = x+1;
// })
// setTimeout(() => {
//     console.log(x);
// })
// console.log("Hello");

// console.log((0.1 * 10 + 0.2 * 10)/10) //WORK AROUND FOR PRECISE 0.1+0.2

// const person = {
//     name: "John",
//     age: 30,
//     city: "New York"
//   };

//   const myArray = Object.values(person);
//   console.log(myArray.join()) //for converting object into string

//playing with object
// const arr = ["John", "Peter", "Sally", "Jane"];
// console.log(typeof JSON.stringify(arr))
// console.log(JSON.parse(JSON.stringify(arr))[1]);

// let reverseString = "abc"

// function reverseStringFunc(input){
//     return input.split('').reverse(1).join('');
// }

// console.log(reverseStringFunc("abc"));//reverse the string

//WORKING WITH CLASSES

// class Car {
//     constructor(name, year) {
//       this.name = name;
//       this.year = year;
//     }
//       age() {
//       let date = new Date();
//       return date.getFullYear() - this.year;
//     }
//     owner(name){
//         return `the owner of this ${this.name} is ${name} `
//     }
//   }

//   const toyota = new Car("supra","2000");
//   console.log(toyota.age());
//   console.log(toyota.owner("Mahad"));

//closure eg with with switch.
// function createBase(base, type) {
//     // console.log(base)
//   let output;
//   switch (type) {
//     case "add":
//         output = function (num) {
//         return base + num ; 
//   }
//     break;
//     case "mul":
//         output = function (num) {
//           return base * num ; 
//     }
//     break;
//     case "div":
//         output = function (num) {
//             return base / num ; 
//       }
//       break;
//     default:
//         output = function (num) {
//             return base + num ; 
//       }
//       break;
// }
//     return output;
// }

// const addSix = createBase(6);
// console.log(addSix(10)); 


//FIZZBUZZ CHALLENGE

// for (let i = 0; i <= 100; i++) {
//  if (i%3==0) {
//     console.log("fizz",i);    
//  }
//  if (i%5==0) {
//     console.log("buzz",i);    
//  }
//  if (i%3==0 && i%5==0) {
//     console.log("fizzbuzz",i);    
//  }
// }

//CHECK FOR ANAGRAM
// function checkForAnagram(input1,input2) {
//     const first = input1.split('').sort().join('');
//     const second = input2.split('').sort().join('');
//     return first == second ? 'The given input is an ANAGRAM':'The given input is not an ANAGRAM!';
// }
// console.log(checkForAnagram('maracy','armyab'));



// function multiplyClosure(a) {
//     return function(b){
//         return a * b;
//     }
// }
// console.log(multiplyClosure(3)(3));


// var output = (function(x) {
//     // console.log(typeof x);
//     delete x;
//     return x;
//   })(null);
  
//   console.log(output);

// var Employee = {
//     company: 'xyz'
//   }
//   var emp1 = Object.create(Employee);
// //   delete emp1.company
//   emp1.salary = 10000;
// //   delete Employee.company;
//   console.log(emp1);
// //   console.log(emp1.company)


// let value = { members: 10 };
// let multiply = ((x = { ...value }) => {
//     console.log(x.members *= 2)
// });
// multiply();
// multiply();
// multiply(value);


// console.log(11 + 11) ;
// console.log(011 + 011);
// console.log(1 || 2 && 3);
// console.log(1 && 2 || 3);
// console.log(0.1 + 0.2 == 0.3);
// console.log(021);


// var valid = true;
// setTimeout(() => {
//     console.log('Settimeout');
//     valid = false;
// }, 100);
// while(valid) {
//     console.log('hi')
// }

// let sum = 0; 
// const a = [1, 2, 3];
// a.forEach(getSum);
// console.log(sum);
// function getSum(ele) {
//    sum += ele;
// }


// console.log(parseInt("123Hello"));
// console.log(parseInt("Hello123"));


// function main(params) {
//     function main2(param) {
//         const params = 100
//         console.log(params)
//         return "main 2";
//     }
//         params = 1
//         console.log(params)
//         // const params = 10;
//     return function (params) {
//         return main2;

//     }
// }

// console.log(main(10)()())//closure with function

// let i
// for ( i = 0; i < 10;i++){    
//     console.log(i);
// };
// console.log('outside',i) //why does loop behaves like this;


// function reverseAny(input){
//     let typeOfInput = typeof input;
//     if(typeOfInput=="number"){
//         input += "";        
//     }
//     let result = input.split('').reverse().join('');
//     if(typeOfInput=="number"){
//        result = parseInt(result);     
//     }
//     return result;
// }
// console.log(reverseAny(123));


// function checkPalindrome(input){
//     let typeOfInput = typeof input;
//     if(typeOfInput=="number"){
//         input += "";        
//     }
//     let result = input.split('').reverse().join('');
//     if(result == input){
//         return "It is palindrome";
//     }
//     return "not a palindrome";
// }
// console.log(checkPalindrome("dad"));



// function sortString(input){
//     let result = input.split('').sort().join('');
//     return result;
// } 


// function firstLetterCapital(input){
//     let result = input.split(' ');
//     for(let i = 0; i<result.length; i++){
//         result[i] = result[i].charAt(0).toUpperCase()+result[i].slice(1)  
//     };
//      result = result.join(" ");
//      return result
// };
// console.log(firstLetterCapital("hello world"));



// function longestString(input){
//     let result = input.split(' ');
//     let longestString = "";
//     for(let i = 0; i<result.length; i++){
//         if(longestString.length<result[i].length){
//             longestString = result[i];
//         }
//     };
//      return longestString
// };

// console.log(longestString("hello dworld ddawd"));


// name = "mahadaa";
// (function (params) {
//     const person = {
//         name : "mahada",
//         sayName : function(){
//             return this.name;
//         }
//     };
//     const names = person.sayName;
//     console.log(names());
// })();


// const vehicle = {
//     gear:4,
//     drive:function(){
//         return  `driving ${this.model} at gear ${this.gear}`;
//     }
// }

// const vehicleType = {
//     type:"car"
// }


// const tesla = {
//     model:"X",
// };

// Object.setPrototypeOf(tesla,vehicle);
// Object.setPrototypeOf(tesla,vehicleType);


// Object.setPrototypeOf(vehicle,tesla);
// console.log(tesla.drive())
// console.log(vehicle.drive())

 

// let person = {
//     talk: true,
//     Canfly() {
//         return "Sorry, Can't fly";
//     },
// };
// // Object GFGuser
// let GFGuser = {
//     CanCode: true,
//     CanCook() {
//         return "Can't say";
//     },
//     __proto__: person, 
// };

// console.log("Can a GFG User talk: " + GFGuser.talk); 

// console.log("Can a GFG User fly: " + GFGuser.Canfly()); 

// console.log("Can a GFG User code: " + GFGuser.CanCode); 

// console.log("Can a GFG User cook: " + GFGuser.CanCook()); 



// var v = 1;
// var f1 = function () {
//     console.log(v);
// };

// var f2 = function () {
//     var v = 2;
//     f1();
// };

// f2();

// console.log(this);

// function forThis(params) {
//     this.color = "red";
//     console.log(this === global)
// }

// forThis();

// console.log(global.color)


//ALGORITHM PRAC

// function addNums(arr){
//     return eval(arr.join("+"));
// };

// function addNums(arr){
//     let result = 0
//     for (const ele of arr) {
//         result+=ele
//     }
//     return result;
// };

// console.time("start")
// console.log(addNums(arr1));
// console.timeEnd("start")


// function mad(){
//     return arr[1]
// };

// arr = [1,2,mad]

// console.log(arr[2]()); //using arr like functions



// const str = "awdaas"
// function fun() {
//     return "hello";
// }
// const num = 10;
// console.log(str.__proto__.__proto__ === Object.prototype);//PROTOTYPE CHAINING OR EVERYTHING IS AN OBJECT
// console.log(fun.__proto__.__proto__ === Object.prototype);
// console.log(num.__proto__.__proto__ === Object.prototype);
// console.log(Object.prototype)


// class Circle {
//     constructor(radius){
//         this.radius = radius;
//         this.count = 0   
//     }
//     getArea(){
//         this.count++;
//         return Math.PI * Math.pow(this.radius,2);
//     }
//     getCircumference(){
//         return 2 * Math.PI * this.radius;
//     }
//     fullDescription(){
//         return `The desc of CIRCLE// Radius:${this.radius}, Diameter:${this.radius*2}, Area: ${this.getArea()}, Circumference:${this.getCircumference()}`
//     }
//     static compareArea(a,b){
//        return a.getArea() == b.getArea();
//     };
// }

// const newCircle = new Circle(5);
// const newCircle1 = new Circle(5);
// console.log(Circle.compareArea(newCircle,newCircle1));
// console.log(newCircle.getArea());
// console.log(newCircle.getArea());
// console.log(newCircle.getCircumference());
// console.log(newCircle.fullDescription());
// console.log(newCircle.count);


// var myObject = {
//     foo: "bar",
//     func: function() {
//         var self = this;
//         console.log("outer func:  this.foo = " + this.foo);
//         console.log("outer func:  self.foo = " + self.foo);
//         (function() {
//             console.log("inner func:  this.foo = " + this.foo);
//             console.log("inner func:  self.foo = " + self.foo);
//         })();
//     }
// };
// myObject.func();



// console.log(['1','6','11'].map(parseInt));//????????


// arra = [1,22,33,31];
// function smallest(arr){
//     let smallest = arr[0];
//     for(let ele of arr){
//         if(smallest>ele){
//             smallest = ele
//         }
//     }
//     return smallest;
// }

// function largest(arr){
//     let largest = arr[0];
//     for(let ele of arr){
//         if(largest<ele){
//             largest = ele
//         }
//     }
//     return largest;
// }
// console.log(Number.NEGATIVE_INFINITY)
// console.log(smallest(arra));
// console.log(largest(arra));



// let x = (y=10+10,y = 10,y);
// console.log(x);//brackets 


// prices = [1,3,46,7,89,2,6,54,1,2,4,6,]

// let indianR = prices.map((ele)=>{
//     return ele *70
// })
// .filter((ele)=>{
//     return ele<500
// })
// .reduce((acc,cur)=>{
//     return acc+cur
// });

// console.log(indianR)//MAP FILTER REDUCE
