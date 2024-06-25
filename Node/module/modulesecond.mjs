/*
CommonJS
--------
CommonJS is a synchronous module system. 
This means that when a module is imported, the code execution is blocked until the module is loaded.

*/

function simple(){
    console.log("Simple is Complex")
}

module.exports = simple;

//===========================================================================================================================

/*
ES Modules
----------
It is an asynchronous model for loading modules.

*/

//Here the export keyword is used which makes the code smaller

export function simple(){
    console.log("Simple is Complex")
    return 45
}

export default function simple2(){
    console.log("Simple2 is Complex")
}

