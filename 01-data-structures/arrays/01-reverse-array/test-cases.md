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
            console.log(`   Input: ${JSON.stringify(input)}`);
            console.log(`   Expected: ${JSON.stringify(expected)}`);
            console.log(`   Got: ${JSON.stringify(actual)}\n`);
        }
    }

    console.log(`\n${passed}/${testCases.length} tests passed ✅\n`);
}