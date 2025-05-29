class City {
    constructor(name) {
        this.id = Math.random().toString(36).substring(2, 11); //Para crear un id aleatorio casi irreplicable
        this.name = name;
        this.greenZones = [];
        this.adjList = [];
    }

    addGreenZone(zone) {
        this.greenZones.push(zone);
    }

    removeGreenZone(zoneId) {
        this.greenZones = this.greenZones.filter(zone => zone.id !== zoneId);
    }

    getTotalHeight() {
        return this.greenZones.reduce((total, zone) => total + zone.getHeight(), 0);
    }

    getGreenZonesCount() {
        return this.greenZones.reduce((count, zone) => count + zone.getTotalSubzones() + 1, 0);
    }

    addConnection(city) {
        if (!this.adjList.includes(city)) {
            this.adjList.push(city);
            city.adjList.push(this);
        }
    }

    removeConnection(city) {
        this.adjList = this.adjList.filter(c => c !== city);
        city.adjList = city.adjList.filter(c => c !== this);
    }
}

export default City; 