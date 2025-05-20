# Remove Duplicates (Sorted Array) – Human Thinking & Algorithm

## 🧠 Human Thought Process:

Imagine someone reading a sorted list aloud.  
If they say a number that was **just said**, you don’t write it down again.

You only record a value when it's **different from the last one**.  
That’s your natural filter. And that’s the core of this algorithm.

---

## 🔍 How Do We Identify This Problem?

- Sorted array  
- Need to **modify in-place**
- Task: Keep only **unique elements**, return new length
- Clue: Sorted means duplicates are next to each other

---

## 🔧 Pattern Used:
**Two-Pointer Technique**

- One pointer (`i`) tracks last unique value
- The second (`j`) scans through the array
- When `arr[j] !== arr[i]`, move `i++` and set `arr[i] = arr[j]`

---

## 🪜 Steps to Build the Algorithm:

1. If array is empty, return 0
2. Initialize `i = 0`
3. Loop `j` from 1 to end of array:
   - If `arr[j] !== arr[i]`, do:
     - `i++`
     - `arr[i] = arr[j]`
4. Return `i + 1` (new length)

---

## 🧠 Why This Makes Sense:

You’re basically maintaining a **"unique zone"** from `0 to i`.  
Everything after `i` is trash or repeated.

Let your brain think in **zones**. That’s how memory, queues, and humans operate.