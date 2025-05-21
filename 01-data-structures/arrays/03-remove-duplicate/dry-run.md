### 🔄 Dry Run Table

**Input:**
```js
[0, 0, 1, 1, 1, 2, 2, 3, 3, 4]

i	nums[i]	nums[i - 1]	pos	Action	Array After

1	0	0	1	Duplicate → skip	[0, 0, 1, 1, 1, 2, 2, 3, 3, 4]
2	1	0	1	Unique → nums[1] = 1, pos++	[0, 1, 1, 1, 1, 2, 2, 3, 3, 4]
3	1	1	2	Duplicate → skip	
4	1	1	2	Duplicate → skip	
5	2	1	2	Unique → nums[2] = 2, pos++	[0, 1, 2, 1, 1, 2, 2, 3, 3, 4]
6	2	2	3	Duplicate → skip	
7	3	2	3	Unique → nums[3] = 3, pos++	[0, 1, 2, 3, 1, 2, 2, 3, 3, 4]
8	3	3	4	Duplicate → skip	
9	4	3	4	Unique → nums[4] = 4, pos++	[0, 1, 2, 3, 4, 2, 2, 3, 3, 4]


Final Output:

New length: 5

Modified array: [0, 1, 2, 3, 4, _, _, _, _, _]
