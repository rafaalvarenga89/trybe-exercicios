// Esta função pega todas as entradas
const handleRates = (rates) => {
    const entriesRates = Object.entries(rates);
    // console.log(entriesRates);

    entriesRates.forEach(moedaValor => {
    renderRate(moedaValor[0], moedaValor[1]);
})

}



const renderRate = (moeda, valor) => {
    // 1.Seleciona o elemento pai no DOM.
    const ul = document.getElementById('currency-list');

    // 2.Criar o elemento, no caso <li>
    const li = document.createElement('li');

    // 3.Adicionar atributos ao elemento criado.
    li.innerHTML = `${moeda}: ${valor}`

    // 4.Adicionar li como filha da ul
    ul.appendChild(li);
}

const handleBase = (base) => {
    // Selecionar um elemento no DOM
    const h2 = document.querySelector('#base');

    // Adiciona o base como innerText
    h2.innerText = `Valores referentes a 1 ${base}`;
}

const clearList = () => {
    // 1.Seleciona o elemento pai no DOM.
    const ul = document.getElementById('currency-list');

    ul.innerHTML = '';
}

const handleInput = () => {
    const button = document.querySelector('#search-button');

    button.addEventListener('click', () => {
        const input = document.querySelector('#currency-input');
        console.log(input.value);

    handleFetchCurrency(input.value);

        // fetchCurrency(input.value)
        //     .then(resposta => {
        //         const { rates, base } = resposta;

        //         clearList();
                
        //         handleRates(rates);
        //         handleBase(base);
        //     });
    });
}


const handleFetchCurrency = async (moeda = 'EUR') => {
    try{
        const resposta = await fetchCurrency(moeda);
        const { rates, base } = resposta;
        clearList();
        handleRates(rates);
        handleBase(base);
    } catch(err) {
        console.log(err);
        alert('Estamos em manuteção')
    }

    // fetchCurrency(moeda)
    // .then(resposta => {
    //     const { rates, base } = resposta;
    //     clearList();
    //     handleRates(rates);
    //     handleBase(base);
    // });
}

window.onload = () => {
    handleFetchCurrency();
    handleInput();
}

// const mockObj = {
//     AED: 23,
//     USD: 6,
//     BRL: 11
// }

// const valores = Object.entries(mockObj);
// console.log(valores)