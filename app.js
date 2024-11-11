const instructor = require("./instructor.js");

instructor.addinstruc("donald", "duck", "EGL123", ["L1", "L9", "L5"], "SEG");


const firstname = instructor.getinstrucfirstname(0);  
const lastname = instructor.getinstruclastname(0);    
const imodule = instructor.getinstrucmod(0);           
const classes = instructor.getinstrucclass(0);        
const school = instructor.getinstrucschool(0);       

console.log(`${firstname} ${lastname} teaches ${imodule} at ${school}.`);
console.log(`${firstname} is teaching the following classes: ${classes}`);
