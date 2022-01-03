// BearingDistanceFromCoords

import {getDeltasFromCoordinates, getDistance2dFromDeltas, getDistance3dFromDeltas} from "./CommonCalculations";
import {getBearingFromDeltas} from "./BearingFromDeltas";

function bearingDistanceFromCoordinates(fromCoordinates, toCoordinates){
    // Return bearing and distance(s) from two sets of coordinates.
    // Determine deltas.
    let deltas = getDeltasFromCoordinates(fromCoordinates, toCoordinates);
    // Determine bearing.
    let bearing = getBearingFromDeltas(deltas);
    // Determine the distances.
    let dist2d = getDistance2dFromDeltas(deltas);
    let dist3d = getDistance3dFromDeltas(deltas);

    // Merge the dictionaries and return.
    return Object.assign({}, bearing, dist2d, dist3d);
}

module.exports = {
    bearingDistanceFromCoordinates
}