// 1.
const a = 1;
const b = 3;

let sum = a + b;
let sub = a - b;
let mult = a * b;
let div = a / b;
let mod = a % b;

console.log(sum);
console.log(sub);
console.log(mult);
console.log(div);
console.log(mod);

// 2.

const num1 = 2;
const num2 = 5;

if(num1 > num2) {
    console.log(num1);
} else {
    console.log(num2);
}

// 3.

const ex3num1 = 7;
const ex3num2 = 10;
const ex3num3 = 5;

if(ex3num1 > ex3num2) {
    if (ex3num1 > ex3num3){
        console.log(ex3num1);
    } else {
        console.log(ex3num3);
    }
} else { 
    if(ex3num2 > ex3num3) {
    console.log(ex3num2);
    } else {
    console.log(ex3num3);
    }

}


