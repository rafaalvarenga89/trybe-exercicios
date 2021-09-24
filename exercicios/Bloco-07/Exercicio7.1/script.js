// function testingScope(escopo) {
//     if (escopo === true) {
//       var ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
//       ifScope = ifScope + ' ótimo, fui utilizada no escopo !';
//       console.log(ifScope);
//     } else {
//       var elseScope = 'Não devo ser utilizada fora meu escopo (else)';
//       console.log(elseScope);
//     }
//     console.log(ifScope + ' o que estou fazendo aqui ? :O'); // Se necessário esta linha pode ser removida.
//   }

//   testingScope(true);

// const testingScope = (escopo) => {
//     if(escopo === true) {
//         let ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
//         ifScope = `${ifScope} ótimo, fui utilizada no escopo !`;
//         console.log(ifScope)
//     } else {
//         let elseScope = `Não devo ser utilizada fora meu escopo (else)`;
//         console.log(elseScope);
//     }
// console.log(`${ifScope}o que estou fazendo aqui ? :O`)

// }
// console.log(testingScope(true));

const oddsAndEvens = [13, 3, 4, 10, 7, 2];

const sortOddsAndEvens = () => {

let ordArray = [];


for(index=0; index<oddsAndEvens.length; index+=1) {
    ordArray.push(oddsAndEvens[index]);
        
    } 

    ordArray.sort((a,b) => {
        return a-b;
    });

     
    return ordArray;
  }

const sortedArray = sortOddsAndEvens();  
console.log(`Os números ${sortedArray} se encontram ordenados de forma crescente !`);

const oddsAndEvens1 = [13, 3, 4, 10, 7, 2];

console.log(`Os números ${oddsAndEvens1.sort((a,b) => a -b)} se encontram ordenados de forma crescente !`); 




 