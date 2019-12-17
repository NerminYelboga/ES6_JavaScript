// 12/11/2019 -- 3

//provide same function from super class to chold class

class A {
  display() {
    console.log("This is From class A");
  }
}

class B extends A {
  display() {
    console.log("This is From Class B");
  }
}
let obj = new B();
let j = {};
obj.display.apply(j);
console.log(j instanceof B);
console.log("...");

let x = new B();
x.display();

// 1. Class should only be access via instance .. (static)

let objOne = [new A(), new B()];

objOne.forEach(function(a) {
  a.display(); //ciktisi foreachin icinde oldugu icin This is From Class A ve This is From Class B yi getirecek
});

//arrOne icindeki sayilari tek tek ekrana yazdir
let arrOne = [2, 4, 5, 6, 7, 88, 09];
arrOne.forEach(index => {
  console.log(index);
});

class abc {
  printABC() {
    return "This is abc";
  }
}

class xyz {
  constructor(args1, args2, args3) {
    this.text = new String(args1);
    this.num = new Number(args2);
    this.boolean = new Boolean(args3);
    this.abc = new abc().printABC();
  }
  someFunc() {
    return this.abc.printABC();
  }
}
let print = new xyz("test", 22, true);
console.log(print);
