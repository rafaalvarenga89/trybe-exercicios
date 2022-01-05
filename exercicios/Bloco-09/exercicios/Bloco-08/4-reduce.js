const players = [
    {fullName: 'Adriano Imperador', email: 'didico@futebol.br'},
    {fullName: 'Ronaldinho Gaúcho', email: 'bruxo@futebol.br'},
    {fullName: 'Ronaldo Fenômeno', email: 'cortedocascao@futebol.br'},
    {fullName: 'Marta Vieira da Silva', email: 'rainhamarta@futebol.br'},
];

const playersObj = players.reduce((previousValue, currentValue) => {
    console.log('previousValue: ',previousValue, 'currentValue:', currentValue);
    previousValue[currentValue.fullName] = currentValue.email;
    return previousValue;
}, {});

console.log(playersObj);
