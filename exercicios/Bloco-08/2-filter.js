const cities = [
    {state: 'AM', name: 'Manaus', region: 'N' },
    {state: 'PA', name: 'Belém', region: 'N' },
    {state: 'TO', name: 'Porto Nacional', region: 'N' },
    {state: 'MG', name: 'Nepomuceno', region: 'SE' },
    {state: 'BA', name: 'Cachoeira', region: 'NE' },
    {state: 'PR', name: 'Curitiba', region: 'S' },
    {state: 'SP', name: 'Hortolândia', region: 'SE' },
    {state: 'RN', name: 'Touros', region: 'NE' },
    {state: 'CE', name: 'Jericoacoara', region: 'NE' },
    {state: 'TO', name: 'Três Pedras', region: 'N' },
    {state: 'MG', name: 'João Pinheiro', region: 'SE' },

];

// 2- Encontre todas as cidades do estado do Tocantins(TO)

console.log(`As cidades do estado de Tocantins são:`);


citiesTO = [];
for(let i = 0; i < cities.length; i += 1) {
    if(cities[i].state === 'TO') {
        citiesTO.push(cities[i]);
    }
}

console.log(citiesTO);

const citiesTO2 = cities.filter((city) => {
    return city.state === 'TO'
})

console.log(citiesTO2);