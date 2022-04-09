// Given an array of strings print the length of each string

// example: ["apple", "windows", "ubuntu"]

// var str = ["apple", "windows", "ubuntu"];

// var lengthOfEachStr = str.forEach(function(s){
//     console.log("length of "+ s +" is "+ s.length);
// });
// lengthOfEachStr;




// function isBigEnough(arr){
//     return arr >= 10;
// }
// var arr = [12, 4, 56, 6, 3, 56].filter(isBigEnough);
// console.log(arr);

const array = [-3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

function isPrime(num) {
    for (let i = 2; num > i; i++) {
        if (num % i == 0) {
            return false;
        }
    }
    return num > 1;
}

console.log(array.filter(isPrime)); // [2, 3, 5, 7, 11, 13]
