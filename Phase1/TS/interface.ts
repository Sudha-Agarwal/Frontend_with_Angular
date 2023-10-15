interface Shape{
    getArea : () => number;
}

class Reactangle implements Shape{
     public getArea():  number{
        return 5 * 4;
     }
}
class Circle implements Shape{
    public getArea():  number{
        return 2 * 3.14 * 5;
     }
}