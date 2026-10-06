// 1 ] Currying & Uncurrying 

function add(a){
    return function(b){
        return function(c){
            console.log(a+b+c);
        }
    }
}
add(5)(10)(15);

// 2 

function details(name){
    return function(department){
        return function(salary){
            console.log("Name : " , name );
            console.log("Department : ", department);
            console.log("Salary : ", salary);
            
        }
    }
}
details("Victor")("IT")(40000);

// 3

function multiply(a){
    return function(b){
        return function(c){
            console.log(a*b*c);
        }
    }
}
multiply(5)(10)(15);

// 4

function a(a, b, c){
    console.log(a + b + c);
}
a(5, 10, 15);

// 5

function Sum(a){
    return function(b){
        return function(c){
            return function(d){
                console.log(a + b + c+ d);
            }
        }
    }
}
Sum(5)(10)(15)(20);

function Uncurry(a, b, c, d){
    console.log(a + b + c + d);
}
Uncurry(10, 10, 25, 20);

// 6 (Spread Operator)

let array = [1, 2, 3, 4, 5];
let array2 = [5, 7, 8, 9, 10];
let array3 = [...array, ...array2];
console.log(array3);

// 7

let array4 = ["Vins", "Vicky", "Karthik"]
let array5 = ["Alix", "Anto", "Rahul"]

let array6 = [...array4, ...array5];
console.log(array6);

// 8

let array7 = [5, 10, 15, 20];
let array8 = [25, 30, 35, 40];
let array9 = [...array7, ...array8, 45, 50, 55];
console.log(array9);

// 9

let obj1 = {
    name : "Vins",
    age : 25,
}
let obj2 = {
    city : "Bangalore",
    Department : "IT"
}

let obj3 = {...obj1, ...obj2};
console.log(obj3);

// 10

let employee = {
    Name : "Vicky",
    Department : "IT"
}

let newEmployee = {...employee, Salary : 30000}
console.log(newEmployee);

// 11

let employee1 = {
    Name1 : "Vicky",
    Department1 : "IT"
}
let employee2 = {
    Name2 : "Vins",
    Department2 : "Testing"
}

let employee3 = {...employee1, ...employee2};
console.log(employee3);

// 12

let arr1 = [1, 2, 3, 4]
let arr2 = [5, 6, 7, 8]

let arr3 = [...arr2, ...arr1]
console.log(arr3);

// 13 (Rest Operator in Function)

function rest(a, b, ...c){
    console.log("Fixed Values : ", a, b);
    console.log("remaining Values : ", c);
}
rest(5, 10, 15, 20, 25, 30);

// 14

function student(name, department, ...marks){
    console.log("Name : ", name);
    console.log("Department : ", department);
    console.log("Marks : ", marks);
}
student("Vins", "IT", 90, 80, 79, 85, 95);

// 15

function fun1(a, b, ...rest){
    console.log("First Value : ", a);
    console.log("Second Value : ", b);
    console.log("Remaining Values : ", rest);
}
fun1(5, 10, 15, 16, 17, 18, 20);

// 16

function fun2(...rest){
    console.log(rest[4]);
}
fun2(5, 10, 15, 10, 8, 20, 4, 7, 8, 9);

// 17

function shopping(product, price, ...details){
    console.log("Product : ", product);
    console.log("Price : ", price);
    console.log("Details : ", details);
}
shopping("Mobile", 75000, "Iphone 15 pro max", "Black", "256GB");

// 18

function numbers(a, b, ...rest){
    console.log("First value : ", a);
    console.log("Second value : ", b);
    console.log("rest Values :", rest);

}
numbers(5,10,15,20,25,30,35,40);

// 19  (Array Destructuring)

let array10 = [1, 2, 3, 4]

let [a1, a2, a3, a4] = array10;
console.log(a1,);
console.log(a2);
console.log(a3);
console.log(a4);

// 20

let student1 = ["Vins", "B.E", 25, "8.5 CGPA"]
let [name, degree, age, cgpa] = student1;
console.log("Name = ", name);
console.log("Degree = ", degree);
console.log("Age = ", age);
console.log("CGPA = ", cgpa);

// 21

let values = [10, 20, 30, 40, 50];
let[first, , , fourth] = values;
console.log(first,fourth);

// 22

let nested = [1,2,[4,5]]

let [A, B,[C, D]] = nested;
console.log(A);
console.log(B);
console.log(C);
console.log(D);

// 23

let nested1 = [1, 2, [3, 4, [5, 6]]]
let [A1, B1, [C1, D1, [E1, F1]]] = nested1;
console.log(A1);
console.log(B1);
console.log(C1);
console.log(D1);
console.log(E1);
console.log(F1);

// 24 (Object Destructuring)

let employee4 = {
    name1 : "Vins",
    designation : "Developer",
    salary : 30000
}

let {name1, designation, salary} = employee4;
console.log("Name : ", name1);
console.log("Designation : ", designation);
console.log("Salary : ", salary);

// 25

let student2 = {
    name2 : "Vicky",
    department1 : "B.E - CSE",
    cgpa1 : 8.5
}

let {name2, department1, cgpa1} = student2;
console.log("Name : ", name2);
console.log("Department : ", department1);
console.log("CGPA : ", cgpa1);

// 26

let Numbers = {
    i : 10,
    j : 20,
    k : 30,
    l : 40,
    m : 50
}

let {i, j, k, l, m} = Numbers;
console.log(i);
console.log(j);
console.log(k);


// 27

let company = {
    employee : {
    name3 : "Vins",
    department3 : "IT"
    },

    team: {
        member1 : ["Alex", "Anto", "Rahul"]
    }
}

let {employee : {name3, department3}, team : {member1, member2}} = company;
console.log(name3);
console.log(department3);
console.log(member1)

// 28

function employeDetails(){
    let company1 = {
        department3 : {
            employee5 : {
                name5 : "Victor",
                designation : "Developer"
            }
        }
    }
    let {
    department3 : {
        employee5 : { name5 }
    }
} = company1;
console.log("Name : ", name5);
}
employeDetails();

// 29  (Array Manipulation)

let arr = ["Apple", "Banana", "Mango", "Grapes", "Orange"]

arr.push("Giwi", "Pinapple", "Gova");
console.log(arr);

// 30

let arr4 = ["Apple", "Banana", "Mango", "Grapes", "Orange"];

arr4.pop();
console.log(arr4);

// 31

let student4 = ["Vins", "Victor", "Vicky", "Alex", "Anto"]
student4.shift();
console.log(student4);

// 32

let arr5 = [1, 2, 3, 4]
arr5.unshift(7, 8);
console.log(arr5);

// 33

let arr6 = [10, 20, 30, 40, 50]
arr6.splice(2, 1, 100);
console.log(arr6);

// 34

let arr7 = [10, 20, 30, 40, 50, 60]
arr7.splice(2, 3);
console.log(arr7);


// 35

let arr8 = [10, 20, 30, 40, 50]
arr8.splice(2, 0, 100, 200, 300);
console.log(arr8);

// 36

let arr9 = [10, 20, 30, 40, 50, 60];
arr9.splice(2,3,1,2,3);
console.log(arr9);

// 37

let arr10 = ["Victor", "Vins", " Vicky", "Alex", "Anto"]
arr10.splice(2, 2);
console.log(arr10);

// 38

let cart = ["Mobile", "Laptop", "Tablet", "TV", "Watch"];
cart.push("Speaker")
console.log(cart);

cart.pop();
console.log(cart);

cart.shift();
console.log(cart);

cart.unshift("Tab");
console.log(cart);

// 39 (Array Merge & Extraction Methods)

let arr11 = [1, 2, 3];
let arr12 = [4, 5, 6];

let arr13 = arr11.concat(arr12);
console.log(arr13);

// 40

let arr14 = [1, 2, 3, 4];
let arr15 = [5, 6, 7, 8];
let arr16 = [9, 10, 11, 12];

let arr17 = arr14.concat(arr15, arr16);
console.log(arr17);

// 41

let arr18 = [10, 20, 30, 40, 50, 60, 70, 80];
let slice = arr18.slice(2,6);
console.log(slice);

// 42

let Student = ["Victor", "Vins", "Vicky", "Anto", "Jhone"]
let slice2 = Student.slice(3);
console.log(slice2);

// 43

let arr19 = [1,2,[3,4,[5,6]]];
let flat = arr19.flat(2);
console.log(flat);

// 44

let arr20 = [1, 2, [3, 4, [5, 6, [7, 8]]]];
let flat2 = arr20.flat(4)
console.log(flat2);

// 45

let arrslice = [1, 2, 3, 4];
let arrsplice = [5, 6, 7, 8, 9];

let slice3 = arrslice.slice(1,3);
console.log(slice3);

arrsplice.splice(1, 3, 100, 200, 300);
console.log(arrsplice);

// 46 (Search & Other Array Methods)

let search1 = [100, 200, 300, 400, 500, 600]
let result = search1.includes(400);
console.log(result);

// 47

let Values = [5, 10, 15, 50, 10, 20]
let dublicate = Values.indexOf(10);

console.log(dublicate);

// 48

let values1 = [5, 10, 15, 50, 10, 60, 70]
let dublicate1 = values1.lastIndexOf(10);

console.log(dublicate1);

// 49

let arrSort  = [40, 20, 50, 60, 10, 555, 30];

arrSort.sort();

console.log(arrSort);

// 50

let reverse = [1, 2, 3, 4, 5, 6 ,7 ,8, 9];
reverse.reverse();

console.log(reverse);




















