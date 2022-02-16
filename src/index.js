import validator from "./validator.js";
//click para cambiar de pagina

//Funciene el boton de validacion 
const checkCreditNumber = document.getElementById("check");
checkCreditNumber.addEventListener("click", validarCard);
console.log(checkCreditNumber);

function validarCard(){
let creditCardNumber = document.getElementById("creditCardNumber").value;
if (creditCardNumber == ""){
    alert("ingresa numero de tarjeta");
}
else {
    //alert ("tarjeta invalida");
    validator.isValid(creditCardNumber)
}
}
console.log(validarCard);
console.log(validator);
console.log(validator.isValid);
/* console.log("click donacion");
let donacion = document.getElementById("donacion");
donacion.addEventListener("click", clickDonacion);

let check = document.getElementById("check");
check.addEventListener("click",validar);

function validar() {
  alert("ingrese tajeta")
    }
*/
