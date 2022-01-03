const NewPointStore = require('./lib/PointStore');
const NewSurveyPoint = require('./lib/SurveyPoint');

const {
    EASTING,
    NORTHING,
    ELEVATION,
    BEARING,
    DIST_2D,
    DIST_3D
} = require('./config');

const point_store = new NewPointStore.NewPointStore({}, 0);
console.log(point_store.getPointStore)

console.log(EASTING, NORTHING, ELEVATION, BEARING, DIST_2D, DIST_3D);