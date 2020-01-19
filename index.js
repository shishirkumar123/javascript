console.log('from index.js file')

a = 'hello';
let b = 'hi'; //after ecma 6
var c = 'bye'; //before ecma 6

const pi = 3.14

console.log(a);
b = 'ni';
console.log(b);
console.log(c);
//pi=9; //uncomment to see error
console.log(pi);

let age = prompt('Enter age?');
document.getElementById("song").innerHTML = "friend : " +  age;
