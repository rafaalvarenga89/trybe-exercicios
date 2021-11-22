const SPcities = ['São Bernardo do Campo', 'São José dos Campos', 'Sorocaba'];
const SCcities = ['Itapema', 'Blumenau', 'Chapecó'];

let cities = [];

for (let i =0; i < SPcities.length; i += 1) {
    cities.push(SPcities[i]);
}

for (let i =0; i < SCcities.length; i += 1) {
    cities.push(SCcities[i]);
}

console.log(cities);

const PRcities = ['Maringá', 'Curitiba', 'Londrina']
const RScities = ['Porto Alegre', 'Santa Maria', 'Caxias do Sul']

let cities2 = [];

PRcities.forEach((PRcity) => {
    cities2.push(PRcity);
});

RScities.forEach((RScity) => {
    cities2.push(RScity);
});

console.log(cities2);

const SBCavenues = ['Rua Jurubatuba', 'Av.Francisco Prestes Maia', 'Rua Marechal Deodoro']
const SJCavenues = ['Av. Cassiano Ricardo', 'Av. 9 de Julho', 'Av. João Guilhermino']

const citiesAvenues = [...SBCavenues, ...SJCavenues];

console.log(citiesAvenues);