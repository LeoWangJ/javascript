map and reduce 應用

還沒學習到map時,要將陣列資料全增加1,我的作法會是:

```
let arrs = [1,2,3,4,5,6,7,8,9];
for(var i = 0; i< arrs.length; i++){
  arrs[i] = arrs[i]+1;
}
```

但是使用map只要一行就能夠完成

```
let arrs = [1,2,3,4,5,6,7,8,9];
let newArrs = arrs.map(arr => arr + 1);
```

若要對整個陣列的值加總起來,原先作法可能就會

```
let arrs = [1,2,3,4,5,6,7,8,9];
let sum = 0;
for(var i = 0; i< arrs.length; i++){
  arrs[i] = arrs[i]+1;
  sum += arrs[i];
}

```

而使用reduce的寫法:

```
let arrs = [1,2,3,4,5,6,7,8,9];
let newArrs = arrs.map(arr => arr + 1).reduce((count,currentValue) => count + currentValue );
```

整體來說,雖然兩種方法都可行,但是map搭配reduce的code 比較簡潔,對於日後維護較方便
