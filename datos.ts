// INGRESO DE DATOS

/* 1-Creamos un nuevo archivo (New File) llamado “datos.ts”
2-Escribimos en el archivo “datos.ts”: */

let btnEnv = document.getElementById("btnEnviar");
let dato = document.getElementById("dato");
//let rotulo = document.getElementById("rotulo");

btnEnv.addEventListener("click" , () => {
// TU CODIGO VA AQUI, POR EJEMPLO:
console.log("el dato ingresado es ",dato.value);
//
});

/* Si deseamos indicar un mensaje al usuario, 
agregamos la siguiente instrucción:

rotulo.innerHTML = "Ingrese un dato: ";*/