import validator from "./validator.js";
//click para cambiar de pagina
let bttnSegundaPagina = document.getElementById("bttnSegundaPagina");
bttnSegundaPagina.addEventListener("click", function() {
//e.preventDefault()
document.getElementById("pantalla2").className = "visible"; 
document.getElementById("pantalla1").className = "invisible";
})
let inicio = document.getElementById("inicio");
inicio.addEventListener("click",function() {
//e.preventDefault()
document.getElementById("pantalla1").className = "visible"; 
document.getElementById("pantalla2").className = "invisible";
})

//Funciene el boton de validacion 
let btnCheck = document.getElementById("donacion");
btnCheck.addEventListener("click", e=> {
e.preventDefault()
let creditCardNumber = document.getElementById("creditCardNumber").value;
let maskiCard= validator.maskify(creditCardNumber);
let tarjetaValida= validator.isValid(creditCardNumber);
let nameDatos= document.getElementById("nameDatos").value;
//let mensajePantalla =document.getElementById("mensajeError")

if (creditCardNumber === ""){
    document.getElementById("message").innerText= "⚠️ Campo 'Ingrese Numero de tarjeta' vacio";
}else if (tarjetaValida === true){
    document.getElementById("message").innerText = "✅Tarjeta " + maskiCard + " válida, gracias por su donación";
    document.getElementById("imgG").className = "visible";
    }  else{
    document.getElementById("message").innerText = "❌ Tarjeta " + maskiCard + " inválida";
    
}

if (nameDatos === ""){
document.getElementById("messageName").innerText= "⚠️ Campo 'Ingrese nombre' vacio";
}else {
    document.getElementById("messageName").innerText= "";
}
})