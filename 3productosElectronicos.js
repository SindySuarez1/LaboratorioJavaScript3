class Producto{
    constructor(nombre, precio, marca){
        this.nombre = nombre;
        this.precio = precio;
        this.marca = marca;
    }
    descripcion(){
        console.log("\nNombre: ", this.nombre, "precio: ", this.precio, "Marca: ", this.marca);
    }
}
class Telefono extends Producto{
    constructor(nombre, precio, marca, almacenamiento, ram){
        super(nombre, precio, marca)
        this.almacenamiento = almacenamiento;
        this.ram = ram;
    }
    descripcion(){
        super.descripcion();
        console.log( "Alamacenamiento: ", this.almacenamiento, "Ram: ", this.ram);
    }
}
class Laptop extends Producto{
    constructor(nombre, precio, marca, procesador, pulgadas){
        super(nombre, precio, marca)
        this.procesador = procesador;
        this.pulgadas = pulgadas;
    }
     descripcion(){
        super.descripcion();
        console.log("Procesador: ", this.procesador, "Pulgadas: ", this.pulgadas);
    }
}
const telefono1 = new Telefono("waweiplus", 200, "wawei", "120gb", 8 );
telefono1.descripcion();
const telefono2 = new Laptop("DELL25", 500, "Dell", "intel", 14 );
telefono2.descripcion();