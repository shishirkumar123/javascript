//primitives(or value types) - string, number, boolean
let name = 'Antonio';
let age = 44;
let isMarried = true;
let lastName = undefined;

let selectedColor = null; //typeof selectedColor will output "object"

age = 'reassign allowed?'; //type of variable can change since javascript is dynalic language(as opposed to static)
                           //in chrome console try - typeof age, before and after reassignment Is it allowed in TS?
console.log(age);

//Reference type - Object, Array, Function
//Object
let person = {          //works without the keywork let
    name: 'Rahul',
    age: 30
};

person.name = "Aamir";
console.log(person.name);
selection = 'name';
console.log(person[selection]);
console.log(person);
console.log("multiplying : " + person.age * 2);

//Array

let colors = ['violet', 'indigo'];
console.log(colors); //see the console and observe the indexes
//when you expand the object complete in console, you see various javascript functions like f concat(), f fill(). Where are they defined?
console.log(colors[0]);
colors[2] = 'blue';
console.log(colors); 
colors[3] = 45; //elements of an array doesn't neccessorily meant to be  same data type
console.log(colors.length); 

//Function

function fun(name){
    console.log('hello ' + name);
}

function add(arg1, arg2){
    sum = arg1 + arg2; 
    console.log('The sum of ' + arg1 + ' and ' + arg2 + ' is ' + sum);
}

fun('john');
add(2,3);
add('Hello', 'World');