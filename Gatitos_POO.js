/*
 Programacion Orientada a Objetos (POO)

 Paradigma = Manera en la que se puede hacer algo especifico.
 Paradigma de programacion : Forma o manera en la que puedo programar algo.


 Otras formas de programar:
 Programacion funcional
 Programacion imperativa
 Programcion declarativa


 Pilares fundamentales de la programacion POO
    - Polimorfismo
    - Herencia
    - Encapsulamiento
    - Abstraccion



- Clases (plantillas para hacer muchos objetos)
- Objetos
    - Atributos (lo que tengo - ojitos pispiretos)
    - Metodos  (lo que puedo hacer con lo que tengo - mirar lo bello de la vida)

*/

//Ejemplo del gatito

//Propiedades = variables o constantes
const color = "Gris";
var tamanio = "Chiquito";
var edad = 5;
var cicatrices = true;
const raza = "Angora";
var caracter = "Agresivo"

//Metodos o funciones
function comer(){}
function treparArboles(){}
function maullar(){}
function grunir(){}
function dormir(){}
function corretearPerros(){}

// //Precursor de los objetos Array
// var gato = ['Cilantro', 'Agresivo', 5, 'Angora', true, 'Chiquito'];
// console.log(typeof(gato));


//Evolucion de los arreglos
var Cilantro = {
    nombre: "Cilantro",
    edad: 5,
    caracter : "Agresivo",
    raza : "Angora",
}

var Perejil= {
    nombre: "Perejil",
    edad: 10,
    caracter : "Feliz",
    raza : "Siames",
}

var Cebollita= {
    nombre: "Cebollita",
    edad: 1,
    caracter : "Timida",
    raza : "Esfinge",
}

var Limon= {
    nombre: "Limon",
    edad: 2,
    caracter : "Agrio",
    raza : "Egipcio",
}


console.log(typeof(Cilantro));
console.log("El nombre de Cilantro es", Cilantro.nombre);
console.log("El caracter de Cilantro es",Cilantro.caracter);


/*

clases para agilizar este proceso (Plantillas)

*/

//1.- defino mi clase con la palabra reservada class

class gato{

    //2.- definir mis propiedades o atributos como variables, para despues ponerle valores
    nombre = "";
    edad = 0;
    raza = "";
    caracter = "";

    
    //4.- Agregar constructores
    //Necesito construir con los atributos que ya defini en la clase

    constructor(nombre, edad, raza, caracter){//funcion especial para construir donde necesito esos parametros
        this.nombre = nombre;
        this.edad = edad;
        this.raza = raza;
        this.caracter = caracter;

    }

    //3.- Definir los metodos que seran definidos como funciones o acciones

    maullar(){
        console.log("miau");
    }
    dormir(){
        console.log("Zzzzzzz");
    }
    ronronear(){
        console.log("Prrrrrr");
    }


}

// para empezar a crear o instanciar objetos (gatos), vamos a utilizar la palabra reservada new nombreClase

var Gardfield = new gato("Gardfield", 9, "Naranja", "Dormilon");
var Felix = new gato("Felix", 4, "Caricaturas", "Amistoso");
var Kitty = new gato("Kitty", 1, "kawaii", "tranquilo");
var Vaquita = new gato("Vaquita", 2, "manchada", "glotona");
var Bingo = new gato("Bingo", 5, "Meztizo", "Jugueton");


console.log(Gardfield);
console.log(Vaquita);
console.log(Bingo);
console.log(Kitty);
console.log(Felix);

Gardfield.ronronear();
Gardfield.dormir();
Felix.ronronear();
Vaquita.maullar();