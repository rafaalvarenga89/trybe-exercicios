const users = [
    {firstName: 'Homer', lastName: 'Simpson', isDrive: true},
    {firstName: 'Marge', lastName: 'Simpson', isDrive: true},
    {firstName: 'Bart', lastName: 'Simpson', isDrive: true},
    {firstName: 'Lisa', lastName: 'Simpson', isDrive: false},
    {firstName: 'Maggie', lastName: 'Simpson', isDrive: false},
]

const everyoneCanDrive = users.every((user) => {
    return user.isDrive === true;
});

console.log(`Todos os usuários podem dirigir? R:${everyoneCanDrive}`)