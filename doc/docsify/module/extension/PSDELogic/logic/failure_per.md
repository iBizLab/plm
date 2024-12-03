## 失败率计算 <!-- {docsify-ignore-all} -->

   失败率计算

### 逻辑处理脚本

```
if(data.success_per > 0){
      data.failure_per = 100.0 - data.success_per;
}
return data;
```
