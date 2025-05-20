---

### **Frame 3: `03-remove-duplicates.md`**

```markdown
# ✂️ Remove Duplicates from Sorted Array

---

## 🧠 Human Thinking (Layman Style)

If someone is reading numbers like:  
`1, 1, 2, 2, 3`,  
you’d write only new ones — ignoring repeats.

This means: copy only when a new number comes in.  
Sorted nature helps here — all duplicates are side-by-side.

---

## 🪜 Algorithm Steps

1. If array is empty, return 0
2. Set `i = 0` (last unique index)
3. Loop from `j = 1` to end:
   - If `arr[j] !== arr[i]`:
     - Increment `i`
     - `arr[i] = arr[j]`
4. Return `i + 1`

---

## 🔍 Dry Run

```txt
Input: [1, 1, 2, 2, 3]

Step 1: i=0, j=1 → same → skip  
Step 2: j=2 → new → i=1 → arr[1]=2 → [1, 2, 2, 2, 3]  
Step 3: j=3 → same → skip  
Step 4: j=4 → new → i=2 → arr[2]=3 → [1, 2, 3, 2, 3]

Return: i+1 = 3  
Final Unique Array: [1, 2, 3]