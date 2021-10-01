 // Desafio 1 

  // Desenvolva uma função que receba um array como parâmetro e
// retorne um array com os números pares

let arr = [1,2,3,4,5]

function getEvenNumbers(arr) {
  let arr2 = [];

  for (let index = 0; index < arr.length; index+=1) {
    if(arr[index] % 2 === 0){
      arr2.push(arr[index]);      

    }

    

  }
  return arr2;

}

console.log( getEvenNumbers(arr) ); // [2,4]

// Desafio 2

// Desenvolva uma função que receba um array de objetos com cidades e estados e retorne um array contendo o nome da cidade e do estado concatenados.

// Ex:
const citiesAndStates = [
    {
      city: 'Belo Horizonte',
      state: 'Minas Gerais',
    },
    {
      city: 'Salvador',
      state: 'Bahia',
    },
    {
      city: 'Porto Alegre',
      state: 'Rio Grande do Sul',
    },
    {
      city: 'Manaus',
      state: 'Amazonas',
    }
  ]
  console.log(citiesAndStates.length);



  // Resultado esperado
  //['Belo Horizonte - Minas Gerais', 'Salvador - Bahia', 'Porto Alegre - Rio Grande do Sul', 'Manaus - Amazonas']
  
  function buildCitiesArray(citiesAndStates) {
    

    let resultado = [];

    for (let index = 0; index < citiesAndStates.length; index += 1) {

      resultado.push(citiesAndStates[index]['city']+" - "+citiesAndStates[index]['state'])
        
        
    }

    return resultado
  }

  console.log(buildCitiesArray(citiesAndStates));