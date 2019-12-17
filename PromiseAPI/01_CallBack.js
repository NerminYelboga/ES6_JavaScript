// 12/13/2019  -- 2

// Call Back Function..??
//burada calback parametresini fonksiyon gibi tanimladi ve asagida callbackDemo nun icine yeni bir fonk olarak yarati ve cagirdi
function callBackDemo(argsOne, callBack) {
  setTimeout(() => {
    console.log(argsOne);
    callBack();
  }, 2000);
}

callBackDemo("args One", () => {
  setTimeout(() => {
    console.log("This is call back function Args");
  }, 3000);
});

/*
function taskOne(argOne, callBack) {
  if (error) {
    //handle the error
  } else {
    function taskTwo(argTwo, callBack) {
      if (error) {
        //handle the error
      } else {
        function taskThree(argsThree, callBack) {
          if (error) {
            //handle the error
          }
        }
      }
    }
  }
}
*/