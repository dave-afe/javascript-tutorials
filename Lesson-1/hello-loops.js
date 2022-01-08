// loops and why they are important 
let endNumber = 20;
let names = [
    "Alex",
    "Kweku",
    "Ansa",
    "Frost",
    "Joe"
];
let levels = [
    "creche",
    "kindergaten",
    "primary",
    "junior high",
    "senior high",
    "polytechnic or university"
];
function displayList(item) {
    for (let i=0; i<item.length; i++) {
        console.log(item[i]);
    };
};
function displayNumbers(lastNumber) {
    for (let i=1; i <= lastNumber; i++) {
        console.log(i);
    };
}
// for-of 
console.log("Here are the list of players and agents")
for(n of names) {
    console.log(n)
};
console.log("-----------------");
// foreach loops
levels.forEach(function(n) {
    console.log(n)
});
