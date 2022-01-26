const numbers = [2,3,4,6,8,12,24];

const sumEvenNumbers = numbers.reduce((accumulator, currentValue) => {
    console.log(`accumulator: ${accumulator}, currentValue ${currentValue}`)
    if(currentValue % 2 !== 0) {
        return accumulator;
    } else{
        return currentValue + accumulator;
    }
    
})

console.log(`accumulatorFor: ${sumEvenNumbers}`);

const evenNumbers2 = numbers.filter((number) => {
    return number % 2 === 0;
})

console.log(evenNumbers2);

const sumEvenNumber2 = evenNumbers2.reduce ((evenNumber2, currentValue2) => {
    return currentValue2 + evenNumber2;
})

console.log(`accumulatorFor: ${sumEvenNumber2}`);

const evenNumbers3 = numbers.filter((number) =>  number % 2 === 0);
const sumEvenNumber3 = evenNumbers3.reduce ((evenNumber2, currentValue2) => currentValue2 + evenNumber2);
console.log(evenNumbers3);
console.log(`accumulatorFor: ${sumEvenNumber3}`);



const sumEvenNumber4 = numbers
.filter((number) =>  number % 2 === 0)
.reduce ((evenNumber2, currentValue2) => currentValue2 + evenNumber2);

console.log(`accumulatorFor: ${sumEvenNumber4}`);


    
