class Vehiculo{

    constructor(marca, modelo, año){
    this.marca = marca;
    this.modelo = modelo;
    this.año = año;
    }
    obtenerDetalles(){
        console.log("Marca: ", this.marca, "Modelo: ", this.modelo, "año: ", this.año)
    }
}
class Coche extends Vehiculo{
    constructor(marca, modelo, año, numeroPuertas){
        super(marca, modelo, año)
        this.numeroPuertas = numeroPuertas;
    }
    obtenerDetalles(){
        console.log("Marca: ", this.marca, "Modelo: ", this.modelo, "año: ", this.año, "Número de puertas: ", this.numeroPuertas)
    }
}
class Moto extends Vehiculo{
     constructor(marca, modelo, año, cilindrada){
        super(marca, modelo, año)
        this.cilindrada = cilindrada;
    }
     obtenerDetalles(){
        console.log("Marca: ", this.marca, "Modelo: ", this.modelo, "año: ", this.año, "Cilindraje: ", this.cilindrada)
    }
}

const miVehiculo = new Coche("mazda", "2", "2021", "4");
miVehiculo.obtenerDetalles();
const miMoto = new Moto("Yamaha", "5", "2021", "200");
miMoto.obtenerDetalles