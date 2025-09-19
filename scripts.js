//----External----------//
/*


//print
//console.log("Hope you are fine")

//create variable
//var firstName = "Chamara";
//var age =26;


//print
//console.log(firstName);
//console.log('My Name is ' +'' + firstName);
//type coerction
//console.log('My AGE IS ' +age);

//get variable type
//console.log(typeof(firstName));

//define 
//job ='Doctor';
//variable mutation
//lastname ='jehan';
//console.log('I am '+firstName +'i am '+ age+ ' years old ');

//display alert
//alert('HI ' +lastname );

//Get User input
//Hegiht = prompt('What is your height?');
//alert('My height is ' +Hegiht +'feet');

//--singel operato--
//var myAge,yourAge,year,result;
//myAge=26;
//yourAge=20;
//year =2025;

//subtraction
//result = year-myAge;
//console.log("i was born in"+result);

//addition 
//result = year+10;
//console.log('product of our ages ' + result);

//multiplication 
//result= myAge * yourAge
//console.log("produt of age "+ result);

//division
//console.log('division of our args '+(myAge/yourAge));
//modulus
//console.log('Modulus of our age  '+(myAge%yourAge));

//EXponentation
//console.log('Exponent of age' +(myAge**2));
//myAge=26;
//post increment
//console.log(myAge++);
//console.log('Post increment of my age ' + myAge++);

//myAge=26;
//preincremant{
//console.log(++myAge);
//console.log('Pre incremant of myAGE ' +myAge);
//myAge=26;
//POSTDECREMENT
//console.log(myAge--);
//console.log("My decremant age is" +myAge)
//myAge=26;
//pre decrement
//console.log(--myAge);
//console.log("pre decrement of myage:" +myAge)

//operator precedence
//var cal = (20+30)/10+4.5-2*4**2;
//console.log(cal);

//multiple operator
//var ans1,ans2;
//ans1=ans2=(((30+40-29)*2)/8)**4;
//console.log(ans1+ '' +ans2);

//asign ment operator

//Equal sign
//var myName = 'kasun';
//console.log(myName);

//addition with equal
//var age = 24;
//age += 10;
//console.log(age);

//subtraction operator
//age -=10
//console.log(age);
//multiplication
//age *=10;
//console.log(age);

//division withequal
//age/=4;
//console.log(age);

//modulus
//age %=13;
//console.log(age);2.5

//exponent
//age **=2;
//console.log(age);



//BMI Calculator
//kasunbmi
//var mass,height, bmik,bmic,iskasun;
//mass =prompt("Kasun's mass:");
//height =prompt("Kasun's height:");

//bmik=mass/(height*height);
//console.log(bmik);

//chaml's BMI
//mass =prompt("chaml's mass");
//height=prompt("chamal's height");
//bmic = mass/(height*height);
//console.log(bmic);

//bool
//iskasun=(bmik>bmic);

//alert(iskasun);

//if-else
//var a=5;
//var b=6;
//if(a>b){
  //  console.log("a is greater than or equal");
//}
//else{
    //console.log("b is greater than a");
//}

//comparison operators
//var a = 20;
//var b = '20';
//var c = 5;
//var d = 6;

//equal to 
//if(a == b){
    //equal value and type
  //  if(a === b){
 //       console.log('Both value and type of a is equal to b');
 //   } 
    //not equal value or type 
 //   else {
       // if (a !== b) {
     //       console.log('only value or type of a is equal to b');
   //     }
  //  } 
//}
//greater than or equL
//if (a >= 10){
    //greater than
  //     if(a >10){
    //    console.log('a is greater than 10');
    //  }
    //equal tp 
      // else if(a == 10){
      //  console.log('a is equal 10')
   // }
//}
//not equal 
// if (a !=c){
    //less than 
  //  if(a <c){
 //       console.log ('a is less than  c');
  //  }
  //  else{
   //     console.log('a is greater than c');
   // }
//}
//less than or equal

   
// if(c <=d){
  //  if(c<5){
    //    console.log('c is less than or equal to 5');
   // }
   // else{
     //   console.log ('c is gretater  d');
   // }
///----LOgical operator--//
//var a = 20;
//var b = 10;
//var c = 5;
 // and
//if(a == 10 && a == b){
  //  console.log('a eqaul a  and b');
//}
//or
//else if(a < 10 || c > b ){
// console.log("Is is good");    
//}
 //not
//else if(a != c){
  //  console.log("It s NOt bad");
//}
//else{
  //  console.log("IT IS BAD")
//}


//switch case
//var empName = "Kasun";
//var jobRole = "data sciencetist";

//switch(jobRole.toLocaleLowerCase()){
   // case 'teacher':
       // console.log(empName+'is a Tecaher');
       // break;
   // case 'doctor':
        //console.log(empName+'is a Doctor');
       // break;
    // case 'data sciencetist':
        //console.log(empName+'is a Data scientist');
     //   break;
    // case 'se':
        //console.log(empName+'is a se');
       // break;
    //default:
        //console.log(empName+'dose something else');
      //  break;
//}
//5- 00000101
//1- 00000001
//bitwise 
//console.log(5 & 1);

//console.log(5 | 1);

/*sample project*/
/*
 var score1, score2,score3,averageSri,averageEng;

//srilanaka average
/*score1 =parseInt( prompt("Enter match score1 of team sri Lanaka: "));
score2 =parseInt( prompt("Enter match score2 of team sri Lanaka: "));
score3 =parseInt( prompt("Enter match score3 of team sri Lanaka: "));

averageSri =(score1+score2+score3)/3;

// Eng AVERAGE
score1 =parseInt( prompt("Enter match score1 of team England: "));
score2 =parseInt( prompt("Enter match score2 of team England: "));
score3 =parseInt( prompt("Enter match score3 of team England164: "));

averageEng =(score1+score2+score3)/3;

//Find the winner
if(averageSri>averageEng){
    alert("Winner in srilan " +averageSri);
    console.log("Winner in srilan " +averageSri);
}
else{
     alert("Winner in eng " +averageEng);
    console.log("Winner in srilan " +averageEng);

}
*/

//introduction of function
// Define function
//without return
/*
function addNumber(num1,num2){
    var ans = num1+num2;
    console.log("Addition:" +ans);
}


//with return
function subNumber(num1,num2){
   //return the value to where we called the function
   // exit the function
    return num1 - num2 ;

}
//calling  function
addNumber(20,32.5);
var sub =subNumber(30,12);
console.log(sub);


//define 
function calAge(BirthYear){
    return 2025-BirthYear;

}

//console.log(calAge(1995));

//sample project retier year
function retieryear(firstname, BirthYear){
    var age = calAge(BirthYear);
    var retier = 60 - age;
    console.log(firstname + " is " +retier +"years in " +(BirthYear+age+retier )+" retier " );
}
console.log(retieryear("mayantha",2000));

//function expression
var profession = function(job, firstname) {
    switch(job) {
        case 'doctor':
            return firstname + " is a Doctor";
        case 'teacher':
            return firstname + " is a Teacher";
        case 'engineer':
            return firstname + " is an Engineer";
        default:
            return firstname + " does something else";
    }
};
console.log(profession("doctor","kasun"));

// array
//ways to declare an array
var students = ["Ruwan","Nimal","Piyal","Dhanushka","kasun","pakaya"];
var marks = new Array(60,55,66,44,78);
//print array
console.log (students);


//array mutation
students[3] ="saduni";
students[5] ="thilini";
students[students.lenght] ="chamara";


//print array

console.log(students);
console.log(students.lenght);
console.log(students[3]+' got ' +marks[3]+' marks for Maths');


//different data types in array
/// this most impotant write down book 
 var std1 =['Kamal','perera',22, 'civil','panadura',true];
 console.log(std1);
 console.log(typeof(std1[5]));
//add elemet 
std1.push("grenn");
std1.unshift("Mr");
console.log(std1);

//remove element
std1.pop();
std1.pop();
std1.shift();
console.log(std1);

//get index of an element
console.log (std1.indexOf(22));

// most omportant write down book 
var isCivilstudent = std1.indexOf('Agri') === -1 ? std1[0]+' is not a Agri students':std1[0]+ 'is a civil student';
console.log(isCivilstudent);

//tip calculator
/*
var tip,bill;
var bill = prompt("Enter value of Bill:");


 if(bill<1000){
     tip = bill *20/100;
    console.log("You GIVE TIP IS:"+tip);
    alert("You GIVE TIP IS:"+tip);
 }
 else if (1000<bill<1500){
   tip = bill *15/100;
  console.log("You GIVE TIP IS:"+tip);
  alert("You GIVE TIP IS:"+tip);
 }
 else{
   tip = bill*10/100;
   console.log("You GIVE TIP IS:"+tip);
   alert("You GIVE TIP IS:"+tip);
 }*/


//tip calculator using array 
/*
var tips =new Array();
var amount = new Array ();

function tipCalculator(bill){
  var tip;
  if (bill<1000){
     tip = bill *(20/100);
  }
  else if (1000<bill<1500){
   tip = bill *(15/100);
  }
  else {
   tip = bill *(10/100);
   }
   //Store in array
   tips.push(tip);
   amount.push(bill+tip);

   return tip;

   
}
//calling 
console.log('1 -tip :', +tipCalculator(1230));
console.log('2 -tip :', +tipCalculator(982));
console.log('3 -tip :', +tipCalculator(1640));
*/

//objects
/*
var nimal = {
    firstname: 'Nimal',
    lastName: 'perera',
    age: 24,
    job: 'Developer',
    subject: ['java', 'web development', 'graphic design'],
    degree: {
        name: 'software Eng',
        duration: '4 Years',
        Credits: 120
    },
    projects: [{
            name: 'Ecommerce app',
            Technology: 'flutter',
            version: 1.1
        },
        {
            name: 'music palyer',
            Technology: 'Java',
            version: 1.2
        }
    ]
}
console.log(nimal);
console.log(nimal.lastName);
console.log(nimal['lastName']);
var X = 'age';
console.log(nimal[X]);
console.log(nimal[X]);
console.log(nimal.subject[2]);
console.log(nimal.degree.name);
console.log(nimal['degree'].Credits);
console.log(nimal.projects)


//modify values
nimal.job = 'Devops Eng';
nimal.age = 26;
console.log(nimal);

//new object 
var kasun = new Object();

// add properties
kasun.firstname = 'kasun';
kasun.lastname = 'Fernando';
kasun['age'] = 30;

console.log(kasun);


//BMI with objects
/*
//Declare objects
var kasun = new Object();
var chamal = new Object();

// add properties to kasun
kasun.fullName = prompt('Enter kasun full name:');
kasun.mass = prompt('Enter the kasun mass :');
kasun.weight = prompt('Enter kasun height :');

//adde properties cahamls
chamal.fullName = prompt('Enter chamal full name:');
chamal.mass = prompt('Enter the chamal mass :');
chamal.weight = prompt('Enter chamal height :');

kasun.bmi = chamal.bmi = function() {
    this.bmival = this.mass / (this.height ** 2);
    return this.bmiVal;
}


//find the highest BMI
if (kasun.bmi() > chamal.bmi()) {
    alert('highest bmi is' + kasun.bmiVal);
} else if (kasun.bmi() < chamal.bmi()) {
    alert('highest bmi value is ' + chamal.bmiVal);
}

console.log(kasun);
console.log(chamal);
*/

//Loop


// --for loop--
/*
for(var i= 0; i< 10; i++){
  console.log(i);
}
for(var i = 10; i>0; --i){
  console.log(i);
}
/*
i =0,0<10 true,print i value
continue to i<10
*/
//iterate array
/*
var student = ['nimal','kumara','dasun','chmara','nandana'];
for(var i = 0; i<student.length; i++){
  console.log(student[i]);
}

//for in loop
var person ={fname:'chamara',lname:'silva',age:25};
var i;
for(i in person){
  console.log(person);
}
var person ={fname:'sahan',lname:'sasindu',age:32};
var i;
for(i in person){
  console.log(person[i]);
}

//for of loop
var fname = "chamra perera";
var j;
for(j of fname){
  console.log(j)
}
*/
//--while loop--
/*
var marks = [33,55,66,88,22];
var k = 0;
while(k < marks.length){
  console.log(marks[k]);
  k++;
}
//do - while loop
var l = 10;
do{
  console.log(l);
  l--;
}
while(l >=0);

*/
//continue and break
/*
var data =['saman','galle',1996,'maths',true,'chocolate']

//continue
//if a specified condition occurs, and continues with the next iteration in the loop
for(var i = 0; i< data.length; i++){
  if(typeof(data[i]) !== 'string')continue;
    console.log(data[i]);
}
//break
//break the loop and continues executing the code after the loop (if any )
for(var i = 0; i< data.length; i++){
  if(typeof(data[i]) !== 'string')break;
    console.log(data[i]);
}

//Error Handling

//Try catch  
/* 
try -let you test a blcok of code for error
catch -let you handle the error
throw -lets your are create custom errors
finaly -lets you execute code,after try and catch
regadless of the result

*/
//Function to find the largest number
/*
function findLargest(a,b,c){
  try{
    if(typeof(a)!== 'number'||typeof(b) !== 'number' || typeof(c) !== 'number'){
      throw"Error :Enter only numbers!";
    }
    else if(a == b || a == c || b ==c ){
       throw "Error:Enter different numbers!";
    }
    else{
       if(a > b && b > c ){
        console.log("a is the largest  number");
       }
       else if(b > a && b > c){
        console.log("b is the largest number !");
       }
       else{
        console.log('Inavalid inputs!');
       }
    }
  } catch (error) {
    console.error(error);
  }
  finally{
    console.log("Input values are" +a+','+b+','+c);
  }
}

//calling
findLargest(6,7,5);
*/

//Scope
/*
Scope determines the accesibility(visibility) of variables.In javasripts there are two types of scope.
1.local
2.global

*/

//local variables
//varable declared within a javascripts function.They can ONLY BE ACCESSESD from within the function .local varibles are deleted when the function is completed
function addNum(){
  var a =10;
  var b = 20;
  console.log(a+b);
}
//calling
addNum();
//console.log(a);

//--Global Varible
// A variable decided outside a function , all scripts and function ,all scripts and function an a web browser ,global.variable are deleted when you close the browser window
var subject = "Maths";
function mySub(){
  console.log("My Favourite subject is "+subject);
  subject ="science";
}
mySub();
mySub();