//12/12/2019 -- 2

/*
Class Error {
    constructor(message){
        this.message= message;
        this.name = "Error";
        this.stack = <call stack...js..>
    }
}
*/

class ValidationError extends Error {
  constructor(message) {
    super(message);
    this.name = "ValidationError";
  }
}

function test() {
  throw new ValidationError("This is Validation exception");
}

try {
  test();
} catch (error) {
  console.log(error.message);
  console.log(error.name);
}

//
function processJson(json) {
  let user = JSON.parse(json);
  if (!user.age) {
    throw new ValidationError("No Age Key Found!!");
  }
  if (!user.name) {
    throw new ValidationError("No Name Key found!");
  }
  return user;
}

try {
  let x = '{"age":23, "name":"test"}';
  processJson(x);
  console.log(x);
  
} catch (error) {
  if (error instanceof ValidationError) {
    console.log("Invalid Data: " + error.message);
  }
   else if (error instanceof SyntaxError) {
    console.log("JSON Syntax Error");
  } 
  else {
    throw error;
  }
}

class ProcessExeption extends ValidationError{
constructor(message){
    super(message);
    this.name= "ProcessExeption";
}
}

//tahe 2 number as args.. if numOne is devided by numberTwo which is zero then throw exception
let numOne;
let numTwo;
function devide(numOne,NumTwo) {
    if(numone==0 && numTwo==0) {
        throw new ProcessExeption(error.message);
    }else {
         let dev = numone/numTwo;   
         console.log("number one devided number two =" + dev);
          
    }
}
try {
    devide=(40,10);
} catch (error) {
    if (error instanceof ValidationError) {
        console.log("Invalid Data: " + error.message);
      }
       else if (error instanceof SyntaxError) {
        console.log("JSON Syntax Error");
      } 
      else {
        throw error;
      }
    
}

