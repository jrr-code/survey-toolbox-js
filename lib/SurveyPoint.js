const STATUS_ACTIVE = true;
const STATUS_INACTIVE = false;
const {
    EASTING,
    NORTHING,
    ELEVATION,
    BEARING,
    DIST_2D,
    DIST_3D
} = require('./../config');

class NewSurveyPoint {
    constructor(pointName) {
        this.oid = "uid4";
        this.pointName = pointName;
        this.featureCode = "";
        this.vertex = {EASTING: 0.00, NORTHING: 0.00, ELEVATION: 0.00};
        this.createdDtg = Date();
        this.status = STATUS_ACTIVE;
        this.clonedFrom = false;
    }

    setPointName(pointName){
        this.pointName = pointName;
        return true;
    }

    get getPointName() {
        return this.pointName;
    }

    setFeatureCode(featureCode){
        this.featureCode = featureCode;
    }

    get getFeatureCode(){
        return this.featureCode;
    }

    setVertex(vertex){
        for (const [key, value] of Object.entries(vertex)) {
            this.vertex[key] = value;
        }
        return true;
    }

    get getVertex(){
        return this.vertex;
    }

    setCreatedDtg(createdDtg){
        this.createdDtg = createdDtg;
        return true;
    }

    get createdDtg(){
        return this.createdDtg;
    }

    setStatus(status){
        this.status = status;
        return true;
    }

    get getStatus(){
        return this.status;
    }

    setClonedFrom(clonedFrom){
        this.clonedFrom = clonedFrom;
        return true;
    }

    get getClonedFrom() {
        return this.clonedFrom;
    }
}

module.exports = {
    NewSurveyPoint
}
