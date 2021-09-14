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




let pai2 = document.getElementById('pai');

for(let index = pai2.childNodes.length-1; index >=0; index -=1) {
    let currentChildren = pai2.childNodes[index];
    if(currentChildren.id !== 'elementoOndeVoceEsta') {
        currentChildren.remove(pai2);
    }
}

let pai3 = document.getElementById('elementoOndeVoceEsta');

for (let index2 = pai3.childNodes.length-1; index2 >=0; index2 -=1 ) {
    let currentChildren2 = pai3.childNodes[index2];
    if(currentChildren2.id !== 'primeiroFilhoDoFilho') {
        currentChildren2.remove(pai3);
    }
}


console.log(pai2.childNodes.length);