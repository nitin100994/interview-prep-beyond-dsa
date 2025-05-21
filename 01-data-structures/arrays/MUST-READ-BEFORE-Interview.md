📘 DSA Pattern: In-Place Array Deduplication & Filtering

✅ 1. Reverse an Array

Goal: Reverse elements in-place

Approach: Two-pointer (left, right) swap until they meet

Time: O(n), Space: O(1)

Pattern: Basic two-pointer

🔑 Critical Line:

```
[nums[left], nums[right]] = [nums[right], nums[left]];
left++;
right--;
```

---

✅ 2. Move All Zeros to End

Goal: Move all non-zero elements to front, push 0s to end

Approach:

pos = 0

Loop through array, if nums[i] !== 0, write to nums[pos++]

Fill remaining indexes with 0


Time: O(n), Space: O(1)

🔑 Critical Line:


if (nums[i] !== 0) {
    nums[pos] = nums[i];
    pos++;
}


---

✅ 3. Remove Duplicates from Sorted Array

Goal: Remove duplicates from sorted array, in-place

Approach:

pos = 1

If nums[i] !== nums[i-1], write to nums[pos++]


Time: O(n), Space: O(1)

🔑 Critical Line:


if (nums[i] !== nums[i - 1]) {
    nums[pos] = nums[i];
    pos++;
}


---

✅ 4. Remove Duplicates from Unsorted Array (Using Set)

Goal: Remove duplicates, preserving order

Approach:

Use Set to track seen values

If not seen, write to nums[pos++]

Return nums.slice(0, pos) or truncate: nums.length = pos


Time: O(n), Space: O(n)

Pattern: Scan + Write using Set

🔑 Critical Line:


if (!seen.has(nums[i])) {
    seen.add(nums[i]);
    nums[pos] = nums[i];
    pos++;
}


---

✅ 5. Remove Duplicates from Unsorted Array (Brute Force, In-Place)

Goal: Remove duplicates in-place without extra space

Approach:

For each i, check in range 0 to pos - 1 if already present

If not, write to nums[pos++]


Time: O(n^2), Space: O(1)

Pattern: Nested check + write

🔑 Critical Line:


let isUnique = true;
for (let j = 0; j < pos; j++) {
    if (nums[i] === nums[j]) {
        isUnique = false;
        break;
    }
}
if (isUnique) {
    nums[pos] = nums[i];
    pos++;
}


---

✅ 6. Remove Duplicates by Sorting (Order Doesn’t Matter)

Goal: Remove duplicates after sorting, in-place

Approach:

nums.sort()

If nums[i] !== nums[i-1], write to nums[pos++]

Truncate array if needed


Time: O(n log n), Space: O(1)

Pattern: Sort + Two-pointer unique collection

🔑 Critical Line:


if (nums[i] !== nums[i - 1]) {
    nums[pos] = nums[i];
    pos++;
}


---

🧠 Pattern Summary

All use pos pointer to build the "clean" segment

nums[pos] = nums[i] is core to overwrite valid values in-place

Additions:

Set for fast seen-check in O(1)

Sorting when duplicates are grouped (no order preservation)




---

✅ Realization:

> Use pos whenever you're trying to rebuild or filter an array in-place. Think: "If this value is valid, write it at pos, then move forward."



You can apply this in: removing zeros, duplicates, filtering even numbers, etc.


---