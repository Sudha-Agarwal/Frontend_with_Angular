let x:string = "Hello";

let y:any = "10";
y = 10;

function throwError(message:string):never{
    throw new Error(message);
}

//union type
function add(a: number | string, b: number | string) {
	if (typeof a === 'number' && typeof b === 'number') {
    	return a + b;
	}
	if (typeof a === 'string' && typeof b === 'string') {
    	return a.concat(b);
	}
	throw new Error('Parameters must be numbers or strings');
}
x = "Hello" ;
y = "World";

"Hello World";

let userInput:unknown;

userInput = 10;

userInput + 10;
if(typeof userInput === 'number'){
    userInput + 10;
}

const users:readonly string[] =["abc","xyz"]; 
users.push("abc1");

const a1: number = 10;

//function types
let greeting:(name:string) =>string;

greeting = function(name:string): string{
    return "Hello";
}


//Type aliases
type chars = string;

let message :chars;