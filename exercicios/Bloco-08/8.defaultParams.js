// Para evitar o 'undefined'

const saudacoes = (saudacao = 'pessoa') => {
    console.log(`Olá, ${saudacao}`);
};

saudacoes();

