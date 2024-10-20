// Definición de la clase Vehiculos
class Vehiculos {
    constructor(marca, modelo, color) {
        this.marca = marca;
        this.modelo = modelo;
        this.color = color;
    }

    mostrarInfo() {
        console.log(`Vehículo Marca: ${this.marca}, Modelo: ${this.modelo}, Color: ${this.color}`);
    }
}

// Creación de tres objetos de la clase Vehiculos
const vehiculo1 = new Vehiculos("Toyota", "Corolla", "Rojo");
const vehiculo2 = new Vehiculos("Honda", "Civic", "Negro");
const vehiculo3 = new Vehiculos("Ford", "Focus", "Blanco");

// Impresión de la información de los tres objetos
vehiculo1.mostrarInfo();
vehiculo2.mostrarInfo();
vehiculo3.mostrarInfo();
