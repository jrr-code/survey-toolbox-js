// DistanceFromSpeedTime - all times are in hours

const {createInt} = require("./CommonCalculations");

function distanceFromSpeedAndTime(movementSpeed, movementTime) {
    // Returns distance from speed and time.
    return movementTime * movementSpeed;
}

function timeToTarget(movementSpeed, movementDistance){
    // Returns time to target based on distance and speed.
    return movementDistance / movementSpeed;
}

function formatTimeToTarget(timeToTargetIn){
    let TTTH = createInt(timeToTargetIn);
    let TTTM =  createInt(timeToTargetIn * 60) % 60;
    // TODO format as a readable time rather than just an array.
    let TTTS = (timeToTargetIn * 3600) % 60;
    return [TTTH, TTTM, TTTS]
}

module.exports = {
    distanceFromSpeedAndTime,
    timeToTarget,
    formatTimeToTarget
}
