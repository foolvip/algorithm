### 题目
定义栈的数据结构，请在该类型中实现一个能够得到栈的最小元素的 min 函数在该栈中，调用 min、push 及 pop 的时间复杂度都是 O(1)。
### 题目链接
https://leetcode.cn/problems/bao-han-minhan-shu-de-zhan-lcof/
### 示例:
```js
MinStack minStack = new MinStack();
minStack.push(-2);
minStack.push(0);
minStack.push(-3);
minStack.min();   --> 返回 -3.
minStack.pop();
minStack.top();      --> 返回 0.
minStack.min();   --> 返回 -2.
```
**提示：**
- 各函数的调用总次数不超过 20000 次
- 注意：本题与主站 155 题相同：https://leetcode-cn.com/problems/min-stack/
### 题解
#### 辅助栈
```js
/**
 * initialize your data structure here.
 */
var MinStack = function() {
    this.data_stack = [];
    this.min_stack = [Infinity];
};

/** 
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function(x) {
    this.data_stack.push(x);
    this.min_stack.push(Math.min(this.min_stack[this.min_stack.length - 1], x));
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    this.data_stack.pop();
    this.min_stack.pop();
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
     return this.data_stack[this.data_stack.length - 1];
};

/**
 * @return {number}
 */
MinStack.prototype.min = function() {
    return this.min_stack[this.min_stack.length - 1];
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.min()
 */
```
**复杂度分析**
- 时间复杂度：对于题目中的所有操作，时间复杂度均为 O(1)。
- 空间复杂度：O(n)，其中 n 为总操作数。最坏情况下，我们会连续插入 n 个元素，此时两个栈占用的空间为 O(n)。
