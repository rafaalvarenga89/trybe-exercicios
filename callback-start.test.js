const {describe, expect, it} = require ('@jest/globals');

const {
    createPresentationMessage,
    hackTheDb,
    restartDb,

} = require('./callback-start');

describe(`A função createPresentationMessage`, () => {

    beforeEach(() => {
        restartDb();
    })


it(`retorna erro quando falha`, (done) => {

    hackTheDb();

    const expectedError = new Error ('Explodiu');

    function callbackPresentation(err, result) {
        try {
            expect(err).toEqual(expectedError);
            done();
        } catch (err) {
            done(err)
        }
    }
    createPresentationMessage((person) => {
        return person.name = 'Xuxa'
    }, callbackPresentation)
});


it(`Retorna corretamente a string`, (done) => {
    const expectedString = 
    `Oi galerinha. Meu nome é Xuxa e minha comida favorita é algodão-doce.`

    function callbackPresentation(err, result) {
        try {
            expect(result).toBe(expectedString);
            done();
        } catch (err) {
            done(err)
        }
    }
    createPresentationMessage((person) => {
        return person.name = 'Xuxa'
    }, callbackPresentation)
});

   
})
