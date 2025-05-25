✅ Kadane's Algorithm (With Indices) – Max Subarray + Range


---

🔍 Problem

Given an array of integers, return:

The maximum subarray sum

The starting and ending indices of that subarray

The subarray itself



---

💡 Layman Explanation

Think of each number as a daily profit/loss. You're tracking the most profitable streak of days, and you want to know:

How much profit? 💰

Which days it started and ended? 📍

What exact days (numbers) were involved? 🔍



---
```
✅ Code (O(n) – Smart Tracking)

function maxSubArrayWithIndices(nums) {
    let maxSum = nums[0];
    let currentSum = nums[0];

    let start = 0;
    let end = 0;
    let tempStart = 0;

    for (let i = 1; i < nums.length; i++) {
        if (nums[i] > currentSum + nums[i]) {
            currentSum = nums[i];
            tempStart = i;
        } else {
            currentSum += nums[i];
        }

        if (currentSum > maxSum) {
            maxSum = currentSum;
            start = tempStart;
            end = i;
        }
    }

    return {
        maxSum,
        indices: [start, end],
        subarray: nums.slice(start, end + 1)
    };
}

```
---
```
🧪 Test Cases

console.log(maxSubArrayWithIndices([-2,1,-3,4,-1,2,1,-5,4]));
// Output: { maxSum: 6, indices: [3, 6], subarray: [4, -1, 2, 1] }

console.log(maxSubArrayWithIndices([5,4,-1,7,8]));
// Output: { maxSum: 23, indices: [0, 4], subarray: [5, 4, -1, 7, 8] }

console.log(maxSubArrayWithIndices([-1,-2,-3]));
// Output: { maxSum: -1, indices: [0, 0], subarray: [-1] }

```
---

🪜 Dry Run Walkthrough
```
Input: [-2, 1, -3, 4, -1, 2, 1, -5, 4]

We update tempStart only when we start fresh. When a new currentSum > maxSum, we record start = tempStart, end = i.

This gives us the exact range where max sum occurred.
```

---

📌 Key Notes

Time complexity: O(n)

Space: O(1) extra

Adds just a few variables to classic Kadane’s

You now also know where the magic happened 🔥


