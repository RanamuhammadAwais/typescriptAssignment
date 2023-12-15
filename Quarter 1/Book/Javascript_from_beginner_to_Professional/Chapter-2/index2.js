"use strict";
/*variables The first time you create a variable, you declare it.
The second time you call a variable, you only use the
name of the existing variable to assign it a new value
it can re assigned*/
var b = 5;
let a = 2;
let firstname = "eric";
a = 9;
firstname = "zopya";
console.log(a);
/* var has global scope and let has block scope. var 's global scope means
that you can use the variables defined with var in the entire script. On the
other hand, let 's block scope means you can only use variables defined
with let in the specific block of code in which they were defined.
Remember, a block of code will always start with { and end with } ,
which is how you can recognize them.*/
let n = 5;
n = 6;
/*This is the ssolution if we want to use double qoutes and single in a sentence
There is a special character that can be used to tell JavaScript, "do not take
the next character as you normally would." This is the escape character, a
backslash.*/
let greet = "Hello , what's your job dear \n \"Mike\"?";
console.log(greet);
//Practice 2.1
let str1 = 'Laurence';
let str2 = "Svekis";
let val1 = undefined;
let val2 = null;
let myNum = 1000;
console.log(typeof (str1));
console.log(typeof (str2));
console.log(typeof (val1));
console.log(typeof (val2));
console.log(typeof (myNum));
