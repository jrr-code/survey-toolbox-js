function setConfig() {
    // set some config globals
    global.EASTING = "e";
    global.NORTHING = "n";
    global.ELEVATION = "el";
    global.BEARING = "bg";
    global.DIST_2D = "dist_2d";
    global.DIST_3D = "dist_3d";
}

// module.exports = {
//     setConfig
// };
exports.BearingDistanceFromCoords = require('./lib/BearingDistanceFromCoords');
exports.BearingFromDeltas = require('./lib/BearingFromDeltas');
exports.CommonCalculations = require('./lib/CommonCalculations');
exports.ConvertDegreesToRadians = require('./lib/ConvertDegreesToRadians');
exports.ConvertRadiansToDegrees = require('./lib/ConvertRadiansToDegrees');
exports.ConvertToDecimalDegrees = require('./lib/ConvertToDecimalDegrees');
exports.ConvertToDegreesMinutesSeconds = require('./lib/ConvertToDegMinSec');
exports.CoordsFromBearingDistance = require('./lib/CoordsFromBearingDistance');
exports.DistanceSpeedCalcs = require('./lib/DistanceFromSpeedTime');
exports.FormatDegreesMinutesSeconds = require('./lib/FormatDegMinSec');
exports.SurveyPoint = require('./lib/SurveyPoint');
module.exports = {setConfig};