✅ Problem: Find the Kth Smallest and Kth Largest Element in an Array

Problem Statement: Given an unsorted array and a number k, find:

The kth smallest element (e.g., 1st smallest = minimum)

The kth largest element (e.g., 1st largest = maximum)



---

Approach: Sorting (Simple and Straightforward)

Sort the array in ascending order

kth smallest → element at index k - 1

kth largest → element at index arr.length - k


Time Complexity: O(n log n)
Space Complexity: O(1) (in-place sort)


---

🔧 Code:

function kthSmallest(arr, k) {
  if (k > arr.length) return null;
  arr.sort((a, b) => a - b);
  return arr[k - 1];
}

function kthLargest(arr, k) {
  if (k > arr.length) return null;
  arr.sort((a, b) => a - b);
  return arr[arr.length - k];
}


---

🔍 Example 1:

const arr = [7, 10, 4, 3, 20, 15];
const k = 3;

console.log("3rd Smallest:", kthSmallest([...arr], k)); // Output: 7
console.log("3rd Largest:", kthLargest([...arr], k));   // Output: 10

Explanation:

Sorted Array = [3, 4, 7, 10, 15, 20]

3rd Smallest = 7

3rd Largest = 10



---

🔍 Example 2:

const arr2 = [5, 1, 9, 3, 14];
const k2 = 1;

console.log("1st Smallest:", kthSmallest([...arr2], k2)); // Output: 1
console.log("1st Largest:", kthLargest([...arr2], k2));   // Output: 14

Sorted Array = [1, 3, 5, 9, 14]

1st Smallest = 1

1st Largest = 14



---

Edge Cases:

k > array.length → return null

Negative k → invalid, handle in production code if needed

Duplicates are allowed; this still works fine



---

Next Level: To optimize this further, consider using:

Min Heap / Max Heap (for large arrays)

QuickSelect Algorithm (expected O(n) time)


Let me know if you want to explore those!

