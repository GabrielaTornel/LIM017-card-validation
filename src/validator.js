/* eslint-disable no-console */
const validator = {
  isValid: function (creditCardNumber){
    console.log(creditCardNumber)
    //declarar arreglo tarjeta formulario
    let numberArray= Array.from(creditCardNumber);
    console.log(numberArray)
    //reversa de mi array
    const reverse= numberArray.reverse();
    console.log(reverse)
    //string a numeros
    let cadenaDos= [];
    for(let i=0; i<numberArray.length; i++){
      cadenaDos.push(parseInt(numberArray [i]));
      console.log(cadenaDos)
    }
    // identificar numeros pares e impares en la array
 let sumPar= 0;
 let sumImpar= 0;
 //let total= "";
 for (let i = 0;i < cadenaDos.length; i++){
   console.log(typeof cadenaDos[i])
   if (i % 2 !==0){
    
     //multiplicar los indicices pares de js y sumar los dijistos
     let posicionPar =cadenaDos[i]*2;
     console.log(posicionPar);
     if(posicionPar > 9){
       sumPar = sumPar +( posicionPar -9);
     }else{ //si no usar el mismo numero
       sumPar= sumPar+ posicionPar;
     }
     
     } else{
       sumImpar= sumImpar +cadenaDos[i];
     }

 }
 let sumTotal= sumImpar + sumPar
 console.log(sumImpar)
 console.log(sumPar)
 console.log(sumTotal)

//que el total sea divisible entre 10 o que su modulo sea 0 ===0*/
if (sumTotal % 10 === 0){
  console.log(true)
  return true
}else{
  console.log(false)
  return false
}
  },
 /* const maskify = (creditCardNumber) => {
    //ocultar los digitos menos los 4 ultimos
    if(creditCardNumber.length > 4) {
        let creditCardNumberArray = creditCardNumber.split('');
        let newNumber = '';
  
        for (let i = 0;i <creditCardNumberArray.length; i++) {  // Se le va sumar 1 al i ==> ++ se significa aumentarle 1 más
            if (i < (creditCardNumberArray.length - 4)) {
                newNumber+= '#';
            } else {
              newNumber += creditCardNumberArray[i];// Si no cumple con la condicional entonces ocultar con #
            }
        }
  
        return newNumber;
        console.log
      } else {
          return creditCardNumber;
      }
}*/
}

export default validator;
