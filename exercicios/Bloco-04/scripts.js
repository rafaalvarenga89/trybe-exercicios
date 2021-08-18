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
let isValid = true; //boolean value;
let name; //undefined
let color = null; // redefinição
