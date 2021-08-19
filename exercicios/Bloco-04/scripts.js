// VARIÁVEIS

let myName = 'Rafael de Alvarenga Reis';
let anoAtual = new Date ().getFullYear();
let anoNasc = 1989;
let completedAge = anoAtual-anoNasc;
const birthCity = 'São Bernardo do Campo';

document.getElementById("a1").innerHTML ='<h3>Resposta:</h3>'
document.getElementById("a1").innerHTML += '<p> Olá Mundo. Me chamo '+myName+'. Estou escrevendo esta frase em '+anoAtual+'. Portanto, no ano indicado estarei com '+completedAge+' anos completados. Eu nasci em '+birthCity+', no ano de '+ anoNasc+'.</p>';


// -----------------------------------------------------------------------

// 2. JAVASCRIPT -TIPOS PRIMITIVOS, TIPAGEM DINÂMICA E OPERAÇÕES ARITMÉTICAS

let movie = 'Avengers'; //string value;
document.getElementById("a2").innerHTML ='<h3>Resposta:</h3>';
document.getElementById("a2").innerHTML +=
'<p>'+typeof movie+'</p>';

let score = 10.89; //number value;
document.getElementById("a3").innerHTML ='<h3>Resposta:</h3>';
document.getElementById("a3").innerHTML +=
'<p>'+typeof score+'</p>';

let isValid = true; //boolean value;
document.getElementById("a4").innerHTML ='<h3>Resposta:</h3>';
document.getElementById("a4").innerHTML +=
'<p>'+typeof isValid+'</p>';

let nome; //undefined;
document.getElementById("a5").innerHTML ='<h3>Resposta:</h3>';
document.getElementById("a5").innerHTML +=
'<p>'+typeof nome+'</p>';

let color = null; // redefinição;
document.getElementById("a6").innerHTML ='<h3>Resposta:</h3>';
document.getElementById("a6").innerHTML +=
'<p>'+typeof color+'</p>';

let number = 10;
document.getElementById("a7").innerHTML ='<h3>Resposta:</h3>';
document.getElementById("a7").innerHTML +='<p> 1.'+(number + number)+'</p>';
document.getElementById("a7").innerHTML +='<p> 2.'+(number - number)+'</p>';
document.getElementById("a7").innerHTML +='<p> 3.'+(number * number)+'</p>';
document.getElementById("a7").innerHTML +='<p> 4.'+(number / number)+'</p>';
document.getElementById("a7").innerHTML +='<p> 5.'+(number ** number)+'</p>';
document.getElementById("a7").innerHTML +='<p> 6.'+(number % number)+'</p>';
document.getElementById("a7").innerHTML +='<p> 7.'+(number+1)+'</p>';
document.getElementById("a7").innerHTML +='<p> 8.'+(number-1)+'</p>';

let patientId = '50';
let isEnrolled = true;
const patientInfo = {
  firstName: 'Ana',
  lastName: 'Santos',
};
const patientEmail = 'ana@email.com';

document.getElementById("a8").innerHTML ='<h3>Resposta:</h3>';
document.getElementById("a8").innerHTML +='<p> 1. '+typeof patientId+'</p>';
document.getElementById("a8").innerHTML +='<p> 2. '+ typeof isEnrolled+'</p>';
document.getElementById("a8").innerHTML +='<p> 3. '+ typeof patientInfo+'</p>';
document.getElementById("a8").innerHTML +='<p> 4. '+ typeof patientEmail+'</p>';
document.getElementById("a8").innerHTML +='<p> 5. '+ typeof patientAge+'</p>';

const base = 5;
const height = 8;
const area = base * height;
const perimeter = (base * 2) + (height * 2);

document.getElementById("a9").innerHTML ='<h3>Resposta:</h3>';
document.getElementById("a9").innerHTML += '<p> Este retângulo tem base '+base+' e altura '+height+'. Portanto, a sua área é '+area+' e seu perimetro é '+perimeter+'.</p>'

function horario (trybe) {
    if (trybe >= 14 && trybe < 14.40) {
    return 'Esquenta';
    
    }
    else if (trybe >= 16.30 && trybe < 17.50) {
        return 'Aula ao Vivo';
        
    }
    else if (trybe >= 19.40 && trybe < 20) {
        return 'Fechamento';
        
    }
    else {
        return 'Fora dos momentos síncronos'; 
    }

}
document.getElementById("a10").innerHTML = '<h3>Resposta:</h3>';
document.getElementById("verCondicao").onclick = function () {
document.getElementById("a10").innerHTML = '<h3>Resposta:</h3>';
let trybe = parseFloat(document.getElementById("trybe").value);             
let resposta = horario(trybe);
document.getElementById("a10").innerHTML+= '<p>'+resposta+'</p>';
}

function candidate(note) {
    if(note < 0 && note > 100) {
        return 'A nota inserida não é válida'
    }

    else if (note >=80 && note <= 100) {
        return 'Parabéns! Você foi aprovado(a)!'
    
    }
    else if (note >= 60 && note < 80) {
        return 'Você está na nossa lista de espera.'
    }
    else {
        return 'Você foi reprovada(o)!'
    }
}
document.getElementById("a11").innerHTML = '<h3>Resposta:</h3>';
document.getElementById("verCondicao2").onclick = function () {
document.getElementById("a11").innerHTML = '<h3>Resposta:</h3>';
let note = parseFloat(document.getElementById("nota").value);             
let resposta2 = candidate(note);
document.getElementById("a11").innerHTML+= '<p>'+resposta2+'</p>';
}







