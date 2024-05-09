// using the given information I can create two variables that are immutable and underneath the declared variables I will create a function 
const PI = 3.1415;
const radius = 5;
// const area = PI * radius * radius;
// i calculated the area in meters of the space with the equation and info that was given and decided to make the variable area a number instead of the equation 
const area = 78.54

let plants = 20;


// created a variable for minimum space for plants 
const minimumSpace = 0.8

console.log(area*minimumSpace)



function growingPains(area, plants){
    console.log(plants)
    function doublePlants(plants){
        return plants * plants
    }
    plants = plants;
    console.log(plants)
    

}

