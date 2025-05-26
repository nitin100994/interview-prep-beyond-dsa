XOR Magic: What, Why, How — Explained in Depth

🔥 Problem: Find the Single Number (Every number appears twice except one)
```
function singleNumber(nums) {
  let result = 0;
  for (let num of nums) {
    result ^= num;  // XOR each number
  }
  return result;
}
```
💡 Dry Run:
```
Input: [2, 3, 5, 4, 5, 3, 4]

Step	Num	Result (Before)	Operation	Result (After)

1	2	0	0 ^ 2	2
2	3	2	2 ^ 3	1
3	5	1	1 ^ 5	4
4	4	4	4 ^ 4	0
5	5	0	0 ^ 5	5
6	3	5	5 ^ 3	6
7	4	6	6 ^ 4	2


Final Output: 2
```
All duplicates cancel out. Only the unique number remains.


---

What is XOR?

XOR = Exclusive OR It’s a bitwise operation that returns:
```
1 if the bits are different

0 if the bits are the same
```
```
Truth Table:

A	B	A ^ B

0	0	0
0	1	1
1	0	1
1	1	0

```

---
```
Why XOR works for single number problems

1. XOR cancels out duplicates:

a ^ a = 0

```

2. XOR with 0 gives the number itself:

a ^ 0 = a

```

3. XOR is reversible:

If a ^ b = c, then c ^ b = a

This allows us to retrieve the original number back

```



---

🔁 Proof: Why XOR is Reversible

Let:

x = a ^ b


Then:
```
x ^ b = (a ^ b) ^ b
      = a ^ (b ^ b)
      = a ^ 0
      = a ✅

Similarly:

x ^ a = (a ^ b) ^ a
      = b ✅
```
Properties that make it possible:
```
Commutative: a ^ b = b ^ a

Associative: (a ^ b) ^ c = a ^ (b ^ c)
```

These allow bits to rearrange and cancel safely — making XOR both lossless and reversible.


---
```
How XOR Works Internally (Bit Magic)

Let’s say:

6 → 0110

4 → 0100


0110
^ 0100
------
  0010 → 2

```
---

Real-World Analogy:

Think of XOR like a light switch toggle:

Flip the switch once → Light ON

Flip it again → Light OFF

```
Same with XOR:

a ^ b ^ b = a


```
---

🔄 Bonus Problem: Swap Two Numbers Without Temp Variable Using XOR

Problem:
```
Swap two integers using XOR, without using a temporary variable.

Code:

let a = 5;
let b = 3;

a = a ^ b;  // a = 5 ^ 3 = 6
b = a ^ b;  // b = 6 ^ 3 = 5 (original a)
a = a ^ b;  // a = 6 ^ 5 = 3 (original b)

Final Output:

a = 3

b = 5

```
Why It Works:

Step 1 mixes the values into a

Step 2 retrieves the original a from the mix

Step 3 retrieves the original b


This works because of XOR's reversible and commutative nature. It’s like encoding and decoding with pure binary logic.


---

Conclusion

XOR is not just an operator. It’s:

Memory-efficient

Elegant

Cryptographically powerful


Use it for:

Finding missing or unique elements

Reversible logic

Bit manipulation

Swapping variables


> This is the magic of bits — 0s and 1s flipping the universe.



