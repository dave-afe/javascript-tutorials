let date = new Date(1999, 4, 28);
console.log(date)


// Lessons on Javascript Object's

let person = {
    firstName: "Jamila",
    age: 21,
    isFemale: true,
    balance: 100.34,
    birthDate: new Date(2000, 1, 28).toJSON(),
    address: {
        city: "London",
        postCode: "SW9"
    }
};

// Lessons on how to access Javascript Object's 

let nameOfPerson = person.firstName;
let age = person.age;
let birthdate = person.birthDate;

let sentence = `The name is ${nameOfPerson} and her age is ${age}
she was born on ${birthdate} in the city of ${person.address.city} `;
console.log(sentence)

// Lessons on array in Javascript
let names = [
    "Alex",
    "Jamila",
    "Joe",
    "Aisha"
]

let students = [
    {
        fullname: "Michael Adoa",
        age: 23,
        birthdate: new Date(1998, 3, 13),
        isBrilliant: true
    },
    {
        fullname: "Abena Serwaa",
        age: 27,
        birthdate: new Date(1999, 8, 20),
        isBrilliant: true
    },
    {
        fullname: "Killer Man",
        age: 27,
        birthdate: new Date(1994,11, 20),
        isBrilliant: false
    }
]