var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function myClassDecorator(constructor) {
    //add a property to the the class prototype
    constructor.prototype.newProperty = "This is a new property";
    constructor.prototype.newMethod = function () {
        console.log("This is a new method");
    };
}
var MyClass = /** @class */ (function () {
    function MyClass() {
    }
    MyClass.prototype.newMethod = function () { };
    MyClass = __decorate([
        myClassDecorator
    ], MyClass);
    return MyClass;
}());
var obj = new MyClass();
console.log(obj.newProperty);
obj.newMethod();
