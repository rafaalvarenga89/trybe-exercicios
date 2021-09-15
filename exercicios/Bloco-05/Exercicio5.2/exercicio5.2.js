// Adicione a tag h1 com o texto Exercício 5.2 - JavaScript DOM como filho da tag body ;

let body = document.querySelector('body');
let h1 = document.createElement('h1');
h1.innerText = 'Exercício 5.2 - JavaScript DOM';
body.appendChild(h1);

// Adicione a tag main com a classe main-content como filho da tag body ;

let main = document.createElement('main');
main.className = 'main-content';
body.appendChild(main);

// Adicione a tag section com a classe center-content como filho da tag main criada no passo 2;

let main1 = document.querySelector('.main-content');
let sectionC = document.createElement('section');
sectionC.className = 'center-content';
main1.appendChild(sectionC);

// Adicione a tag p como filho do section criado no passo 3 e coloque algum texto;

sectionC = document.querySelector('.center-content');
let p1 = document.createElement('p');
p1.innerText = "Palmeiras não tem Mundial. Não tem Copinha, não tem Mundial";
sectionC.appendChild(p1);

// Adicione a tag section com a classe left-content como filho da tag main criada no passo 2;

main1 = document.querySelector('.main-content');
let sectionL = document.createElement('section');
sectionL.className = 'left-content'
main1.appendChild(sectionL);

// Adicione a tag section com a classe right-content como filho da tag main criada no passo 2;

main1 = document.querySelector('.main-content');
let sectionR = document.createElement('section');
sectionR.className = 'right-content'
main1.appendChild(sectionR);

// Adicione uma imagem com src configurado para o valor https://picsum.photos/200 e classe small-image . Esse elemento deve ser filho do section criado no passo 5;


sectionL = document.querySelector('.left-content');
let img1 = document.createElement('img');
img1.src = 'https://picsum.photos/200';
img1.className = 'small-image';
sectionL.appendChild(img1);

let ulLi = [
    'Um',
    'Dois',
    'Tres',
    'Quatro',
    'Cinco',
    'Seis',
    'Sete',
    'Oito',
    'Nove',
    'Dez'
]

sectionR = document.querySelector('.right-content');
for(index = 0; index < ulLi.length; index += 1 ) {
    let li = document.createElement(ulLi[index]);
    sectionR.appendChild(li);
}
