## 填充BI报表默认值 <!-- {docsify-ignore-all} -->

   填充BI报表默认值

### 逻辑处理脚本

```
if(!data){
    data = {};
}
Object.keys(viewParam).forEach((key) =>{
    data[key] = viewParam[key];
})
return data;
```
