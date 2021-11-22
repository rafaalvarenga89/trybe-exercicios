const SJC = {
    nome: 'São José dos Campos',
    estado: 'São Paulo',
    aniversário: '31/07',
    região: 'Vale do Paraíba',
    vizinhos: ['Jacareí', 'Taubaté', 'Caçapava'],
}

console.log(`A cidade de ${SJC.nome} fica no estado de ${SJC.estado}, faz aniversário no dia ${SJC.aniversário} fica na região do ${SJC.região} e tem como cidades próximas: ${SJC.vizinhos.join(',')}`)

const nome = SJC.nome;
const estado = SJC.estado;
const aniversário = SJC.aniversário;
const região = SJC.região;
const vizinhos = SJC.vizinhos;

console.log(`A cidade de ${nome} fica no estado de ${estado}, faz aniversário no dia ${aniversário} fica na região do ${região} e tem como cidades próximas: ${vizinhos.join(',')}`)

const SBC = {
    nome2: 'São Bernardo do Campo',
    estado2: 'São Paulo',
    aniversário2: '20/08',
    região2: 'ABC Paulista',
    vizinhos2: ['Santo André', 'São Caetando do Sul', 'Diadema'],
}

const {nome2, estado2, aniversário2, região2, vizinhos2} = SBC;

console.log(`A cidade de ${nome2} fica no estado de ${estado2}, faz aniversário no dia ${aniversário2} fica na região do ${região2} e tem como cidades próximas: ${vizinhos2.join(',')}`)