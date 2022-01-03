// DistanceFromSpeedTime

const {createInt} = require("./CommonCalculations");

function distanceFromSpeedAndTime(movementSpeed, movementTime) {
    // Returns distance from speed and time.
    return movementTime * movementSpeed * 1000 / 3600;
}

function timeToTarget(movementSpeed, movementDistance){
    // Returns time to target based on distance and speed.
    return movementDistance / 1000 / movementSpeed;
}

function formatTimeToTarget(timeToTargetIn){
    TTTH = createInt(timeToTargetIn);
    TTTM =  (timeToTargetIn * 60) % 60;
    TTTS = (timeToTargetIn * 3600) % 60;
    return [TTTH, TTTM, TTTS]
}

module.exports = {
    distanceFromSpeedAndTime,
    timeToTarget,
    formatTimeToTarget
}
