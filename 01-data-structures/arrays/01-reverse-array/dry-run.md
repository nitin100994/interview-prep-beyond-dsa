# 🔁 Reverse an Array (In-Place)

---

## 🧠 Human Thinking (Layman Style)

Imagine a row of books. You want to reverse their positions.  
Naturally, you'll swap the first and last, then move toward the middle.

We don’t create a new shelf (array).  
Just swap and move — that’s the Two-Pointer Technique.

---

## 🪜 Algorithm Steps

1. Initialize two pointers:
   - `left = 0`
   - `right = arr.length - 1`
2. While `left < right`:
   - Swap `arr[left]` and `arr[right]`
   - `left++`, `right--`
3. Return the array

---

## 🔍 Dry Run

```txt
Input: [1, 2, 3, 4, 5]

Step 1: left=0, right=4 → swap(1, 5) → [5, 2, 3, 4, 1]  
Step 2: left=1, right=3 → swap(2, 4) → [5, 4, 3, 2, 1]  
Step 3: left=2, right=2 → stop

Final Output: [5, 4, 3, 2, 1]