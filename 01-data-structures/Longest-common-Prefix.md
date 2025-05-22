# Longest Common Prefix – Explanation & Comparison

## ✅ Problem Statement
Given an array of strings, return the longest common **prefix** shared among all strings.
If there is no common prefix, return an empty string `""`.

---

## ✅ What is a Prefix?
A prefix is the **starting portion** of a string.
For example, in the word "flight", valid prefixes are:
- "f"
- "fl"
- "fli"
...

We're looking for the **longest such prefix** that all strings in the array start with.

---

## ✅ Real-Life Analogy
Folder paths:

/projectA/design /projectA/development /projectA/docs

Common prefix = "/projectA/"

---

## ✅ Examples

### Example 1:
```js
Input: ["flower", "flow", "flight"]
Output: "fl"

Explanation: All strings start with "fl". After that, mismatch happens → return "fl"

Example 2:

Input: ["dog", "racecar", "car"]
Output: ""

Explanation: No matching character at index 0 → return empty string


---

✅ Why This Problem is Easy

We only check:

From index 0 (start of each string)

We stop at the first mismatch

No backtracking, recursion, or exploring combinations


Time: O(n * m)

n = number of words

m = length of shortest word


Space: O(1)

Only storing prefix string



---

✅ How It Could Be Harder

If the question was:

Longest Common Substring → random matching locations → needs dynamic programming

Longest Common Subsequence → order preserved but not contiguous → even harder



---

✅ Comparison Table

Problem Type	Level	Why?

Longest Common Prefix	Easy	Simple left-to-right match from index 0
Longest Common Substring	Medium	Match anywhere, needs DP
Longest Common Subsequence	Hard	Match in order, not necessarily continuous



---

✅ Quote to Remember:

> "Prefix is alignment from the start. Substrings and subsequences chase matching across chaos."





