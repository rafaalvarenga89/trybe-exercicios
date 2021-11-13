const users = [
    {firstName: 'Homer', lastName: 'Simpson', isDrive: true},
    {firstName: 'Marge', lastName: 'Simpson', isDrive: true},
    {firstName: 'Bart', lastName: 'Simpson', isDrive: true},
    {firstName: 'Lisa', lastName: 'Simpson', isDrive: false},
    {firstName: 'Maggie', lastName: 'Simpson', isDrive: false},
]

const userNotDrive = users.find((user) => {
    return user.isDrive === false;
});

console.log(userNotDrive);
console.log(`${userNotDrive.firstName} ${userNotDrive.lastName} não pode dirigir!`)