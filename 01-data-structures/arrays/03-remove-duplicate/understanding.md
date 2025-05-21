# 🧠 Understanding the Pattern: Remove Duplicates & Move Non-Zeros (The `pos` Pointer Logic)

## ✅ Common Goal:
We’re given an array and asked to:
- Either **remove unwanted elements** (like duplicates or zeros)
- Or **retain only useful elements** in the correct order
- All while doing it **in-place** (without using a new array)

---

## ✳️ Core Pattern Used: `Scan + Write` using a pointer called `pos`

This pointer (`pos`) tracks **where the next "valid" element should go**.

Every time we find something we want to keep:
- We **write it at index `pos`**
- Then **move `pos` one step forward**

This creates a **clean segment** at the beginning of the array with only the values we care about.

---

## 1️⃣ Problem: Remove Duplicates from Unsorted Array

### 🔹 Challenge:
- Array is unsorted
- We want to remove duplicates
- But **preserve the first appearance order**
- Can use extra space

### 🔹 Key Idea:
Use a **Set** to track which elements we’ve already seen.

### 🔹 Code:
```js
function removeDuplicatesUnsorted(nums) {
    const seen = new Set();
    let pos = 0;

    for (let i = 0; i < nums.length; i++) {
        if (!seen.has(nums[i])) {
            seen.add(nums[i]);
            nums[pos] = nums[i];  // ✅ Core line explained below
            pos++;
        }
    }

    return nums.slice(0, pos);  // or: nums.length = pos; return nums;
}

-------

🔍 What does nums[pos] = nums[i]; do?

This line writes the current unique value into the clean portion of the array.

Think of it like this:

pos is the pointer where we’re building the new, deduplicated array

i is checking the current number

If nums[i] is unique (not seen before), we say:

> “Hey pos, this one’s clean — take it.”



So nums[pos] = nums[i] puts the valid number into the array

Then we move pos++ to prepare for the next clean value



---

🔁 Example:

Input:  [3, 1, 2, 1, 3, 4]

Set (seen): {}
pos: 0

Step 1: 3 is new → write at pos=0 → nums[0] = 3 → pos++
Step 2: 1 is new → write at pos=1 → nums[1] = 1 → pos++
Step 3: 2 is new → write at pos=2 → nums[2] = 2 → pos++
Step 4: 1 is duplicate → skip
Step 5: 3 is duplicate → skip
Step 6: 4 is new → write at pos=3 → nums[3] = 4 → pos++

Final nums: [3, 1, 2, 4, 3, 4]
Trimmed:    [3, 1, 2, 4]


---

🧠 Layman Thought:

> "pos is the clean part of the array I'm building.
When I find something good at i, I place it into pos,
and then move forward to build the next clean spot."