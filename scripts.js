//----External----------//

//print
//console.log("Hope you are fine")

//create variable
var firstName = "Chamara";
var age =26;


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
var myAge,yourAge,year,result;
myAge=26;
yourAge=20;
year =2025;

//subtraction
result = year-myAge;
console.log("i was born in"+result);

//addition 
result = year+10;
console.log('product of our ages ' + result);

//multiplication 
result= myAge * yourAge
console.log("produt of age "+ result);

//division
console.log('division of our args '+(myAge/yourAge));
//modulus
console.log('Modulus of our age  '+(myAge%yourAge));

//EXponentation
console.log('Exponent of age' +(myAge**2));
myAge=26;
//post increment
console.log(myAge++);
console.log('Post increment of my age ' + myAge++);

myAge=26;
//preincremant
console.log(++myAge);
console.log('Pre incremant of myAGE ' +myAge);
myAge=26;
//POSTDECREMENT
console.log(myAge--);
console.log("My decremant age is" +myAge)
myAge=26;
//pre decrement
console.log(--myAge);
console.log("pre decrement of myage:" +myAge)

//operator precedence
var cal = (20+30)/10+4.5-2*4**2;
console.log(cal);