### 🧠 Algorithm: Remove Duplicates from a Sorted Array

#### ✅ Goal:
Remove duplicates from a **sorted** array in-place and return the count of unique elements.  
The first `k` elements of the array should hold these unique elements in order.

---

#### 🧮 Step-by-Step Algorithm:

1. **Check for edge case:**
   - If the array is empty (`length === 0`), return `0`.

2. **Initialize a pointer:**
   - Let `pos = 1` — this will track the **index where the next unique number should be written**.

3. **Traverse the array from index 1 to end:**
   - For each `i`, compare `nums[i]` with `nums[i - 1]`:
     - If they are **different**, it means `nums[i]` is a **new unique value**.
       - Write it to `nums[pos]`.
       - Increment `pos` by 1.

4. **At the end of loop:**
   - The first `pos` elements of the array are the unique values.
   - Return `pos` as the new length.

---

#### 🔁 Example:
Input:
```js
[0, 0, 1, 1, 2, 3, 3, 4]

[0, 1, 2, 3, 4, _, _, _]
Return: 5