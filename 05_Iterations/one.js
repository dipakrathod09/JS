// For Loop

// for (let i = 0; i <= 10; i++) {
//     const element = i;
//     if (element ==5) {
//         console.log("5 is Best element");
//     }
//     console.log(element);
// }

// console.log(element);

// for (let i = 1; i <= 10; i++) {
//     console.log(`Outer Loop : ${i}`);
//     for (let j = 1; j <= 10; j++) {
//         // console.log(`Inner Loop : ${j}`);
//         console.log(i + "*" + j + " = " + i*j);
//     }
// }

// let myArray =["Flash","BatMan","SuperMan","IRON MAN"]
// console.log(myArray.length);
// for (let index = 0; index < myArray.length; index++) {
//     const element = myArray[index];
//     console.log(element);
// }


// Break and Continue

// for (let index = 1; index <= 20; index++) {
//     if(index==5) {
//         console.log(index);
//         break;
//     }
//     console.log(`Value of I : ${index}`);
// }

for (let index = 1; index <= 20; index++) {
    if(index==5) {
        console.log(index);
        continue;
    }
    console.log(`Value of I : ${index}`);
}