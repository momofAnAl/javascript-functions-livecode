const doubleTheNums = function(arr) {
    for (let i = 0; i < arr.length; i++) {
        arr[i] *= 2;
    }
    return arr;
};

// convert above function to an arrow function
const doubleTheNums = arr => {
    for (let i = 0; i < arr.length; i++) {
        arr[i] *= 2;
    }
    return arr;
};

console.log(doubleTheNums([1, 2, 3]));

// Write a function that prints out "Good morning, class!"
const greetingClass = () => {
    console.log('Good morning, class!');
};
greetingClass();

// Write a function that prints a random number (integer) between 1 and 100.
const printRandomNumber = () => {
    return Math.floor(Math.random() * (100)) + 1;
    //const printRandomNumber = () => Math.floor(Math.random() * 100) + 1;
};
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
//function getRandomArbitrary(min, max) {
//     return Math.random() * (max - min) + min;
// }
// use one of the functions above as the action parameter when you invoke the callback function below
const doMultipleTimes = (action, numTimes) => {
    for (let i = 0; i < numTimes; i++) {
        console.log(action());
    }
};


doMultipleTimes(randomNum, 5);

// const powerFactory = () => {
//     let powersof2 = 1;

//     return () => {
//         const currPower = powersof2;
//         powersof2 *= 2;
//         return currPower
//     };
// };

// doMultipleTimes(powerFactory(), 10)