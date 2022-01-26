const points = ['1.0', '2.2', '-6.6'];
const otherPoints = ['0.1', '3.5', '-99.6'];

printPointCoordenates = (x,y,z) => `Points coordinates are: x = ${x}, y = ${y}, z = ${z}`;

console.log(printPointCoordenates(...points));
console.log(printPointCoordenates(...otherPoints));

