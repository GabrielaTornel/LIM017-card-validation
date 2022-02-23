import validator from "./validator.js";
//click para cambiar de pagina

//Funciene el boton de validacion 
let btnCheck = document.getElementById("donacion");
btnCheck.addEventListener("click", e=> {
e.preventDefault()
let creditCardNumber = document.getElementById("creditCardNumber").value;
let maskiCard= validator.maskify(creditCardNumber);
let tarjetaValida= validator.isValid(creditCardNumber);
let mensajePantalla =document.getElementById("mensajeError")

if (creditCardNumber == ""){
    document.getElementById("mensajeError").innerHTML = "⚠️ Campo 'Ingrese Numero de tarjeta' vacio";
}else if (tarjetaValida === true){
    document.getElementById("mensajeCorrect").innerHTML = " ✅Tarjeta válida, gracias por su donación";
    document.getElementById("creditCardNumber").value= maskiCard;
    document.getElementById("imgG").className = "visible";
    console.log(mensajePantalla)

   
} else{
    document.getElementById("mensajeError").innerHTML = "❌ Tarjeta invalida";
    console.log(mensajePantalla)

}
} )



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
