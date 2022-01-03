// ConvertToDecimalDegrees
import {createInt} from "./CommonCalculations";


function toDecimalDegrees(dms){
    // Converts degrees minutes and seconds to decimal degrees.
    // Isolate the degrees component.
    let DDeg = createInt(dms);

    // Isolate the minutes component and convert.
    let DMin = (createInt((dms - DDeg)) / 60);

    // Isolate the seconds component and convert.
    let DSec = ((dms * 100 - createInt(dms * 100)) * 100) / 3600;

    return DDeg + DMin + DSec;
}

module.exports = {
    toDecimalDegrees
}