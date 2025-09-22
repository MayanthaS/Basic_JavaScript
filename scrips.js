//external js
//print
/*
console.log("hi mayantha");
alert("hi mayanatha hoe are yo?");

//get data
var name =prompt("what is your name?")
alert('HI ' + name);
*/
// learning subtraction addtion 
/*
var name = prompt("Enter your name?");
var age = prompt("Enter your age?");
var nowyear = prompt("what is this year?")
console.log('your name is ' +name);
console.log('your age is ' +age);
var bithyear ;
bithyear  = nowyear - age;
console.log("your birth year is "+bithyear);
*/
//finger print operation
/*
var name = prompt("Enter name :");
var time = prompt("Enter time:");
if(time<12.00){
    alert("Good Morning "+name);
}
else if(time <15.00){
    alert("Good Afternoon "+name);
}
else{
    alert("Good Evening "+name);
}
*/
// payment calculator
var emp_Name = prompt("Enter Name:");
var emp_type = prompt("Enter type of Employee(permanat or trainer):");
if (emp_type == "permanat") {

    var basic_Salary = prompt("Enter basic:");
    var bonus = basic_Salary * 50 / 100;
    var Salary = Number(basic_Salary) + Number(bonus);
    alert(+emp_Name+" salary is " + Salary);

} else if (emp_type == "trainer") {
    var emp_Name = prompt("Enter Name:");
    var basic_Salary = prompt("Enter basic salary:");
    var bonus = basic_Salary * 20 / 100;
    var Salary = Number(basic_Salary) + Number(bonus);
    alert(+emp_Name+" salary is " + Salary);
}
else{
    alert("Enter valid employee type");
} 

