import validator from "./validator.js";
//click para cambiar de pagina

//Funciene el boton de validacion 
let btnCheck = document.getElementById("donacion");
btnCheck.addEventListener("click", e=> {
e.preventDefault()
let creditCardNumber = document.getElementById("creditCardNumber").value;
if (creditCardNumber == ""){
    document.getElementById("mensaje").innerHTML = "Campo vacio";
}
else {
    document.getElementById("mensaje").innerHTML = "Tarjeta inválida, intente nuevamente";
    validator.isValid(creditCardNumber)
} 

})



/*let infSomos= querySelector("#somos");
infSomos.addEventListener("click",  );
function 
console.log();


/* console.log("click donacion");
let donacion = document.getElementById("donacion");
donacion.addEventListener("click", clickDonacion);

let check = document.getElementById("check");
check.addEventListener("click",validar);

function validar() {
  alert("ingrese tajeta")
    }
*/
