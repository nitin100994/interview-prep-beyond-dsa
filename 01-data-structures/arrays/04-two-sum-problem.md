✅ Two Sum Problem


---

🔍 Problem

Given an array of integers arr and a target integer target, return the indices of the two numbers such that they add up to target. You may assume that each input would have exactly one solution.


---

💡 Layman Explanation (for Pooja)

Imagine you're shopping, and you have a list of item prices. You want to find two items whose prices add up exactly to the amount of money you have.

For example, if you have ₹9 and the items are priced [2, 7, 11, 15], then 2 + 7 = 9. So the answer would be the indices [0, 1].

This program finds those two items (by index) in the list.


---

✅ Solution (Using HashMap for O(n) time)

function twoSum(arr, target) {
    let map = new Map(); // to store each number and its index

    for (let i = 0; i < arr.length; i++) {
        let complement = target - arr[i]; // what number do I need to reach target?

        if (map.has(complement)) {
            return [map.get(complement), i]; // found the pair, return their indices
        }

        map.set(arr[i], i); // store current number and its index for future
    }

    return [-1, -1]; // if no pair found
}


---

🧪 Test Cases

console.log("Happy Case:", twoSum([2, 7, 11, 15], 9));             // [0, 1]
console.log("No Match Case:", twoSum([1, 2, 3], 10));              // [-1, -1]
console.log("Empty Array:", twoSum([], 5));                        // [-1, -1]
console.log("One Element:", twoSum([7], 7));                       // [-1, -1]
console.log("Duplicate Values:", twoSum([3, 3], 6));              // [0, 1]
console.log("Negative Numbers:", twoSum([-1, 4, 2, -3], 1));       // [0, 2]


---

📘 Example Explained

Input: arr = [2, 7, 11, 15], target = 9

We loop through each number:

First number is 2. We need 7 more to make 9. So we remember 2 is at index 0.

Next number is 7. We need 2 more to make 9. Oh! We already saw 2 at index 0.

Answer: [0, 1] because 2 + 7 = 9



---

📝 Notes

Use Map to store value:index pairs

Each lookup is O(1), making the overall time complexity O(n)

Write defensive test cases for empty arrays, single elements, etc.

Avoid using the same index twice


