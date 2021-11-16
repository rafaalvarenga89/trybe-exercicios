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

// 3. Encontre todas as cidades que comecem com a letra 'C'

citiesC = [];

for(let i = 0; i < cities.length; i += 1) {
    if(cities[i].name[0] === 'C') {
        citiesC.push(cities[i]) 
    }
}

console.log(citiesC);

const citiesC2 =cities.filter((city) => {
    return city.name[0] ==='C'
})

console.log(citiesC2);

const citiesC3 =cities.filter((city) => {
    return city.name.startsWith('C');
})

console.log(citiesC3);

const citiesEndsO =cities.filter((city) => {
    return city.name.endsWith('o');
})

console.log(citiesEndsO);