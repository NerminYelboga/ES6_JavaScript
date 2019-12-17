// 12/11/2019 -- 2

//School... Employe... Some Emp are teacher, admin

// all school employee..
// teacher ... teaching...
// admin ... management..

class SchoolEmploye {
  constructor(id, name, income) {
    this.id = id;
    this.name = name;
    this.income = income;
  }
  getInsurance() {
    console.log("Empleyee Insurance");
  }
  getAddress() {
    return this.address;
  }
  setAddress(address) {
    this.address = address;
  }
  static printName(fullName) {
      return fullName;
  }
}

SchoolEmploye.printName("Mike Miller");

//SchoolEmploye classindaki herseyin Teacher classina dahil olmasi icin extends SchoolEmploye demen lazim
//ve constructor dan sonraki satira super(); yazman lazim. ilk satira yazmak onemli
class Teacher extends SchoolEmploye {
  constructor(dept, subject) {
    super(id, "Mike", "55k");
    this.dept = dept;
    this.subject = subject;
  }
}

//let mathTeacher = new Teacher("Math", "Logic"); // bu sekilde cagirirsan teacher clasindakiler undefibed olur
let mathTeacher = new Teacher("Math", "Logic");
console.log(mathTeacher);
mathTeacher.getInsurance();
mathTeacher.setAddress("100 Main st ");
console.log(mathTeacher);


class AdminEmployee extends SchoolEmploye {
  constructor(role, dept) {
    this.role = role;
    this.dept = dept;
  }
}
