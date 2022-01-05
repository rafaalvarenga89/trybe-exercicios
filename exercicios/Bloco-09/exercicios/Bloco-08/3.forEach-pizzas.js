const pizzas = [
    {flavor: 'Frango com catupiry', price: 12.20 },
    {flavor: 'Marguerita', price: 13.50 },
    {flavor: 'Gratinada', price: 15.32 },
    {flavor: 'Quatro Queijos', price: 13.63 },
]

pizzas.forEach((pizza) => {
    console.log(`A pizza ${pizza.flavor} custa ${pizza.price}`);
});