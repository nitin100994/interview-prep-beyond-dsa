# Move Zeros – Human Thinking & Algorithm

## 🧠 Human Thought Process:

Imagine a line of people walking, and every time someone trips (a zero),  
you gently move them to the back and let the rest continue moving forward.

You don’t break the order, you just want **non-zero elements** to come forward naturally.

---

## 🔍 How Do We Identify This Problem?

- You're not removing or sorting – just **shifting**
- Clue: Maintain order, move all `0`s at the end
- Avoid using a new array

---

## 🔧 Pattern Used:
**Two-Pointer (Fast/Slow or Placement Tracking)**

- One pointer tracks where the next non-zero should go (`lastNonZeroIndex`)
- The loop scans through all values
- When a non-zero is found, it is **swapped forward**

---

## 🪜 Steps to Build the Algorithm:

1. Initialize `lastNonZeroIndex = 0`
2. Loop through the array
   - If `arr[i] !== 0`, swap with `arr[lastNonZeroIndex]`
   - Increment `lastNonZeroIndex`
3. Done. All zeros pushed to the end

---

## 🧠 Why It Feels Right:

You’re simply saying:  
> "Come forward if you're not zero. Otherwise, wait till the end."  
That’s literally how queues or people would behave in real life.