✅ Node.js Event Loop – MCQ Blast


---

🧠 MCQ 1: What is the role of the event loop in Node.js?

A. It processes CPU-intensive tasks in parallel

B. It handles asynchronous callbacks from the call stack

C. It delegates file system tasks to the OS

D. It synchronously executes all functions line by line

✅ Correct Answer: B

Explanation:

> The event loop continuously checks the callback queue and call stack. If the call stack is empty, it pushes the next callback into it. It allows Node.js to be non-blocking and asynchronous.




---

🧠 MCQ 2: Which phase of the event loop handles I/O callbacks?

A. timers

B. poll

C. check

D. close callbacks

✅ Correct Answer: B

Explanation:

> The poll phase is where I/O events are polled and callbacks are queued. If there are no I/O events, and no timers due, it waits.




---

🧠 MCQ 3: What will be the output?

console.log('start');
setTimeout(() => console.log('timeout'), 0);
Promise.resolve().then(() => console.log('promise'));
console.log('end');

A. start end timeout promise

B. start timeout end promise

C. start end promise timeout

D. start promise end timeout

✅ Correct Answer: C

Explanation:

> console.log('start') and console.log('end') run first.

Promise callbacks go to microtask queue → runs after current stack.

setTimeout goes to macrotask (timer phase) → runs after microtasks.




Order:

start
end
promise
timeout


---

🧠 MCQ 4: Which of the following is NOT a phase of the event loop?

A. timers

B. microtasks

C. poll

D. check

✅ Correct Answer: B

Explanation:

> Microtasks (like promises and queueMicrotask) are not part of the main event loop phases (like timers, poll, check). They are a separate priority queue run between phases.




---

🧠 MCQ 5: What happens if a promise keeps queuing more promises inside .then()?

A. They all wait till the next tick

B. Node.js runs out of memory

C. It creates a microtask loop and can starve I/O

D. It throws a syntax error

✅ Correct Answer: C

Explanation:

> If promises recursively queue more microtasks, they can starve the event loop by never yielding control to I/O phases like poll.




---

🧠 MCQ 6: In what phase does setImmediate() execute its callbacks?

A. poll

B. timers

C. check

D. idle

✅ Correct Answer: C

Explanation:

> setImmediate() schedules its callback to execute in the check phase of the event loop, which comes immediately after the poll phase.




---

🧠 MCQ 7: Which runs first if both are scheduled together: setTimeout(fn, 0) or setImmediate(fn)?

A. setTimeout

B. setImmediate

C. Whichever was defined first

D. Depends on system internals

✅ Correct Answer: D

Explanation:

> The actual order between setTimeout(fn, 0) and setImmediate(fn) is not guaranteed — it depends on OS and Node internals.




---

🧠 MCQ 8: What is the default thread that executes JavaScript in Node.js?

A. Worker Thread

B. I/O Thread

C. Main Thread

D. Event Queue Thread

✅ Correct Answer: C

Explanation:

> JavaScript in Node.js runs on a single-threaded event loop, which is called the Main Thread.




---

📌 Summary:

Microtasks run after each phase, before returning to event loop

Macrotasks (timers, I/O, etc.) are phase-specific

Blocking event loop = bad for scalability

Event loop = 🧠 of Node.js


