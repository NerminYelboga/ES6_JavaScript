//12/10/2019 -- 2
// Create obj or class or function and only allow to modfy the value vai GET and SET method..

class Employee {
  constructor(name) {
    // This is will invoke setter
    this.name = name;
  }
  get name() {
    return this._name;
  }
  set name(value) {
    if (value.length < 2) {
      console.log("Name is too short");
    } else {
      this._name = value;
    }
  }
}

let empOne = new Employee("John");
console.log(empOne.name);

empOne = new Employee("a");

//
class Student {
  constructor() {
    //let name;
    //let id;
  }
  //Getter Setter must declare for each variable

  getName() {
    return this.name;
  }
  setName(name) {
    this.name = name;
  }
}

let studentOne = new Student();
console.log(studentOne); //empty
studentOne.setName("StudentOne");
console.log(studentOne.getName()); // StudentOne
console.log(studentOne); //Student { name: 'StudentOne' }

studentOne.setName("Mike");
console.log(studentOne.getName()); // Mike
console.log(studentOne); //Student { name: 'Mike' }

//--------------------------------------------------------------------------
//Encaptulation will have get and set method.
//Dees not restrict the object creation

class Animal {
  constructor(canMove, canSpeak) {
    this.canMove = canMove;
    this.canSpeak = canSpeak;
  }
}

let Dog = new Animal("run", "bark");
console.log(Dog);


//
class Lunch {
  getMainDish() {
    return this.myMainDish;
  }
  setMainDish(myMainDish) {
    this.myMainDish = myMainDish;
  }
  getDrink() {
    return this.drink;
  }
  setDrink(drink) {
    this.drink = drink;
  }
}
let LunchOne = new Lunch();

LunchOne.setDrink("soda");
console.log(LunchOne.getDrink());

class Customer {
  constructor(id, name) {
    if (id != "" && name != "") {
      this.id = id;
      this.name = name;
    }
    this.id = id;
    this.name = name;
  }
  // get set ... DOB, phone,...
}

//let custOne = new Customer(102, "Test");
//custOne.setDOB();
