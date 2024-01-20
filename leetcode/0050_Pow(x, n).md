
# 题目链接

https://leetcode.cn/problems/powx-n/description/

# 题目

实现 pow(x, n) ，即计算 x 的整数 n 次幂函数（即，xn ）。

# 示例

```js
示例 1：
输入：x = 2.00000, n = 10
输出：1024.00000

示例 2：
输入：x = 2.10000, n = 3
输出：9.26100

示例 3：
输入：x = 2.00000, n = -2
输出：0.25000
解释：2-2 = 1/22 = 1/4 = 0.25
```

# 题解

## 快速幂 + 递归

- 时间复杂度：O(log⁡n)，即为递归的层数。
- 空间复杂度：O(log⁡n)，即为递归的层数。这是由于递归的函数调用会使用栈空间。

```js
/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */

const quickMul = (x, n) => {
    if (n === 0) return 1.0;
    let y = quickMul(x, ~~(n / 2));
    return n % 2 === 0 ? y * y : y * y * x;
}

var myPow = function(x, n) {
    return n >= 0 ? quickMul(x, n) : 1.0 / quickMul(x, -n);
};
```

## 快速幂 + 迭代

- 时间复杂度：O(log⁡n)，即为对 n 进行二进制拆分的时间复杂度。
- 空间复杂度：O(1)。

```js
/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function(x, n) {
    let reusult = 1.0
    if(n < 0){
        //js中默认不是整除
        x = 1 / x 
        n = -n
    }
    while(n > 0){
      if(n & 1){
        reusult *= x
      }
      x *= x
      // >>是有符号数的移位，>>>这个是无符号数的移位
      n = n >>> 1
    }
    return reusult
};
```
