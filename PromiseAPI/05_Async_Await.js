// 12/13/2019 -- 6

// Async and Await are type of function that return Promise as object..

// have word async before function

async function getNumbers(num) {
  return num;
}
console.log(getNumbers(20));

getNumbers(20).then(result => {
  console.log(result);
});

// Await ... only inside the async function and not regular function...

async function someValue() {
  let obj = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Resolve is done!!")
    }, 2000);

  });
  let result = await obj;
  console.log(result);
}

someValue();