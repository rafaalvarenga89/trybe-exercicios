const numbers = [2,3,4,6,8,12,24];

// accumulatorFor = 2
// 2 + 3 = 5
// 5 + 4 = 9
// 9 + 6 = 15
// 15 + 12 = 27
// ...
// 59

let accumulatorFor = numbers[0];

for (let i = 1; i < numbers.length; i += 1) {
    accumulatorFor = numbers[i] + accumulatorFor;
}

console.log(`accumulatorFor: ${accumulatorFor}`)

const sumWithReduce = numbers.reduce((accumulator, currentValue) => {
    console.log(`accumulator: ${accumulator}, currentValue ${currentValue}`)
    return accumulator + currentValue;
});

console.log(`accumulatorFor: ${sumWithReduce}`);

const sumWithReduce2 = numbers.reduce((accumulator2, currentValue2) => {
    console.log(`accumulator: ${accumulator2}, currentValue ${currentValue2}`)
    return accumulator2 + currentValue2;
}, 0);

console.log(`accumulatorFor: ${sumWithReduce2}`);