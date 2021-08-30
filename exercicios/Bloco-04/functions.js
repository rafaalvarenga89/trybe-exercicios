// 1.
function palíndromo(palavra) {
let word = '';
let inverseWord = '';
// console.log(palavra)

for(let phraseIndex = 0; phraseIndex <= palavra.length; phraseIndex++) {
     if(phraseIndex < palavra.length) {
       word = word + palavra[phraseIndex]; 
     } else {
        word = word;
    }

}

for (let inverseIndex = palavra.length-1; inverseIndex >=-1; inverseIndex--) {
    if (inverseIndex > -1) {
        inverseWord = inverseWord + palavra[inverseIndex];
    } else {
    inverseWord = inverseWord;
    }

}

if(word === inverseWord){
    return'Esta palavra é um palíndromo';
} else {
    return 'Esta palavra não é um palíndromo';
}

}

console.log(palíndromo('arara'));
console.log(palíndromo('desenvolvimento'));
// 2.

 function bigger(array){
    
    // console.log(array.indexOf(10));
    let bigValue = '';
    let bigValueIndex = '';
     for(let index =0; index < array.length; index++) {
         if (bigValue < array[index]) {
             bigValue = array[index];
         } else {
             bigValue = bigValue;
         }
         bigValueIndex = array.indexOf(bigValue);
         }
         return bigValueIndex;

}

console.log(bigger([2, 3, 6, 7, 10, 1]));

// 3.

function smaller(array){
    
    // console.log(array.indexOf(10));
    let smallValue = array[0]
    let smallValueIndex = array[0];
     for(let index =0; index < array.length; index++) {
         if (smallValue > array[index]) {
             smallValue = array[index];
         } else {
             smallValue = smallValue;
         }
         smallValueIndex = array.indexOf(smallValue);
         }
         return smallValueIndex;

}

console.log(smaller([2, 3, 6, 7, 10, 1]));

// 4.

function bigName (arrayNomes) {

console.log(arrayNomes[1].length);

let biggerNameAmount = '';
let biggerNameIndex = '';
let biggerName = '';

for (let amountIndex = 0; amountIndex < arrayNomes.length; amountIndex++){
    if (biggerNameAmount < arrayNomes[amountIndex].length) {
        biggerNameAmount = arrayNomes[amountIndex].length;
        biggerNameIndex = amountIndex;
        biggerName = arrayNomes[amountIndex];
    } else {
        biggerNameAmount = biggerNameAmount;
        biggerNameIndex = biggerNameIndex;
        biggerName = biggerName;
    }
    
}
return biggerName;

}

console.log (bigName(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']));

// 5.
function numberMostAppear(repeatArray) {
 
let singleObject = {};
let singleArray = [];
let maiorNumero = 0;
let quantidade = 0; 


for(let index = 0; index < repeatArray.length; index++) {
    singleObject[repeatArray[index]] = repeatArray[index];
}

for (let key in singleObject) {
    singleArray.push(key);    
}


for(let index2 = 0; index2 < singleArray.length; index2++) {
    let numero = singleArray[index2];
    let contador = {};
    contador[numero] = 0;  
    for (let index3 = 0; index3 < repeatArray.length; index3++) {
        if(numero == repeatArray[index3]) {
            contador[numero] = contador[numero] + 1; 
        } else {
            contador[numero] = contador[numero];
        }
    }


        for(let key in contador) {
              if(quantidade < contador[numero]) {
                quantidade = contador[numero];
                maiorNumero = key;
            } 
            
        } 
     
}
return maiorNumero;
}
console.log(numberMostAppear([2, 3, 2, 5, 8, 2, 3]));
