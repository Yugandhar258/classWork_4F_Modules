const student = require('./calc');  

let sum = student.addition(10, 5);  

let diff = student.difference(10, 5); 

let mul = student.multiple(2, 5);

let div = student.division(100, 2);

console.log(`Sum: ${sum}`);     

console.log(`Difference: ${diff}`);

console.log(`Multiplication: ${mul}`);   
  
console.log(`division: ${div}`);
