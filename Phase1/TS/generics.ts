//Generic Functions
function identity<Type>(arg:Type) : Type{
    return arg
}

let result1 = identity<string>("Hello World");
console.log(result1);
let result2 = identity<number>(10);
console.log(result2);

//Generic class

class Box<T>{

}


