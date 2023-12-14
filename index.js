// Code your solution in this file!
function distanceFromHqInBlocks(blocks) {
  // Math.abs static method returns the absolute value of a number.
  //  1) returns a distance in blocks
  //  2) returns a distance in blocks
  //  3) calculates distances below 42nd street
  return Math.abs(blocks - 42);
}
//    if (blocks < 42) {
//        return 42 - blocks;
//    } else if (blocks > 42) {
//        return blocks - 42;
//    } else {
//        return 0;
//    }
// look into abs record
//}

function distanceFromHqInFeet(distance) {
  // Create a variable to store function(distanceFromHqInBlocks(distance))
  let distanceInFeet = distanceFromHqInBlocks(distance);
  // Return variable in feet when each block = 264 feet
  return distanceInFeet * 264;
}

function distanceTravelledInFeet(pointA, pointB) {
  return Math.abs(pointA - pointB) * 264;
}

function calculatesFarePrice(start, end) {
  // Given the same starting and ending block as the previous test, return the fare for the customer.
  // Set a variable for the previous function
  let distance = distanceTravelledInFeet(start, end);
  // gives customers a free sample if its 400 feet or less
  if (distance <= 400) {
    return 0;
    // charges 2 cents per foot when total feet travelled is between 400 and 2000 (remember the first 400 feet are free!)
  } else if (distance > 400 && distance < 2000) {
    return 0.02 * (distance - 400);
    // charges 25 dollars for a distance over 2000 feet
  } else if (distance > 2000 && distance < 2500) {
    return 25;
  } else {
    // does not allow rides over 2500 feet
    return "cannot travel that far";
  }
}
