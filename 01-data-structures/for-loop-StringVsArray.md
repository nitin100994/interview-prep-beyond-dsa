// ✅ LOOPING IN JAVASCRIPT: ARRAY vs STRING

// ----------------------------
// 1. FOR LOOP ON STRINGS
// ----------------------------

// Use: To loop through each character of a string
let s = "nitin";

for (let char of s) {
    console.log(char); // Outputs: n, i, t, i, n
}

// Meaning:
// - 'char' holds each character of the string one by one
// - Common in problems like: Anagram, Palindrome, Frequency count


// ----------------------------
// 2. FOR LOOP ON ARRAYS
// ----------------------------

let arr = [10, 20, 30];

for (let num of arr) {
    console.log(num); // Outputs: 10, 20, 30
}

// Or with index if needed:
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

// Distinction:
// - Strings: for (let char of str)
// - Arrays:  for (let element of arr) OR traditional i-based loop


// Summary:
// Use 'for...of' when you want to go element by element (string or array)
// Use 'for...i' when you need the index explicitly

