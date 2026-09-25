// 1  (Variable & data type)

let name = "Victor Fernandas K"
console.log(typeof name);

// 2

let age = 29
console.log(age);
console.log(typeof age);

// 3

let a = "true"
console.log(a);
console.log(typeof a);

// 4

let value
console.log(value, typeof value);

// 5

let b = null;
console.log(b, typeof b);

// 6

let str = "victor"
let num = 1234
let bool = true
let undef 
let nl = null;

console.log(str);
console.log(num);
console.log(bool);
console.log(undef);
console.log(nl);

// 7

let qulification = "B.E - CSE"
console.log(typeof qulification);

// 8

let salary = 8000
console.log(typeof salary === "number");

// 9

let v1 = 100
let v2 = 200

console.log(typeof v1, typeof v2);

// 10

let name1 = "victor"
let age1 = 29
let qualification1 = "B.E - CSE"
let work_status = true

console.log(name1, typeof name1);
console.log(age1, typeof age1);
console.log(qualification1, typeof qualification1);
console.log(work_status, typeof work_status);

// 11 (Array)

let fruit = ["apple", "mango", "banana", "guava", "giwi"]
console.log(fruit);

// 12 

let numbers = [6,5,4,3,2,1]
console.log(numbers[0]);

// 13

let colors = ["Red", "Black", "Blue", "Green", "Yellow", "Gray"]
console.log(colors[2]);

// 14

let mobile = ["Iphone", "Oppo", "Vivo", "Samsung", "Nothing"]
console.log(mobile[mobile.length-1]);

// 15

let num2 = [10,20,30,40,50,60,70]
console.log(num2[num2.length-2]);

// 16

let foods = ["Biriyani", "Parota", "Garlic Nan", "Dhosa", "Idly", "Pongal"]
console.log(foods[0], foods[2], foods[5]);

// 17

let cricketers = ["Dhoni", "Koli", "Rohith", "sachin", "smith"]
console.log(cricketers[3]);

// 18

let toys = ["Ball", "Remote Car", "Dall", "teddy beer"]
console.log(toys[toys.length-1]);

// 19

let values1 = [100,200,300,400,500,550,600,650,700,800]
console.log(values1[0], values1[values1.length-1], values1[values1.length-2]);

// 20 

let items = ["Apple", "Mango", "dall", "Ball", "Dhoni", "Rohit"]

console.log(items);
console.log(items[1]);
console.log(items[3]);
console.log(items[5]);

// 21 (Objects)

let details = {
    name : "victor",
    age : 29,
    city : "Thanjavur"
};

console.log(details)

// 22

let employee = {
    name : "victor",
    qualification : "B.E - CSE",
    company : "Stackly"
};

console.log(employee.company)

// 23

let items2 = {
    fruits2 : ["Apple", "Orange", "Banana", "Mango"]
};
console.log(items2.fruits2[1]);

// 24

let items3 = {
    toys : ["Remote Car", "Ball", "Bat", "Dall"]
};

console.log(items3.toys[items3.toys.length-1]);

// 25

let match = {
    cricketers : ["Dhoni", "Virat", "smith"],
    team : ["India"]
}
console.log(match.cricketers);

// 26

let details3 = {
    fruits : ["Apple", "Orange", "Mango"],
    toys : ["Ball", "Bat", "Dall"],
    cricketers : ["Doni", "Rohit", "Virat"]
}
 console.log(details3.fruits, details3.toys, details3.cricketers);

 // 27 

 let studentDetails = {
    students : ["Victor", "Vicky", "Alex"],
    course : ["B.A", "B.E", "B.Com"]
 }

 console.log(studentDetails.students[0], studentDetails.course[1]);

 // 28

 let product = {
    mobile : ["Iphone", "Samsung", "OnePlus"]
 }

 console.log(product.mobile[2]);

 // 29

 let employee3 = {
    employeeName : ["Victor"],
    Skills : ["Python", "Java", "MySQL", "HTML","CSS"],
    experience : ["Fresher"]
 }
 console.log(employee3.Skills[1])

 // 30

 let personalDetails = {
    Name : ["Victor Fernandas K"],
    DOB : ["02 March 1997"],
    Age : [29],
    City : ["Thanjavur"],
    qualification : ["B.E - CSE"],
 }

 console.log(personalDetails.Name, personalDetails.Age, personalDetails.City);

 // 31 (Arithmetic Operator)

 let c = 100;
 let d = 150;
 console.log("Add:", c+d);
 console.log("Sub:", c-d);
 console.log("Multi:", c*d);
 console.log("Divi:", c/d);

 // 32

 let e = 20;
 let f = 7;
 console.log("Modules:", e%f);

 // 33

 let a2 = 2**5;
 console.log(a2);

 // 34

 let a3 = 2;
 let b3 = 3;
 
 console.log("Add:", a3+b3);
 console.log("Sub:",a3-b3);
 console.log("Mult:",a3*b3);
 console.log("Devi:", a3/b3);
 console.log("Modul:", a3%b3);
 console.log("Exa:", a3**b3);

 // 35

 let Num3 = 10;
 Num3 = Num3 + 5;
 console.log(Num3)

 // 36 (Increment & decrement)

 let Num4 = 10;
 ++Num4;
 console.log(Num4)

 // 37

 let Num5 = 10;
 Num5++;
 console.log(Num4)

 // 38

 let z = 20;
 ++z;
 console.log(z);

 // 39

 let y = 20;
 y++;
 console.log(y);

 // 40

 let t = 10;
 let s = 12;
 ++t;
 console.log(t);
 s++;
 console.log(s);
 
// 41 (Assignment Operator )

let A = 20
let B = 10
A += B;
console.log(A);

// 42

let A1 = 50;
let B1 = 20;
A1 -= B1;
console.log(A1);

// 43

let A2 = 10;
let B2 = 5;
A2 *= B2;
console.log(A2);

// 44

let X = 100;
let Y = 10;
X /= Y
console.log(X);

// 45

let X1 = 25;
let Y1 = 4;
//X1 %= Y1;
console.log(X1 %= Y1);

// 46 (Comparison, Logical & Ternary)

let u = 10;
let v = 20;
console.log(u>v);
console.log(u<v);
console.log(u<=v);
console.log(u>= v);

// 47

let n = 10;
let m = "10";
console.log(n == m);
console.log(n === m);

// 48

let i = 25>10;
let j = 22>30;
console.log(i && j);
console.log(i || j);
console.log(!i);
console.log(!j);

// 49
let age3 = 16;
let person1 = (age3 >= 18)? "Eligible" : "Not Eligible";
console.log(person1)

// 50

let mark = 80;

let result = (mark >= 35)? "Pass": "Fail";
console.log(result);



