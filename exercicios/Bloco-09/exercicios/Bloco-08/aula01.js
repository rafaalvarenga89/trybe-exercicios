const person = {
    name: 'Jackson',
    lastName: 'Pires',

    greet: function(nameOfTheOtherPerson, callback) {

        if(callback === 'undefined') {
            return 'Olá'
        }
        const greetingMessage = callback(nameOfTheOtherPerson);
        return greetingMessage
    }
};



const loveGreeting = (name) => {
    return `Olá ${name}, minha pessoa queridíssima!!!`;
}

const badMoodGreeting = (name) => {
    return `Oi ${name}`;
}

function formalGreeting(name) {
    return `Olá ${name}, como você está?`
}

console.log(person.greet('Flavinho',loveGreeting));
console.log(person.greet('Flavinho',badMoodGreeting));
console.log(person.greet('Gisele', formalGreeting));