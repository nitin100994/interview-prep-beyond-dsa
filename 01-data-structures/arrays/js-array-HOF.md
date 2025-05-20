# 🧠 JavaScript Array Higher-Order Functions (HOFs)

JavaScript arrays come with **powerful in-built methods** that make data transformation easy. These are called **Higher-Order Functions (HOFs)** because they take **other functions as arguments** (aka callbacks).

---

## 🔁 1. `.map()`

### ✅ Purpose:
Transforms each element and **returns a new array** with the same length.

```js
const nums = [1, 2, 3];
const squared = nums.map(n => n * n);
console.log(squared); // [1, 4, 9]
```

### 🧠 Think of `.map()` as:
> "I want to apply a formula to **every item** and collect the new values."

---

## 🔂 2. `.forEach()`

### ✅ Purpose:
Runs a function on **each element**, but **doesn’t return anything**.

```js
const names = ["Pooja", "Arya"];
names.forEach(name => console.log(`Hi ${name}!`));
```

### ⚠️ No Return:
```js
const result = names.forEach(name => name.toUpperCase());
console.log(result); // undefined
```

### 🧠 Think of `.forEach()` as:
> "Just **do something** with each item — no collection needed."

---

## 🔍 3. `.filter()`

### ✅ Purpose:
Returns a **new array** with only the items that **pass a test** (condition returns true).

```js
const nums = [1, 2, 3, 4, 5];
const evens = nums.filter(n => n % 2 === 0);
console.log(evens); // [2, 4]
```

### 🧠 Think of `.filter()` as:
> "Keep only those that match the **truth condition**."

---

## 🔎 4. `.find()`

### ✅ Purpose:
Returns the **first element** that passes a condition. **Returns one item**, not an array.

```js
const users = [
  { id: 1, name: "Nitin" },
  { id: 2, name: "Pooja" }
];

const result = users.find(user => user.id === 2);
console.log(result); // { id: 2, name: "Pooja" }
```

### 🧠 Think of `.find()` as:
> "Find the **first match** and return it."

---

## 🧮 5. `.reduce()`

### ✅ Purpose:
Reduces the array into **a single value** by applying a function cumulatively.

```js
const nums = [1, 2, 3, 4];
const sum = nums.reduce((acc, curr) => acc + curr, 0);
console.log(sum); // 10
```

### 🧠 Think of `.reduce()` as:
> "Keep combining everything into **one final result**."

---

## 🔁 6. `.some()` & `.every()`

### ✅ `.some()`: Returns `true` if **at least one** element passes

```js
[1, 2, 3].some(n => n > 2); // true
```

### ✅ `.every()`: Returns `true` if **all** elements pass

```js
[1, 2, 3].every(n => n < 5); // true
```

---

## 🎯 7. Comparison Table

| Method      | Returns           | Use Case                              |
|-------------|-------------------|----------------------------------------|
| `.map()`    | New array         | Transform each element                 |
| `.forEach()`| Nothing           | Just run a side-effect like logging    |
| `.filter()` | New array         | Keep only elements that pass test      |
| `.find()`   | First match       | Find one item based on condition       |
| `.reduce()` | Single value      | Collapse everything into one result    |
| `.some()`   | Boolean           | At least one passes                    |
| `.every()`  | Boolean           | All must pass                          |

---

## ❤️ Summary (for Pooja or any learner)

All these functions give **clarity + control**.  
They help you write **less code** and do **more**.  
Use them with **arrow functions** and keep your logic clean