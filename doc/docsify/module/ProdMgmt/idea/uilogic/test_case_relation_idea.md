## 用例关联需求值变更 <!-- {docsify-ignore-all} -->

   值变更时触发，用例关联需求，调用处理逻辑生成正反向数据

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
state "开始" as Begin <<start>> [[$./test_case_relation_idea#begin {开始}]]
state "绑定表格部件" as PREPAREJSPARAM1  [[$./test_case_relation_idea#preparejsparam1 {绑定表格部件}]]
state "获取选中列表" as RAWJSCODE2  [[$./test_case_relation_idea#rawjscode2 {获取选中列表}]]
state "触发计数器刷新" as RAWJSCODE3  [[$./test_case_relation_idea#rawjscode3 {触发计数器刷新}]]
state "隐藏下拉框并清空下拉框内容" as RAWJSCODE1  [[$./test_case_relation_idea#rawjscode1 {隐藏下拉框并清空下拉框内容}]]
state "表格刷新" as VIEWCTRLINVOKE1  [[$./test_case_relation_idea#viewctrlinvoke1 {表格刷新}]]
state "进行关联操作" as DEACTION1  [[$./test_case_relation_idea#deaction1 {进行关联操作}]]


Begin --> PREPAREJSPARAM1
PREPAREJSPARAM1 --> RAWJSCODE2
RAWJSCODE2 --> DEACTION1 : [[$./test_case_relation_idea#rawjscode2-deaction1{选中数据不为空} 选中数据不为空]]
DEACTION1 --> RAWJSCODE1
RAWJSCODE1 --> VIEWCTRLINVOKE1
VIEWCTRLINVOKE1 --> RAWJSCODE3
RAWJSCODE2 --> RAWJSCODE1 : [[$./test_case_relation_idea#rawjscode2-rawjscode1{选中数据为空} 选中数据为空]]


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
    const srfactionparam = JSON.parse(choose);
    // 将 owner_id 替换为 target_id
    if (srfactionparam && Array.isArray(srfactionparam)) {
        srfactionparam.forEach(item => {
            item.target_id = item.owner_id
            delete item.owner_id
        })
    }
    uiLogic.dto.srfactionparam = srfactionparam;
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

#### 表格刷新 :id=VIEWCTRLINVOKE1<sup class="footnote-symbol"> <font color=gray size=1>[视图部件调用]</font></sup>



调用`grid(表格对象)`的方法`refresh`，参数为`Default(传入变量)`
#### 触发计数器刷新 :id=RAWJSCODE3<sup class="footnote-symbol"> <font color=gray size=1>[直接前台代码]</font></sup>



<p class="panel-title"><b>执行代码</b></p>

```javascript
ibiz.mc.command.update.send({ srfdecodename: context.principal_type})
```

### 连接条件说明
#### 选中数据不为空 :id=RAWJSCODE2-DEACTION1

```dto(传入后台对象).srfactionparam``` ISNOTNULL
#### 选中数据为空 :id=RAWJSCODE2-RAWJSCODE1

```dto(传入后台对象).srfactionparam``` ISNULL


### 实体逻辑参数

|    中文名   |    代码名    |  数据类型      |备注 |
| --------| --------| --------  | --------   |
|视图对象|view|当前视图对象||
|表格对象|grid|部件对象||
|viewctx|viewctx|导航视图参数绑定参数||
|传入后台对象|dto|数据对象||
|传入变量(<i class="fa fa-check"/></i>)|Default|数据对象||
