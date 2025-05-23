

```markdown
# Move All Zeros to End (In-Place)

## Problem:
Move all `0`s in the array to the end while keeping the order of non-zero elements unchanged.

---

## Approach: Two-Pointer (Fast/Slow)

- Use `lastNonZeroIndex` to track where the next non-zero should go
- Traverse array and swap non-zero elements forward

---

## Code (JavaScript):
## Approach using swapping and only for loop
```js
function moveZeros(arr) {
  let lastNonZeroIndex = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== 0) {
      [arr[i], arr[lastNonZeroIndex]] = [arr[lastNonZeroIndex], arr[i]]; ## refer swap-technique-JS.md for easy code.
      lastNonZeroIndex++;
    }
  }

  return arr;
}

Time Complexity: O(n)

Space Complexity: O(1)

✅ In-place operation that maintains relative order.

-------
## Another Approach using coping than using another loop to add zero at end.

function moveZeroes(nums) {
    let pos = 0;

    // First pass: Move all non-zero elements to the front
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            nums[pos] = nums[i];
            pos++;
        }
    }

    // Second pass: Fill remaining positions with 0
    for (let i = pos; i < nums.length; i++) {
        nums[i] = 0;
    }
}