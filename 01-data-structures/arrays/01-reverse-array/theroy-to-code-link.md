# Linking Theory to Code – My First Realization

## 🧠 Context:
Today marks the first time I consciously combined **theory** with actual **code logic**.  
Instead of just memorizing syntax or solving problems mechanically, I deeply understood:

> Why this way? Why not that way?

---

## 💡 The Realization:
While working on `reverseArray` and writing test cases, I got confused about cloning the array:

> Why do we clone arrays before testing but not strings?

This led me to revisit the basics:

### ✅ Key Theory:
- **Primitive Data Types** (number, string, boolean, etc.)  
  → Passed by **value**  
  → Changing the copy doesn't affect original

- **Non-Primitive Data Types** (arrays, objects)  
  → Passed by **reference**  
  → Changes affect original memory

This explains **why we clone arrays during tests**: to avoid unexpected mutation of the original input.

---

## 🔗 Code that Connected the Dots:
```js
const input