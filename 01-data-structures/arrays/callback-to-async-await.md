# ⚙️ Callbacks → Promises → Async/Await — The Complete Evolution

## 1. 🔁 Recap: Callback → Callback Hell → Promises

Callbacks are functions passed inside other functions to be executed later.  
But when callbacks **nest inside callbacks**, it becomes hard to read & manage.

### ❌ Callback Hell Example

```js
loginUser("Nitin", () => {
  fetchProfile("Nitin", () => {
    getPosts("Nitin", () => {
      showDashboard();
    });
  });
});
```

Hard to read. Harder to debug. Welcome to **callback hell**.

---

## 2. ✅ Promises — Escape from Callback Hell

A **Promise** is an object that represents a future value (fulfilled or rejected).  
They cleanly separate success & error and allow chaining.

```js
const loginUser = (username) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(`Logged in: ${username}`), 1000);
  });
};

loginUser("Nitin")
  .then(res => {
    console.log(res);
    return getProfile(); // another promise
  })
  .then(profile => {
    return getPosts(profile); // and so on
  })
  .catch(err => console.error(err));
```

---

## 3. 🧠 But Why Async/Await?

Even **Promises** can become nested and messy when used in chains.

Also, `.then().then().then()` starts to feel like vertical callback hell.

### 🦸‍♂️ Enter `async/await`

- Cleaner syntax
- Looks synchronous
- Built on top of Promises
- Easier error handling with `try/catch`

---

## 4. ✨ Async/Await in Action

```js
const loginUser = (username) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(`${username} logged in`), 1000);
  });
};

const main = async () => {
  try {
    const user = await loginUser("Nitin");
    const profile = await getProfile(user);
    const posts = await getPosts(profile);
    console.log("Dashboard Ready");
  } catch (error) {
    console.error("Something went wrong:", error);
  }
};

main();
```

> It looks synchronous but runs asynchronously. No callback pyramid. No `.then()` chains. Pure magic.

---

## 5. ⚖️ Comparison Table

| Concept      | Pro                             | Con                             |
|--------------|----------------------------------|----------------------------------|
| **Callback** | Simple, foundational             | Messy when nested                |
| **Promise**  | Cleaner chaining, error handling | Can still get complex            |
| **Async/Await** | Clean, readable, sync-looking   | Can’t run in top-level without `async fn` |

---

## 6. ⚙️ Real World Analogy

- **Callback**: "When you're done cooking, call me."
- **Promise**: "I promise I'll tell you when cooking's done."
- **Async/Await**: "You wait at the table, and the dish arrives exactly when it's ready."

---

## 7. 🧠 Pro Tip: Async Functions Always Return Promises

```js
async function hello() {
  return "Hi";
}

hello().then(console.log); // Output: Hi
```

---

## 8. 🧵 When to Use What?

- Use **callbacks** for simple, synchronous or immediate operations.
- Use **promises** for async flows with branching.
- Use **async/await** for clean, readable async logic with linear steps.
