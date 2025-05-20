

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

```js
function moveZeros(arr) {
  let lastNonZeroIndex = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== 0) {
      [arr[i], arr[lastNonZeroIndex]] = [arr[lastNonZeroIndex], arr[i]];
      lastNonZeroIndex++;
    }
  }

  return arr;
}