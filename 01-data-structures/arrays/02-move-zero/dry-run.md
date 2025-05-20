---

### **Frame 2: `02-move-zero.md`**

```markdown
# 🚚 Move All Zeros to End

---

## 🧠 Human Thinking (Layman Style)

Imagine you're organizing a shelf with important items and empty boxes.  
You want to push all empty boxes (zeros) to the back, but **don’t mess up the order** of other items.

Just pull forward everything important and zeros will fall behind.

---

## 🪜 Algorithm Steps

1. Initialize `lastNonZeroIndex = 0`
2. Loop through array:
   - If `arr[i] !== 0`:
     - Swap `arr[i]` with `arr[lastNonZeroIndex]`
     - Increment `lastNonZeroIndex`
3. Done!

---

## 🔍 Dry Run

```txt
Input: [0, 1, 0, 3, 12]

Step 1: i=0 → skip  
Step 2: i=1 → swap with i=0 → [1, 0, 0, 3, 12]  
Step 3: i=2 → skip  
Step 4: i=3 → swap with i=1 → [1, 3, 0, 0, 12]  
Step 5: i=4 → swap with i=2 → [1, 3, 12, 0, 0]

Final Output: [1, 3, 12, 0, 0]