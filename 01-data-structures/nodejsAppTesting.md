Complete Summary: Unit Testing, API Testing, and Regression with Jest & Supertest

✅ What Is Unit Testing?

Unit testing means testing small, individual parts of your code (like a function) in isolation.

Example:

function add(a, b) {
  return a + b;
}

// Jest test
test('adds two numbers', () => {
  expect(add(2, 3)).toBe(5);
});

Tool: Jest

Written manually by developer

Tests logic like add(), validateUser(), etc.



---

✅ What Is API Testing?

API testing means testing your backend routes (like /signup, /login) to ensure they behave correctly.

Tools:

Postman: Manual testing

Supertest: Automated testing in code


Supertest Example:

const request = require('supertest');
const app = require('./app');

test('POST /signup', async () => {
  const res = await request(app)
    .post('/signup')
    .send({ email: 'test@gmail.com', password: '123456' });
  expect(res.statusCode).toBe(201);
  expect(res.body.message).toBe('User created successfully');
});


---

✅ Regression Testing

Regression testing = checking if new code breaks existing functionality.

In Jest + Supertest:

As soon as you change code, you run npm test

If test fails, regression is caught

Tests are saved in your GitHub repo (.test.js)


In Postman:

You must manually re-test routes every time

No version control or history

Less reliable for regression



---

✅ Tools Comparison

Feature	Postman (Manual)	Supertest + Jest (Automated)

Setup	Easy, no code	Needs setup
Usage Type	Manual API testing	Automated API + unit testing
Logged in GitHub	❌ No	✅ Yes
Regression Check	❌ Manual	✅ Automatic
Best Use	Debug, quick checks	Consistent test automation



---

✅ Developer vs Tester Responsibilities

Responsibility	Developer (You)	Tester (QA)

Unit Testing	✅ Yes (with Jest)	❌
API Testing	✅ Yes (Postman / Supertest)	✅ Sometimes
Integration Testing	✅ (Supertest, partially)	✅ Yes
UI Testing	❌	✅ Yes
Regression (code)	✅ Yes (local)	✅ Full system-wide



---

✅ Interview-Ready Lines

> "I’ve written unit tests using Jest for all major backend functions, and tested APIs manually using Postman during development. Once stable, I used Supertest with Jest to write automated API tests that ensure no regressions occur. These tests are part of my Git repo and run regularly via npm test."




---
