## 关联需求值变更 <!-- {docsify-ignore-all} -->

   关联操作时触发，内部调用关联逻辑进行关联操作

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
state "开始" as Begin <<start>> [[$./relation_idea_change#begin {开始}]]
state "触发计数器刷新" as RAWJSCODE6  [[$./relation_idea_change#rawjscode6 {触发计数器刷新}]]
state "隐藏下拉框并清空下拉框内容" as RAWJSCODE1  [[$./relation_idea_change#rawjscode1 {隐藏下拉框并清空下拉框内容}]]
state "获取选中列表" as RAWJSCODE2  [[$./relation_idea_change#rawjscode2 {获取选中列表}]]
state "绑定表格部件" as PREPAREJSPARAM1  [[$./relation_idea_change#preparejsparam1 {绑定表格部件}]]
state "刷新表格" as VIEWCTRLINVOKE1  [[$./relation_idea_change#viewctrlinvoke1 {刷新表格}]]
state "进行关联操作" as DEACTION1  [[$./relation_idea_change#deaction1 {进行关联操作}]]


Begin --> PREPAREJSPARAM1
PREPAREJSPARAM1 --> RAWJSCODE2
RAWJSCODE2 --> DEACTION1 : [[$./relation_idea_change#rawjscode2-deaction1{存在选中数据} 存在选中数据]]
DEACTION1 --> RAWJSCODE1
RAWJSCODE1 --> VIEWCTRLINVOKE1 : [[$./relation_idea_change#rawjscode1-viewctrlinvoke1{连接名称} 连接名称]]
VIEWCTRLINVOKE1 --> RAWJSCODE6
RAWJSCODE2 --> RAWJSCODE1 : [[$./relation_idea_change#rawjscode2-rawjscode1{不存在选中数据} 不存在选中数据]]


@enduml
```


### 处理步骤说明

#### 开始 :id=Begin<sup class="footnote-symbol"> <font color=gray size=1>[开始]</font></sup>




#### 绑定表格部件 :id=PREPAREJSPARAM1<sup class="footnote-symbol"> <font color=gray size=1>[准备参数]</font></sup>



1. 将`view(视图对象).layoutPanel.panelItems.grid.control` 设置给  `grid(表格对象)`

#### 获取选中列表 :id=RAWJSCODE2<sup class="footnote-symbol"> <font color=gray size=1>[直接前台代码]</font></sup>



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

#### 进行关联操作 :id=DEACTION1<sup class="footnote-symbol"> <font color=gray size=1>[实体行为]</font></sup>



调用实体 [用例(TEST_CASE)](module/TestMgmt/test_case.md) 行为 [其他实体关联用例(others_relation_case)](module/TestMgmt/test_case#行为) ，行为参数为`dto(传入后台对象)`

#### 隐藏下拉框并清空下拉框内容 :id=RAWJSCODE1<sup class="footnote-symbol"> <font color=gray size=1>[直接前台代码]</font></sup>



<p class="panel-title"><b>执行代码</b></p>

```javascript
const panel = view.layoutPanel.panelItems.choose_data;
if (panel) {
    panel.state.visible = false;
}
uiLogic.default.choose_data = null;

```

#### 刷新表格 :id=VIEWCTRLINVOKE1<sup class="footnote-symbol"> <font color=gray size=1>[视图部件调用]</font></sup>



调用`grid(表格对象)`的方法`refresh`，参数为`Default(传入变量)`
#### 触发计数器刷新 :id=RAWJSCODE6<sup class="footnote-symbol"> <font color=gray size=1>[直接前台代码]</font></sup>




<p class="panel-title"><b>执行代码</b></p>

```javascript

ibiz.mc.command.update.send({ srfdecodename: context.principal_type})
```

### 连接条件说明
#### 存在选中数据 :id=RAWJSCODE2-DEACTION1

```dto(传入后台对象).srfactionparam``` ISNOTNULL
#### 连接名称 :id=RAWJSCODE1-VIEWCTRLINVOKE1

```dto(传入后台对象).srfactionparam``` ISNOTNULL
#### 不存在选中数据 :id=RAWJSCODE2-RAWJSCODE1

```dto(传入后台对象).srfactionparam``` ISNULL


### 实体逻辑参数

|    中文名   |    代码名    |  数据类型      |备注 |
| --------| --------| --------  | --------   |
|视图对象|view|当前视图对象||
|表格对象|grid|部件对象||
|传入后台对象|dto|数据对象||
|上下文|ctx|导航视图参数绑定参数||
|传入变量(<i class="fa fa-check"/></i>)|Default|数据对象||
