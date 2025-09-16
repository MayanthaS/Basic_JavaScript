//----External----------//

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