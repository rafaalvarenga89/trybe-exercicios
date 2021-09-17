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


// Adicione uma lista não ordenada com os valores de 1 a 10 por extenso, ou seja, um , dois , três , ... como valores da lista. Essa lista deve ser filha do section criado no passo 6;


sectionR = document.querySelector('.right-content');
let ul = document.createElement('ul');
sectionR.appendChild(ul);

for(index = 0; index < ulLi.length; index += 1 ) {
    let li = ulLi[index];
    
    li = document.createElement('li');
    li.innerText = ulLi[index];

    
    ul.appendChild(li);
}


// Adicione 3 tags h3 , todas sendo filhas do main criado no passo 2.

main = document.querySelector('main');
for (index = 0; index < 3; index += 1) {
    let h3 = index;
    h3 = document.createElement('h3');
    main.appendChild(h3);
}

// Agora que você criou muita coisa, vamos fazer algumas alterações e remoções:

// Adicione a classe title na tag h1 criada;

h1 = document.querySelector('h1');
let title1 = document.createElement('title');
h1.appendChild(title1);

// Adicione a classe description nas 3 tags h3 criadas;

let h31 = document.querySelector('main').children[3];
h31.className = 'descripition';

// Remova a section criado no passo 5 (aquele que possui a classe left-content ). Utilize a função .removeChild() ;

main = document.querySelector('main');
main.removeChild(sectionL);

// Centralize a section criado no passo 6 (aquele que possui a classe right-content ). Dica: para centralizar, basta configurar o margin-right: auto da section ;

sectionR = document.getElementsByClassName("right-content");
sectionR[0].style.marginRight = 'auto';
sectionR[0].style.width = '50%'

// Troque a cor de fundo do elemento pai da section criada no passo 3 (aquela que possui a classe center-content ) para a cor verde;

sectionC = document.querySelector('.center-content');
sectionC.style.backgroundColor = 'green';

// Remova os dois últimos elementos ( nove e dez ) da lista criada no passo 8.

sectionR =document.querySelector('.right-content');
sectionR.removeChild(ul);

sectionR = document.querySelector('.right-content');
let ul2 = document.createElement('ul');
sectionR.appendChild(ul2);
let remove = ulLi.splice(0, 8);
for(index = 0; index < remove.length; index += 1){
    let removeLi = remove[index];
    removeLi = document.createElement('li');
    removeLi.innerText = remove[index];
    ul2.appendChild(removeLi);
    
}


