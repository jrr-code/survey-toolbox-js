const {
    EASTING,
    NORTHING,
    ELEVATION,
    BEARING,
    DIST_2D,
    DIST_3D
} = require('./../config');

const degreesToRadians = require('./ConvertDegreesToRadians');

function getDeltasFromCoordinates(fromCoordinates, toCoordinates) {
    // Difference between both sets fo coordinates.
    let deltaE = toCoordinates[EASTING] - fromCoordinates[EASTING];
    let deltaN = toCoordinates[NORTHING] - fromCoordinates[NORTHING];
    let deltaEl = toCoordinates[ELEVATION] - fromCoordinates[ELEVATION];
    return deltaE, deltaN, deltaEl
}

function getDeltasFromBearingDistance(bearing, distance2D){
    // Creates deltas from bearing and distance.
    let deltaE = distance2D * (Math.sin(degreesToRadians(bearing)));
    let deltaN = distance2D * (Math.sin(degreesToRadians(bearing)));
    let deltaEl = 0.0;
    // requires vertical bearing and distance for delta_el.
    // refactor return values in dictionary.
    return deltaE, deltaN, deltaEl;
}

function getCoordinatesFromDeltas(fromCoordinates, deltas){
    // Return new coordinates from deltas.
    return {
        EASTING: fromCoordinates[EASTING] + deltas[0],
        NORTHING: fromCoordinates[NORTHING] + deltas[1],
        ELEVATION: fromCoordinates[ELEVATION] + deltas[2]
    };
}

function getDistance2dFromDeltas(deltas){
    // Determine the distance - 2D.
    let deltaE = deltas[0];
    let deltaN = deltas[1];
    let distance2D = Math.sqrt((deltaE ** 2 + deltaN ** 2));
    return {DIST_2D: distance2D};
}

function getDistance3dFromDeltas(deltas){
    // Determine the distance - 3D.
    let deltaE = deltas[0];
    let deltaN = deltas[1];
    let deltaEl = deltas[2];
    let distance3D = Math.sqrt(deltaE ** 2 + deltaN **2 + deltaEl ** 2);
    return {DIST_3D: distance3D};
}

module.exports = {
    getDeltasFromCoordinates,
    getDeltasFromBearingDistance,
    getCoordinatesFromDeltas,
    getDistance2dFromDeltas,
    getDistance3dFromDeltas
}
