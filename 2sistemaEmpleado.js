class Empleado{
    constructor(nombre, edad, salarioBase){
        this.nombre = nombre;
        this.edad = edad;
        this.salarioBase = salarioBase;

    }
    calcularSalario(){
        console.log ("Salario base es: ", this.salarioBase);
    }
}
class Gerente extends Empleado {
    constructor(nombre, edad, salarioBase, bonificacion) {
        super(nombre, edad, salarioBase)
        this.bonificacion = bonificacion;
    }
    calcularSalario(){
        console.log(this.nombre, "tiene un salario base mas bonificación de: ", this.salarioBase + this.bonificacion);
    }
}
class Desarrollador extends Empleado{
     constructor(nombre, edad, salarioBase, lenguaje){
        super(nombre, edad, salarioBase)
        this.lenguaje = lenguaje;
    }
    calcularSalario(){
        console.log ("Salario de un desarrollador es: ", this.salarioBase);
    }
}
const empleado1 = new Empleado("cristian", 28, 100);
empleado1.calcularSalario();
const gerente1 = new Gerente("cristian", 28, 100, 20);
gerente1.calcularSalario();
const desarrollador1 = new Desarrollador("cristian", 28, 100)
desarrollador1.calcularSalario();
