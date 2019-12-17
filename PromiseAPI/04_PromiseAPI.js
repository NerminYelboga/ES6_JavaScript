// 12/13/2019 -- 5

// Five Static functions provided by promise Class
/*
  1. Promise.all(); return multiple promise object as single class
  
  2.Promise.allSettled(): this functions return multiple promise object only after all of them are settled state.
  
  3. Promise.race(): similae to Promise.all() but will return first settled promised onject

  4.Promise(resolve)... for success

  5. Promise(reject)... for error handling..
*/

//takes args as array
Promise.all([
  new Promise(function(resolve, reject) {
    setTimeout(() => {
      resolve("One");
    }, 3000);
  }),
  new Promise(function(resolve, reject) {
    setTimeout(() => {
      resolve("Two");
    }, 2000);
  }),
  new Promise(function(resolve, reject) {
    setTimeout(() => {
      resolve("Three");
    }, 1000);
  })
]).then(result => {
  console.log(result);
});

let urls = [
  'https://jsonplaceholder.typicode.com/',
  'https://jsonplaceholder.typicode.com/',
  'https://jsonplaceholder.typicode.com/'
];


//bu sayfada anlatilmaya calisilan math ve foreach arasindaki fark ama ben anlamadim
let request = urls.map(url => fetch(url));

Promise.all(request).then((response) => {
  response.forEach((result) => {
    console.log(`${result.url}:${result.status}`);
  }
  )
}
);
