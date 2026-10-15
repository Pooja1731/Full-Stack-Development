/* 
//Object creation , access , update ,delete

const employee={
    name: "Arun",
    salary: 30000
};

console.log(employee.name);
console.log(employee["salary"]);

employee.salary=35000;
console.log(employee.salary);

employee.city="chennai";
delete employee.city;
console.log(employee);

//Nested Object

const student={
    name:"Priya",
    address:{
        city: "chennai",
        state: "TamilNadu"
    }
};

console.log(student.name);
console.log(student.address.city);
console.log(student.address.state);


//Object Destructuring

const student={
    name: "Priya",
    age: 21,
    course: "React"
};

const {name ,age, course}=student;

console.log(name);
console.log(age);
console.log(course);


//Destructuring Property name rename and default

const user={
    name:"Priya"
};
const {
    name:studentName,
    city="Chennai"
}=user;
console.log(studentName);
console.log(city);

//spread with object

const orginal={
    name:"Priya",
    age: 21
};

const updated={
    ...orginal,
    age:22,
    city: "chennai"
};

console.log(orginal);
console.log(updated);

//spread with combined object
const personal={
    name:"Arun",
    age:21
};

const profession={
    role:"Developer",
    company:"ABC Tech"
};

const profile={
    ...personal,
    ...profession
};

console.log(profile);


//Nullish Coalesing

const username=null;
const age=0;
const city=undefined;

console.log(username ?? "Guest");
console.log(age ?? 18);
console.log(city ?? "Chaennai");

//optional chaining

const user={
    name:"anu",
    address:{city:"chennai"}
};
console.log(user.phone);
console.log(user.address.city);
console.log(user.name);

// || and ??

console.log(0 || 100);
console.log(0 ?? 100);

console.log(false || true);
console.log(false ?? true);

console.log("" || "Guest");
console.log("" ?? "Guest");

*/

