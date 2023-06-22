let strs = "Hello TypeScript"; //type inference.
// strs = 100
console.log(strs);
//type annotation
let n;
console.log(n);
let b;
let o;
// let arr = new Array();
let arr = new Array(); // <any> is useless
arr[0] = 100;
//or
let array = [100, 200];
//or
// we usualy dont write the below
//let array = [100, 200, "Hello", true];  // different type inferences are there. it keeps changing for this array so no a good way to use.
let x;
x = 100;
x = "hello";
//USE CASE -> inncase we wanna display value then x takes that. and otherwise incase of errors it takes string to display errors.
function Add(x, y) {
    if (x == 0) {
        return "x should not be zero !";
    }
    return x + y;
}
let result = Add(20, 30);
let Square = (x) => x * x;
//optional parameters.
//   function PrintBook(author: string, title?: string){
//     console.log(author, title);
//   }
//PrintBook("unknown");
//Default parameters.
// we write void because it dowuble checks if we are returning something or not.
function PrintBook(author = "unknown", title = "Unknown") {
    console.log(author, title);
}
PrintBook();
PrintBook("Usain Bolt", "Faster than lightning");
//let person: IPerson = {name: "vicky", age:25, xyz:123}; //Error
class Car {
    //   constructor();
    //   constructor(name: string, speed: number);
    //   constructor(name?: any, speed?: any) {
    //     this.name = name;
    //     this.speed = speed;
    //   }
    constructor(name = "BMW", speed = 100) {
        this.YoM = "1990";
        this.name = name;
        this.speed = speed;
    }
    accelerate() {
        return `The car ${this.name} is running @ ${this.speed} kmph !`;
    }
}
// let car = new Car();
// console.log(car.accelerate());
class JamesBondCar extends Car {
    constructor(name, speed, fly) {
        super(name, speed);
        this.canFly = fly;
    }
    accelerate() {
        return `${super.accelerate()}. The Year of Manufacturing : ${this.YoM}`;
    }
    static GetNitroPower() {
        console.log(this.name);
        console.log(this.useNitroPower);
    }
}
JamesBondCar.useNitroPower = true;
let jbc = new JamesBondCar("AUDI", 300, true);
console.log(jbc.accelerate());
JamesBondCar.GetNitroPower();
//enums are collections of known symbols. - they try to give some possible set of values.
var Designations;
(function (Designations) {
    Designations[Designations["Trainer"] = 0] = "Trainer";
    Designations[Designations["Developer"] = 1] = "Developer";
    Designations[Designations["Architech"] = 2] = "Architech";
})(Designations || (Designations = {}));
class Emp {
    getSalary() {
        return this.salary;
    }
}
var e = new Emp();
e.designation = Designations.Trainer;
// Enhanced Class Syntax
class EnhancedCar {
    constructor(name = "BMW", speed = 200) {
        this.name = name;
        this.speed = speed;
    }
}
let ec = new EnhancedCar();
// Generics
function Swap(x, y) {
    // swap logic
}
Swap(20, 30); //applies to both params.
Swap("Hello", "Generics");
class Point {
}
let point = new Point();
