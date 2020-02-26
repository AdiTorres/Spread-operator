let fruits = ['apple', 'orange', 'banana'];
fruits.push('lemon'); // inmutable 
fruits = ['peach', ...fruits, 'pineabble'];
console.log(fruits);

let user = {};
user = {
    name: '',
    age: 0,
    curp: ''
};

user = {
    ...user,
    address: '',
    rfc: ''
};

const myFunction = (...myArray) => {
console.log(myArray);
};
myFunction(1,2,3,4);


