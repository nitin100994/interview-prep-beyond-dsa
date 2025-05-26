✅ Problem: Find the Maximum and Minimum Element in an Array

Explanation:
```
Initialize min and max to the first element of the array.

Traverse the array from index 1 onward.

If current element is smaller than min, update min.

If current element is greater than max, update max.

This ensures we find both values in a single traversal (O(n) time).
```

Edge Cases:
```
Empty array → returns null

All same elements → min and max are equal

Single element → min and max are that one element


Time Complexity: O(n)
Space Complexity: O(1)

```
---

🔧 Code:
```
function findMinMax(arr) {
  if (arr.length === 0) return null;

  let min = arr[0];
  let max = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < min) min = arr[i];
    if (arr[i] > max) max = arr[i];
  }

  return { min, max };
}
```

---

🔍 Test Example:
```
const arr = [7, 2, 9, 4, 1];
const result = findMinMax(arr);
console.log("Min:", result.min); // 1
console.log("Max:", result.max); // 9

```