/*
const students=["Priya" , "Arun" ,"Dhivya" ,"Rahul" , "Sneha"];

//  Print the first and last student names
console.log(students[0]);
console.log(students[students.length - 1]);

// Add "Karthik" to the end of the array
students.push("Karthik");
console.log(students);

// Remove the last student
students.pop();
console.log(students);

//Slice Create a new array containing Arun and Divya
const selectedStudents = students.slice(1, 3);
console.log(selectedStudents);

// Splice: Remove "Divya" from the original array
students.splice(2, 1);
console.log(students);

//Includes: Check whether "Priya" exists
console.log(students.includes("Priya")); 



//Filter , map ,  reduce

const products = [
    { name: "Laptop", price: 50000 },
    { name: "Mouse", price: 500 },
    { name: "Keyboard", price: 1500 },
    { name: "Monitor", price: 12000 },
    { name: "Headphones", price: 2000 }
];

const expensiveProducts = products.filter(product => product.price > 1000);
console.log(expensiveProducts);

const productNames = products.map(product => product.name);
console.log(productNames);

const totalPrice = products.reduce((total, product) => total + product.price, 0);
console.log(totalPrice);

*/

//sorting function

let strong=[40,10,5,20,30];
let result=strong.sort((a,b)=>a-b);
console.log(result);

//reduce method

let numbers=[10,20,30,40];
let res=numbers.reduce((total,num)=>{return total + num},0);
console.log(res);

//slice and splice

let number=[10,20,30,40,50];
let c=number.slice(1,3);
let d=number.splice(2,1);
console.log(c);
console.log(d);

//some 

let a=[10,20,30,40,50];
let b=a.some((n)=>{return n<30});
console.log(b);