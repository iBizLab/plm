## 系统工作项状态隐藏操作列 <!-- {docsify-ignore-all} -->

   系统工作项状态隐藏操作列

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
state "开始" as Begin <<start>> [[$./cal_is_system#begin {开始}]]
state "系统工作项状态隐藏编辑列" as RAWJSCODE1  [[$./cal_is_system#rawjscode1 {系统工作项状态隐藏编辑列}]]
state "结束" as END1 <<end>> [[$./cal_is_system#end1 {结束}]]


Begin --> RAWJSCODE1
RAWJSCODE1 --> END1


@enduml
```


### 处理步骤说明

#### 开始 :id=Begin<sup class="footnote-symbol"> <font color=gray size=1>[开始]</font></sup>




#### 系统工作项状态隐藏编辑列 :id=RAWJSCODE1<sup class="footnote-symbol"> <font color=gray size=1>[直接前台代码]</font></sup>



<p class="panel-title"><b>执行代码</b></p>

```javascript
const rows = uiLogic.grid.state.rows;
if (rows && rows.length > 0) {
    rows.forEach(row => {
        const is_system = row.data.is_system;
        if (is_system === 1) {
            row.uaColStates.uagridcolumn1.u2cc9dd2.visible = false;
            row.uaColStates.uagridcolumn1.u8247bb2.visible = false;
        }
    })
}
```

#### 结束 :id=END1<sup class="footnote-symbol"> <font color=gray size=1>[结束]</font></sup>






### 实体逻辑参数

|    中文名   |    代码名    |  数据类型      |备注 |
| --------| --------| --------  | --------   |
|传入变量(<i class="fa fa-check"/></i>)|Default|数据对象||
|表格|grid|当前部件对象||
