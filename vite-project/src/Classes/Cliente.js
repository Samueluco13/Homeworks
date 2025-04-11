import {Consultas} from './Consultas.js'
import {Reclamos} from './Reclamos.js'

export class Cliente{
    constructor(nombre){
        this.nombre = nombre;
        this.consultas = new Consultas(); //COLA
        this.reclamos = new Reclamos(); //FILA
    }

    agregarConsulta(consulta) {
        this.consultas.enqueue(consulta);
    }

    obtenerConsultas() {
        return this.consultas.getAll();
    }
    
    agregarReclamo(reclamo) {
        this.reclamos.enqueue(reclamo);
    }

    obtenerReclamos() {
        return this.reclamos.getAll();
    }
}