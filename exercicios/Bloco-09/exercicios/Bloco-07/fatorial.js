const fat = (fatorial) => {

let fatorialArray = [];
let resultado = 0;

for(index =0; index <= fatorial; index+=1) {
    (index > 0 ) ? fatorialArray.push(index):((fatorial === 0) ?resultado = 1 :``);  
}

for (index1 = 0; index1 < fatorialArray.length; index1+=1) {

    (fatorial === 1) ? resultado = 1 :((index1 === 0) ?resultado = fatorialArray[index1]: resultado = fatorialArray[index1] * resultado);

}

return resultado

}

console.log(fat(10));


