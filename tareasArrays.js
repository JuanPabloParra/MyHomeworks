function isEvenOrOdd(number) {
    if (number % 2 === 0) {
      console.log(number + " is even");
    } else {
      console.log(number + " is odd");
    }
  }

  isEvenOrOdd(2)

 //-------------------------------------------------------------------

 //Flecha
 const checkNumber = (number) => {
    if (number % 2 === 0) {
      console.log(number + " is even");
    } else {
      console.log(number + " is odd");
    }
  };
  
checkNumber (3)

//--------------------------------------------------------

const sumArray = (array) => {
  return array.reduce((a, b) => a + b, 0);
};
