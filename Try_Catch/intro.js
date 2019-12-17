// 12/12/2019 --1

//Try Catch and Exeption handling...

/*
try {

} catch (Error Class) {
    ..error..
}
*/
try {
  console.log("Start the try block");
} catch (error) {
  console.log("Error has occur");
}

//error block as compiled error..
//Try Catch block does not work in case of compile error.
/*
try {
  setTimeout(() => {
    someFunction();
  }, 1000);
} catch (error) {
  console.log("Will not work");
}
*/

//An Error object
//Three function within Error Class..
//1.name 2.message 3.stack

try {
  //some code...
} catch (error) {
  console.log(error.name);
  console.log(error.message);
  console.log(error.stack);
}

try {
  let person = '{"name": "Mike", "age": 34}';
  console.log(person);

  let employee = JSON.parse(person);
  console.log(employee);

  console.log(employee.name);
  console.log(employee.age);
} catch (error) {
    console.log("Sorry we can not parse string into json code");   
}


/*
try {
    let demo = "{some json}"
    let user = JSON.parse(demo);
    
} catch (error) {
      throw new ReferenceError("This is reference error"); 
}
*/

//With 
// 1. Read on string and convert into json
// 2. verfy that name key is part of string 
// if not then we should throw exeption

// String
let student ='{"age":24}';

try {
    //this json object
    let stuOne = JSON.parse(student);
    console.log(stuOne);  //cikti = { age: 24 }

    if(!stuOne.name) {
        throw new SyntaxError("Incoplete data: no name");
    }
    
    console.log(stuOne.name);
    
} catch (error) {
    if(error.name=="SyntaxError") {
        //console.log("Json Error" + error.message);
        //console.log(error.name + " " + error.message+ " " + error.stack);
        console.log(error.name + " " + error.message);
    }else {
        throw error;
    }
}


// try catch... finally... 
// finally block will always execute not try or catch block


let num = 40;


function evenOrOdd(num) {
    if(num % 2 == 0){
        even = num;
        console.log("Number is even ");   
    }else {
        throw new Error("Number is Odd ")
    }
}

try {
    evenOrOdd(45);   
} catch (error) {
    
}finally{
    console.log("Finally should run...");
}
console.log("code continue...");
