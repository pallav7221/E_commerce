// Given an array of string generate an array with their first characters

// Sample Input - ["Masai", "School"]

// Sample Output - ["M", "S"]

var str = ["Masai", "School"];

var result = str.map(function(ele){
    return ele[0];
});
console.log(result);