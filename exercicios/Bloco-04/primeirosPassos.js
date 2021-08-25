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

// 4.

const ex4num4 = -10000;

if (ex4num4 > 0){
    console.log('positive');
} else {
    console.log('negative');
}

// 5.

const ang1 = 120;
const ang2 = 30;
const ang3 = 30;
let triangulo = 0;

if(ang1 < 0 || ang2 < 0 || ang3 < 0){
    console.log('Valor Inválido!')
} else {
    if(ang1 + ang2 + ang3 === 180) {
        triangulo = true;
    } else {
        triangulo = false;
    }
    console.log(triangulo)
}