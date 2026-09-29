// 1 (Logical Operator)

console.log(10 > 5 && 20 > 15);

// 2 

console.log(10 > 15 && 20 > 10);

// 3 

console.log(10 > 20 || 15 > 10);

// 4

console.log(5 > 10 || 20 > 15);

// 5 

console.log(!(10>5));

// 6 

console.log(!(10 < 5));

// 7 

let a = (10 > 5 && 20 > 15 || 5 > 10);
console.log(a);

// 8

let b = (10 > 15 && 20 > 10) || !(10>20)
console.log(a);

// 9  (Ternary Operator)

let age = 29
console.log(age >= 18 ? "Eligible" : "Not Eligible");

// 10

let mark = 20
console.log(mark >= 35 ? "Pass" : "Fail");

// 11

let num = 20
console.log(num > 10 ? "Greater than 10" : "Not Greater than 10");

// 12

let Num1 = 20
console.log(num %2 === 0 ? "Even Number" : "Add Number");

// 13

let salary = 40000
console.log(salary >= 30000 ? "Good Salary" : "Low Salary");

// 14 (Concatenation & Template String)

let firstName = "Victor"
let lastName = "K"
let city = "Thanjavur"

console.log(firstName + " " + lastName + " " + city);

// 15

let Name = "Victor"
let Age = 29
console.log(Name + " " + Age);

// 16

let Product = "Bike"
let Price = "1,80,000"
let Brand = "Yamaha"
console.log("Product:" + " " + Product + ", Price: " + Price + ",Brand: " + Brand);

// 17

let name1 = "Victor"
let qualification = "B.E - CSE" 
let company = "Stackly"

console.log("My Name is: " + name1 + ", I have complete: " + qualification + ", I work at: ");

// 18

let name2 = "Victor"
let age2 = 29
let city2 = "Thanjavur"

console.log(`My name is ${name2}, I am ${age2} years old, and I live in ${city2}.`);

// 19 (Type Casting -- Implicit)

let c = 10 + "20"
console.log(c);
console.log(typeof c);

// 20

let d = 10 + 20
console.log(d)
console.log(typeof d);

// 21

let e = 10 + true
console.log(e);
console.log(typeof e);

// 22

let f = 10 + null
console.log(f);
console.log(typeof f);

// 23

let g = "vic" + true
console.log(g);
console.log(typeof g);

// 24

let h = "Fruits: " + ["apple", "Orange"];
console.log(h);
console.log(typeof h);

// 25

let Num2 = 10 + {};
console.log(Num2);
console.log(typeof Num2);

// 26

let Z = "Vic" + 10
let Y = 10 + null
let X = 10 + true

console.log(Z, typeof Z);
console.log(Y, typeof Z);
console.log(X, typeof X);

// 27 (Type Casting -- Explict)

let A = Number ("100")
console.log(A);

// 28

let A1 = Number ("25")
console.log(A1, typeof A1);

// 29

let A2 = Number (true)
console.log(A2, typeof A2);

// 30

let A3 = Number (false)
console.log(A3, typeof A3);

// 31 

let A4 = Number(" ")
console.log(A4);

// 32

let A5 = Number(null)
console.log(A5);

// 33

let A6 = Number(undefined)
console.log(A6);

// 34

let A7 = Boolean("Hello")
console.log(A7);

// 35

let A8 = Boolean(" ")
console.log(A8);

// 36

console.log(Boolean(0));
console.log(Boolean(1));
console.log(Boolean(-1));

// 37

console.log(Boolean([1,2,3]));

// 38

console.log(Boolean({}));

// 39 (Conditional Satement)

let Age1 = 29
if (Age1 >= 18){
    console.log("Eligible");
    
}

// 40

let Age2 = 29
if (Age2 >= 18) {
    console.log("Eligible for Vote");    
}

else{
    console.log("Not Eligible for Vote");
    
}

// 41

let Mark1 = 10

if (Mark1 >= 35){
    console.log("Pass");
    
}
else{
    console.log("Fail");
    
}

// 42

let time = 13

if (time >= 1 && time <= 6){
    console.log("Early Morning");
    
}
else if (time >= 7 && time <= 12){
    console.log("Morning");
    
}
else if(time >= 13 && time <= 17){
    console.log("Afternoon");
    
}
else if (time >= 18 && time <= 19){
    console.log("Evening");
    
}
else if (time >= 20 && time <= 24){
    console.log("Night");
    
}
else{
    console.log("Invalid Time");
    
}


// 43

let temper = 4

if (temper > 35){
    console.log("Hot");
    
}
else if(temper >= 20 && temper <= 35){
    console.log("Normal");
    
}
else{
    console.log("Low");
    
}

// 44

let Age5 = 29
let height = 178
let weight = 83

if (age >= 18){
    if (height >= 170){
        if(weight >= 80){
            console.log("Eligible");
            
        }
    }
}

// 45 (Switch Statement)

let traff = "yellow"

switch(traff) {
    case "red" : console.log("Stop");
    break;
    case "yellow" : console.log("Wait");
    break;
    case "green" : console.log("Go");
    break;
    default: 
    console.log("Error trafficlight");
    

}

// 46

let day = "Tuesday"

switch(day){
    case "Monday" : console.log("Monday");
    break;
    case "Tuesday": console.log("Tuesday");
    break;
    case "Wednesday" : console.log("Wednesday");
    break;
    case "Thursday" : console.log("Thursday");
    break;
    case "Friday" : console.log("Friday");
    break;
    case "Saturday" : console.log("Saturday");
    break;
    case "Sunday" : console.log("Sunday");
    default:
        console.log("Invaild Day");
          
}

// 47

let choice = 3

switch(choice) {
    case 1 : console.log("Start");
    break;
    case 2 : console.log("Setting");
    break;
    case 3 : console.log("Exit");
    break;
    default:
        console.log("Invalid Choice");
        
}

// 48
let i = 10
for (i = 1; i <= 10 ; i++){
    console.log(i);
   
}

// 49

let j = 10
while(j>=1){
    console.log(j);
    
    j--;
}

// 50

let fruits = ["Apple", "Orange", "Mango", "Banana"]
for (let fruit of fruits){
    console.log(fruit);
    
}

let person = {
    Name : "Victor",
    Role : "Python Full Stack Developer",
    experience : "0 years"
};

for (let key in person) {
    console.log(key + ":" + person[key]);
    
}













 






























 






