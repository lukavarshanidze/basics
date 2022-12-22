//console.log('hello');
//alert('yoo');


//variables
var b = 'smoothie';
//console.log(b);


var someNumber = 45;
//console.log(someNumber);


//var age = prompt('what is your age?');
//document.getElementById('someText').innerHTML = age;


// Numbers in Javascript

var num1 = 10;
//num1--;
//console.log(num1);

//console.log(num1 % 2);

// increment/decrement by any number you want

num1 += 10;
//console.log(num1);

// Functions
/*
1. create a function
2. call the function
*/
function fun() {
   // console.log('this is a function')
}
// fun();

/*
create a function that take in a name and says hello followed by your name

For example
Name: "luka"
Return: "Hello luka"
*/

function greeting(yourName) {
    var result = 'Hello ' + yourName;
    console.log(result);

}
//var name = prompt('what is your name');

//greeting(name);

// How do arguments work in functions?
// How do we add 2 numbers together in a function?

function sumNumbers(num1, num2) {
    var result = num1 + num2;
    console.log(result);
}

// sumNumbers(10, 10);


function luks(surName) {
    var full_name = console.log('Hello ' + surName);
    
}

//var name = prompt('what is your name?');
//luks(name);

// While loops
/*
var num = 0;
while(num < 100) {
    num ++;
    console.log(num);
}
*/

// For loop

for(let num = 0; num <= 100; num++) {
    //console.log(num);
}

// Data types
let yourAge = 19; // number
let yourName = 'bob'; // string
let name = {first: 'Jane', last:'Doe'} // Object
let truth = false; // boolean
let groceries = ['apple', 'banana', 'oranges']; // array
let random; // undefined
let nothing = null;

// String in Javascript (common methods)
let fruit = 'banana';
let moreFruits = 'banana\napple';
 
console.log(fruit.length); // sigrdze of .fruit
console.log(fruit.indexOf('ana')); // meramdenea 0-dan 'ana'
console.log(fruit.slice(2, 6)); // 2-dan 6-mde
console.log(fruit.replace('ban', '123')); // 'ban' anacvlebs '123'-it
console.log(fruit.toUpperCase());
console.log(fruit.toLowerCase());
console.log(fruit.charAt(2)); // [2] - ra asoa
console.log(fruit[2]); // same as charAt(2);
console.log(fruit.split('')); // damarcvla erti sityvis
console.log(fruit.split(',')); // damarcvla bevri sityvis


// Array
let fruits = ['banana', 'apple', 'orange', 'pinapples'];
fruits = new Array('banana', 'apple', 'orange', 'pinapples');

console.log(fruits[1]); 

fruits[0] = 'strawberry';

for(let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

console.log('to string', fruits.toString());
console.log(fruits.join(' * ')); // amatebs ' რასაც ჩაწერ' sityvebs shoris, array
console.log(fruits.pop(), fruits); //removes last item
console.log(fruits.push('blackberries'), fruits); // amatebs arrays boloshi
console.log(fruits[4]);
fruits[4] = 'new fruit';
console.log(fruits);
fruits.shift(); //removes first element from a list
console.log(fruits);
fruits.unshift('kiwi'); // pirvel adgilas svams unshift-i
console.log(fruits);

let vegetables = ['apple', 'tomato', 'broccoli'];
let allGroceries = fruits.concat(vegetables); //fruits akonkatebs vegetables
console.log(allGroceries);
console.log(allGroceries.slice(1, 4));
console.log(allGroceries.reverse()); //bechdavs uknidan
console.log(allGroceries.sort());

let someNumbers = [5, 10, 2, 25, 3, 255, 1, 2, 5, 334, 211];
console.log(someNumbers.sort( function(a, b) {return a-b} )); // alagebs ricxvebs umciresidan
console.log(someNumbers.sort( function(a, b) {return b-a} )); // alagebs ricxvebs umaglesidan

let emptyArray = new Array();
for(let num = 0; num < 10; num++)
{
    emptyArray.push(num);
}
console.log(emptyArray);

// Objects in Javascript
// dictionaries in Python

let student = 
{
    first: 'John',
    last: "johnson",
    age:25,
    height:170,
    studentInfo: function() {
        return this.first + '\n' + this.last + '\n' + this.age;
    }
 };

//console.log(student.first);
//console.log(student.last);
//student.first = 'notJohn'; // changing value
//console.log(student.first);
student.age++;
console.log(student.age);

console.log(student.studentInfo());

// Conditionals, Control flows (if else)

// var age = prompt('what is your age?');

// if( (age >= 18) && (age <=35) ) {
//     status = 'target demo';
//     console.log(status)
// } 
// else {
//     status = 'not my audience';
//     console.log(status);
// }




// Switch statements
switch (2) {
    case 0:
        text = 'Weekend';
        break;
    case 5:
        text = 'weekend';
        break;
    case 6:
        text = 'weekend';
        break;
        default:
            text = 'weekday';
}
console.log(text);



















