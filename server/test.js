const arr = [1];

arr.length = 3;

console.log(arr);

arr.push(4);

console.log(arr);

arr.push(3);

console.log(arr);

arr[2] = 3;

console.log(arr);

arr[1] = 6;

console.log(arr);

const sparse = [, 2, , 4];
console.log(sparse.length);
console.log(sparse);
console.log(Object.getOwnPropertyDescriptors(sparse));