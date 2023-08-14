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

course = 12345