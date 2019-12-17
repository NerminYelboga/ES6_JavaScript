//12/16/2019-- 2--
//Set object provides...
//add(), clear(), delete(), forEach(), has(), values()

// Remember About Set..
// 1. Set Object user key as internal.... we can swt key...
// 2. Set object always store unique values...
// 3. Set Object provides iterates to read or modify the values

let id = new Set([11,11,22,33,44,11]);
console.log(id);   // output  Set { 11, 22, 33, 44 }  iki tane 11 olamaz aynilarindan bir tane cikti veriyor
console.log(typeof id);   //output object
console.log(id instanceof Set);   //output true
//duplicate values will removed from the set after first recoreds

let arr = [11, 22, 33, 44]
// .add() add the values to set object
let skills = new Set();
skills.add(arr);//skills.add('HTML');
skills.add(arr);//skills.add('CSS');
skills.add('JS-ES');
console.log(skills); //output Set(3) {"HTML", "CSS", "JS-ES"}
skills.add('BT-4').add("react").add("ArrayTypes");
console.log(skills);  // cikti Set(6) {"HTML", "CSS", "JS-ES", "BT-4", "react", …}

//objemdekilere tek tek ulasmak istersem
//loop element
for (const key of skills) {
    if(key=='CSS'){
        console.log("This is CSS");   
    } 
    else{
     console.log(key);   
    }
}

console.log(skills.size);  // cikti 6
//simple for loop
/*for (let i = 0; i < skills.size; i++) {
   console.log(skills); 
} */

//.clear() method to clear the set..
/*
skills.clear();
console.log(skills);
*/

//.delete() which only delete particular value
skills.delete('HTML');
console.log(skills);  //output Set(5) {"CSS", "JS-ES", "BT-4", "react", "ArrayTypes"}

//.entires()..
let itr = skills.entries();
for (let i = 0; i < skills.size; i++) {
    console.log(itr.next().value); 
}

// let someSkill = {
//     arrOne: [ {skills: "HTML"}, {skills:"CSS"}]
// }
// console.log(someSkill);

// let empName= JSON.parse(name);
// let empId= JSON.parse(id);
// let emp= new Set();
// emp.add(empName);
// emp.add(empId);

 


//.forEach()..
//It's callback.. value,value2
let nameList = new Set(['Mike', 'Sam','John','Dan']);
console.log(nameList);

// forEach takes function as args.. (valOne,valTwo,nameSet)
nameList.forEach(function printNAme(key,value,nameList){
    // console.log("Key: " + key);
    // console.log("Value: " + value); 
   
    response = {key,value}
    console.log(response);
});

// .has().. check the set and verify that element is exists or not-- true or false
console.log(nameList.has("Mike"));
console.log(nameList.has("Ann"));

// .values().. returns the values 
console.log(nameList.values()); 
