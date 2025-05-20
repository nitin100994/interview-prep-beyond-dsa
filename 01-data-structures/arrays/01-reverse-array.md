# Reverse an Array (In-Place)

## Problem:
Reverse the elements of a given array without using any extra space.

---

## Approach: Two-Pointer Technique

- Initialize two pointers: `left = 0`, `right = arr.length - 1`
- Swap elements at `left` and `right`
- Move `left++` and `right--` until they meet

---

## Code (JavaScript):

```js
function reverseArray(arr) {
  let left = 0, right = arr.length - 1;

  while (left < right) {
    [arr[left], arr[right]] = [arr[right], arr[left]];
    left++;
    right--;
  }

  return arr;
}