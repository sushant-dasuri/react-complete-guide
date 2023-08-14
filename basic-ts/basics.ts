//Primitives: number, string, boolean
//More Complex types: arrays, objects
//Function types, parameters


//Primitives

let age: number;

age = 12;

let userName: string | string[];

userName = 'Max';

let isInstructor: boolean;

isInstructor = true;

//More complex types

let hobbies: string[];

hobbies = ['Sports', 'Cooking'];

type Person = {
    name: string,
    age: number
};

let person: Person;

person = {
    name: 'Max',
    age: 32
}

let people: Person[];

//Type Inference

let course: string | number = 'React - The complete guide';

course = 12345;

//Functions and Types
function add(a: number, b: number) {
    return a + b;
}

function printOutput (value: any) {
    console.log(value);
}

//Generics
function insertAtBeginning<T>(array: T[], value: T) {
    const newArray = [value, ...array];
    return newArray;
}

const demoArray = [1, 2, 3];

const updatedArray = insertAtBeginning(demoArray, -1);

const stringArray = insertAtBeginning(['a', 'b', 'c'], 'd');