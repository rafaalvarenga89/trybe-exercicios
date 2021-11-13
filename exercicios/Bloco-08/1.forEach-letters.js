const letters = ['a', 'b', 'c', 'd', 'e'];

for(i=0; i< letters.length; i+=1) {
    console.log(letters[i]);
}

const lettersHof =['a','b','c','d','e']

lettersHof.forEach((letterHof) => {
    console.log(letterHof);

});


const lettersAndIndex = ['a','b','c','d','e']

lettersAndIndex.forEach((letter, index, arr) => {
    console.log(`${index}: ${letter} -> ${arr}`)
})