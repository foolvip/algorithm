# 题目链接

https://leetcode.cn/problems/he-wei-sde-lian-xu-zheng-shu-xu-lie-lcof/description/

# 题目【简单】

输入一个正数 s,打印出所有和为 s 的**连续**正数序列（至少含有两个数）。例如，输入15，由于 1+2+3+4+5 = 4+5+6 = 7+8 = 15，所以打印出3个连续序列1～5、4～6和7～8。

# 示例

```js
示例 1：
输入：target = 12
输出：[[3, 4, 5]]
解释：在上述示例中，存在一个连续正整数序列的和为 12，为 [3, 4, 5]。

示例 2：
输入：target = 18
输出：[[3,4,5,6],[5,6,7]]
解释：在上述示例中，存在两个连续正整数序列的和分别为 18，分别为 [3, 4, 5, 6] 和 [5, 6, 7]。
```

**提示：**
- 1 <= target <= 10^5

# 题解

## 双指针滑动窗口

- 时间复杂度 O(N)
- 空间复杂度 O(1)

```js
/**
 * @param {number} target
 * @return {number[][]}
 */
var findContinuousSequence = function(target) {
    let i = 1, j = 2, s = 3; // 左边界i=1，右边界 j=2，元素和 s=3
        let res = [];
        while(i < j) {
            if(s == target) {
                let ans = new Array(j - i + 1);
                for(let k = i; k <= j; k++)
                    ans[k - i] = k;
                res.push(ans);
            }
            if(s >= target) {
                s -= i;
                i++;
            } else {
                j++;
                s += j;
            }
        }
        return res;
};
```
