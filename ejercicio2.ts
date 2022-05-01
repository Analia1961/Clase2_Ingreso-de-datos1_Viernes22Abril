// Ejercicio2_Clase2: Área del Rectángulo

/* 1-Creamos un nuevo archivo (New File) llamado “ejercicio2.ts”
2-Cargamos la base y la altura en los campos(dato1 y dato2) 
y las guardamos en las variables de igual nombre */


let btnEnv = document.getElementById("btnEnviar");
let dato1 = document.getElementById("dato1");
let dato2 = document.getElementById("dato2");
//let result = document.getElementById("result");

btnEnv.addEventListener("click", () => {

let base : number = dato1.value;
let altura : number = dato2.value;
let area : number = base * altura;
console.log("El area del rectángulo es " + area);
//result.innerHTML = "El area del rectangulo es:" +area;

});

// Ejercicio2_Clase2 Ingreso de datos

let base : number = 5;
let altura : number = 10;
let resultado : number = base * altura;

console.log(resultado);



/* Si deseamos indicar un mensaje al usuario, 
agregamos la siguiente instrucción:
*/

//result.innerHTML = "El area del rectangulo es:" +area;