//Given an array of string generate an array whose first or last character is a

// Sample Input - ["assignment", "problem", "media", "upload"]

// Sample Output - ["assignment", "media"] 

        var str = ["assignment", "problem", "media", "upload"];
        var result = str.filter(function (ele) {
            if (ele[0] == "a" || ele[ele.length - 1] == "a") {
                return ele;
            }
        })
        console.log(result);