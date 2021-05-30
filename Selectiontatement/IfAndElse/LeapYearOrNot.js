//program that takes a year as input and outputs the Year is a Leap Year or not a Leap Year.
let input = require('readline');
let prompts = input.createInterface(process.stdin,process.stdout);
prompts.question("Enter year",function(year) {
   let check1 = year%4;
   let check2 = year%100;
   let check3 = year%400;
   if((check1 == 0 && check2 != 0) || check3==0)
   console.log("this is leap year")
   else
   console.log("not a leap year") 
    process.exit();
});
