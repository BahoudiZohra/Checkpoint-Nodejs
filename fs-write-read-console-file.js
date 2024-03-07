/**
 * Node FS Example
 * Node JS Write to File
 */
// var fs = require("fs");

// var writeStream = fs.createWriteStream("Hello.txt");
// writeStream.write("Hi, JournalDEV Users. ");
// writeStream.write("Thank You.");
// writeStream.end();

/**
 * Node FS Read File
 * Node JS Read File
 */
// var fs = require("fs");

// function readData(err, data) {
// 	  console.log(data);
// }

// fs.readFile('Hello.txt', 'utf8', readData);


// console.log(readData);

/**
 * Node FileSystem Module  
 * Node JS Read File Binary Data
 */
var fs = require("fs");

fs.readFile('Hello.txt', function(err, data) {
	  console.log(data);
});

