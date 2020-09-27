 //1.way to print in JavaScript
 console.log("hello Sujeet");
 alert("me");
  //document.write('this is document write")

  //2.JavaScript console API
  console.log("hello Sujeet",4+6,"Another log");
  console.warn("this is warning");
  console.error("this is an error");

  //3.JavaScript Variables
  //what are variable ?. container to store data value
 /*
 multi
 line
 comment
 */
  var number1=36;
  var number2=54;
  console.log(number1+number2);
   
//4.Data type in JavaScript
//Number
var num1= 455;
var num2=5226.54;

//String
var str1= "This is String1";
var str2= "This is String2";


//Objects
var marks = {
    ravi: 54,
    subham: 65,
    rohan: 96,
}
console.log(marks)

//Booleans
var a = true;
var b = false;
console.log(a,b);

//var und = undefined
var und;
console.log(und);

var n= null;
console.log(n);

/*
At very high level , there is two type of data type in javascript
1.premitive- undefined, null, number, string, boolean, symbol
2.Reference- arrays and objects
*/
var arr= [1,2,"bablu",4,5]
console.log(arr);

//operators in javascript
//arithmetic operation
var a = 36;
var b = 56;
console.log("The value of a+b is", a+b)
console.log("The value of a-b is", a-b)
console.log("The value of a*b is", a*b)
console.log("The value of a/b is", a/b)

//Assignment operators
var c = b;
c+=2; //c = c+2
c-=2; //c = c-2
c*=2; //c = c*2
c/=2; //c = c/2
console.log(c);

//comperison operators
var x= 34;
var y= 54;
console.log(x==y);
console.log(x>=y);
console.log(x<=y);
console.log(x>y);
console.log(x<y);

//Logical Operators
//And operators
console.log(true&&true);
console.log(true&&false);
console.log(false&&true);
console.log(false&&false);

// OR operators
console.log(true||true);
console.log(true||false);
console.log(false||true);
console.log(false||false);

//Not Operators
console.log(!true);
console.log(!false);

//function in JavaScript
//DRY= Do not repeat your self
function avg(a,b){
   c=(a+b)/2;
   return c;
}
c1= avg(4,6);
c2= avg(14, 7);
console.log(c1,c2);

//conditional in JavaScript
var age =41;
//single if statement
if(age>2){
   console.log("you are not a kid");
}
else{
  console.log("you are a kid");
}
//if-else ladder
if(age>32){
   console.log("you are Chacha");
}
else if(age>26){
  console.log("you are a young");
}
else if(age>22){
  console.log("you are a adult");
}
else if(age>18){
  console.log("you are mature");
}
else{
   console.log("you are child");
}
console.log("End of Ladder");

//for loop
var arr=[1,2,3,4,5,6,7];
//console.log(arr);
for(var i=0; i<arr.length; i++){
  /* if(i==2){
       break;
       continue;
   }*/
console.log(arr[i])
}
 arr.forEach(function(element){
  console.log(element)
})

//while loop
//const ac=0;
//ac++;
//ac=ac+1
let j=0;
while(j<arr.length){
  console.log(arr[j]);
  j++;
}

//Do While loop
do{
console.log(arr[j]);
j++;
}
while(j < arr.length);



//array method
let myArr = ["fan", "Camera", 54, null, true];
console.log(myArr.length);
// myArr.pop();
// myArr.push("Sujeet");
//myArr.shift();
const newLen = myArr.unshift("Jaiswal");
console.log(newLen);
console.log(myArr);

//String method in javascript
let myLovelyString = "Herry is good boy good good good of good";
console.log(myLovelyString.length);
console.log(myLovelyString.indexOf("boy"))
console.log(myLovelyString.lastIndexOf("good"))
console.log(myLovelyString.slice(0,4));
d= myLovelyString.replace("herry", "sujeet");
console.log(d, myLovelyString);


//Date time minutes year in JavaScript
myDate = new Date();
console.log(myDate);
console.log(myDate.getTime());
console.log(myDate.getFullYear());
console.log(myDate.getDay());
console.log(myDate.getMinutes());
console.log(myDate.getHours());

//DOM manipulation
//Let elem = document.getElementById('click');
//console.log(elem);

//Let elemClass = document.getElementByClassName("container")
//console.log(elemClass);
//elemClass[0].style.background = "yellow";