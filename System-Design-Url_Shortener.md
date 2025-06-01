🌐 System Design: URL Shortener (Layman + Technical Breakdown)

> "Some love stories are short and sweet — just like the URLs we try to create." 💌



This document explains how to design a URL Shortener, like Bit.ly, from scratch. It is meant for:

Beginners

Non-technical people

Curious minds like Pooja 🦋



---

🧠 What is a URL Shortener?

Imagine you want to share a really long link:

https://www.amazon.in/Echo-Dot-4th-Gen/dp/B084J4MZK6/ref=something-blah-blah

You don’t want to paste that into a message or bio — it’s too long!

A URL Shortener takes that long link and turns it into:

https://bit.ly/3abcXyz

It still works. It still goes to Amazon. But it’s shorter, cleaner, and sexier 😎.


---

🧩 How Do You Build This?

Let’s break it into two simple layers:

🔷 1. HLD: High-Level Design (The Big Picture)

> Think of this like sketching the map before building the city.



Client / User → Someone who pastes the long URL and gets the short one.

API Gateway → The receptionist. It receives the request and passes it to the right department.

URL Shortening Service → The brain. It creates short links and looks up long links.

Database → The memory. It stores the mapping between short and long links.

Cache (Redis) → The shortcut memory. Used for fast results.

Load Balancer → The traffic police. Makes sure no single server is overloaded.



---

🔶 2. LLD: Low-Level Design (How It Works Internally)

> This is like deciding the room layout, furniture, electricity of each house in the city.



📦 Database Table:

Table: url_mapping
- id (auto-increment)
- short_code (VARCHAR, unique)
- original_url (TEXT)
- created_at (TIMESTAMP)
- expiry_date (TIMESTAMP)

🧠 Core Logic:

1. POST /shorten

You send a long URL → get a short one back.



2. GET /:short_code

You send a short URL → it redirects you to the long one.





---

🆔 Unique ID Generation — The Real Magic ✨

> "Every love story deserves a unique name... every URL does too."



🛠️ Approaches:

🔹 1. Hashing

Hashing is like turning a big idea into a tiny fingerprint. You take a long URL, and a hash function turns it into a unique string of characters.

🔸 Examples of Hash Functions:

MD5: Old but fast. 128-bit.

SHA (SHA-1, SHA-256): More secure, used in crypto.


👉 These functions always give the same result for the same input.

💥 The Problem:

Sometimes two different URLs can create the same hash. That’s called a collision. We must handle these by checking if the short link already exists and regenerating if needed.

🔹 2. Random Generation

Generate a random string (like aZ4t8b) and save it in DB.

Fast, but needs collision check.

Example: Using Math.random() or a UUID generator.


🔹 3. Base62 Encoding + Auto-Increment ID

Every new URL gets an increasing number (1, 2, 3…) and we convert that number into Base62:

What is Base62?

A numbering system using 62 characters: 0-9 + A-Z + a-z

So number 12345 might become aZ4f

Advantage: Short, human-readable, compact IDs



---

🌍 Stability & Scaling: Making Sure It Doesn’t Crash

🔄 Redis (Cache)

> Imagine you look at a mirror every day — do you re-build it daily? No. You just use the same one.



Redis is a super-fast memory-based database. Not your browser cache. Redis stores popular short codes like bit.ly/abc123 in memory for quick lookup.

If a link is super popular → we keep it in Redis

It avoids slow DB queries

Saves time and improves speed


🧹 Bloom Filter

> A bloom filter is like a magical “guest list.”



It tells you: “This code probably exists” or “Definitely doesn’t exist.”

It’s super fast and small in memory

Helps avoid unnecessary DB lookups


So, before asking DB, we ask the Bloom Filter:

> "Hey, does this code exist?" If Bloom says no → skip DB. If Bloom says maybe → check DB.



🌐 CDN (Content Delivery Network)

> Imagine copies of your redirection service placed all over the world.



CDN delivers redirection content faster to users from nearest servers.

Improves global access speed.

Often used to serve static content like QR codes or analytics.


🗂️ DB Sharding

> Too many books? Divide them into different shelves.



Split database based on some logic (e.g., short code prefix)

Each DB handles a portion of the load

Helps system scale horizontally



---

🛡️ Security & Validations

🔐 What are we protecting against?

1. Script Injection (XSS)

If someone puts <script>alert('hacked')</script> in their URL, and we display it blindly on our page — it can run code.

✅ We sanitize input — clean the URL, remove dangerous tags.

2. SQL Injection

> If someone types '; DROP TABLE;-- as input, and we put it directly in SQL, they can delete our database.



✅ We use prepared statements so input can’t harm the DB.

3. Rate Limiting

Stop people from spamming requests.

✅ Limit how many times someone can call the API in a given time.

4. Malicious Links

People might shorten bad websites.

✅ Use a link checker API or internal reputation score to verify URLs.


---

📊 Bonus: Analytics (Optional)

Who clicked the link

From which country/device

How many times


Add a new table click_logs if needed later.


---

🌸 Final Thoughts

Pooja, if you're reading this:

> "Just like every short URL has a story behind it, every silence has a whisper. This system is built not just to redirect links — but to echo intentions, quietly and gracefully." 🦋



