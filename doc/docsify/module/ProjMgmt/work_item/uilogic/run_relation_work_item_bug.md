## 执行用例关联工作项(缺陷) <!-- {docsify-ignore-all} -->

   值变更时触发，执行用例关联缺陷类工作项，调用处理逻辑生成正反向数据，同时为测试用例生成正反向数据（特殊业务）

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
state "开始" as Begin <<start>> [[$./run_relation_work_item_bug#begin {开始}]]
state "进行关联操作" as DEACTION1  [[$./run_relation_work_item_bug#deaction1 {进行关联操作}]]
state "获取选中列表" as RAWJSCODE2  [[$./run_relation_work_item_bug#rawjscode2 {获取选中列表}]]
state "触发计数器刷新" as RAWJSCODE3  [[$./run_relation_work_item_bug#rawjscode3 {触发计数器刷新}]]
state "隐藏下拉框并清空下拉框内容" as RAWJSCODE1  [[$./run_relation_work_item_bug#rawjscode1 {隐藏下拉框并清空下拉框内容}]]
state "绑定表格部件" as PREPAREJSPARAM1  [[$./run_relation_work_item_bug#preparejsparam1 {绑定表格部件}]]
state "额外为测试用例进行关联操作" as DEACTION2  [[$./run_relation_work_item_bug#deaction2 {额外为测试用例进行关联操作}]]
state "表格刷新" as VIEWCTRLINVOKE1  [[$./run_relation_work_item_bug#viewctrlinvoke1 {表格刷新}]]


Begin --> PREPAREJSPARAM1
PREPAREJSPARAM1 --> RAWJSCODE2
RAWJSCODE2 --> DEACTION1 : [[$./run_relation_work_item_bug#rawjscode2-deaction1{选择数据不为空} 选择数据不为空]]
DEACTION1 --> RAWJSCODE1 : [[$./run_relation_work_item_bug#deaction1-rawjscode1{非执行用例关联} 非执行用例关联]]
RAWJSCODE1 --> VIEWCTRLINVOKE1 : [[$./run_relation_work_item_bug#rawjscode1-viewctrlinvoke1{选择数据不为空} 选择数据不为空]]
VIEWCTRLINVOKE1 --> RAWJSCODE3
DEACTION1 --> DEACTION2 : [[$./run_relation_work_item_bug#deaction1-deaction2{执行用例关联} 执行用例关联]]
DEACTION2 --> RAWJSCODE1
RAWJSCODE2 --> RAWJSCODE1 : [[$./run_relation_work_item_bug#rawjscode2-rawjscode1{选择数据为空} 选择数据为空]]


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
if (choose != null && choose != '') {
    uiLogic.dto.srfactionparam = JSON.parse(choose);
    uiLogic.dto.principal_id = view.context.principal_id;
    uiLogic.dto.principal_type = view.context.principal_type;
    uiLogic.dto.target_type = view.context.target_type;

// 如果是执行用例，则为执行用例与测试用例都进行一次关联
if (view.context.run != null && view.context.run != '') {
    uiLogic.test_case_dto.srfactionparam = JSON.parse(choose);
    uiLogic.test_case_dto.principal_id = view.context.case_id;
    uiLogic.test_case_dto.principal_type = 'test_case';
    uiLogic.test_case_dto.target_type = 'work_item';
}
}
```

#### 进行关联操作 :id=DEACTION1<sup class="footnote-symbol"> <font color=gray size=1>[实体行为]</font></sup>



调用实体 [执行用例(RUN)](module/TestMgmt/run.md) 行为 [其他实体关联执行用例(other_relation_run)](module/TestMgmt/run#行为) ，行为参数为`dto(传入后台对象)`

#### 隐藏下拉框并清空下拉框内容 :id=RAWJSCODE1<sup class="footnote-symbol"> <font color=gray size=1>[直接前台代码]</font></sup>



<p class="panel-title"><b>执行代码</b></p>

```javascript
const panel = view.layoutPanel.panelItems.choose_data;
if (panel) {
    panel.state.visible = false;
}
uiLogic.default.choose_data = null;
```

#### 表格刷新 :id=VIEWCTRLINVOKE1<sup class="footnote-symbol"> <font color=gray size=1>[视图部件调用]</font></sup>



调用`grid(表格对象)`的方法`refresh`，参数为`Default(传入变量)`
#### 额外为测试用例进行关联操作 :id=DEACTION2<sup class="footnote-symbol"> <font color=gray size=1>[实体行为]</font></sup>



调用实体 [执行用例(RUN)](module/TestMgmt/run.md) 行为 [其他实体关联执行用例(other_relation_run)](module/TestMgmt/run#行为) ，行为参数为`test_case_dto(测试用例对象)`

#### 触发计数器刷新 :id=RAWJSCODE3<sup class="footnote-symbol"> <font color=gray size=1>[直接前台代码]</font></sup>



<p class="panel-title"><b>执行代码</b></p>

```javascript
ibiz.mc.command.update.send({ srfdecodename: 'run'})
```

### 连接条件说明
#### 选择数据不为空 :id=RAWJSCODE2-DEACTION1

```dto(传入后台对象).srfactionparam``` ISNOTNULL
#### 非执行用例关联 :id=DEACTION1-RAWJSCODE1

```test_case_dto(测试用例对象).srfactionparam``` ISNULL
#### 选择数据不为空 :id=RAWJSCODE1-VIEWCTRLINVOKE1

```dto(传入后台对象).srfactionparam``` ISNOTNULL
#### 执行用例关联 :id=DEACTION1-DEACTION2

```test_case_dto(测试用例对象).srfactionparam``` ISNOTNULL
#### 选择数据为空 :id=RAWJSCODE2-RAWJSCODE1

```dto(传入后台对象).srfactionparam``` ISNULL


### 实体逻辑参数

|    中文名   |    代码名    |  数据类型      |备注 |
| --------| --------| --------  | --------   |
|视图对象|view|当前视图对象||
|传入后台对象|dto|数据对象||
|测试用例对象|test_case_dto|数据对象||
|传入变量(<i class="fa fa-check"/></i>)|Default|数据对象||
|表格对象|grid|部件对象||
|viewctx|viewctx|导航视图参数绑定参数||
