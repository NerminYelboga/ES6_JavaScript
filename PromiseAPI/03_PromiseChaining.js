// 12/13/2019 -- 4

new Promise(function(resolve, reject) {
  setTimeout(() => {
    //resolve(1);
    reject("Someting went wrong!!");
  }, 1000);
})
  .then(function(result) {
    console.log(result);
    return result * 2;
  })
  .then(function name(result) {
    console.log(result);
    return result * 2;
  })
  .then(function(result) {
    console.log(result);
  })
  .catch(function(error) {
    console.log(error);
  })


  // Code Queations
  
  /*
    Use Promise to solve this issue
  1. We need to enroll student to outdoor class
  2. Student must be age 15 or older
  3. Student must be weight 40 lb or lower

  by using promise you need to inform that student is eligible or not...
  Also if not aligible you print why and which ererita is not met reuierements

  USe Promise and then and catch and finally

  asagidaki ornei kontrol et
  */ 
   let age;
   let weight;

 let Students= new Promise(function(resolve, reject) {
    setTimeout(() => {
        reject("Someting went wrong!!");
    }, 1000);
    
}).then(function(result) {
    if (age>15 && weight<=40 ) {
        console.log("Perfect Student");

    } else {
      var Student = new Error("Student age or weight not fit");

    } 
    })
    .catch(function(error) {
      console.log(error);
    })
   
  





