const longestWord = (frase) => {
  
    let split = frase.split(" ");
    let fraseSeparada = [];
    let bigWord = "";
    let bigWordLength = 0;
  
    for (let index = 0; index < split.length; index +=1) {
        fraseSeparada.push(split[index]);
  
    }
    for(let index1 = 0; index1 < fraseSeparada.length; index1 +=1) {
        (fraseSeparada[index1].length > bigWordLength )? (bigWord = fraseSeparada[index1], bigWordLength = fraseSeparada[index1].length) : ``;
        
      }

      return `A maior palavra desta frase é "${bigWord}" que contém ${bigWordLength} letras.`
    
  }
  
  
  console.log(longestWord(`Antônio foi no banheiro e não sabemos o que aconteceu`)) // retorna 'aconteceu'
  