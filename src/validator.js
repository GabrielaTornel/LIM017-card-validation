const validator = {
  isValid: function (creditCardNumber){
    console.log(creditCardNumber)
    //declarar arreglo tarjeta formulario
    let array= Array.from(creditCardNumber);
    console.log(array)
    //reversa de mi array
    const reverse= array.reverse()
    console.log(reverse)
    //declarar arreglo para los pares
    let arrayP= [];
   //
    let sum= 0;
    // declarar 
    for (let i=0; i<=array.length; i++){
      arrayP.push(parseInt(array[i]));
    }
    //hay que 
   /* arrayP.reverse();
    for (let i=0; i<arrayP.length; i++){
      if ((i+1)%2 ==0)
    }*/

  }
}
export default validator;
