/*
module is used to import a certain file to another file.

like here second.js's properties is used in the index.js file.

Firstly, we have to export the second.js file by using "module.export= object_name" method.
then in the index file to import the second.js file we have to use require() method which helps to import the objects from the second.js
*/

const paneer = require("./second");     //require() is used to include a module in node.js

console.log("Hello World", paneer)