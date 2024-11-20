/*
Task 1: Reverse String(JavaScript)

Write a JavaScript function that takes a string as input and returns the string reversed.

    Example:
Input: `"hello"`
Output: `"olleh"`
*/

function reverseString(input) {
    // 1. Split the input string into an array of characters (.split(''))
    // 2. Reverse the order of the characters (.reverse())
    // 3. Join the reversed characters back into a single string (.join(''))
    return input.split('').reverse().join('')
    // 4. Return the reversed string
}
// Example output:
console.log(reverseString("Hello! Nice to meet you :)"));

/*
Task 2: FizzBuzz(JavaScript)

Write a JavaScript function that prints numbers from 1 to 100. But for multiples of three, print "Fizz" instead of the number, and for multiples of five, print "Buzz".For numbers which are multiples of both three and five, print "FizzBuzz".

Example Output:
```
1  
2  
Fizz  
4  
Buzz  
Fizz  
7  
8  
Fizz  
Buzz  
…
*/

function fizzBuzz() {
    // Use a for loop that checks through numbers 1 - 100
    for (let i = 1; i <= 100; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log("FizzBuzz"); // Checks if num is a multiple of both 3 and 5, printing FizzBuzz if true

        }
        else if (i % 3 === 0) {
            console.log("Fizz"); // Checks if num is a multiple of 3, printing Fizz if true

        }
        else if (i % 5 === 0) {
            console.log("Buzz"); // Checks if num is a multiple of 5, printing Buzz if true

        }
        else {
            console.log(i); // Prints the num if its not a multile of either 3 or 5

        }
    }
}
// Call function 
fizzBuzz();

/*
Task 3: Even or Odd(JavaScript)

Write a JavaScript function that accepts an integer and returns whether it is even or odd *.

    Example:
Input: `3`
Output: `"Odd"`

Input: `8`
Output: `"Even"`

*/

function evenOrOdd(num) {
    if (num % 2 === 0) {
        return "Even"
    }
    else {
        return "Odd"
    }
}

console.log(evenOrOdd(5));
console.log(evenOrOdd(8));

