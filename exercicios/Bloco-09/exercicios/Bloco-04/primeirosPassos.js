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

// 7.

const nota7 = 5;

if(nota7 < 0 || nota7 > 100) {
    console.log ("Nota inválida");
} else if (nota7 >= 90 && nota <= 100) {
    console.log("A");
} else if (nota7 >= 80 && nota < 90) {
    console.log("B");
} else if (nota7 >= 70 && nota < 80) {
    console.log("C");
} else if (nota7 >= 60 && nota < 70) {
    console.log("D")
} else if (nota7 >= 70 && nota < 60) {
    console.log("E")
} else {
    console.log("F");
}

// 8. 

const ex8num1 = 1;
const ex8num2 = 6;
const ex8num3 = 5;
let modulo = '';

if (ex8num1 % 2 === 0 || ex8num2 % 2 === 0  || ex8num3 % 2 === 0) {
    modulo = true;
} else {
    modulo = false;
}

console.log(modulo);

// 9.

const ex9num1 = 2;
const ex9num2 = 6;
const ex9num3 = 4;
let modulo9 = '';

if (ex9num1 % 2 !== 0 || ex9num2 % 2 !== 0  || ex9num3 % 2 !== 0) {
    modulo9 = true;
} else {
    modulo9 = false;
}

console.log(modulo9);

// 10. 

const custoProduto = 1;
const valorDeVenda = 1.5;
let produto = 1000;
let impostoCusto = 0.2 * custoProduto;

if (custoProduto < 0 || valorDeVenda < 0 || produto <0 || impostoCusto < 0) {
    console.log ("Erro");
} else {
   let valorCustoTotal = custoProduto + impostoCusto;  
   let lucro = produto *(valorDeVenda - valorCustoTotal);
    if (lucro < 0) {
        console.log("Erro");
    } else {
        console.log(lucro);
    }

}