function myClassDecorator(constructor:Function){
    //add a property to the the class prototype
    constructor.prototype.newProperty = "This is a new property";

    constructor.prototype.newMethod = function (){
        console.log("This is a new method");
    }
}

@myClassDecorator
class MyClass{    
    newProperty:any;
    newMethod(){}
}

const obj = new MyClass();
console.log(obj.newProperty);
obj.newMethod();

