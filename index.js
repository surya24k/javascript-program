//         /*Question 1: 
// Write a program that prints the numbers from 1 to 100. But for multiples of three, print "Fizz" instead of the number and for the 
// multiples of five, print "Buzz". For numbers which are multiples of both three and five, print "FizzBuzz".*/

for(let i=1;i<=100;i++){
    if(i%3==0 && i%5==0){
        console.log("FizzBuzz");
    }
    else if(i%3==0){
        console.log("Fizz");
    }
    else if(i%5==0){
        console.log("Buzz");
    }
    else{
        console.log(i)
    }
}

// /2.Write a function that checks if a given string is a palindrome (reads the same forwards and backwards)./
// 

function palindrome(x){
    let y=x.split("").reverse().join("");
    if(x==y)
        {
            console.log("Palindrome")
        }
        else{
            console.log("Not a palindrome")
        }
}
let x="malayalam"
let m="Hello Everyone"
palindrome(x)
palindrome(m)


// /*3.Write a function that takes an array of numbers and returns the largest number.*/
let arr=[7,8,9,10,51,12,61,81,71]
function largest(a){
    let max=a[0]
    for(let i=0;i<a.length;i++){
        if(a[i]>max)
            max=a[i]
    }
    return max
}
console.log(largest(arr)) 

// /4.Write a function that takes a string and returns an object with each character as a key and its number of occurrences as the value./

let val = "welcome";
function keyvaluepair(str) {
    let chars = {};
    for (let i = 0; i < str.length; i++) {
        let char = str[i];
        if (chars[char]) {
        chars[char]++;
        } 
        else {
        chars[char] = 1;
    }
}
return chars;
}

console.log(keyvaluepair(val));

// /5.Write a function that takes a string and returns the longest word in the string./
let str="Hello Mr Suryakumar"
function longest(s){
    let a=s.split(" ")
    let max=a[0]
    for(let i=0;i<a.length;i++){
        if(a[i].length>max.length)
            max=a[i]
    }
    return max
}
console.log(longest(str)) 

// /6.Write a function that takes a number as input and returns its factorial./

let x=5
function factorial(x){
    let val=1
    for (let i=1;i<=x;i++){
        val*=i
    }
    return val
    }

console.log(factorial(x))


// /7.Write a function that converts a temperature from Celsius to Fahrenheit./

let c=30
function celsius_to_Fareheit(c){
    return (c*9/5)+32
}
console.log(celsius_to_Fareheit(c)) 


// /8.Given an array containing n distinct numbers taken from 0, 1, 2, ..., n, find the one that is missing from the array./
let a = [0, 1, 2, 3, 4, 5];
function missing(nums) {
    let n = nums.length;
    let se = (n * (n + 1)) / 2;
    for (let i = 0; i < nums.length; i++) { 
        se -= nums[i];
    }
    return se;
}


console.log(missing(a));