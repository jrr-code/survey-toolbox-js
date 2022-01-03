// This is a built-in example. You'll need to npm install the survey-toolbox-js module
// and include that for it to work properly for you.
// hmu any questions - details in readme :)
global.EASTING = "e";
global.NORTHING = "n";
global.ELEVATION = "el";
global.BEARING = "bg";
global.DIST_2D = "dist_2d";
global.DIST_3D = "dist_3d";

// Set the bounds of our game
// const {CommonCalculations} = require('./lib/CommonCalculations');
const {NewSurveyPoint} = require("./lib/SurveyPoint");
const {bearingDistanceFromCoordinates}  = require("./lib/BearingDistanceFromCoords");

const GAME_MIN_E = 1000;
const GAME_MAX_E = 10000;
const GAME_MIN_N = 1000;
const GAME_MAX_N = 10000;
const GAME_MIN_EL = 250;
const GAME_MAX_EL = 300;

// Set the players
global.PLAYER_1 = "player_1";
global.PLAYER_2 = "player_2";
const PLAYERS = {[PLAYER_1]: "", [PLAYER_2]: ""};

// Create a new point object for each player and drop it in the point store.
for (let player in PLAYERS) {
    PLAYERS[player] = new NewSurveyPoint(PLAYERS[player]);
    // Assign some random coordinates, keeping it within our game bounds.
    PLAYERS[player].setVertex(
        {
            [EASTING]: (Math.random() * (GAME_MAX_E * GAME_MIN_E) + GAME_MIN_E).toFixed(3),
            [NORTHING]: (Math.random() * (GAME_MAX_N * GAME_MIN_N) + GAME_MIN_N).toFixed(3),
            [ELEVATION]: (Math.random() * (GAME_MAX_EL * GAME_MIN_EL) + GAME_MIN_EL).toFixed(3)
        }
    )
}

PLAYERS[PLAYER_1].setVertex(
    {
        [EASTING]: 100,
        [NORTHING]: 100,
        [ELEVATION]: 250
    }
)

PLAYERS[PLAYER_2].setVertex(
    {
        [EASTING]: 200,
        [NORTHING]: 200,
        [ELEVATION]: 250
    }
)


// console.log(PLAYERS)
console.log("PLAYERS:", PLAYERS)
console.log(bearingDistanceFromCoordinates(PLAYERS[PLAYER_1].getVertex, PLAYERS[PLAYER_2].getVertex));