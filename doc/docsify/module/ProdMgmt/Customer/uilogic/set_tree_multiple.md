## 设置树选择为多选 <!-- {docsify-ignore-all} -->

   

### 处理过程

```plantuml
@startuml
hide footbox
<style>
root {
  HyperlinkColor #42b983
}
</style>

hide empty description
state "开始" as Begin <<start>> [[$./set_tree_multiple#begin {开始}]]
state "注入脚本代码" as RAWJSCODE1  [[$./set_tree_multiple#rawjscode1 {注入脚本代码}]]


Begin --> RAWJSCODE1


@enduml
```


### 处理步骤说明

#### 开始 :id=Begin




#### 注入脚本代码 :id=RAWJSCODE1



<p class="panel-title"><b>执行代码</b></p>

```javascript
console.log(666)
```



### 实体逻辑参数

|    中文名   |    代码名    |  数据类型      |备注 |
| --------| --------| --------  | --------   |
|传入变量(<i class="fa fa-check"/></i>)|Default|数据对象||
|树视图|view|当前视图对象||
