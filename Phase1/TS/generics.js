//Generic Functions
function identity(arg) {
    return arg;
}
var result1 = identity("Hello World");
console.log(result1);
var result2 = identity(10);
console.log(result2);
//Generic class
var Box = /** @class */ (function () {
    function Box() {
    }
    return Box;
}());
