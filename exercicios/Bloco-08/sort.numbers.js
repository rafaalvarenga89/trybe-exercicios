const numbers = [8,5,9,3,1,7,4,2,6,15];

const comparar = (a, b) => {
    if(a > b){
        return 1;
    } else if (a < b) {
        return -1;
    } else {
        return 0;
    }
}

const comparar2 = (a, b) => {
    return a-b;
}

const comparar3 = (a, b) => {
    return b-a;
}

numbers.sort(comparar3);



console.log(numbers);
