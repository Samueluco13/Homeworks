class GreenZone {
    constructor(name) {
        this.id = Math.random().toString(36).substring(2, 11); //Para crear un id aleatorio casi irreplicable
        this.name = name;
        this.subzones = [];
    }

    addSubzone(subzone) {
        this.subzones.push(subzone);
    }

    removeSubzone(subzoneId) {
        this.subzones = this.subzones.filter(zone => zone.id !== subzoneId);
    }

    getHeight() {
        if (this.subzones.length === 0) {
            return 0;
        }
        return 1 + Math.max(...this.subzones.map(subzone => subzone.getHeight()));
    }

    getTotalSubzones() {
        return this.subzones.reduce((count, subzone) => count + subzone.getTotalSubzones() + 1, 0);
    }

    updateInfo(name) {
        this.name = name;
    }
}

export default GreenZone; 