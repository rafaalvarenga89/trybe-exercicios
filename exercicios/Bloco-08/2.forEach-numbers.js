const tripleNumbers = [1,2,3,4,5,6,7,8,9];

for(let i = 0; i < tripleNumbers.length; i +=1 ) {
    console.log(tripleNumbers[i] * 3);
}

tripleNumbers.forEach((number) => {
    console.log(number*3);
})