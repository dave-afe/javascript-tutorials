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