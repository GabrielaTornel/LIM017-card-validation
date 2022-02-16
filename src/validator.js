const validator = {
  isValid: function (creditCardNumber){
    console.log(creditCardNumber)
    //declarar arreglo tarjeta formulario
    let array= Array.from(creditCardNumber);
    console.log(array)
    //reversa de mi array
    const reverse= array.reverse()
    console.log(reverse)
    //string a numeros
    let arrayDos= [];
    for(let i=0; i<array.length; i++){
      arrayDos.push(parseInt(array[i]));
      console.log(arrayDos)
    }
   //declarar arreglo para los pares
   
   // multiplicar los segundos x2
   //Si la multiplicación es mayor q 9 sumar los digitos (darle una funcionalidad) 
   //sumar el array final 
   //dividir entre 2 
   //if ((i+1)%2 ==0)
    }
}
export default validator;
