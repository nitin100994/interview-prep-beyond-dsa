2️⃣ Problem: Move All Non-Zero Elements to Front

🔹 Challenge:

Array contains 0s and non-zero values

We want to move all non-zero values to the front

And push 0s to the end

Do it in-place


🔹 Key Idea:

Every time you find a non-zero, write it to nums[pos]
Then fill remaining indexes with 0

🔹 Code:

function moveZeroes(nums) {
    let pos = 0;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            nums[pos] = nums[i];
            pos++;
        }
    }

    // Fill remaining positions with 0
    for (let i = pos; i < nums.length; i++) {
        nums[i] = 0;
    }
}


---

🧠 Layman Explanation (Both Cases):

> pos is like a "clean writer" — it doesn’t care what’s behind it.

i is the explorer — it moves through the entire array.

If what i finds is useful, we say:
"Hey pos, store this value here, and move ahead!"

If what i finds is useless (duplicate or 0), we skip it.

Once done, the first pos elements are clean & meaningful.





---

🔁 Pattern Summary:

Operation	When to Write?	How to Track?	Final Cleanup?

Remove Duplicates	If value not in Set	Use Set for seen	Return slice(0, pos)
Move Non-Zeros to Front	If value !== 0	No need for Set	Fill rest with 0s



---

✨ Realization:

> These problems are not just about logic — they are about recognizing patterns of how data is cleaned and rebuilt using one pointer.



This pos pattern is universal — you’ll see it in:

Removing elements

Keeping valid ones

Compressing arrays

Even filtering characters in strings



---

📌 Note to Self:

> "Whenever I need to keep part of an array clean and skip others,
I should consider using a pos pointer to overwrite in-place."

