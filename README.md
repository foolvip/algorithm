# algorithm
算法学习记录   
### 数据结构
数组、栈、队列、链表、树、图、堆、散列表



# js基本知识
最大值：Infinity, Number.MAX_VALUE, Number.MAX_SAFE_INTEGER, Number.POSITIVE_INFINITY, Number.NEGATIVE_INFINITY
```js
function checkNumber(bigNumber) {
  if (bigNumber === Number.POSITIVE_INFINITY) {
    return 'Process number as Infinity';
  }
  return bigNumber;
}

console.log(checkNumber(Number.MAX_VALUE));
// expected output: 1.7976931348623157e+308

console.log(checkNumber(Number.MAX_VALUE * 2));
// expected output: Process number as Infinity
```