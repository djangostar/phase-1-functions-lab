// Code your solution in this file!
function distanceFromHqInBlocks(blocks) {
  return Math.abs(blocks - 42);
}
//    if (blocks < 42) {
//        return 42 - blocks;
//    } else if (blocks > 42) {
//        return blocks - 42;
//    } else {
//        return 0;
//    }
//}

function distanceFromHqInFeet(distance) {
  return distanceFromHqInBlocks(distance) * 264;
}

function distanceTravelledInFeet(pointA, pointB) {
  if (pointA < pointB) {
    return (pointB - pointA) * 264;
  } else if (pointA > pointB) {
    return (pointA - pointB) * 264;
  }
}

function calculatesFarePrice(start, end) {
  const distance = distanceTravelledInFeet(start, end);
  if (distance <= 400) {
    return 0;
  } else if (distance > 400 && distance < 2000) {
    return (distance - 400) * 0.02;
  } else if (distance > 2000 && distance < 2500) {
    return 25;
  } else if (distance >= 2500) {
    return "cannot travel that far";
  }
}
