## 关联测试用例值变更 <!-- {docsify-ignore-all} -->

   

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
state "开始" as Begin <<start>> [[$./relation_test_case_change#begin {开始}]]
state "绑定表格部件" as PREPAREJSPARAM1  [[$./relation_test_case_change#preparejsparam1 {绑定表格部件}]]
state "获取选中列表" as RAWJSCODE2  [[$./relation_test_case_change#rawjscode2 {获取选中列表}]]
state "触发计数器刷新" as RAWJSCODE3  [[$./relation_test_case_change#rawjscode3 {触发计数器刷新}]]
state "表格刷新" as VIEWCTRLINVOKE1  [[$./relation_test_case_change#viewctrlinvoke1 {表格刷新}]]
state "进行关联操作" as DEACTION1  [[$./relation_test_case_change#deaction1 {进行关联操作}]]
state "隐藏下拉框并清空下拉框内容" as RAWJSCODE1  [[$./relation_test_case_change#rawjscode1 {隐藏下拉框并清空下拉框内容}]]


Begin --> PREPAREJSPARAM1
PREPAREJSPARAM1 --> RAWJSCODE2
RAWJSCODE2 --> DEACTION1 : [[$./relation_test_case_change#rawjscode2-deaction1{连接名称} 连接名称]]
DEACTION1 --> RAWJSCODE1
RAWJSCODE1 --> VIEWCTRLINVOKE1 : [[$./relation_test_case_change#rawjscode1-viewctrlinvoke1{连接名称} 连接名称]]
VIEWCTRLINVOKE1 --> RAWJSCODE3
RAWJSCODE2 --> RAWJSCODE1 : [[$./relation_test_case_change#rawjscode2-rawjscode1{连接名称} 连接名称]]


@enduml
```


### 处理步骤说明

#### 开始 :id=Begin




#### 绑定表格部件 :id=PREPAREJSPARAM1



1. 将`view(视图对象).layoutPanel.panelItems.grid.control` 设置给  `grid(表格对象)`

#### 获取选中列表 :id=RAWJSCODE2



<p class="panel-title"><b>执行代码</b></p>

```javascript
let choose = uiLogic.default.choose_data;
if(choose != null && choose != ''){
    uiLogic.dto.srfactionparam = JSON.parse(choose);
    uiLogic.dto.principal_id = view.context.principal_id;
    uiLogic.dto.principal_type = view.context.principal_type;
    uiLogic.dto.target_type = view.context.target_type;
}
```

#### 触发计数器刷新 :id=RAWJSCODE3



<p class="panel-title"><b>执行代码</b></p>

```javascript
ibiz.mc.command.update.send({ srfdecodename: context.principal_type})
```

#### 表格刷新 :id=VIEWCTRLINVOKE1



调用`grid(表格对象)`的方法`refresh`，参数为`Default(传入变量)`
#### 进行关联操作 :id=DEACTION1



调用实体 [用例(TEST_CASE)](module/TestMgmt/Test_case.md) 行为 [其他实体关联用例(others_relation_case)](module/TestMgmt/Test_case#行为) ，行为参数为`dto(传入后台对象)`

#### 隐藏下拉框并清空下拉框内容 :id=RAWJSCODE1



<p class="panel-title"><b>执行代码</b></p>

```javascript
const panel = view.layoutPanel.panelItems.choose_data;
if (panel) {
    panel.state.visible = false;
}
uiLogic.default.choose_data = null;
```

### 连接条件说明
#### 连接名称 :id=RAWJSCODE2-DEACTION1

```dto(传入后台对象).srfactionparam``` ISNOTNULL
#### 连接名称 :id=RAWJSCODE1-VIEWCTRLINVOKE1

```dto(传入后台对象).srfactionparam``` ISNOTNULL
#### 连接名称 :id=RAWJSCODE2-RAWJSCODE1

```dto(传入后台对象).srfactionparam``` ISNULL


### 实体逻辑参数

|    中文名   |    代码名    |  数据类型      |备注 |
| --------| --------| --------  | --------   |
|传入变量(<i class="fa fa-check"/></i>)|Default|数据对象||
|表格对象|grid|部件对象||
|视图对象|view|当前视图对象||
|传入后台对象|dto|数据对象||
