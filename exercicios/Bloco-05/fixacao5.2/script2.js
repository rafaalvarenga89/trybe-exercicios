let colorPai = document.querySelector('#elementoOndeVoceEsta').parentElement;
colorPai.style.color = 'orange';

let text = document.getElementById('primeiroFilhoDoFilho');
text.innerText = 'Não existe trabalho ruim. O ruim é ter que trabalhar'


let pai = document.getElementById('pai');

let quintoFilho = document.createElement('section');
quintoFilho.id = 'quintoFilho';
pai.appendChild(quintoFilho);


let filho = document.getElementById('elementoOndeVoceEsta');
let terceiroFilhoDoFilho = document.createElement('section');
terceiroFilhoDoFilho.id = 'terceiroFilhoDoFilho';
filho.appendChild(terceiroFilhoDoFilho);

let filhoDoFilho = document.getElementById('primeiroFilhoDoFilho');
let primeiroFilhoDoFilhoDoFilho = document.createElement('section');
primeiroFilhoDoFilhoDoFilho.id = 'primeiroFilhoDoFilhoDoFilho';
filhoDoFilho.appendChild(primeiroFilhoDoFilhoDoFilho);

let filhoTres = document.getElementById('primeiroFilhoDoFilhoDoFilho').parentNode.parentNode.parentNode.children[2];

console.log(filhoTres);