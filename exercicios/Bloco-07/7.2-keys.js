const customer1 = {
    firstName : 'Roberto',
    age: 22,
    job: 'Teacher',

};



customer1.lastName = 'Faria';
console.log(customer1);

const customer2 = {};
customer2['firstName'] = 'Maria';
customer2['age'] = '23';
customer2['job'] = 'Medic';
customer2['lastName'] = 'Silva'; 

console.log(customer2);

const customer3 = {
    firstName : 'Roberto',
    age: 22,
    job: 'Teacher',
}

let newKey = 'lastName';
const lastName = 'Ferreira';
customer3[newKey] = lastName;
newKey = 'fullName';
const fullName = `${customer3.firstName} ${customer3.lastName}`;
customer3[newKey] = fullName;



console.log(customer3);


