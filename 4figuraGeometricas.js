class Figura{
    constructor(color){
        this.color = color;
    }
    area(){
        return 0;
    }
}
class Rectangulo extends Figura{
    constructor(color, base, altura){
        super(color);
        this.base = base;
        this.altura = altura;
    }
    area(){
        return (this.base * this.altura);
    }
}
class Circulo extends Figura{
    constructor(color, radio){
        super(color);
        this.radio = radio;
    }
     area(){
        return (this.radio * this.radio) * 3.1415;
    }
}
const rectangulo1 = new Rectangulo("azul", 5, 5);
console.log("El area del rectangulo", rectangulo1.color,"es: ", rectangulo1.area());
const circulo1 = new Circulo("verde", 2);
console.log("El area del circulo", circulo1.color, "es: ", circulo1.area()); 