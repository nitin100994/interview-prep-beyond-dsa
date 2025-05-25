✅ Kadane's Algorithm – Max Subarray Sum (Classic Version)


---

🔍 Problem

Given an array of integers, find the maximum possible sum of a contiguous subarray (containing at least one number).


---

💡 Layman Explanation (for Pooja)

Imagine every number in the array is how your day felt:

Positive number = good day (profit, smile, sunshine)

Negative number = bad day (loss, tired, anxious)


Now think:

> “Which stretch of continuous days gave me the most happiness overall?”



That’s what this algorithm is doing — finding the most emotionally profitable streak.


---

📘 Algorithm Intuition

We walk through the array once.

At each element, we decide:

> “Do I continue my current streak, or start a new one from here?”



We track:

currentSum → sum of current best streak ending at index i

maxSum → best total streak ever seen




---
```
✅ Code (Optimized O(n))

function maxSubArray(nums) {
    let maxSum = nums[0]; // overall best so far
    let currentSum = nums[0]; // best streak ending at current index

    for (let i = 1; i < nums.length; i++) {
        // Line of Truth:
        // Is it better to continue or restart from current number?
        currentSum = Math.max(nums[i], currentSum + nums[i]);

        // Update max if this streak is best we've seen
        maxSum = Math.max(maxSum, currentSum);
    }

    return maxSum;
}

```
---

🧪 Test Cases

console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4])); // 6
console.log(maxSubArray([1]));                    // 1
console.log(maxSubArray([5,4,-1,7,8]));           // 23
console.log(maxSubArray([-1,-2,-3]));             // -1
console.log(maxSubArray([0, 0, 0]));              // 0


---

🪜 Dry Run Example
```
Input: [-2, 1, -3, 4, -1, 2, 1, -5, 4]

Step-by-step:

i = 0 → currentSum = -2, maxSum = -2

i = 1 → max(1, -2+1) = 1 → currentSum = 1, maxSum = 1

i = 2 → max(-3, 1-3) = -2 → currentSum = -2, maxSum = 1

i = 3 → max(4, -2+4) = 4 → currentSum = 4, maxSum = 4

i = 4 → max(-1, 4-1) = 3 → currentSum = 3, maxSum = 4

i = 5 → max(2, 3+2) = 5 → currentSum = 5, maxSum = 5

i = 6 → max(1, 5+1) = 6 → currentSum = 6, maxSum = 6

i = 7 → max(-5, 6-5) = 1 → currentSum = 1, maxSum = 6

i = 8 → max(4, 1+4) = 5 → currentSum = 5, maxSum = 6

```
Final Output: 6


---

🧠 Critical Observations

If all numbers are positive → answer is sum of full array

If all are negative → answer is the largest (least negative) value

This algorithm never goes back — only moves forward and resets when needed


---

📌 Time & Space Complexity

Time: O(n) (one single loop)

Space: O(1) (constant — no extra arrays)



---

This is the base version — optimized, interview-loved, and memory-friendly.

