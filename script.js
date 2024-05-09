const PI = 3.1415;
const radius = 5;
const area = PI * radius * radius;
let plantArea = 20;
// created a variable for minimum space for plants 
const minimumSpace = 0.8

// using the given information I can create two variables that are immutable and underneath the declared variables I will create a function 

function growingPains(){ 
    if(plantArea === 20){
        console.log(area * minimumSpace)
    }
}