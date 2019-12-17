// 12/13/2019 --3

//      ○ Benefits of Promises
// 1. Improves Code Readability
// 2. Better handling of asynchronous operations
// 3. Better flow of control definition in asynchronous logic
// 4. Better Error Handling

//      ○ A Promise has four states:
// 1. fulfilled: Action related to the promise succeeded
// 2. rejected: Action related to the promise failed
// 3. pending: Promise is still pending i.e not fulfilled or rejected yet
// 4. settled: Promise has fulfilled or rejected

//let isDB_Online = false;
let isDB_Online = true;

//Promise...
let connectDB = new Promise(function(resolve, reject) {
  if (isDB_Online) {
    var dbConnect = {
      USerName: "USerOne",
      passWord: "Admin"
    };
    resolve(dbConnect); //Resolved.... Done.
  } else {
    var dbOffline = new Error("Server is Down or network issue..");
    reject(dbOffline);
  }
});

/*
connectDB.then(function(result){
    console.log(result);
}).catch(function(result){
    console.log(result);  
}).finally(function(){
    console.log("Done with Task..."); 
});
*/


/*
connectDB.catch(function(result){
    console.log(result);
});
*/

connectDB.then(
    (result) => {
        console.log(result);
    }, (error) => {
        console.log(error);
    }
);