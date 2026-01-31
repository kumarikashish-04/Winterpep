let arr=[2,3,4,5,6];
const evenSquares = arr.map(num => num % 2 === 0 ? num * num : num);

console.log(evenSquares);