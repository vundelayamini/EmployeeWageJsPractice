//Write a program to simulate a coin flip and print out "Heads" or "Tails" accordingly.
let flip = Math.floor(Math.random() * 10) %2 +1;
if(flip == 1)
console.log("Heads")
else
console.log("Tails")
