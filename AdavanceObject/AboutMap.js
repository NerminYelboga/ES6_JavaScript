//12/16/2019-- 2--
/*  
1. Map object can not have duplicate keys...
2. Can have duplicate values...
3. Ley and value can be any Data type..(obj and primitive data type)
4. Map in iterates its elements..

Functions within Map object...
//clear(), delete(), forEach(), has(), values()
set(), get(), key()
*/

//set(key,value)...
let map = new Map();
console.log(map);

map.set(11,"jQuery");
map.set("two","React.JS");
map.set(22,"IOS");
map.set(11,"JS-ES6");
console.log(map);

//get(key)
console.log(map.get(11));

//If the value or entires does exiaats it's return undefined...
console.log(map.get(5));  // key=5 olmadigi icin undefined diyecek mesela yukardaki 11 key i yaz valuesini verecek


// How to find value of Key using args as value

function getByValue(map,searchValue){
    for(let [key,value] of map.entries()){
        if(value=== searchValue){
            return key
        }
    }
}

let peopleNames = new Map();
peopleNames.set(1,"One");
peopleNames.set(2,"Two");

console.log(getByValue(peopleNames,"Two")); // output 2




