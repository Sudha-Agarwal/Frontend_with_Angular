class Person {
    private _age:number;
    private _firstName:string;
    private _lastName: string;

    //setter methods are used to set the values for class properties
    public set age(theAge: number){
        console.log("setter method called");
        this._age = theAge;        
    }
//getter method
    public get age():number{
        console.log("getter method called");
        return this._age;
    }  

}

let person1 = new Person();
person1.age = 10;
console.log(person1.age);

class Student extends Person{
    
}