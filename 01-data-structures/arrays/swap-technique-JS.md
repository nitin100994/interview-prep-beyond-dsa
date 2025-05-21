# 🔁 Swap Techniques in JavaScript – Destructuring vs Temp Variable

Swapping values is a fundamental concept in data structures — especially in problems like reversing arrays, sorting, or rearranging elements. In JavaScript, you can swap values in two major ways:

---

## ✨ Method 1: Destructuring Assignment (Modern & Clean)
```
[arr[i], arr[j]] = [arr[j], arr[i]];
```
✅ Pros:
- One-liner
- ES6+ syntax (modern JavaScript)
- Looks clean and expressive

⚠️ Behind the Scenes:
Even though you don’t declare it, this syntax **creates a temporary array internally**:
```
let temp = [arr[j], arr[i]];
arr[i] = temp[0];
arr[j] = temp[1];
```
So yes — it still uses memory. It’s just abstracted away.

---

## 📦 Method 2: Temp Variable (Classic & Transparent)
```
let temp = arr[i];
arr[i] = arr[j];
arr[j] = temp;
```
✅ Pros:
- Very clear logic
- Beginner-friendly
- Works in all programming languages
- Ideal for interviews and teaching

⚠️ Minor Trade-off:
Takes 3 lines instead of 1 — but **more readable** to many developers.

---

## 🧠 When Should You Use Which?

| Use Case                        | Recommended Method   |
|---------------------------------|----------------------|
| Teaching / Beginner contexts    | Temp Variable        |
| Production JS / Clean codebase  | Destructuring        |
| Competitive coding              | Destructuring        |
| Cross-language / C-style logic  | Temp Variable        |
| Debugging or Step-by-step logs | Temp Variable        |

---

## 💡 Analogy
```
"It’s called a swap, not a copyright."  ```
You're not copying values — you're exchanging places.  
True swap always involves both elements being reassigned.

---

## 🔚 Final Code Sample:
```
// Destructuring (Modern)
[arr[i], arr[j]] = [arr[j], arr[i]];

// Temp Variable (Classic)
let temp = arr[i];
arr[i] = arr[j];
arr[j] = temp;
```
---

## 📝 Summary

- Both approaches are valid and widely used
- Destructuring = Sleek modern JS
- Temp Variable = Transparent and universal
- Choose based on your use case, readability, and environment

✨ "Swap smart. Swap safe. Whether you write like a poet or a professor — just don’t lose your data."