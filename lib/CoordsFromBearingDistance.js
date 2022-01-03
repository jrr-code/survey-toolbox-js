// CoordsFromBearingDistance

import {getCoordinatesFromDeltas, getDeltasFromBearingDistance} from "./CommonCalculations";

function coordinatesFromBearingDistance(fromCoordinates, bearing, distance2d){
    let deltas = getDeltasFromBearingDistance(bearing, distance2d);
    return getCoordinatesFromDeltas(fromCoordinates, deltas);
}

module.exports = {
    coordinatesFromBearingDistance
}
