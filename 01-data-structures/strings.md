🔡 Problem 1: Valid Anagram (String Beginner)

✅ Problem Statement:

> Given two strings s and t, return true if t is an anagram of s, else false.



Example:
```
Input: s = "anagram", t = "nagaram"  // Output: true
Input: s = "rat", t = "car"            // Output: false
Input: s = "abba", t = "baba"         // Output: true
Input: s = "abba", t = "abbba"        // Output: false
```

---

✅ Approach 1: HashMap Frequency Count

🔹 Algo Logic:

1. If lengths don’t match, return false


2. Build a frequency map from string s


3. Iterate over string t, and for each character:

If not found or count is 0, return false

Otherwise, decrement the count



4. If all characters are matched, return true




---

✅ Code:
```
function isAnagram(s, t) {
    if (s.length !== t.length) return false;

    const map = {};

    for (let char of s) {
        map[char] = (map[char] || 0) + 1;
    }

    for (let char of t) {
        if (!map[char]) return false;
        map[char]--;
    }

    return true;
}
```

---

🧠 Key Line Explanation:

🔸 Line 1:
```
map[char] = (map[char] || 0) + 1;
```
Means:

> If char already exists in map, increment its count. If not, start from 0 and add 1.



🔸 Line 2:
```
if (!map[char]) return false;
map[char]--;
```
Means:

> If char doesn’t exist or has no count left, return false. Otherwise, reduce its count by 1.




---

🧪 Dry Run (Example: "abba" and "baba")

Input: s = "abba", t = "baba"

map after s: { a: 2, b: 2 }

t loop:
- b → ok → map[b] = 1
- a → ok → map[a] = 1
- b → ok → map[b] = 0
- a → ok → map[a] = 0
All passed → return true


---

✅ Time & Space:

Metric	Value

Time	O(n)
Space	O(n) map
In-place	❌
Pattern	Frequency Count + Decrement Check



---

✅ Real-Life Analogy:

> s = warehouse stock t = customer order map counts how many of each item you have You fulfill t by subtracting from the map If an item isn’t available → order fails → return false




---

✅ Pattern Summary:

Count-up from string s

Count-down from string t

If counts are clean at the end → it’s an anagram



---
