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

✅ Node.js Full MCQ Pack – 50+ Questions

... (Previous MCQs 1–25 above) ...


---

🧠 MCQ 26: What is the purpose of the http module in Node.js?

A. To serve frontend code

B. To create an HTTP server

C. To manage DNS records

D. To interact with databases

✅ Correct Answer: B

Explanation:

> The http module lets Node.js create and handle HTTP servers and requests.




---

🧠 MCQ 27: What does res.json() do in Express.js?

A. Sends an HTML response

B. Sets cookie headers

C. Sends a JSON response

D. Clears localStorage

✅ Correct Answer: C

Explanation:

> res.json() converts a JS object into a JSON string and sends it to the client.




---

🧠 MCQ 28: Which of the following is used to parse incoming JSON payloads in Express?

A. express.text()

B. express.json()

C. express.raw()

D. express.body()

✅ Correct Answer: B

Explanation:

> express.json() is middleware to parse JSON-formatted request bodies.




---

🧠 MCQ 29: What does process.env contain?

A. Global npm packages

B. Express configurations

C. Environment variables

D. Network interface details

✅ Correct Answer: C

Explanation:

> process.env is an object containing current environment variables.




---

🧠 MCQ 30: Which built-in module helps with cryptographic operations?

A. stream

B. fs

C. crypto

D. buffer

✅ Correct Answer: C

Explanation:

> The crypto module provides methods for hashing, encryption, and HMACs.




---

🧠 MCQ 31: How do you make an HTTPS server in Node.js?

A. use fs + http

B. use crypto + net

C. use tls.createServer

D. use https.createServer

✅ Correct Answer: D

Explanation:

> https.createServer() creates a secure HTTP server using SSL certificates.




---

🧠 MCQ 32: What is the role of the path module?

A. Parse URL paths from clients

B. Manage file path utilities

C. Secure file uploads

D. Build network routes

✅ Correct Answer: B

Explanation:

> The path module helps normalize and join file paths across OS environments.




---

🧠 MCQ 33: What does __dirname return in Node.js?

A. Current route path

B. Directory name of the current file

C. Filename

D. Relative path to root

✅ Correct Answer: B

Explanation:

> __dirname is a global variable that gives the full directory path of the current file.




---

🧠 MCQ 34: What’s the default export syntax in CommonJS?

A. export default

B. module.export = ...

C. module.exports = ...

D. exports.default = ...

✅ Correct Answer: C

Explanation:

> CommonJS modules use module.exports to export functionality.




---

🧠 MCQ 35: How do you catch errors in async/await?

A. using try/catch

B. using then/catch

C. using process.exit()

D. using finally block only

✅ Correct Answer: A

Explanation:

> Always wrap await calls inside try/catch blocks for proper error handling.




---

🧠 MCQ 36: What is process.nextTick() used for?

A. Schedule for next day

B. Delay execution for 1 second

C. Run code after current operation but before event loop continues

D. Run before file system loads

✅ Correct Answer: C

Explanation:

> process.nextTick() queues a callback to run after the current call stack clears, before other microtasks.




---

🧠 MCQ 37: Which method gracefully shuts down an HTTP server?

A. server.stop()

B. server.kill()

C. server.shutdown()

D. server.close()

✅ Correct Answer: D

Explanation:

> server.close() gracefully shuts down connections before destroying the server.




---

🧠 MCQ 38: Which module is best for file path operations?

A. os

B. fs

C. path

D. url

✅ Correct Answer: C

Explanation:

> The path module offers path manipulation methods like join, resolve, and basename.




---

🧠 MCQ 39: How do you limit request body size in Express?

A. middleware option in app.listen()

B. config.env

C. limit option in express.json()

D. using path module

✅ Correct Answer: C

Explanation:

> You can pass a limit option inside express.json({ limit: '1mb' }).




---

🧠 MCQ 40: Which HTTP status code means "resource not found"?

A. 200

B. 403

C. 404

D. 500

✅ Correct Answer: C

Explanation:

> 404 = Not Found, 403 = Forbidden, 500 = Server Error, 200 = Success.




---

Next batch will continue from 41–50...

Let me know if you want me to keep stacking it now, or drop a .md export with everything inside.*




