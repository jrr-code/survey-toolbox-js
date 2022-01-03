class NewPointStore {
    constructor (pointStore, numberPoints){
        this.pointStore = pointStore;
        this.numberPoints = numberPoints;
    }

    setNewPoint(point) {
        let point_name = "abc";
        // point_name = point.get_point_name();
        this.pointStore[point_name] = point;
        this.numberPoints += 1;
        return true;
    }

    get getPointStore() {
        return this.pointStore;
    }

    setPointVertex(point, vertex) {
        this.pointStore[point].setVertex(vertex);
    }
}

module.exports = {
    NewPointStore
}
