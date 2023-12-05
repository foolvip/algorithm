
# 解题方法

递归、迭代、单调栈、动态规划、快慢指针

# 数组、链表、跳表

## 基本特性

- Java源码分析（ArrayList）[http://developer.classpath.org/doc/java/util/ArrayList-source.html]
- Linked List 的标准实现代码[https://www.geeksforgeeks.org/implementing-a-linked-list-in-java-using-class/]
- Linked List 示例代码[http://www.cs.cmu.edu/~adamchik/15-121/lectures/Linked%20Lists/code/LinkedList.java]
- Java 源码分析（LinkedList）[http://developer.classpath.org/doc/java/util/LinkedList-source.html]
- LRU Cache - Linked list： LRU 缓存机制[https://leetcode-cn.com/problems/lru-cache/]
- Redis - Skip List：跳跃表[https://redisbook.readthedocs.io/en/latest/internal-datastruct/skiplist.html]、为啥 Redis 使用跳表（Skip List）而不是使用 Red-Black？[https://www.zhihu.com/question/20202931]

## 实战题目

- [x] 两数之和题目： https://leetcode-cn.com/problems/two-sum/ [42]
### Array 实战题目
- [x] https://leetcode-cn.com/problems/container-with-most-water/ [11]
- [x] https://leetcode-cn.com/problems/move-zeroes/ [283]
- [x] https://leetcode.com/problems/climbing-stairs/ [70]
- [x] https://leetcode-cn.com/problems/3sum/ (高频老题）[15]
### Linked List 实战题目
- [x] https://leetcode-cn.com/problems/reverse-linked-list/ [206]
- [x] https://leetcode-cn.com/problems/swap-nodes-in-pairs/ [24]
- [x] https://leetcode-cn.com/problems/linked-list-cycle/ [141]
- [x] https://leetcode-cn.com/problems/linked-list-cycle-ii/ [142]
- https://leetcode-cn.com/problems/reverse-nodes-in-k-group/ [25]  
### 课后作业
- [x] https://leetcode-cn.com/problems/remove-duplicates-from-sorted-array/ [26]
- [x] https://leetcode-cn.com/problems/rotate-array/ [189]
- [x] https://leetcode-cn.com/problems/merge-two-sorted-lists/ [21]
- [x] https://leetcode-cn.com/problems/merge-sorted-array/ [88]
- [x] https://leetcode-cn.com/problems/two-sum/ [1]
- [x] https://leetcode-cn.com/problems/plus-one/ [66]


# 栈、队列、优先队列、双端队列

- [x] (Java的PriorityQueue)[https://docs.oracle.com/javase/10/docs/api/java/util/PriorityQueue.html]    
- [x] (Java的Stack源码)[http://developer.classpath.org/doc/java/util/Stack-source.html]   
- [x] (Java的Queue源码)[http://fuseyism.com/classpath/doc/java/util/Queue-source.html]   
- [x] (Python的heapq)[https://docs.python.org/2/library/heapq.html]
- [x] (高性能的container库)[https://docs.python.org/2/library/collections.html]

## 预习题目
-	[x] https://leetcode-cn.com/problems/valid-parentheses/ [20]
-	[x]	https://leetcode-cn.com/problems/min-stack/ [155]
## 实战题目
-	[x]	https://leetcode-cn.com/problems/largest-rectangle-in-histogram [84]
-	[x] https://leetcode-cn.com/problems/sliding-window-maximum [239]
## 课后作业
-	[x] https://leetcode.com/problems/design-circular-deque [641]
-	[x] https://leetcode.com/problems/trapping-rain-water/ [42]

# 哈希表、映射、集合

## 基本特性
- [x] Java Set 文档[https://docs.oracle.com/en/java/javase/12/docs/api/java.base/java/util/Set.html]
- [x] Java Map 文档[https://docs.oracle.com/en/java/javase/12/docs/api/java.base/java/util/Map.html]

## 实战题目

- [x] https://leetcode-cn.com/problems/valid-anagram/description/ [242]
- [x] https://leetcode-cn.com/problems/group-anagrams/ [49]
- [x] https://leetcode-cn.com/problems/two-sum/description/ [1]

## 精选代码收藏

- [x] https://shimo.im/docs/R6g9WJV89QkHrDhr/read

# 树、二叉树、二叉搜索树

树和图的区别：图可以形成环

### 通用公式

```py
def preorder(self, root):
  if root:
    self.traverse_path.append(root.val)
    self.preorder(root.left)
    self.preorder(root.right)

def inorder(self, root):
  if root:
    self.inorder(root.left)
    self.traverse_path.append(root.val)
    self.inorder(root.right)

def postorder(self, root):
  if root:
    self.postorder(root.left)
    self.postorder(root.right)
    self.traverse_path.append(root.val)
```

[二叉搜索树 Demo](https://visualgo.net/zh/bst)  

-	[x] https://leetcode-cn.com/problems/binary-tree-inorder-traversal/ [94]
-	[x] https://leetcode-cn.com/problems/binary-tree-preorder-traversal/ [144]
-	[x] https://leetcode-cn.com/problems/n-ary-tree-postorder-traversal/ [590]
-	[x] https://leetcode-cn.com/problems/n-ary-tree-preorder-traversal/ [589]
-	[x] https://leetcode-cn.com/problems/n-ary-tree-level-order-traversal/ [429]

# 递归Recursion（泛型递归、树的递归）
## 实战题目
- [x] https://leetcode-cn.com/problems/climbing-stairs/ [70]
- https://leetcode-cn.com/problems/generate-parentheses/ [22]
- https://leetcode-cn.com/problems/invert-binary-tree/description/ [226]
- https://leetcode-cn.com/problems/validate-binary-search-tree [98]
- https://leetcode-cn.com/problems/maximum-depth-of-binary-tree [104]
- https://leetcode-cn.com/problems/minimum-depth-of-binary-tree [111]
- https://leetcode-cn.com/problems/serialize-and-deserialize-binary-tree/ [297]

## [如何优雅地计算斐波那契数列](https://time.geekbang.org/dailylesson/detail/100028406)
## 课后作业
- https://leetcode-cn.com/problems/lowest-common-ancestor-of-a-binary-tree/
- https://leetcode-cn.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal
- https://leetcode-cn.com/problems/combinations/
- https://leetcode-cn.com/problems/permutations/
- https://leetcode-cn.com/problems/permutations-ii/

# 分治、回溯
- [牛顿迭代法原理](http://www.matrix67.com/blog/archives/361)
- [牛顿迭代法代码](http://www.voidcn.com/article/p-eudisdmk-zm.html)

## 预习题目
- https://leetcode-cn.com/problems/powx-n/ [50]
- https://leetcode-cn.com/problems/subsets/ [28]
## 实战题目
- https://leetcode-cn.com/problems/generate-parentheses/ [22]
- https://leetcode-cn.com/problems/majority-element/description/ （简单、但是高频）
- https://leetcode-cn.com/problems/letter-combinations-of-a-phone-number/
- https://leetcode-cn.com/problems/n-queens/



# 深度优先搜索、广度优先搜索
# 贪心算法
# 二分查找

# 动态规划
## 基本特性
- 找重复性（分治）    
- 定义状态数组    
- DP方程   
- 初始化数据
## 实战题目
- 不同路径(https://leetcode-cn.com/problems/unique-paths/)
- 不同路径2(https://leetcode-cn.com/problems/unique-paths-ii/)
- 最长公共子序列(https://leetcode-cn.com/problems/longest-common-subsequence/)
- MIT 动态规划课程最短路径算法[https://www.bilibili.com/video/av53233912?from=search&seid=2847395688604491997]（哔哩哔哩视频）

## 实战题目
- [x] https://leetcode-cn.com/problems/climbing-stairs/description/ [70]
- [x] https://leetcode-cn.com/problems/triangle/description/   [120] 题解(https://leetcode.com/problems/triangle/discuss/38735/Python-easy-to-understand-solutions-(top-down-bottom-up))  
- [x] https://leetcode-cn.com/problems/maximum-subarray/  [53]
- https://leetcode-cn.com/problems/maximum-product-subarray/description/   [152]
- https://leetcode-cn.com/problems/coin-change/description/

## 实战题目
- https://leetcode-cn.com/problems/house-robber/
- https://leetcode-cn.com/problems/house-robber-ii/description/

- https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock/#/description
- https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock-ii/
- https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock-iii/
- https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock-with-cooldown/
- https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock-iv/
- https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock-with-transaction-fee/

- https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock/solution/yi-ge-fang-fa-tuan-mie-6-dao-gu-piao-wen-ti-by-l-3/
  
## 课后作业
- https://leetcode-cn.com/problems/longest-valid-parentheses/
- https://leetcode-cn.com/problems/minimum-path-sum/
- https://leetcode-cn.com/problems/edit-distance/
- https://leetcode-cn.com/problems/decode-ways
- https://leetcode-cn.com/problems/maximal-square/
- https://leetcode-cn.com/problems/max-sum-of-rectangle-no-larger-than-k/
- https://leetcode-cn.com/problems/frog-jump/
- https://leetcode-cn.com/problems/split-array-largest-sum
- https://leetcode-cn.com/problems/student-attendance-record-ii/
- https://leetcode-cn.com/problems/task-scheduler/
- https://leetcode-cn.com/problems/palindromic-substrings/
- https://leetcode-cn.com/problems/minimum-window-substring/
- https://leetcode-cn.com/problems/burst-balloons/

## 高级 DP 实战题目
- https://leetcode-cn.com/problems/perfect-squares/
- https://leetcode-cn.com/problems/edit-distance/ （重点）
- https://leetcode-cn.com/problems/jump-game/
- https://leetcode-cn.com/problems/jump-game-ii/
- https://leetcode-cn.com/problems/unique-paths/
- https://leetcode-cn.com/problems/unique-paths-ii/
- https://leetcode-cn.com/problems/unique-paths-iii/
- https://leetcode-cn.com/problems/coin-change/
- https://leetcode-cn.com/problems/coin-change-2/
注意：先消化前面的实战题目，高级 DP 的方法和题解会在课程后面解锁。 

# 位操作
- 338. 比特位计数
- 231. 2 的幂
- 136. 只出现一次的数字
- 191. 位1的个数
- 268. 丢失的数字

# 学习博客
- https://github.com/axing521/js-algo
- https://labuladong.github.io/algo/di-er-zhan-a01c6/
- https://www.programmercarl.com/%E6%95%B0%E7%BB%84%E7%90%86%E8%AE%BA%E5%9F%BA%E7%A1%80.html#%E6%95%B0%E7%BB%84%E7%90%86%E8%AE%BA%E5%9F%BA%E7%A1%80

