const fun1 =(fun2) => {
    setTimeout(() => {
    console.log('1- Big Mac');
    fun2();

}, Math.random() * 2000)
}

const fun2 =() => {
    setTimeout(() => {
    console.log('2- Big Tasty');

}, Math.random() * 2000)
}

console.log('Lanches: ');

fun1(fun2);




console.log('FIM');