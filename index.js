// Code your solution in this file!
function distanceFromHqInFeet(someValue) {
    distanceFromHqInBlocks(someValue);
    // call the distanceFromHqInBlocks function from inside the distanceFromHqInFeet function,
    // passing the argument from distanceFromHqInFeet into distanceFromHqInBlocks
    function distanceFromHqInBlocks(someValue) {
        //returns the number of blocks given a value
        if (someValue < 42) {
            distance = 42 - someValue
        }
        else {
            distance = someValue - 42
        }
        return distance
      }
      feetDistance = 264 * distance
      return feetDistance
    // the return value of distanceFromHqInBlocks can then be used to calculate feet
  }

  function distanceTravelledInFeet(start, destination) {
    //returns the number of feet traveled
    if (start > destination){
            distanceFeet = (start - destination) * 264
            return distanceFeet
    }
  }

  function calculatesFarePrice(start, destination) {
    //returns the fare for the customer
    switch(distanceFeet){
        case distanceFeet < 401:
        fare = 0
        break;
        case distanceFeet >400 && distanceFeet< 2001:
        fare = distanceFeet * 0.02   
        break;
        case distanceFeet > 2000 && distanceFeet <2501:
        fare = 25
        case distanceFeet >2500:
            return 'cannot travel that far'
        break;
    }
  }