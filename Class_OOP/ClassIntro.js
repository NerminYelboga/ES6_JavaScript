//12/10/2019 -- 1
//syntax for class

class MyClass {
  //class method
  constructor() {}
  function() {} // can create as many functions as you can.
}

// I want to create class called User and print the args as name and print user name
// Note: class always need constructor and constructor never return back anything
class User {
  // constructor (name){
  //    this.name = name;
  //  }
  constructor(name, id) {
    this.name = name;
    this.id = id;
  }
  welcome() {
    console.log(this.name);
    console.log(this.id);
  }
}

let userOne = new User("Mike", 23);
userOne.welcome();
console.log(typeof userOne); //eger userOne in type'ini merak ediyorsan terminalde ciktisi object olacak cunki constructor

//class and object type using ES5
console.log(User == User.prototype.constructor); //ekran ciktisi true

//this is class
function Car(model, wheels) {
  this.model = model;
  this.wheels = wheels;
}
// this is constructor
Car.prototype.printModel = function() {
  console.log(this.model);
};

let carOne = new Car("Model X");
console.log(carOne);

carOne.printModel("Model Y");

console.log(Car("Honda")); //undifinded

Car.prototype.printWheels = function() {
  console.log(this.wheels);
};

//------------------------------------------------------------------
//How to use Class and expression...

let person = class {
  constructor(personName) {
    this.personName = personName;
  }
  printName() {
    return this.personName;
  }
};

console.log(new person("ClassName").printName());
let obj = new person("newPerson");
obj.printName();

// Class as expresstion in functions

function getInfo(info) {
  return class {
    printInfo() {
      console.log(info);
    }
  };
}

let infoOne = getInfo("args");
new infoOne().printInfo();
new infoOne();

//
function params(nums) {
    return nums + nums;
}
function returnObj() {
    return new User();
    //return new "This is return obj"
}

let nums = params(2);
console.log(nums);
