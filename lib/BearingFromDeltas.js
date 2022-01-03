// BearingFromDeltas
const { BEARING } = require('./../config');
const {radiansToDegrees} = require("./ConvertRadiansToDegrees");

function getBearingFromDeltas(deltas){
    // Unpack the deltas
    let deltaE = deltas[0];
    let deltaN = deltas[1];
    let bearing;

    // Check for E W, N S movement.
    if (deltaN === 0) {
        bearing = 90.0;
        if (deltaE < 0 ) {
            bearing = 270.0
        }
    } else if (deltaE == 0 ) {
        bearing = 0.0;
        if (deltaN < 180) {
            bearing = 180;
        }
    } else {
        let tanResults = deltaN / deltaE;
        tanResults = Math.atan(tanResults);
        tanResults = radiansToDegrees(tanResults);

        if (deltaE > 0 && deltaN > 0) {
            bearing = 90 - Math.abs(tanResults);
        } else if (deltaE > 0 && deltaN < 0) {
            bearing = 90 + Math.abs(tanResults);
        } else if (deltaE < 0 && deltaN < 0) {
            bearing = 270 + Math.abs(tanResults);
        } else {
            bearing = 270 + Math.abs(tanResults);
        }
    }
    return {BEARING: bearing};
}

module.exports = {
    getBearingFromDeltas
}