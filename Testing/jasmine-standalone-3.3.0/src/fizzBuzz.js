const checkFizzBuzz = (input) => {

    if(typeof(input) !== 'number'){
      console.log("test")
      throw Error("Input must be a number")
  }
  
    if(input%3===0 && input%5===0){
      return 'fizzbuzz';
    }
    if(input%3===0){
      return 'fizz';
    } else if(input%5===0){
      return 'buzz';
    }
    return input.toString();
  };