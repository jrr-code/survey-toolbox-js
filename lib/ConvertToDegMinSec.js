// ConvertToDegreesMinutesSeconds

import {createInt} from "./CommonCalculations";

function toDegreesMinutesSeconds(dec) {
    // Converts decimal degrees to degrees minutes seconds.
    // Isolate the degrees.
    let DDeg = createInt(dec);

    // Isolate and convert the minutes.
    let DMin = createInt((dec - DDeg) * 60);

    // Isolate and convert the seconds.
    let DSec = (dec - DDeg - DMin / 60) * 3600;

    return DDeg + DMin / 100 + DSec / 10000;
}

module.exports = {
    toDegreesMinutesSeconds
};
