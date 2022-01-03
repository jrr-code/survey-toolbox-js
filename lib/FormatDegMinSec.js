// FormatDegreesMinutesSeconds

const {createInt} = require("./CommonCalculations");

function formatAsDms(dms){
    // Format dms for readability.
    // Isolate degrees.
    let dDeg = createInt(dms);

    // Isolate minutes.
    let dMin = createInt((dms - dDeg) * 100);

    // Isolate seconds.
    let dSec = (dms * 100 - createInt(dms * 100)) * 100

    // Format and return.
    return `${dDeg}° ${dMin}' ${dSec}"`;
}

module.exports = {
    formatAsDms
};
