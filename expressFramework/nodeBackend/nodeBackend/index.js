// Question 1

// let {wordCount} = require("./Question1.js");
// wordCount();


//Question 2

// let {wordCap,revStr, countVowels} = require("./Question2.js");
// wordCap();
// revStr();
// countVowels();


//Question 3

// let {logOS} = require("./question3.js");
// logOS();

// Question 4

let {writeFile,readFile,updateFile,deleteFile} = require("./question4.js");
//Don't run writeFile() and deleteFile() together as they work on same file
//first writeFile() then deleteFile()
writeFile();
readFile();
updateFile();
deleteFile();