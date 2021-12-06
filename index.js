// Code your solution in this file!
function distanceFromHqInBlocks(blocks) {
    return Math.abs(blocks - 42)
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
    return Math.abs(pointA - pointB) * 264
}
//    if (pointA < pointB) {
//        return (pointB - pointA) * 264
//    } else if (pointA > pointB) {
//        return (pointA - pointB) * 264;
//    }
//}

function calculatesFarePrice(start, end) {
    const distance = distanceTravelledInFeet(start, end);  
    if (distance <= 400) {
        return 0;
    } else if (distance <= 2000) {
        return (distance - 400) * .02
    } else if (distance >= 2000 && distance <= 2500) {
        return 25;
    } else {
        return 'cannot travel that far'
    }
}