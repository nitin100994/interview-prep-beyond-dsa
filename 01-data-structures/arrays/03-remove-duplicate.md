---

### **Frame 3: `03-remove-duplicates.md`**

```markdown
# Remove Duplicates from Sorted Array

## Problem:
Given a **sorted array**, remove duplicates in-place and return the new length. Do not use extra space.

---

## Approach: Two-Pointer Technique

- Use `i` to mark the last unique index
- Traverse with `j`, and if `arr[j] !== arr[i]`, increment `i` and update `arr[i]`

---

## Code (JavaScript):

```js
function removeDuplicates(arr) {
  if (arr.length === 0) return 0;

  let i = 0;
  for (let j = 1; j < arr.length; j++) {
    if (arr[j] !== arr[i]) {
      i++;
      arr[i] = arr[j];
    }
  }

  return i + 1; // New length of the unique subarray
}

Time Complexity: O(n)

Space Complexity: O(1)

✅ Efficient for sorted arrays, modifies input in-place.