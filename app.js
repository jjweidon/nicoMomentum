const age = parseInt( prompt("HOw  old are you?") );

if(isNaN(age)) {
    console.log("Please write a number");
} else if(age < 18) {
    console.log("You are tooo young.");
} else if (age >= 18 && age <= 50) {
    console.log("You can drink.");
} else {
    console.log("You can't drink.");
}