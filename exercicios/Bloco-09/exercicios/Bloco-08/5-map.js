const states = [
    {short: 'AM', name: 'Amazonas'},
    {short: 'PA', name: 'Pará'},
    {short: 'TO', name: 'Tocantins'},
    {short: 'MG', name: 'Minas Gerais'},
    {short: 'BA', name: 'Bahia'},
    {short: 'PR', name: 'Paraná'},
    {short: 'SP', name: 'São Paulo'},
    {short: 'RN', name: 'Rio Grande do Norte'},
    {short: 'CE', name: 'Ceará'},
];

const regions = [
    {short:'N', name: 'Região Norte'},
    {short:'NE', name: 'Região Nordeste'},
    {short:'CW', name: 'Região Centro-Oeste'},
    {short:'SE', name: 'Região Sudeste'},
    {short:'S', name: 'Região Sul'},
];

const cities = [
    {state: 'AM', name: 'Manaus', region: 'N'},
    {state: 'PA', name: 'Belém', region: 'N'},
    {state: 'TO', name: 'Porto Nacional', region: 'N'},
    {state: 'MG', name: 'Lavras', region: 'SE'},
    {state: 'BA', name: 'Feira de Santana', region: 'NE'},
    {state: 'PR', name: 'Cascável', region: 'S'},
    {state: 'SP', name: 'Presidente Prudente', region: 'SE'},
    {state: 'RN', name: 'Touros', region: 'NE'},
    {state: 'CE', name: 'Jericoacoara', region: 'NE'},

];

// Transforme (Mapeie) o array de objetos cities em um array de strings com o seguinte formato
// b) 'A cidade de ${nomedacidade} fica no estado de ${nomedoestado}'

const citiesAndStates = cities.map((city) => {
    const foundState = states.find((state) => {
        return state.short === city.state;
    })
    return `A cidade de ${city.name} fica no estado de ${foundState.name}`
});

console.log(citiesAndStates);