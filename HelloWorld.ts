let strs = "Hello TypeScript"; //type inference.
// strs = 100
console.log(strs);

//type annotation
let n: number;
console.log(n);

let b: boolean;
let o: object;
// let arr = new Array();

let arr: Array<number> = new Array<number>(); // <any> is useless
arr[0] = 100;
//or
let array: number[] = [100, 200];
//or

// we usualy dont write the below
//let array = [100, 200, "Hello", true];  // different type inferences are there. it keeps changing for this array so no a good way to use.

let x: number | string;
x = 100;
x = "hello";
//USE CASE -> inncase we wanna display value then x takes that. and otherwise incase of errors it takes string to display errors.

function Add(x: number, y: number): number | string {
  if (x == 0) {
    return "x should not be zero !";
  }
  return x + y;
}

let result: number | string = Add(20, 30);

let Square = (x: number) => x * x;

//optional parameters.
//   function PrintBook(author: string, title?: string){
//     console.log(author, title);
//   }

//PrintBook("unknown");

//Default parameters.
// we write void because it dowuble checks if we are returning something or not.
function PrintBook(
  author: string = "unknown",
  title: string = "Unknown"
): void {
  console.log(author, title);
}
PrintBook();

PrintBook("Usain Bolt", "Faster than lightning");

interface IPerson {
  name: string;
  age: number;
}

//let person: IPerson = {name: "vicky", age:25, xyz:123}; //Error

class Car {
  // private id:number;
  name: string;
  speed: number;
  protected YoM: string = "1990";

  //   constructor();
  //   constructor(name: string, speed: number);
  //   constructor(name?: any, speed?: any) {
  //     this.name = name;
  //     this.speed = speed;
  //   }
  constructor(name: string = "BMW", speed: number = 100) {
    this.name = name;
    this.speed = speed;
  }

  accelerate(): string {
    return `The car ${this.name} is running @ ${this.speed} kmph !`;
  }
}

// let car = new Car();
// console.log(car.accelerate());

class JamesBondCar extends Car {
  canFly: boolean;
  static useNitroPower: boolean = true;
  constructor(name: string, speed: number, fly: boolean) {
    super(name, speed);
    this.canFly = fly;
  }
  accelerate(): string {
    return `${super.accelerate()}. The Year of Manufacturing : ${this.YoM}`;
  }

  static GetNitroPower() {
    console.log(this.name);
    console.log(this.useNitroPower);
  }
}

let jbc = new JamesBondCar("AUDI", 300, true);
console.log(jbc.accelerate());
JamesBondCar.GetNitroPower();

interface IEmp {
  name: string;
  empId: number;
  salary: number;
  getSalary: () => number;
}

//enums are collections of known symbols. - they try to give some possible set of values.
enum Designations {
    Trainer,
    Developer, 
    Architech,
}
class Emp implements IEmp {
  name: string;
  empId: number;
  salary: number;
  designation: Designations;
  getSalary(): number {
    return this.salary;
  }
}

var e = new Emp();
e.designation = Designations.Trainer;
// Enhanced Class Syntax

class EnhancedCar {
  constructor(public name: string = "BMW", public speed: number = 200) {}
}

let ec = new EnhancedCar();

// Generics

function Swap<T>(x: T, y: T) {
  // swap logic
}

Swap<number>(20, 30); //applies to both params.
Swap<string>("Hello", "Generics");

class Point<T> {
  x: T;
  y: T;
}

let point = new Point<number>();
