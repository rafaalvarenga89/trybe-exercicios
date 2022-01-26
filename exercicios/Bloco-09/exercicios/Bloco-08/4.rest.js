const sumAll = (values) => {
    let sum = 0;

    values.forEach((value) => {
        sum += value;
    })

    return sum;
}

console.log(sumAll([1,2]));

const sumAllParams = (...params) => {
    let sum = 0;

    params.forEach((value) => {
        sum += value;
    });

    return sum;
}

console.log(sumAllParams(1,3));


const sumAllParams2 =(...params) => {
    return params.reduce ((accumulator, currentValue) => {
    return accumulator + currentValue;
})

}

console.log(sumAllParams2(1,3));


const sumAllParams3 =(...params) => params.reduce ((accumulator, currentValue) => accumulator + currentValue ) 

console.log(sumAllParams3(1,3));