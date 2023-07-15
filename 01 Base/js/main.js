// -=-=-=-=-=-=-=- Welcome to JS -=-=-=-=-=-=-=-
// ------- working with console -------
console.log("Some text message!");
console.warn("Some warning message!");
console.error("Some error message!");

// ------- let vs var -------
console.log(salary);    // error with let

let number = 133;
var salary = 1350.50;

var salary = 777;       // error with let

if (1 > 0) {
    var inner = 34.5;
}

console.log(inner);     // error with let

// ------- data types -------
// JS it's a dynamic typing languag, so we can change the type in runtime

let data = 120;     // number 
data = 33.9;        // number

data = "hello";     // string
data = 'hey';       // string
data = 'A';         // string

data = true;        // boolean

data = undefined;   // undefined (bad practice)
data = null;        // null (good practice)

data = [1, 2, 10, 44];                          // object

data[100] = 55;
console.log(data[40]);

data = { id: 1001, login: 'super' };            // object
data = () => { console.log("I'm a function!"); }; // function
data = [
    1, true, 'hi',
    [1, 2, 3],
    { id: 20, price: 120 },
    () => { console.log("..."); }
]; // object

// check data type: typeof
console.log("Type of data:", typeof (data));

// ------- browser dialogs -------
alert("Some alert message!");

let email = prompt("Enter your email:", "example@ukr.net");

// concatenation: "text" + "text"
console.log("Your email is " + email + "!");
// interpolation: `text...${expression}...text`
console.log(`Your email is ${email}!`);

// convert string to number: +str
let year = +prompt("Enter current year:", 2023);

if (isNaN(year)) console.warn("Invalid number format!");
else {
    console.log(`Current year ${year}`);
    console.log(`Next year ${year + 1}`); // "1" + "1" = "11"
}

const liked = confirm('Do you like JS?');
console.log(liked ? "You are crazy!" : "Keep studing!");

// ------- function -------
function summ(a, b) {
    return a + b;
}

console.log(summ(4, 8));
console.log(summ([1, 2], 8));
