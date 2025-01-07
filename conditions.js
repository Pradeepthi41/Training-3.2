// if(true){
//     console.log("If block executing");
// }
// if(false){
//     console.log("If block executing");
// }

// let age = 17;
// if(age >=18){
//     console.log("eligible for voting");
// }else{
//     console.log("Not eligible for voting");
// }

// age >= 18 ? console.log("Major"):console.log("Minor");

// let day = prompt("Enter a day here");

// if(day == 1){
//     console.log("Sun");
// }
// else if(day == 2){
//     console.log("Mon");
// }
// else if(day == 3)
// {
//     console.log("Tue");
// }
// else if(day == 4)
// {
//     console.log("Wed");
// }else if(day == 5)
// {
//     console.log("Thu");
// }
// else if(day == 6)
// {
//     console.log("Fri");
// }else if(day == 7){
//     console.log("Sat");
// }
// else{
//     console.log("Invalid Day");
// }

// let day = Number(prompt("Enter a day here"));
// console.log(day , typeof(day));

// switch (day) {
//         case 1:
//         console.log("Sun");
//         break;
//         case 2:
//         console.log("Mon");
//         break;
//         case 3:
//         console.log("Tue");
//         break;
//         case 4:
//         console.log("Wed");
//         break;
//         case 5:
//         console.log("Thu");
//         break;
//         case 6:
//         console.log("Fri");
//         break;
//         case 7:
//         console.log("Sat");
//         break;
//     default:console.log("Invalid day");
//         break;
// }

//!take 3 values and print which value is gretaer among the three values.
//! let a =20;
//! let b=140;
//! let c= 100;

//! do this with both if-else ladder and switch condition



    // Get user inputs
    let a = parseInt(prompt("Enter the first value:"));
    let b = parseInt(prompt("Enter the second value:"));
    let c = parseInt(prompt("Enter the third value:"));

    // Using If-Else Ladder to compare
    if (a > b && a > c) {
        console.log(a + " is the greatest.");
    } else if (b > a && b > c) {
        console.log(b + " is the greatest.");
    } else if (c > a && c > b) {
        console.log(c + " is the greatest.");
    } else if (a === b && b === c) {
        console.log("All values are equal.");
    } else {
        console.log("There is a tie between some values.");
    }

    // Using Switch statement to compare
    switch (true) {
        case (a > b && a > c):
            console.log(a + " is the greatest.");
            break;
        case (b > a && b > c):
            console.log(b + " is the greatest.");
            break;
        case (c > a && c > b):
            console.log(c + " is the greatest.");
            break;
        case (a === b && b === c):
            console.log("All values are equal.");
            break;
        default:
            console.log("There is a tie between some values.");
    }

