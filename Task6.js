// 1 (Array Heigher Order Methods)

let array = [1, 2, 3, 4, 5];

array.forEach((c) => {
    console.log(c);
    
})

// 2 

let names = ["Vins", "Vicky", "Victor", "Alex"];

names.forEach((c) => {
    console.log("Hello, ", c);
    
})

// 3

let numbers = [10, 20, 30, 40, 50];

let result = numbers.map((c,i) => {
    console.log(i, c * 2);
})



// 4

let prices = [500, 200, 600, 300, 100];

let result1 = prices.map((c,i) => {
    console.log(i, c + 100);
    
})

// 5

let array1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

let result2 = array1.filter((c,i) => {
    return c % 2 == 0
    
})
console.log(result2);

// 6

let ages = [18, 32, 29, 15, 24, 16, 20]

let result3 = ages.filter((c) => {
    return c >= 18 
})
console.log(result3);

// 7

let arr = [10, 40, 50, 60, 30]

let result4 = arr.find((c, i) => {
    return (c > 50);
    
})
console.log(result4);


// 8

let students = [
    {name : "vins", mark : 60},
    {name : "victor", mark : 90},
    {name : "Alex", mark : 80},
    {name : "Vicky", mark : 89}
]

let result5 = students.find((c) => {
    return c.mark > 80;
})

console.log(result5);

// 9

let number = [5, 10, 15, 20, 25, 30]

let result6 = number.reduce((acc, c) => {
    return acc + c;
},0)

console.log(result6);

// 10

let prices1 = [100, 200, 300, 500, 100];

let total = prices1.reduce((acc, c) => {
    return acc + c;
},0);
console.log(total);

// 11

let Num = [50, 99, 100, 120, 40, 150];

let res = Num.some((c) => {
    console.log(c > 100);
    
})

// 12

let students1 = [50, 40, 45, 40,60,70]

let res1 = students1.every((c) => {
    return c > 35;
})

console.log(res1);

// 13  (Sort, Join, & Array Conversion)

let arr1 = [10, 30, 50, 20, 60];

let res2 = arr1.sort((a,b) => {
    return a-b;
})

console.log(res2);

// 14
let arr2 = [10, 30, 50, 20, 60];

let res3 = arr2.sort((a,b) => {
    return b-a;
})

console.log(res3);

// 15

let StudentName = ["Vickty", "Vignes", "Victor", "Vins"];

console.log(StudentName.toString());

// 16

let Name = ["Vickty", "Vignes", "Victor", "Vins"];

console.log(Name.join("-"));

// 17

let product = ["Phone", "Laptop", "Computer", "Watch"];

console.log(product.join(","));

// 18 (String Methods)

let string = "JavaScript"

console.log(string.charAt(4));

// 19

let sent = "JavaScript"

console.log(sent.charCodeAt());

// 20

let str = "Hello JavaScript"

console.log(str.length);

// 21

let str1 = "JavaScript Developer"

console.log(str1.slice(0,10));

// 22
let str3 = "javascript"

console.log(str3.toUpperCase());

// 23

let str2 = "JAVASCRIPT"

console.log(str2.toLowerCase());

// 24

let space = " JavaScript "

console.log(space.trim());

// 25

let sent2 = prompt("Enter Sentence")

console.log(sent2.includes("JavaScript"));
console.log(sent2.indexOf("JavaScript"));
console.log(sent2.startsWith("I"));
console.log(sent2.endsWith("."));

// 26  (Date Methods)

let date = new Date();
let days = ["Sun", "Mon", "tue", "Wed", "thu", "Fri", "Sat"]
console.log(date.getFullYear());
console.log(date.getMonth()+1);
console.log(date.getDate());
console.log(days[date.getDay()]);

// 27

let date1 = new Date()

console.log(date1.getHours());
console.log(date1.getMinutes());
console.log(date1.getSeconds());

// 28

let date2 = new Date()

date2.setFullYear(1997);
console.log(date2);

// 29

let date3 = new Date()

date3.setMonth(2);
date3.setDate(2);
console.log(date3);

// 30

let DOB = prompt("Enter Your DOB(yyyy-mm-dd)")
let date4 = new Date(DOB);
//let days1 = ["Sun", "Mon", "tue", "Wed", "thu", "Fri", "Sat"]

console.log(days[date4.getDay()]);











































