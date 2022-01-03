const {degreesToRadians} = require('./ConvertDegreesToRadians');
const {EASTING} = require("../config");

function getDeltasFromCoordinates(fromCoordinates, toCoordinates) {
    // Difference between both sets of coordinates.
    let deltaE = toCoordinates[this.EASTING] - fromCoordinates[this.EASTING];
    let deltaN = toCoordinates[this.NORTHING] - fromCoordinates[this.NORTHING];
    let deltaEl = toCoordinates[this.ELEVATION] - fromCoordinates[this.ELEVATION];
    return [deltaE, deltaN, deltaEl]
}

function getDeltasFromBearingDistance(bearing, distance2D){
    // Creates deltas from bearing and distance.
    let deltaE = distance2D * (Math.sin(degreesToRadians(bearing)));
    // let deltaE = distance2D * (Math.sin(degreesToRadians(bearing)));
    let deltaN = distance2D * (Math.sin(degreesToRadians(bearing)));
    let deltaEl = 0.0;
    // requires vertical bearing and distance for delta_el.
    // refactor return values in dictionary.
    return [deltaE, deltaN, deltaEl];
}

function getCoordinatesFromDeltas(fromCoordinates, deltas){
    // Return new coordinates from deltas.
    return {
        EASTING: fromCoordinates[this.EASTING] + deltas[0],
        NORTHING: fromCoordinates[this.NORTHING] + deltas[1],
        ELEVATION: fromCoordinates[this.ELEVATION] + deltas[2]
    };
}

function getDistance2dFromDeltas(deltas){
    // Determine the distance - 2D.
    let deltaE = deltas[0];
    let deltaN = deltas[1];
    let distance2D = Math.sqrt((deltaE ** 2 + deltaN ** 2));
    return {[this.DIST_2D]: distance2D};
}

function getDistance3dFromDeltas(deltas){
    // Determine the distance - 3D.
    let deltaE = deltas[0];
    let deltaN = deltas[1];
    let deltaEl = deltas[2];
    let distance3D = Math.sqrt(deltaE ** 2 + deltaN **2 + deltaEl ** 2);
    return {[this.DIST_3D]: distance3D};
}

function createInt(numberToConvert){
    return parseInt(numberToConvert.toString().split(".")[0])
}

function createDec(number){
    return parseInt(number.toString().split(".")[1])
}


module.exports = {
    getDeltasFromCoordinates,
    getDeltasFromBearingDistance,
    getCoordinatesFromDeltas,
    getDistance2dFromDeltas,
    getDistance3dFromDeltas,
    createInt,
    createDec
}
