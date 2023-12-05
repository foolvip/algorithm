### 题目：之字形打印二叉树
请实现一个函数按照之字形顺序打印二叉树，即第一行按照从左到右的顺序打印，第二层按照从右到左的顺序打印，第三行再按照从左到右的顺序打印，其他行以此类推。      
### 题目链接
https://leetcode.cn/problems/cong-shang-dao-xia-da-yin-er-cha-shu-iii-lcof/

### 示例
给定二叉树: [3,9,20,null,null,15,7],
```js
    3
   / \
  9  20
    /  \
   15   7
```
返回其层次遍历结果：
```js
[
  [3],
  [20,9],
  [15,7]
]
```
**提示：**
- 节点总数 <= 1000
### 题解
#### 双端队列
```js
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
    const res = [];
    if (!root) {
        return res;
    }
    const queue = [root];
    let isOrderLeft = true; // 还可以通过奇偶层判断
     while (queue.length) {
        let levelList = [];
        const size = queue.length;
        for (let i = 0; i < size; ++i) {
            const node = queue.shift();
            if (isOrderLeft) {
                levelList.push(node.val);
            } else {
                levelList.unshift(node.val);
            }
            if (node.left !== null) {
                queue.push(node.left);
            }
            if (node.right !== null) {
                queue.push(node.right);
            }
        }            
        res.push(levelList);
        isOrderLeft = !isOrderLeft;
    }
    return res;
};

```
### 复杂度分析
- 时间复杂度：O(n)
- 空间复杂度：O(n)
