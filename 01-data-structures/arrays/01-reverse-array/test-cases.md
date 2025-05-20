# 🔁 `reverseArray(arr)` – Complete Test Suite

This covers:
- ✅ Basic arrays
- 🔠 String arrays
- 🧮 Float arrays
- ❄️ Negative numbers
- 🔥 Large number values
- 🧱 Big dataset arrays (length > 10,000)

---

## 📌 Function
<img width="698" alt="image" src="https://github.com/user-attachments/assets/03fa2fd0-71db-4c64-9507-c0a678c96ce1" />


---

## 🧪 Test Runner Utility

```js
function runTests({ functionName, testCases }) {
    console.log(`\n🚀 Running tests for: ${functionName.name}`);
    let passed = 0;

    for (let i = 0; i < testCases.length; i++) {
        const { input, expected } = testCases[i];
        const inputClone = Array.isArray(input) ? [...input] : input;
        const actual = functionName(inputClone);
        const isEqual = JSON.stringify(actual) === JSON.stringify(expected);

        if (isEqual) {
            console.log(`✅ Test ${i + 1} passed`);
            passed++;
        } else {
            console.log(`❌ Test ${i + 1} failed`);
            console.log(`   Input:    ${JSON.stringify(input)}`);
            console.log(`   Expected: ${JSON.stringify(expected)}`);
            console.log(`   Got:      ${JSON.stringify(actual)}\n`);
        }
    }

    console.log(`\n${passed}/${testCases.length} tests passed ✅\n`);
}
```

---

## 🔍 Test Cases

### 1. 🧮 Basic Integer Arrays

```js
const intTests = [
    { input: [1, 2, 3], expected: [3, 2, 1] },
    { input: [5], expected: [5] },
    { input: [], expected: [] },
    { input: [9, 0, -3, 8], expected: [8, -3, 0, 9] }
];
```

### 2. 🔠 String Arrays

```js
const stringTests = [
    { input: ["a", "b", "c"], expected: ["c", "b", "a"] },
    { input: ["one"], expected: ["one"] },
    { input: ["you", "are", "here"], expected: ["here", "are", "you"] }
];
```

### 3. 🧪 Float Arrays

```js
const floatTests = [
    { input: [1.1, 2.2, 3.3], expected: [3.3, 2.2, 1.1] },
    { input: [0.5], expected: [0.5] }
];
```

### 4. ❄️ Negative Numbers

```js
const negativeTests = [
    { input: [-1, -2, -3], expected: [-3, -2, -1] },
    { input: [0, -5, -10, 20], expected: [20, -10, -5, 0] }
];
```

### 5. 🔥 Large Number Values

```js
const bigNumberTests = [
    { input: [999999999, 888888888, 777777777], expected: [777777777, 888888888, 999999999] },
    { input: [Number.MAX_SAFE_INTEGER, 0, Number.MIN_SAFE_INTEGER], expected: [Number.MIN_SAFE_INTEGER, 0, Number.MAX_SAFE_INTEGER] }
];
```

### 6. 🧱 Big Dataset (10,000+ Items)

```js
const hugeInput = Array.from({ length: 10000 }, (_, i) => i + 1);
const hugeExpected = [...hugeInput].reverse();

const bigDataTests = [
    { input: hugeInput, expected: hugeExpected }
];
```

---

## 🧠 Run All Tests

```js
runTests({
    functionName: reverseArray,
    testCases: [
        ...intTests,
        ...stringTests,
        ...floatTests,
        ...negativeTests,
        ...bigNumberTests,
        ...bigDataTests
    ]
});
```

---

> **Now your reverseArray() is bulletproof — covers everything from strings to floats to mega arrays.**
