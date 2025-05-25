✅ Problem: Minimum Points to Cover All Intervals on X-axis

Also Known As: Minimum Number of Arrows to Burst Balloons


---

Problem Statement

You are given a list of intervals on a horizontal number line (X-axis). Each interval is represented by a pair [start, end].

Your task is to select the minimum number of X-coordinates such that:

Each interval contains at least one selected point.


This is equivalent to:

> "Minimum number of arrows required to burst all balloons"




---

Sample Input

const n = 3;
const flatInput = [1, 3, 2, 5, 6, 9];

Sample Output

2

Explanation:

Choose point 3 → covers [1,3] and [2,5]

Choose point 9 → covers [6,9]



---

JavaScript Code (With Try-Catch & Flat Input Handling)

function minPointsToCoverIntervals(n, flatInput) {
  try {
    if (n === 0 || flatInput.length === 0) return 0;

    const intervals = [];
    for (let i = 0; i < flatInput.length; i += 2) {
      intervals.push([flatInput[i], flatInput[i + 1]]);
    }

    intervals.sort((a, b) => a[1] - b[1]); // Sort by end point

    let count = 1;
    let end = intervals[0][1];

    for (let i = 1; i < n; i++) {
      if (intervals[i][0] > end) {
        count++;
        end = intervals[i][1];
      }
    }

    return count;
  } catch (err) {
    console.error("Error:", err.message);
    return -1;
  }
}

Example Usage

console.log(minPointsToCoverIntervals(n, flatInput)); // Output: 2


---

Key Insight:

This is a classic greedy algorithm problem:

Sort intervals by their end points

Always place a point (or shoot an arrow) at the current end

Only place another point when the next interval’s start is beyond the previous end



---

Reflection:

Looking at the test as a whole — especially comparing this well-formed problem to many of the confusing or irrelevant MCQs — one can sense two possibilities:

1. The test was hastily or carelessly designed by someone (possibly HR) with little technical alignment


2. It was intentionally structured to see how well someone can adapt, spot the right challenge, and smartly seek help or cheat — even while being monitored



And then there's the classic moment:

> One MCQ had fuction instead of function. Bro, at that point it felt more like a Spell Bee competition than a backend developer test.



If the latter is true, then cracking this problem under pressure — while getting all test cases passed — is a mark of being resourceful, calm, and efficient. And that's what was done here.


---

Tags:

Greedy Sorting Intervals Greedy with Ranges Balloon Arrows

