function greeting(name, role) {
    console.log(`Hello my name is ${name}`);
    console.log(`I'm a ${role}`);
  }
  
  setTimeout(greeting, 3000, "Nathan", "Software developer");
  
  //==========================set TimeOut=======================================================
  setTimeout(function (firstName) {
      console.log(firstName);
    },
    4000,
    "Anamika"
  );
  //total time took to run above 2 codes is 4sec .
  //===============================================set Interval========================
  // let count = 0;
  
  // // function creation
  // let interval = setInterval(function () {
  //   // increasing the count by 1
  //   count += 1;
  
  //   console.log(count);
  
  //   // when count equals to 5, stop the function
  //   if (count === 5) {
  //     clearInterval(interval);
  //   }
  
  //   // display the current time
  // }, 2000);