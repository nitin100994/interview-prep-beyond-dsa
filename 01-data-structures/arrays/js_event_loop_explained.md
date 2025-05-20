# 🔄 JavaScript Event Loop — Asynchronicity in a Single Threaded World

---

## 🧠 Layman Explanation First:

Imagine JavaScript as a chef with only **one hand** (single thread).  
This chef has a **queue of orders** (tasks). He **can’t do two things at once**.

But here’s the magic: he has **waiters** (browser APIs) who help with slow tasks like:

- Boiling water (setTimeout)
- Waiting for delivery (fetch API)
- Responding to a user (event listeners)

The chef **delegates** these slow tasks and says, “Let me know when you’re done.”  
He **continues cooking** other things in the meantime.

Once the waiters are done, they say “Hey chef, here’s the result!”  
The chef checks his **order board (callback queue)** and continues.

This is how JavaScript **pretends** to be multitasking. But in reality, he’s just managing time smartly.

---

## ⚙️ Technical Overview:

JavaScript is **single-threaded**. It has:

1. **Call Stack**  
2. **Web APIs** (in the browser or Node.js)
3. **Callback Queue**  
4. **Microtask Queue** (for Promises)  
5. **Event Loop**

---

## 📦 1. Call Stack

This is where your functions get executed.

```js
function sayHello() {
  console.log("Hello!");
}
sayHello();  // goes to the stack
```

Each function gets **pushed** and **popped** from the **stack**.

---

## 🌐 2. Web APIs

Browser or Node.js provides APIs like:

- `setTimeout()`
- `fetch()`
- `DOM events`

These are **not part of JS itself**, but the environment.

---

## ⏱ 3. Callback Queue (aka Task Queue or Macro-task Queue)

Functions like `setTimeout()` are sent here **after their delay completes**.

```js
setTimeout(() => console.log("Timeout done"), 1000);
```

---

## 🧬 4. Microtask Queue

Used for **Promises, async/await**.

```js
Promise.resolve().then(() => console.log("Promise done"));
```

Microtasks are **processed before** the next macro task.

---

## 🔄 5. Event Loop

This is the **gatekeeper**. It continuously checks:

1. Is the call stack empty?
2. If yes, it picks up tasks from the **microtask queue** first.
3. Then from the **callback (macro) queue**.

---

## 📊 Visual Timeline

```text
Call Stack   | Web APIs         | Microtasks       | Callback Queue
------------ | ---------------- | ---------------- | ----------------
main()       | setTimeout(1s)   |                  |
             |                  |                  |
             |                  |  then() added    |
             |                  |                  | callback added

Event Loop:
- Executes microtask (Promise)
- Then executes timeout callback
```

---

## 🔁 Real-Life Flow Example:

```js
console.log("Start");

setTimeout(() => {
  console.log("Timeout");
}, 0);

Promise.resolve().then(() => {
  console.log("Promise");
});

console.log("End");
```

**Output**:
```
Start
End
Promise
Timeout
```

Why?
- Promise (microtask) runs **before** timeout (macro task), even if both are set for "now".

---

## 🧪 How is this Asynchronous?

Because JS:

- **Delegates slow tasks** (IO, network) to Web APIs.
- Keeps the stack free to continue.
- Waits for APIs to **callback** when ready.

It’s **not multithreading**, it’s **non-blocking**.

---

## ⚔️ Java vs JavaScript

| Feature        | Java                | JavaScript           |
|----------------|---------------------|-----------------------|
| Threads        | Multi-threaded      | Single-threaded       |
| Concurrency    | Real threads         | Event Loop + Queues   |
| API Design     | Blocking             | Non-blocking          |

---

## 🤖 Summary

- JS is single-threaded but non-blocking.
- It uses **Event Loop** to simulate multitasking.
- Microtasks (Promises) run before Macro tasks (Timeout).
- The architecture is simple but powerful.

> “It’s not about doing many things at once, it’s about knowing **when to do what**.”

---