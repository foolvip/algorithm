class Node {
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }
}

// 节点 + 指针
function ListNode() {
  let head = new Node(1);
  head.next = new Node(2);
  head.next.next = new Node(3);
  head.next.next.next = new Node(4);

  let p = head, res = '';
  while (p) {
    res += `${p.val} ->`;
    p = p.next;
  }
  res += 'null';
  console.log(res);
}

// ListNode();

// 双数组

function ListNode() {
  const data = []; // 数据
  const next = []; // 指针
  /**
   * 在index后面添加p节点，p的值为val
   * @param {*} index 当前节点索引index
   * @param {*} p 新增节点
   * @param {*} val 新增节点的值
   */
  function addNode(index, p, val) {
    next[p] = next[index];
    next[index] = p;
    data[p] = val;
  }
  let head = 3;
  data[3] = 'a';
  addNode(3, 5, 'b');
  addNode(5, 7, 'c');
  addNode(7, 2, 'd');
  addNode(2, 1, 'e');
  addNode(7, 4, 'f');

  let p = head; // 从头节点开始遍历
  let res = '';
  while (p) {
    res += `${data[p]} ->`;
    p = next[p];
  }
  res += 'null';
  console.log(res);
}
