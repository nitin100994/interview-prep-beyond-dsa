✅ Merge Two Sorted Arrays (In-Place)


---
```
🔍 Problem Statement

You are given two sorted arrays:

nums1 = [1, 2, 3, 0, 0, 0], m = 3
nums2 = [2, 5, 6],           n = 3

nums1 has extra space at the end to fit all elements from nums2.

You must merge nums2 into nums1 in-place, keeping the result sorted.

```

---

💡 Layman Explanation (for Pooja)

Imagine nums1 is a cupboard with 3 clothes and 3 empty shelves:

[Shirt1, Shirt2, Shirt3, _, _, _]

And nums2 has 3 more folded clothes:

[Shirt4, Shirt5, Shirt6]

Your job is to neatly merge all 6 shirts in sorted order, inside the same cupboard. You must start filling from the end to avoid pushing clothes out.


---
```
✅ Solution Code

function merge(nums1, m, nums2, n) {
    let i = m - 1;        // last filled element in nums1
    let j = n - 1;        // last element in nums2
    let k = m + n - 1;    // end of nums1 (final spot)

    while (i >= 0 && j >= 0) {
        if (nums1[i] > nums2[j]) {
            nums1[k] = nums1[i];
            i--;
        } else {
            nums1[k] = nums2[j];
            j--;
        }
        k--;
    }

    // If nums2 still has remaining values
    while (j >= 0) {
        nums1[k] = nums2[j];
        j--;
        k--;
    }
}
```

---

🪜 Dry Run Example
```
Input:

nums1 = [1, 2, 3, 0, 0, 0], m = 3
nums2 = [2, 5, 6], n = 3

Step-by-step fill from end:

Step	i	j	k	nums1[k] =	nums1 becomes

1	2	2	5	6	[1,2,3,0,0,6]
2	2	1	4	5	[1,2,3,0,5,6]
3	2	0	3	3	[1,2,3,3,5,6]
4	1	0	2	2	[1,2,2,3,5,6]
5	0	0	1	1	[1,1,2,3,5,6] (skip)


Final:

nums1 = [1, 2, 2, 3, 5, 6]

```
---

🧠 Why Merge from the End?

If you start from the beginning, you risk overwriting real values in nums1. Merging from the back uses the empty slots first and keeps everything safe.


---

📌 Time & Space Complexity

Time: O(m + n)

Space: O(1) → in-place, no extra arrays used



---

❤️ Pooja Parallel

Merging sorted arrays is like merging sorted lives. You can't just overwrite the past — you fill the empty slots with new things, starting from the back, so that everything fits in the right place.

> Because life — like arrays — deserves order without loss.




---

Now nums1 holds everyone it was meant to — in harmony.

