// using the given information I can create two variables that are immutable and underneath the declared variables I will create a function 
const PI = 3.1415;
const radius = 5;
const area = PI * radius * radius;
// i calculated the area in meters of the space with the equation and info that was given and decided to make the variable area a number instead of the equation 
// created a variable for minimum space for plants 
const minimumSpace = 0.8
let plants = 20;
const maxCapacity = area/minimumSpace

//to determine minimum area that the plants will need in the weeks 1-3
let week1 = plants * minimumSpace /* 16*/
let week2 = (week1 * 2); /* 32*/
let week3 = (week2 * 2); /* 64*/

console.log(week1, week2, week3)

//percentage of area that the plants are taking up 
let week1space = (week1 / area) * 100; /* 20*/
let week2space = (week2 / area) * 100; /* 40*/
let week3space = (week3 / area) * 100; /* 80*/

console.log(week1space, week2space, week3space)
//
// let weekArray = [week1space, week2space, week3space]
// switch(weekArray){
//     case [0]:

// }

function plantsGrowth(weeks){
    const plantsGrowing = plants * (2 ** weeks)
    if(weeks === 1){
        console.log("Theres more room for plants to be planted! The percentage of area the plants are taking up is " + week1space + ".")
    } if() {
        console.log("They are growing at an acceptable rate, but the plants should be monitored. " + `${week2space}% of the area is being used.` )
    } if(weeks >= 3){
        console.log("The plants must be pruned." + `${week3space}% of the area is being taken up.`)
    }
}

plantsGrowth(2)

