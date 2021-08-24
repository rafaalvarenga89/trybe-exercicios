 let numbers = [2, 5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let soma = 0;

for(let index = 0; index < numbers.length; index++) {
    soma = (soma + numbers[index]);
    media = soma / numbers.length;
}

console.log(soma);
console.log(media);

let condicao = media;

if (condicao > 20) {
    console.log('Valor maior que 20');
} else {
    console.log('Valor menor ou igual a 20');
}

let biggerNumber =0;

for (let index=0; index < numbers.length; index++) {
    if (biggerNumber < numbers[index]) {
    biggerNumber = numbers[index];
    } else {
    biggerNumber = biggerNumber;
    }
}

console.log(biggerNumber);

let oddNumber = 0
for (let index=0; index < numbers.length; index++) {
    if (numbers[index] % 2 === 0) {
        oddNumber = oddNumber;
    } else {
        oddNumber = oddNumber + 1;
    }
}

if (oddNumber === 0) {
    console.log('Nenhum valor encontrado');
} else {
    console.log(oddNumber);
}

let minorNumber = biggerNumber;

for (let index=0; index < numbers.length; index++) {
    if (minorNumber > numbers[index]) {
    minorNumber = numbers[index];
    } else {
    minorNumber = minorNumber;
    }
}

console.log(minorNumber);

let numbers2 = [];
for (let index2 = 1; index2 <= 25; index2 += 1) {
    numbers2.push(index2);
}
for (let number2 of numbers2 ) {
    number2 /= 2;
    console.log(number2);
}

