// ConvertToDecimalDegrees
const {createInt} = require("./CommonCalculations");


function toDecimalDegrees(dms){
    // Converts degrees minutes and seconds to decimal degrees.
    // Isolate the degrees component.
    let dDeg = createInt(dms);
    console.log("bug ddeg: ", dDeg);


    // Isolate the minutes component and convert.
    let dMin = createInt(((dms - dDeg) * 100))  / 60;

    // Isolate the seconds component and convert.
    let dSec = ((dms * 100) - createInt(dms * 100)) * 100 / 3600;

    return dDeg + dMin + dSec;
}

module.exports = {
    toDecimalDegrees
}