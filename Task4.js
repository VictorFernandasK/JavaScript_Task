
// 1 (Basic Function)

function hello(){
    console.log("Hello Everyone");
}
hello();

// 2

function welcome(){
    console.log("Welcome to JavaScript");
    
}
welcome();

// 3

function navi(){
    console.log("Victor");
    
}
navi();

// 4

function message(){
    console.log("Welcome to JavaScript");
    console.log("JavaScript is a Programming Language");
    console.log("Its Easy to understand");
    
}
message()

// 5

function numbers(){
    let i = 5
    for(i = 1 ; i <= 5 ; i++){
        console.log(i);
        
    }
    
}
numbers();

// 6

function check(){
    let age = 18;
    if(age >= 18){
        console.log("True");
        
    }
    else{
        console.log("False");
        
    }
}
check();

// 7

function details(){
    console.log("Name : Victor");
    console.log("Qualification : B.E - CSE");
    console.log("Role : Software Developer");

}
details();

// 8

function company(){
    console.log("Company : Stackly");
    
}
company();

// 9

function welcomeUser(){
    console.log("Welcome User");
    
}
welcomeUser();
welcomeUser();
welcomeUser();

// 10

function a(){
    console.log("Hai");
}
function b(){
    console.log("Hello");
    
}

a();
b();

// 11 (Parameters & Argument)

function a1(name){
    console.log(name);

}
a1("Victor");

// 12

function para(name,age){
    console.log(name,age);
    
}
para("Victor", 28)

// 13

function add(a,b){
    console.log(a+b);
    
}
add(5,10);

// 14

function sub(a,b){
    console.log(a-b);
    
}
sub(10,5);

// 15

function multi(a,b){
    console.log(a*b);
    
}
multi(10,3);

// 16

function devide(a,b){
    console.log(a/b);
    
}
devide(10,2);

// 17

function student(name,age){
    console.log("Name: " + name + " " + "Age: "+ age);
    
}
student("Victor", 29);

// 18

function employee(name, role, salary){
    console.log("Name: "+ name);
    console.log("Role: " + role);
    console.log("Salary: " + salary);
    
    
}
employee("Victor","Software Developer",20000);

// 19

function details(name, age, qualification, city,){
    console.log("Name: "+ name);
    console.log("Age: " + age);
    console.log("Qualification: " + qualification);
    console.log("City: " + city);

}
details("Victor",28,"B.E - CSE","Thanjavur");

// 20

function subject(tamil,english,science,maths,social,biology){
    console.log("Tamil = " + tamil);
    console.log("English = " + english);
    console.log("Science = " + science);
    console.log("Maths = " + maths);
    console.log("Social = " + social);
    console.log("Biology = " + biology);
     
}
subject(98,80,84,70,90,78);

// 21 (Default Parameters)

function students(name, department, cgpa = "8.5"){
    console.log("Name : " + name);
    console.log("Department : " + department);
    console.log("CGPA : " + cgpa);
    
}

students("Victor", "CSE", undefined);

// 22

function user(name, age = 18){
    console.log("Name = " + name);
    console.log("Age = " + age);
    
}
user("Victor");

// 23

function employee(name, role = "Developer"){
    console.log("Name = " + name);
    
}
employee("Victor");

// 24

function form(name, department, cgpa, disability = "No"){
    console.log("Name = " + name);
    console.log("Department = " + department);
    console.log("CGPS = " + cgpa);
    console.log("Disability = " + disability);
    
}
form("Victor","B.E - CSE", 8.5,);
form("Vignesh","B.Tech", "8.0","Yes");

// 25

function form1(name, age, city, pincode = "613 205"){
    console.log("Name = " + name);
    console.log("Age = " + age);
    console.log("City = " + city);
    console.log("Pincode = " + pincode);

}
form1("Victor", 29, "Thanjavur");

// 26 (Return)

function addition(a,b){
    return (a + b);
}
console.log(addition(10 , 20));

// 27

function subtraction(a, b){
    return(a - b);
}
console.log(subtraction(10,20));

// 28

function multiplication(a, b) {
    return(a * b);
    
    
}

console.log(multiplication(10,20))

// 29

function division(a, b){
    return(a / b);
}
console.log(division(50, 2));

// 30

function salary(a){
    return(40000);
}
let salary1 = salary()
console.log(salary1);

// 31

function employeeSalary(salary){
    return salary;

}
let salary2 = employeeSalary(40000);
console.log(salary2);

// 32

function person(name){
    return (name);

}
let name1 = person("Victor")
console.log(name1);

// 33

function mark(tamil){
    if(tamil >= 35){
        return("Pass");
        
    }else{
        return("Fail");
        
    }

}
console.log(mark(80));

// 34
let discount;
function shopping (price, discount){
    return(price * discount / 100);
}
console.log(shopping(1000, 12));

// 35

function arith(a,b){
    return(a * b);

}
function fun2(){
    let result = arith(10, 2)
    console.log(result);
    
}
fun2();

// 36 (Outer Scope)

let A = 10;

function scope(){
    console.log(A);
    
}
scope()

// 37

let obj = {
    name : "victor",
    designation : "Python Full Stack Developer"
};

function det(){
    console.log(obj.name, obj.designation);
    
}
det();

// 38

let salary6 = 40000

function bonus(){
    salary6 = salary2 + 7000;
    console.log(salary6);
    
}
bonus();

// 39

let empdetails = {
    name : "Victor",
    age : 29,
    designation : "Python Developer",
    salary : 40000
}

function employeeDetails(){
    console.log("Name = " + empdetails.name);
    console.log("Age = " + empdetails.age);
    console.log("Designation = " + empdetails.designation);
    console.log("Salary = " + empdetails.salary);
    
}

employeeDetails();

// 40

let Name = "victor"

function function1 (){
    console.log(Name);
    
}
function1();
function function2(){
    console.log(Name);
    
}
function2();

// 41  (Named, Anonymous & Array function)

function named (hi){
    console.log(hi);
    
}
named ("Hello")

// 42

let m = function(a){
    console.log(a);
    
}
m("Hai Everyone")

// 43

let M = (a) => {
    console.log(a);
    
}
M("Arrow Function");


// 44

let N = (a,b) => {
    console.log(a+b);
    
}
N(10,30);

// 45

function named1(i, j){
    console.log(i + j);
    
}

let anonymous = function (i,j){
    console.log(i + j);
    
}

let arrow = (i, j) => {
    console.log(i+j);
    
}

named1(10, 20);
anonymous(30, 40);
arrow(50, 60);

// 46 (IIFE)

(function() {
    console.log("Hello");
    
})();

// 47

(function(name) {
    console.log("Hello " + name);
    
})("Victor");

// 48

(function(product, discount) {
    console.log("Special Offer " + product + " at " + discount + "% discount");
    
})("Iphone", 10);

// 49

function func1(callback, a, b){
    console.log("Add ",a+b);
    callback(a, b);
    
}
function callback(a, b){
    console.log(a, b);
    
}
func1(callback, 40, 50);

// 50

function Sub(a, b){
    console.log("Sub", a-b);
    
}
function Add (callback, a, b){
    console.log("Add ", a + b);
    callback(a, b);
    
}
Add(Sub, 50, 50);








