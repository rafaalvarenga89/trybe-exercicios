const pizzas = [
    {flavor: 'Frango com catupiry', price: 12.20 },
    {flavor: 'Marguerita', price: 13.50 },
    {flavor: 'Gratinada', price: 15.32 },
    {flavor: 'Quatro Queijos', price: 13.63 },
]

const priceLessThan13 = (pizzasArr) => {
    let result = false;

    for (let i=0; i< pizzasArr.length; i += 1) {
        if (pizzasArr[i].price > 13 ) {
            result = true;
        };
    }
    return result
}
console.log((`Existe alguma pizza com valor menor que 13? R: ${priceLessThan13(pizzas)}`));


const priceLessThan14 = pizzas.some((pizza) => {
    return pizza.price < 14;
})

console.log((`Existe alguma pizza com valor menor que 14? R: ${priceLessThan14}`));