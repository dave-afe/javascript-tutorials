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