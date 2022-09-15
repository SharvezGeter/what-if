const prompt = require('prompt-sync')({sigint: true});
let number = Number(prompt("Please enter a number one though seven: "));
console.log(number);


if (number === 1){
    console.log("Monday")
} if (number === 2){
    console.log("Tuesday")
} if (number === 3){
    console.log("Wednesday")
} if (number === 4){
    console.log("Thursday")
} if (number === 5){
    console.log("Friday")
} if (number === 6){
    console.log("Saturday")
} if (number === 7){
    console.log("Sunday")
}
else{"eror"}
