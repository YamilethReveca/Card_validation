import validator from './validator.js';

//prompt para validar la tarjeta

let datosUsuario = prompt("Digite su tarjeta");				



			


// obtener los datos del numero para mostrarlo 
const inputNumber= document.querySelector("#numeroTarjeta");
let mostrarNumero = document.getElementById("copiaNumeroTarjeta");		
inputNumber.addEventListener("input", obtenerNumero);
function obtenerNumero(e){
  mostrarNumero.innerHTML=e.target.value;
  
}



//obtener nombre usuario
const inputName= document.querySelector("#nombreUsuario");
let mostrarName = document.getElementById("copiaNombreUsuario");	
inputName.addEventListener("input", obtenerName);
function obtenerName(e){
mostrarName.innerHTML=e.target.value;
}


//obtener fecha de vencimiento
// mes
const selectExpiracion= document.querySelector("#month");
let mostrarFechaExpiracion= document.getElementById("copiaMes");
selectExpiracion.addEventListener("change", obtenerSelect);
function obtenerSelect(e){
mostrarFechaExpiracion.innerHTML=parseFloat(selectExpiracion.value)+"/";
}

//año
const selectExpiracionAño= document.querySelector("#year");
let mostrarFechaExpiracionAño= document.getElementById("copiaAño");
selectExpiracionAño.addEventListener("change", obtenerSelectAño);
function obtenerSelectAño(e){
mostrarFechaExpiracionAño.innerHTML=parseFloat(selectExpiracionAño.value)
}


// obtener tres digitos parte de atras de la card

const inputTresDigitos= document.querySelector("#codigo");
let mostrarDigitos= document.getElementById("tres");
inputTresDigitos.addEventListener("input", obtenerValorTresDigitos);
function obtenerValorTresDigitos(e){
  mostrarDigitos.innerHTML= e.target.value;
}










console.log(validator);
