// CoordsFromBearingDistance

const {getCoordinatesFromDeltas, getDeltasFromBearingDistance} = require("./CommonCalculations");

function coordinatesFromBearingDistance(fromCoordinates, bearing, distance2d){
    let deltas = getDeltasFromBearingDistance(bearing, distance2d);
    return getCoordinatesFromDeltas(fromCoordinates, deltas);
}

module.exports = {
    coordinatesFromBearingDistance
}
