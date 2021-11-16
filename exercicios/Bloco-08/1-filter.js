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

// 1. Encontre todas as cidades que ficam na Região Nordeste;

console.log(`As cidades que ficam na Região Nordeste são:`)

let citiesNE = [];

for(let i = 0; i < cities.length; i+= 1) {
    if(cities[i].region === 'NE') {
        citiesNE.push(cities[i]);
    }
}

console.log(citiesNE);


const citiesNE2 = cities.filter((city) => {
    return city.region === 'NE'
})

console.log(citiesNE2);