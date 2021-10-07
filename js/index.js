// Actual Intrepter

const readline = require('readline');

const line =
readline.createInterface({

input: process.stdin,
output: process.stdout,

});
line.question("Welcome to HADI Terminal, type ? for commands :)", (answer) => {
  if(answer === "?" || answer === "?") {
    console.log("Page 1/1");
    console.log("Exit // Exits terminal");
  } else if (answer === "exit" || answer === "exit") {
    console.warn("That doesent work");
  } else {
    console.log("hdierr: No command or Invaild command or input, terminating process");
  }
line.close();
});
