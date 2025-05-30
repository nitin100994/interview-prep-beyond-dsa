✅ DSA Array Problem Set – 9 Core Questions (Structured)


---
```
... 1. Reverse an Array

Problem:

Reverse the elements of an array in-place.

function reverseArray(arr) {
  let left = 0, right = arr.length - 1;
  while (left < right) {
    [arr[left], arr[right]] = [arr[right], arr[left]];
    left++;
    right--;
  }
  return arr;
}
```

---

... 2. Move All Zeros to End
```
Problem:

Move all 0s to the end of the array, preserving order of non-zero elements.

function moveZeroes(nums) {
  let pos = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      nums[pos++] = nums[i];
    }
  }
  while (pos < nums.length) nums[pos++] = 0;
}

```
---

... 3. Remove Duplicates from Sorted Array

Problem:

Remove duplicates from a sorted array in-place. Return new length.
```
function removeDuplicates(nums) {
  if (nums.length === 0) return 0;
  let i = 0;
  for (let j = 1; j < nums.length; j++) {
    if (nums[i] !== nums[j]) {
      i++;
      nums[i] = nums[j];
    }
  }
  return i + 1;
}

```
---

... 4. Two Sum (Indices of Target)

Problem:
```
Find indices of two numbers that add up to a target.

function twoSum(nums, target) {
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    if (map.has(complement)) return [map.get(complement), i];
    map.set(nums[i], i);
  }
}
```

---

... 5. Kadane's Algorithm – Max Subarray Sum
```
Problem:

Find the maximum sum of a contiguous subarray.

function maxSubArray(nums) {
  let maxSum = nums[0], currentSum = nums[0];
  for (let i = 1; i < nums.length; i++) {
    currentSum = Math.max(nums[i], currentSum + nums[i]);
    maxSum = Math.max(maxSum, currentSum);
  }
  return maxSum;
}
```

---
```
... 6. Kadane’s Algorithm With Indices

Problem:

Return max sum along with start and end index of subarray.

function maxSubArrayWithIndices(nums) {
  let maxSum = nums[0], currentSum = nums[0];
  let start = 0, end = 0, tempStart = 0;

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] > currentSum + nums[i]) {
      currentSum = nums[i];
      tempStart = i;
    } else {
      currentSum += nums[i];
    }

    if (currentSum > maxSum) {
      maxSum = currentSum;
      start = tempStart;
      end = i;
    }
  }

  return { maxSum, start, end };
}
```

---
```
... 7. Merge Two Sorted Arrays In-place

Problem:

Merge nums2 into nums1, assuming nums1 has enough space.

function merge(nums1, m, nums2, n) {
  let i = m - 1, j = n - 1, k = m + n - 1;
  while (i >= 0 && j >= 0) {
    nums1[k--] = nums1[i] > nums2[j] ? nums1[i--] : nums2[j--];
  }
  while (j >= 0) {
    nums1[k--] = nums2[j--];
  }
}
```

---

... 8. Contains Duplicate
```
Problem:

Return true if any value appears more than once.

function containsDuplicate(nums) {
  const set = new Set();
  for (let num of nums) {
    if (set.has(num)) return true;
    set.add(num);
  }
  return false;
}

```
---

... 9. Rotate Array (Right by k steps)
```
Problem:

Rotate the array to the right by k steps.

function rotate(nums, k) {
  k = k % nums.length;

  const reverse = (start, end) => {
    while (start < end) {
      [nums[start], nums[end]] = [nums[end], nums[start]];
      start++;
      end--;
    }
  }

  reverse(0, nums.length - 1);
  reverse(0, k - 1);
  reverse(k, nums.length - 1);
}

```
---

// End of Set 1 // Curated by Gordon Providers – Clean Code, Clear Mind

