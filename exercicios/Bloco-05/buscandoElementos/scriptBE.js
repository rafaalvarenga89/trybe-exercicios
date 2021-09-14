let ingredientItens = [

"500g de feijão carioquinha cozido",
"200g de toucinho",
"1 concha de óleo",
"1 cebola média picada",
"4 dentes de alho",
"5 ovos",
"1 colher de sopa de sal com alho",
"Cheiro verde à gosto",
"200g de farinha de mandioca",

];

let ingredientList = document.querySelector(".ingredient-list");

for (let index = 0; index < ingredientItens.length; index += 1) {
    let ingredient = ingredientItens[index];

    let ingredientListItem = document.createElement('li');
    ingredientListItem.innerText = ingredient;
    ingredientListItem.className = 'ingredients-list-item';

    ingredientList.appendChild(ingredientListItem);

}


let ingredientListItens = document.querySelectorAll('.ingredients-list-item');
console.log(ingredientListItens);

for (index = 0; index < ingredientListItens.length; index += 1) {
    let element = ingredientListItens[index];

    if(element.innerText.includes('toucinho')) {
        ingredientList.removeChild(element);
    }
}


let recipePreparationSteps = [

"Coloque o óleo em uma panela e doure a cebola, acrescente o bacon e frite bem.",

"Adicione o alho, sal e os ovos, misturando com cuidado para que não se despedacem muito.",

"Retoque o feijão, baixe o fogo, misture a farinha aos poucos e o cheiro verde.",

];

let recipePreparation = document.querySelector(".recipe-preparation-section");

for (let index2 = 0; index2 < recipePreparationSteps.length; index2 += 1) {
    let steps = recipePreparationSteps[index2];
    let recipeSteps = document.createElement('li');
    recipeSteps.innerText = steps;
    recipePreparation.appendChild(recipeSteps);
}


