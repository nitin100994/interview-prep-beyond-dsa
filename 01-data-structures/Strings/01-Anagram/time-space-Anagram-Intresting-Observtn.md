# String Looping + Frequency Map – Time and Space Complexity

## 1. For Loop on Strings (Character Traversal)

```js
let s = "nitin";
for (let char of s) {
    console.log(char); // n i t i n
}

Time: O(n)

Traverse every character once


Space:

O(1) if just reading characters

O(k) if building a map (k = unique characters)


2. Character Frequency Map – Space Complexity Details

a) Lowercase English only (a–z):

Max 26 unique characters

Map stores up to 26 keys

Space: O(1) (bounded constant)


b) Lowercase + Uppercase (a–z, A–Z):

Max 52 unique characters

Still bounded → Space: O(1)


c) Full Unicode/ASCII (generic input):

Potentially unlimited unique characters

In worst case: each char is unique

Space: O(k) or O(n) where k = unique characters


Summary Table:

Character Type	Max Unique	Space Complexity

Lowercase only (a–z)	26	O(1)
Case-sensitive (a–z, A–Z)	52	O(1)
Unicode/General	n	O(k) or O(n)
!

