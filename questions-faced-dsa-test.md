// ✅ Problem: Minimum Points to Cover All Intervals on X-axis // Also Known As: Minimum Number of Arrows to Burst Balloons

/* You are given a list of intervals on a horizontal number line (X-axis). Each interval is represented by a pair [start, end].

Your task is to select the minimum number of X-coordinates such that each interval contains at least one selected point.

This is equivalent to: "Minimum number of arrows required to burst all balloons"


---

Input: n = 3 intervals = [[1,3], [2,5], [6,9]]

Output: 2

Explanation:

Choose point 3 → covers [1,3] and [2,5]

Choose point 9 → covers [6,9] */


function minPointsToCoverIntervals(n, flatInput) { try { if (n === 0 || flatInput.length === 0) return 0;

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

} catch (err) { console.error("Error:", err.message); return -1; } }

// Sample usage: const n = 3; const flatInput = [1, 3, 2, 5, 6, 9]; console.log(minPointsToCoverIntervals(n, flatInput)); // Output: 2

/* This is a classic greedy problem:

Sort intervals by end

Always place a point (or shoot arrow) at the current end

Only place another point when next interval's start > previous end */


