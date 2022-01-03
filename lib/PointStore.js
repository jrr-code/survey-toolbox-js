class NewPointStore {
    constructor (pointStore, numberPoints){
        this.pointStore = pointStore;
        this.numberPoints = numberPoints;
    }

    setNewPoint(point, point_name) {
        this.pointStore[point_name] = point;
        this.numberPoints += 1;
        return true;
    }

    get getPointStore() {
        return this.pointStore;
    }

}

module.exports = {
    NewPointStore
}
