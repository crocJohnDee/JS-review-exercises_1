// <!-- @acxbank for-js-9 -->
// ### Q1. for-js-9

// Write a function that takes a string argument and returns the number of spaces in the string.  For example,

// ```js
// numberOfSpaces("The quick brown fox jumped over the lazy dogs.")
// ```

// returns 8.  Make sure your function returns the result, rather than printing it.
const numberOfSpaces = str => [...str].filter(x => x === " ").length;

console.log(numberOfSpaces("The quick brown fox jumped over the lazy dogs."));

// <!-- end @acxbank -->
// <!-- @acxbank for-js-12 -->
// ### Q2. for-js-12

// How many numbers will this loop print?

// ```js
for (let i = 0; i > 10; ++i) {
    console.log(i);
}
// ```
// ----------------------------------
// 0 because i is not grater than 10
//-----------------------------------
// Be careful!
// <!-- end @acxbank -->
// <!-- @acxbank for-js-6 -->
// ### Q3. for-js-6

// What is the output of this code? Pay careful attention to the for loop!

// ```java
// var str = "CANTALOUPE";
// for (let i = str.length - 1; i >= 0; i -= 2) {
//     console.log(s[i]);
// }
// ```
//--------------------------------------------------------------------------------------------
// If the right variable name would be but in the log function (str) the output will spell out the characters starting from the back of the string and skipping one each time
//--------------------------------------------------------------------------------------------
// <!-- end @acxbank -->
// <!-- @acxbank remove-zero -->
// ### Q4. remove-zero

// Write a function that, given a string as input, will remove all 0s from that string.

// Example:
// ```javascript
// removeZero("hello2016")  // returns "hello216"
// ```
const removeZero = str => str.replace(/0/g, "");

console.log(removeZero("he0000llo20106"));

// <!-- end @acxbank -->
// <!-- @acxbank min-function -->
// ### Q5. min-function

// Write a function `min` that takes two arguments and returns their minimum.

// ```javascript
// // Your code here.

// console.log(min(0, 10));
// // → 0
// console.log(min(0, -10));
// // → -10
// ```
const min = (n1, n2) => Math.min(n1, n2);

console.log(min(0, 10));

// <!-- end @acxbank -->
// <!-- @acxbank sum-every-third -->
// ### Q6. sum-every-third

// Write a function called `sumEveryThird` that takes in an array of numbers as an argument and returns the sum of every third number in the array.

// Examples:
// ```js
// sumEveryThird([1,2,3,4,5,6,7,8,9]); //returns 18
// sumEveryThird([12,5,9]); //returns 9
// sumEveryThird([4,9,1,3,8,1]); returns 2
// ```
const sumEveryThird = arr => {
    let filterArr = [];
    for (let i = 2; i < arr.length; i += 3) {
        filterArr.push(arr[i]);
    }
    return filterArr.reduce((acc, val) => acc + val);
}

console.log(sumEveryThird([1, 2, 3, 4, 5, 6, 7, 8, 9]));

// <!-- end @acxbank -->
// <!-- @acxbank find-longest-word -->
// ### Q7. find-longest-word

// Write a function `findLongestWord()` that takes an array of words and returns the length of the longest one.

// Example:
// ```js
// findLongestWord(['dog', 'cat', 'bat', 'octopus']); // returns '7'
// ```
const findLongestWord = arr => Math.max(...arr.map(x => x = x.length));

console.log(findLongestWord(['dog', 'cat', 'bat', 'octopus']));

// <!-- end @acxbank -->
// <!-- @acxbank tip-calculator -->
// ### Q8. tip-calculator

// Write a function called `tipCalculator` that takes in three arguments: total bill amount, tip percentage, and number of people. The function should return how much each person owes in tip.

// Examples:
// ```js
// tipCalculator(500, .15, 10); //returns 7.5
// tipCalculator(80, .20, 2); //returns 8
// ```
const tipCalculator = (amount, percentage, people) => amount * percentage / people;

console.log(tipCalculator(80, .20, 2));

// <!-- end @acxbank -->
// <!-- @acxbank repeat-a-string -->
// ### Q9. repeat-a-string

// Write a function to concatenates a given string `n` times. The function should take in two arguments: the first argument should be the string, and the second argument should be the number of times the string should be concatenated. If no second argument is entered, the string should be logged once.

// Example output:
// ```javascript
// console.log(repeat('Ha!')); 
// console.log(repeat('Ha!', 2)); 
// console.log(repeat('Ha!', 3));
// "Ha!" 
// "Ha!Ha!" 
// "Ha!Ha!Ha!"
// ```
const repeat = (str, n) => n ? str.repeat(n) : str;

console.log(repeat("Ha", 5));

// <!-- end @acxbank -->
// <!-- @acxbank print-sequence -->
// ### Q10. print-sequence

// Write a loop that will log the following sequence to the console:
// `1,2,4,7,11,16,22,29,37,46,56,67,79,92`
let sum = 1;
for (let i = 0; i < 14; i++) {
    sum += i;
    console.log(sum);

}


// Hints:
// The difference between two adjacent elements in this sequence increments by 1 at each step. A `while` loop might be helpful...

// <!-- end @acxbank -->
// <!-- @acxbank anagram-checker -->
// ### Q11. anagram-checker

// Write a function called `anagramChecker` that takes in two strings as arguments and returns `true` if the strings are anagrams, or returns `false` if the two strings are not anagrams (two words are anagrams if they both contain the exact same letters, even if the letters are arranged in a different order).

// Examples:
// ```js
// anagramChecker("listen", "silent"); //returns true
// anagramChecker("hello", "goodbye"); //returns false
// anagramChecker("bus","sub"); //returns true
// anagramChecker("boat", "dragon"); //returns false
// ```
const anagramChecker = (str1, str2) => [...str1].sort().join("") === [...str2].sort().join("");

console.log(anagramChecker("hello", "goodbye"));

// <!-- end @acxbank -->
// <!-- @acxbank max-array-slice-sum -->
// ### Q12. max-array-slice-sum

// Write a function called `maxSliceSum` that takes an array as its argument and returns the maximum sum from any slice of the array. A 'slice' is any set of consecutive members of the array, so for the array `[1,2,3,4,5]`, `[1,2]` is a slice, `[2,3,4,5,]` is a slice, `[4,5]` is a slice...even `[1]` is a slice.

// Examples:
// ```js
// maxSliceSum([1,2,-20,4,5]); //returns 9
// maxSliceSum([-100,1,2,-100,4,5,6,7]); //returns 22
// maxSliceSum([1,2,3,4,5]); //returns 15
// maxSliceSum([10,-20,10]); //returns 10
// ```
const maxSliceSum = arr => {
    let max = 0;
    let sum = 0;

    const positive = x => x < 0 ? 0 : x;
    arr.forEach(x => {
        max = Math.max(sum + x, max);
        sum = positive(sum + x);
    });
    return max;
}

console.log(maxSliceSum([-100, 1, 5, 6, 7, 2, -100, 4]));

// <!-- end @acxbank -->
