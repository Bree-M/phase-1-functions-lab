function distanceFromHqInBlocks(pickupLocation) {
const hqLocation = 42;
return Math.abs(pickupLocation - hqLocation);
}

function distanceFromHqInFeet(pickupLocation) {
   return Math.abs(pickupLocation - 42);

}

function distanceFromHqInFeet(pickupLocation) {
    return distanceFromHqInBlocks(pickupLocation) * 264;
}

function distanceTravelledInFeet(start, destination){
    let start = 42;
    let desstination = 50;
    return Math.abs(destination -start) * 264
}