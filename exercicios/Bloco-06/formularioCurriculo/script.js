function state() {
    let statesOfBrazil =[
        {'value': 'AP', 'innerHTML': 'Amapá'},
        {'value': 'AM', 'innerHTML': 'Amazonas'},
        {'value': 'RS', 'innerHTML': 'Rio Grande do Sul'},
        {'value': 'SC', 'innerHTML': 'Santa Catarina'},
        {'value': 'PR', 'innerHTML': 'Paraná'},
        {'value': 'SP', 'innerHTML': 'São Paulo'},
        {'value': 'RJ', 'innerHTML': 'Rio de Janeiro'},
        {'value': 'MG', 'innerHTML': 'Minas Gerais'},
        {'value': 'ES', 'innerHTML': 'Espírito Santo'},
        {'value': 'MS', 'innerHTML': 'Mato Grosso do Sul'},
        {'value': 'MT', 'innerHTML': 'Mato Grosso'},
        {'value': 'GO', 'innerHTML': 'Goiás'},
        {'value': 'DF', 'innerHTML': 'Distrito Federal'},
        {'value': 'RO', 'innerHTML': 'Rondônia'},
        {'value': 'RR', 'innerHTML': 'Roraima'},
        {'value': 'PA', 'innerHTML': 'Pará'},
        {'value': 'TO', 'innerHTML': 'Tocantins'},
        {'value': 'BA', 'innerHTML': 'Bahia'},
        {'value': 'RN', 'innerHTML': 'Rio Grande do Norte'},
        {'value': 'AL', 'innerHTML': 'Alagoas'},
        {'value': 'PE', 'innerHTML': 'Pernambuco'},
        {'value': 'CE', 'innerHTML': 'Ceará'},
        {'value': 'PI', 'innerHTML': 'Piauí'},
        {'value': 'MA', 'innerHTML': 'Maranhão'},
        {'value': 'SE', 'innerHTML': 'Sergipe'},
        {'value': 'PB', 'innerHTML': 'Paraíba'},
        {'value': 'AC', 'innerHTML': 'Acre'},

    ]

    
    let stateSelect = document.querySelector('#input-estado');

    for(let i = 0; i < statesOfBrazil.length; i+=1) {
        let optionState = document.createElement('option');
        optionState.value = statesOfBrazil[i]['value'];
        optionState.innerHTML = statesOfBrazil[i]['innerHTML'];
        if(i === 0) {
            optionState.selected = 'true';
        

        }

        stateSelect.appendChild(optionState);
    }


}

let div =document.querySelector('#divAnswerInput');
function validateName() {
    let name = document.querySelector('[name=nome]');
    if(name.value.length > 40 || name.value.length === 0) {
        alert('Nome Inválido')
    } else{
        let resultado = document.createElement('p');
        resultado.innerHTML += `Nome: ${name.value}`;
        div.appendChild(resultado);
        name.value = '';
    }
}

function validateEmail() {
    let email = document.querySelector('[name=email-input]');
    if(email.value.length > 50 || email.value.length === 0) {
        alert('E-mail Inválido')
    }else {
        let resultado = document.createElement('p');
        resultado.innerHTML += `E-mail: ${email.value}`;
        div.appendChild(resultado);
        email.value = '';

    }
}

function validateCPF() {
    let cpf = document.querySelector('[name=cpf-input]');
    if(cpf.value.length !== 11) {
        alert('CPF Inválido')
    } else {
        let resultado = document.createElement('p');
        resultado.innerHTML += `CPF: ${cpf.value}`;
        div.appendChild(resultado);
        cpf.value = '';
    }
}

function validateAddress(){
    let address = document.querySelector('[name=address-input');
    if(address.value.length > 200 || address.value.length === 0){
        alert('Endereço Inválido');
    } else {
        let resultado = document.createElement('p');
        resultado.innerHTML += `Endereço: ${address.value}`;
        div.appendChild(resultado);
        address.value = '';
    }
}

function validateCity(){
    let city = document.querySelector('[name=city-input');
    if(city.value.length > 28 || city.value.length === 0){
        alert('Cidade Inválida');
    } else {
        let resultado = document.createElement('p');
        resultado.innerHTML += `Cidade: ${city.value}`;
        div.appendChild(resultado);
        city.value = '';
    }
}

function validateAbstract(){
    let abstract = document.querySelector('[name=abstract');
    if(abstract.value.length === 0){
        alert('Resumo do currículo: Campo Vazio');
    }
    else if(abstract.value.length > 1000) {
        alert('Resumo do currículo: Tamanho do texto excedente')
    } else {
        let resultado = document.createElement('p');
        resultado.innerHTML += `Cargo: ${abstract.value}`;
        div.appendChild(resultado);
        abstract.value = '';
    }
}

function validateOffice(){
    let office = document.querySelector('[name=office-input');
    if(office.value.length > 40 || office.value.length === 0){
        alert('Cargo Inválido');
    } else {
        let resultado = document.createElement('p');
        resultado.innerHTML += `Resumo do currículo: ${office.value}`;
        div.appendChild(resultado);
        office.value = '';
    }
}

function validateOfficeDiscription(){
    let officeDiscription = document.querySelector('[name=office-discription]');
    if(officeDiscription.value.length === 0){
        alert('Descrição do Cargo: Campo Vazio');
    }
    else if(officeDiscription.value.length > 500) {
        alert('Descrição do Cargo: Tamanho do texto excedente')
    } else {
        let resultado = document.createElement('p');
        resultado.innerHTML += `Descrição do Cargo: ${officeDiscription.value}`;
        div.appendChild(resultado);
        officeDiscription.value = '';
    }
}

function validateData() {
    let data = document.querySelector('[name=date-input]');
    if(data.value === ''){
        alert('Data Inválida');
    } else {
        let resultado = document.createElement('p');
        resultado.innerHTML += `Data: ${data.value}`;
        div.appendChild(resultado);
        data.value = '';
    }
}

function clearFields() {
    let inputs = document.querySelectorAll('input');
    for(let i=0; i<inputs.length; i+=1) {
        let userInput = inputs[i];
        userInput.value = '';
    }
    let textAreas = document.querySelectorAll('textarea');
    for(let i=0; i<textAreas.length; i+=1) {
        let userTextAreas = textAreas[i];
        userTextAreas.value = '';

    }
    let div = document.querySelectorAll('#divAnswerInput');
    for(let i=0;i<div.length; i+=1) {
        div[i].innerText = '';

    }
}

window.onload = function() {

state();

let button =document.querySelector('.submit-button');
button.addEventListener('click', handleSubmit);

let clearButton = document.querySelector('.clear-button');
clearButton.addEventListener('click', clearFields);

function handleSubmit(event) {
    event.preventDefault();

    validateName();
    validateEmail();
    validateCPF();
    validateAddress();
    validateCity();
    validateAbstract();
    validateOffice();
    validateOfficeDiscription();
    validateData();
}
}