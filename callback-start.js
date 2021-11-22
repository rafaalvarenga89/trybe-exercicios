const db = [
    {id: 123, nome: 'Xuxa', favoriteFood: 'algodão-doce', greeting: 'Oi galerinha'},
    {id: 321, nome: 'João Corça', favoriteFood: 'churrasco', greeting: 'Salve!'},
    {id: 123, nome: "Faustina O'Missing", favoriteFood: 'null', greeting: 'Oi'},
]

let shouldFail = false;

function hackTheDb() {
    shouldFail = true;
}

function restartDb() {
    shouldFail = false;
}


function findOne(criteriaSearchFunction, callback) {
    setTimeout(() => {
        if (shouldFail) {
            return callback(new Error('Explodiu'), null);
        }

        const queryResult = db.find(criteriaSearchFunction);

        callback(null, queryResult);
    }, 300);
}

function createPresentationMessage(criteriaFunction, callbackPresentation) {
    findOne(criteriaFunction, (err, result) => {
        if (err) {
            return callbackPresentation(err, null);
        }

        const {greeting, name, favoriteFood} = result;
        const greetingString = `${greeting}. Meu nome é ${name} e minha comida favorita é ${favoriteFood}.`

        callbackPresentation(null, greetingString);

    });
}

module.exports = {
    createPresentationMessage,
    hackTheDb,
    restartDb,
}