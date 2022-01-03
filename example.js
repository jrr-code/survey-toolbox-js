// This is a built-in example. You'll need to npm install the survey-toolbox-js module
// and include that for it to work properly for you.
// hmu any questions - details in readme :)

// Set the bounds of our game
import {NewPointStore} from "./lib/PointStore";
import {NewSurveyPoint} from "./lib/SurveyPoint";
import bearingDistanceFromCoordinates from "./lib/BearingDistanceFromCoords";
import {createInt} from "./lib/CommonCalculations";
import {BEARING, DIST_2D} from "./config";
import toDecimalDegrees from "./lib/ConvertToDecimalDeg";
import coordinatesFromBearingDistance from "./lib/CoordsFromBearingDistance";

const {
    EASTING,
    NORTHING,
    ELEVATION
} = require('./../config');

const GAME_MIN_E = 1000;
const GAME_MAX_E = 10000;
const GAME_MIN_N = 1000;
const GAME_MAX_N = 10000;
const GAME_MIN_EL = 250;
const GAME_MAX_EL = 300;

// Rounding to three decimals.
const ROUND_TO_DEC = 3;

// Set the kill zone of our Artillery rounds in metres.
const KILL_ZONE = 100;

// Set the players
const PLAYER_1 = "player 1";
const PLAYER_2 = "player_2";
const PLAYERS = [PLAYER_1, PLAYER_2];
const ERROR_BG = 0.95;
const ERROR_DIST = 0.95;

function calculateErrors(errPercent, originalValue){
    // Calculate and returns a value with an error.
    // TODO there's a neater way todo this, esp in .js
    let calcError = originalValue - originalValue * errPercent;
    let calcLower = calcError / 2;
    let calcUpper = calcError / 2;
    calcError = Math.random() * (calcUpper - calcLower) + calcLower;
    return originalValue +  calcError;
}

// Create a point store so we can store and retrieve our points.
const GamePlayers = NewPointStore({}, 0);

// Create a new point object for each player and drop it in the point store.
for (let player in PLAYERS) {
    GamePlayers.setNewPoint(NewSurveyPoint(player));

    // Assign some random coordinates, keeping it within our game bounds.
    GamePlayers.setPointVertex(player, {
        EASTING: (Math.random() * (GAME_MAX_E * GAME_MIN_E) + GAME_MIN_E).toFixed(ROUND_TO_DEC),
        NORTHING: (Math.random() * (GAME_MAX_N * GAME_MIN_N) + GAME_MIN_N).toFixed(ROUND_TO_DEC),
        ELEVATION: (Math.random() * (GAME_MAX_EL * GAME_MIN_EL) + GAME_MIN_EL).toFixed(ROUND_TO_DEC),
    });
};

// Create a game loop.
let gameOn = true;
let playerTurn = PLAYER_1;
let nextPlayer = PLAYER_2;
let roundNumber = 1;
let playableRounds = 10;

while (gameOn && roundNumber < playableRounds) {
    // Whose turn is it?
    console.log(`it's ${playerTurn}'s turn.`);

    // get approximate bearing and distance from player to player.
    let bdP2P = bearingDistanceFromCoordinates(
        GamePlayers.pointStore[playerTurn].getVertex(),
        GamePlayers.pointStore[playerTurn].getVertex()
    );

    let approxDist = createInt(calculateErrors(ERROR_DIST, bdP2P[DIST_2D]));
    let approxBearing = createInt(calculateErrors(ERROR_BG, bdP2P[BEARING]));

    // Don't forget to convert to decimal degrees before formatting it.
    let bearingDms = toDecimalDegrees(bdP2P[BEARING]).toFixed(4)
    console.log(`your target is approximately ${approxDist} at bearing ${approxBearing}° from your position.`);

    // create a temp array to store inut bearing and distance.
    let bearingDistanceArray = [];
    for ( let y in ["bearing", "distance"]) {
        bearingDistanceArray.append(parseFloat(prompt(`please enter a ${y} to target: `)));
    }

    console.log("firing!");
    // determine where the round lands.
    let splash = coordinatesFromBearingDistance(
        GamePlayers.pointStore[playerTurn].getVertex(),
        bearingDistanceArray[0],
        bearingDistanceArray[1]
    );

    // Determine distance from splash to target.
    let didWeHit = bearingDistanceFromCoordinates(splash, GamePlayers.pointStore[nextPlayer].getVertex());

    // Check for win condition. Either exit or switch to next player.
    if (didWeHit[DIST_2D] < KILL_ZONE) {
        console.log("=============================================");
        console.log(`${playerTurn} jsut destroyed ${nextPlayer}!`);
        gameOn = false;
        console.log("=============================================");
        return;
    } else {
        console.log(`${playerTurn}'s round landed within ${parseFloat([DIST_2D]).toFixed()} metres of ${nextPlayer}...`);
        if (playerTurn === PLAYER_1){
            playerTurn = PLAYER_2;
            nextPlayer = PLAYER_1;
        } else {
            playerTurn = PLAYER_1;
            nextPlayer = PLAYER_2;

            // end of round.
            roundNumber += 1;
            // TODO refactor ERROR_DIST and ERROR_BG to enable the option torReduce the errors just a little.
        }
    }

}
