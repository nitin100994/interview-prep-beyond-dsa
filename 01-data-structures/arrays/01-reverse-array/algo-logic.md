# Reverse Array – Human Thinking & Algorithm

## 🧠 Human Thought Process:

Imagine someone gives you a row of cards and asks you to reverse them.  
You wouldn’t copy them to another table, right? You’d swap the first and last, then move inward.

That’s **intuition**. No need to remember an algorithm – just follow your instinct.

---

## 🔍 How Do We Identify This Problem?

- Array-related
- Task: Reverse all elements **in-place**
- No extra array allowed
- Clue: Mentally visualizing swapping from both ends

---

## 🔧 Pattern Used:
**Two-Pointer Technique**

- One pointer starts from beginning (`left`)
- One from end (`right`)
- Swap and move both toward center

---

## 🪜 Steps to Build the Algorithm:

1. Set `left = 0`, `right = array.length - 1`
2. While `left < right`:
   - Swap elements at `left` and `right`
   - `left++`
   - `right--`
3. Done. Return the array

---

## 🧠 Reminder for Future You:

Don’t overthink this.  
If you were physically flipping items, this is exactly what you’d do.