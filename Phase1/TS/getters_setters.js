var Person = /** @class */ (function () {
    function Person() {
    }
    Object.defineProperty(Person.prototype, "age", {
        //getter method
        get: function () {
            console.log("getter method called");
            return this._age;
        },
        //setter methods are used to set the values for class properties
        set: function (theAge) {
            console.log("setter method called");
            this._age = theAge;
        },
        enumerable: false,
        configurable: true
    });
    return Person;
}());
var person1 = new Person();
person1.age = 10;
console.log(person1.age);
