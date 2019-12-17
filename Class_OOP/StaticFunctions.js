//  12/11/2019 -- 1

// Static Methods are only accessbel via Class and not instance of class
//word static must be mentoined

/* class Test {
    constructor

    get sett

    functions
}
let testOne = new Test(); */

/*  bu hali daha mantikli (ilk hali) asagida ayni ornekte static classin icinde cagrildigini gostermeye calisiyor ama mantikli degil bu hali daha mantikli
class CarFactory {
  constructor(car) {
    this.car = car;
    //static i burda cagirirsan hepsi icin gecerli olur tabi burada () icinde deger olmadigi icin gidip statigin tanimlandigi yerde (key) key i silmen lazim
    //satir 41 = "CarFactory.accsessInventoryRoom("KeyOne");"i de silersin nasilsa burda ayni isi yapiyor
    //this.constructor.accsessInventoryRoom();
  }
  getCar() {
    return this.car;
  }
  someFunc() {
    console.log("Mfg..Cars");
  }
  //Static method
  static accsessInventoryRoom(key) {
      console.log("This is supply room.. " + key);
      
  }
}

let carOne = new CarFactory("SUV");
console.log(carOne.getCar());
carOne.someFunc();

// static metod: let ile bir degisken tanimlayip fonk cagirmak yerine direk cagirmamizi saglar
//direk class adi ve static olarak tanimlanan degeri cagirabiliriz. elimizde motor ve araba var ikisinde de ayni olan seyi kalitimdan direkt olarak cagirmak gibi
CarFactory.accsessInventoryRoom("KeyOne");
*/


class CarFactory {
    constructor(car) {
      this.car = car;
      //static i burda cagirirsan hepsi icin gecerli olur tabi burada () icinde deger olmadigi icin gidip statigin tanimlandigi yerde (key) key i silmen lazim
      //only for static method
      this.constructor.accsessInventoryRoom();
    }
    getCar() {
      return this.car;
      CarFactory.accsessInventoryRoom();
    }
    someFunc() {
      console.log("Mfg..Cars");
    }
    //Static method
    static accsessInventoryRoom(key) {
        console.log("This is supply room.. "); 
    }
  }
  
  let carOne = new CarFactory("SUV");
  console.log(carOne.getCar());
  carOne.someFunc();  
  