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
    // identificar numeros pares e inpares en la array
 let sumPar= 0;
 let sumImpar= 0;
 //let total= "";
 for (let i = 0;i < cadenaDos.length; i++){
   console.log(typeof cadenaDos[i])
   if (i % 2 !==0){
    
     //multiplicar los indicices pares
     let posicionPar =cadenaDos[i]*2
     console.log(posicionPar);
     if(posicionPar > 9){
       sumPar = sumPar +( posicionPar -9);
     }else{ //si no usar el mismo numero
       sumPar= sumPar+ posicionPar;
     }
     
     }else{ sumImpar= 
       console.log(cadenaDos[i],"impares")
      
      
     }

 }
 console.log(sumPar)


// sumar resultado del array 

//dividir ===0*/
  }
}

export default validator;
