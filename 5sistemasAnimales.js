class Animal{
    constructor(nombre, edad){
        this.nombre = nombre;
        this.edad = edad;
    }
    emitirSonido(){
        console.log("sonido")
    }
}
class Perro extends Animal{
    constructor(nombre, edad){
        super(nombre, edad);
    }
    emitirSonido(){
        console.log("El perro hace Guauuu")
    }
}

class Gato extends Animal{
    constructor(nombre, edad){
        super(nombre, edad);
    }

    emitirSonido(){
        console.log("el gato hace Miauuuuuu")
    }
}

const perro1 = new Perro("Garry", 5);
perro1.emitirSonido();
const gato1 = new Gato("Estella", 6);
gato1.emitirSonido();