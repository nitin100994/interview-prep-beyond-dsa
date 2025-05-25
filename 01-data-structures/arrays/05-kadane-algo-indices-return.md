✅ Kadane's Algorithm (With Indices) – Max Subarray + Range


---

🔍 Problem

Given an array of integers, return:

The maximum subarray sum

The starting and ending indices of that subarray

The subarray itself



---

💡 Layman Explanation (for Pooja)

Imagine each number in the array is how your day felt:

Positive = good day (joy, profit)

Negative = bad day (stress, loss)


Now imagine: you're looking for the best streak of days — a series of consecutive ones — where you felt overall the happiest. Even if there were small bad days in between, the total stretch gave you the highest joy. This algorithm helps you find:

How much total joy you had

Where that streak started and ended

What those days looked like (the subarray)



---

✅ Code with Explanation

function maxSubArrayWithIndices(nums) {
    let maxSum = nums[0];             // best sum we've seen so far
    let currentSum = nums[0];         // current running sum

    let start = 0;                    // final starting index of best subarray
    let end = 0;                      // final ending index of best subarray
    let tempStart = 0;                // tracks where a potential subarray might begin

    for (let i = 1; i < nums.length; i++) {
        // Do we continue the streak or start fresh?
        if (nums[i] > currentSum + nums[i]) {
            currentSum = nums[i];    // start fresh
            tempStart = i;           // mark this index as new potential start
        } else {
            currentSum += nums[i];   // continue streak
        }

        // Is the current streak better than our best so far?
        if (currentSum > maxSum) {
            maxSum = currentSum;     // update best sum
            start = tempStart;       // update starting index
            end = i;                 // update ending index
        }
    }

    return {
        maxSum,
        indices: [start, end],
        subarray: nums.slice(start, end + 1)
    };
}


---

🧪 Test Cases

console.log(maxSubArrayWithIndices([-2,1,-3,4,-1,2,1,-5,4]));
// Output: { maxSum: 6, indices: [3, 6], subarray: [4, -1, 2, 1] }

console.log(maxSubArrayWithIndices([5,4,-1,7,8]));
// Output: { maxSum: 23, indices: [0, 4], subarray: [5, 4, -1, 7, 8] }

console.log(maxSubArrayWithIndices([-1,-2,-3]));
// Output: { maxSum: -1, indices: [0, 0], subarray: [-1] }


---

🪜 Dry Run (Detailed)

Input: [-2, 1, -3, 4, -1, 2, 1, -5, 4]

Index	nums[i]	currentSum (before)	currentSum (after)	maxSum	start	end

0	-2	-	-2	-2	0	0
1	1	-2	1	1	1	1
2	-3	1	-2	1	1	1
3	4	-2	4	4	3	3
4	-1	4	3	4	3	3
5	2	3	5	5	3	5
6	1	5	6	6	3	6
7	-5	6	1	6	3	6
8	4	1	5	6	3	6


Final result:

maxSum = 6

indices = [3, 6]

subarray = [4, -1, 2, 1]



---

📌 Time and Space Complexity

Time: O(n) (only one pass)

Space: O(1) (no extra arrays, just variables)



---

❤️ Emotional Insight (For Pooja)

Sometimes life gives you a rough start — a few bad days, some heartbreaks. But even then, there's a streak of light, a phase that makes everything worth it.

This algorithm doesn’t forget the pain. It walks through it, holding onto the memory of your best moment. It doesn’t need to remember every step — just the place where your light returned.

> “Because even a few good days strung together… can outweigh months of grey.”



Let the algorithm find that moment for you. Just like love — even if it's hiding, it's still there.


---

You're not just solving a coding question — you're solving a moment in your story.

