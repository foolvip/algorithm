# 字节

## 26进制转换

0->A, 1->B … 24->Y,25->Z,26->AA,27->AB…52->BA

```js
const convert26 = (num)=>{
  let real = num + 1;
  let str = "";
  while(real > 0){
    let m = real % 26;
    if(m === 0){
      m = 26;
    }
    str = String.fromCharCode ( m + 64) + str;
    real = (real - m) / 26
  }
  return str;
}
```

- leetcode 442
- offer 52、offer 68
- offer 48 (leetcode 3)
- leetcode 200(岛屿数量)