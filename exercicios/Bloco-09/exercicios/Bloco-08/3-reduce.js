const epic = ['A', 'long', 'time', 'ago', 'in a', 'galaxy', 'far far', 'away...']

const epicPhrase = epic.reduce((word, currentValue) => {
    console.log(`accumulator: ${word}, currentValue ${currentValue}`)
    return `${word} ${currentValue}`;
},);

console.log(epicPhrase);

const epicPhrase2 = epic.reduce((word, currentValue) => `${word} ${currentValue}`);
console.log(epicPhrase2);