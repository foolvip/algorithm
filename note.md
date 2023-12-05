# 职业训练

1. 拆分知识
2. 刻意练习
3. 反馈

# 5遍刷题法

1. 背诵，看解法
2. 自己写 -> leetcode提交
3. 24h后再写(重复)
4. 一周后再写(专项解法练习)
5. 面试前一周复习

# 解法

1. 看到题目考虑所有的结果，选最优的
2. 自顶向下的解析方式

# algorithm

算法学习记录
## 数量级
### 数据结构
数组、栈、队列、链表、树、图、堆、散列表

# 递归Recursion（泛型递归、树的递归）

## 思维要点

1. 不要人肉进行递归
2. 找到最近最简方法，将其拆解成可重复解决的问题（找最近重复子问题）
3. 数学归纳法思维方法，将其拆解成可重复解决的问题
4. 数学归纳法思维（抵制人肉递归的诱惑）  
本质 寻找重复性 -> 计算机指令集

## 递归代码模版

```python
def recursion(level, param1, param2, ...): 
    # recursion terminator 
    if level > MAX_LEVEL: 
	   process_result 
	   return 
    # process logic in current level 
    process(level, data...) 
    # drill down 
    self.recursion(level + 1, p1, ...) 
    # reverse the current level status if needed
```

```Java
public void recur(int level, int param) { 


  // terminator 
  if (level > MAX_LEVEL) { 
    // process result 
    return; 
  }


  // process current logic 
  process(level, param); 


  // drill down 
  recur( level: level + 1, newParam); 


  // restore current status 
}
```

```C++ / C
void recursion(int level, int param) { 
  // recursion terminator
  if (level > MAX_LEVEL) { 
    // process result 
    return ; 
  }

  // process current logic 
  process(level, param);

  // drill down 
  recursion(level + 1, param);

  // reverse the current level status if needed
}
```

```js
const recursion = (level, params) =>{
   // recursion terminator
   if(level > MAX_LEVEL){
     process_result
     return 
   }
   // process current level
   process(level, params)
   //drill down
   recursion(level+1, params)
   //clean current level status if needed  
}
```

# 分治
## 分治代码模版
```python
def divide_conquer(problem, param1, param2, ...): 
  # recursion terminator 
  if problem is None: 
	print_result 
	return 
  # prepare data 
  data = prepare_data(problem) 
  subproblems = split_problem(problem, data) 
  # conquer subproblems 
  subresult1 = self.divide_conquer(subproblems[0], p1, ...) 
  subresult2 = self.divide_conquer(subproblems[1], p1, ...) 
  subresult3 = self.divide_conquer(subproblems[2], p1, ...) 
  …
  # process and generate the final result 
  result = process_result(subresult1, subresult2, subresult3, …)
	
  # revert the current level states
```

```Java
private static int divide_conquer(Problem problem, ) {
  
  if (problem == NULL) {
    int res = process_last_result();
    return res;     
  }
  subProblems = split_problem(problem)
  
  res0 = divide_conquer(subProblems[0])
  res1 = divide_conquer(subProblems[1])
  
  result = process_result(res0, res1);
  
  return result;
}
```

```C++ / C
int divide_conquer(Problem *problem, int params) {
  // recursion terminator
  if (problem == nullptr) {
    process_result
    return return_result;
  } 

  // process current problem
  subproblems = split_problem(problem, data)
  subresult1 = divide_conquer(subproblem[0], p1)
  subresult2 = divide_conquer(subproblem[1], p1)
  subresult3 = divide_conquer(subproblem[2], p1)
  ...

  // merge
  result = process_result(subresult1, subresult2, subresult3)
  // revert the current level status
 
  return 0;
}
```

```js
const divide_conquer = (problem, params) => {

  // recursion terminator

  if (problem == null) {

    process_result

    return

  } 

  // process current problem

  subproblems = split_problem(problem, data)

  subresult1 = divide_conquer(subproblem[0], p1)

  subresult2 = divide_conquer(subproblem[1], p1)

  subresult3 = divide_conquer(subproblem[2], p1)

  ...

  // merge

  result = process_result(subresult1, subresult2, subresult3)

  // revert the current level status

}
```




# 动态规划
「序列 DP」、「区间 DP」、「数位 DP」
## 基本特性
- 找重复性（分治）    
- 定义状态数组    
- DP方程   
- 初始化数据

## 关键点
1. 动态规划和递归或分治没有本质上的区别（关键看有无最优的子结构）
2. 共性：找到重复子问题
3. 差异性：最优子结构，中途可以淘汰次优解。
## 解决问题的思路
1. 最优子结构（重复性子问题）
2. 存储中间状态：opt[i]
3. 递推公式
  - Fib: opt[i] = opt[i - 1] + opt[i - 2]
  - 二维路径：opt[i, j] = opt[i + 1][j] + opt[i][j + 1]（且判断a[i, j]是否空地）

## 动态规划小结
1. 打破自己的思维惯性，形成机器思维
2. 理解复杂逻辑的关键
3. 也是职业进阶的要点要领

# KMP算法

- https://www.zhihu.com/question/21923021/answer/281346746
- https://www.zhihu.com/question/21923021/answer/1032665486
