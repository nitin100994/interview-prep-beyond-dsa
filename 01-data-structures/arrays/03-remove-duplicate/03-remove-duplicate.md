## ✅ Question 3: Remove Duplicates from Sorted Array

### 🔹 Problem:
Given a **sorted array**, remove duplicates in-place such that each element appears only once.  
Return the **length** of the array after removing duplicates.  
You must do it using **O(1) extra space**.

---

### 🔸 Input:
```js
[0, 0, 1, 1, 1, 2, 2, 3, 3, 4]



Length: 5
Modified array: [0, 1, 2, 3, 4, _, _, _, _, _]


function removeDuplicates(nums) {
    // If array is empty, return 0
    if (nums.length === 0) return 0;

    // 'pos' points to the index where next unique element should be placed
    let pos = 1;

    // Start loop from index 1, because first element is always unique
    for (let i = 1; i < nums.length; i++) {
        // If current element is different from previous one
        if (nums[i] !== nums[i - 1]) {
            nums[pos] = nums[i]; // Place unique element at pos
            pos++;               // Move pointer forward
        }
        // If it's a duplicate, do nothing and just move to next i
    }
    // Return the count of unique elements
    return pos;
}


🧠 Key Takeaways:

pos tracks where the next unique number should be placed.

The first pos elements of the array will be your final result.

The rest of the array beyond pos can be ignored.

This works only because the array is sorted, so duplicates are grouped together.



---

🧮 Time and Space Complexity:

Time Complexity: O(n)

Space Complexity: O(1) — in-place



---

🧾 Final Thought:

> Use this pattern whenever you want to clean or filter values in a sorted array without using extra space.
It’s a variation of the two-pointer technique, where one pointer scans and the other builds the result in-place.
