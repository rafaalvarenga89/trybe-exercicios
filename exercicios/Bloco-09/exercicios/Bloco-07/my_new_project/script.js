function sum (a,b) {
    return a+b;
}

const summationOf = (value) => {
    if(value === '') {
        throw Error('summationOf deve receber um valor');
    }
    const number = Number(value);

    if(Number.isNaN(number)){
        throw Error('summationOf deve receber apenas números')
    }

    let summation = 0;
    for(let i=0; i <= number; i+=1) {
        summation += i;
    }
    return summation
};

module.exports = {sum, summationOf};