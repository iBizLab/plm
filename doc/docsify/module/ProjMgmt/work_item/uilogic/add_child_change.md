## 添加子工作项值变更 <!-- {docsify-ignore-all} -->

   子工作项值变更触发更新父标识

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
state "开始" as Begin <<start>> [[$./add_child_change#begin {开始}]]
state "绑定表格部件" as PREPAREJSPARAM1  [[$./add_child_change#preparejsparam1 {绑定表格部件}]]
state "触发计数器刷新" as RAWJSCODE3  [[$./add_child_change#rawjscode3 {触发计数器刷新}]]
state "表格刷新" as VIEWCTRLINVOKE1  [[$./add_child_change#viewctrlinvoke1 {表格刷新}]]
state "获取选中列表" as RAWJSCODE2  [[$./add_child_change#rawjscode2 {获取选中列表}]]
state "更新父标识" as DEACTION1  [[$./add_child_change#deaction1 {更新父标识}]]
state "准备参数" as PREPAREJSPARAM2  [[$./add_child_change#preparejsparam2 {准备参数}]]
state "隐藏下拉框并清空下拉框内容" as RAWJSCODE1  [[$./add_child_change#rawjscode1 {隐藏下拉框并清空下拉框内容}]]


Begin --> PREPAREJSPARAM1
PREPAREJSPARAM1 --> RAWJSCODE2
RAWJSCODE2 --> PREPAREJSPARAM2 : [[$./add_child_change#rawjscode2-preparejsparam2{选中数据不为空} 选中数据不为空]]
PREPAREJSPARAM2 --> DEACTION1
DEACTION1 --> RAWJSCODE1
RAWJSCODE1 --> VIEWCTRLINVOKE1
VIEWCTRLINVOKE1 --> RAWJSCODE3
RAWJSCODE2 --> RAWJSCODE1 : [[$./add_child_change#rawjscode2-rawjscode1{选中数据为空} 选中数据为空]]


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
}
```

#### 准备参数 :id=PREPAREJSPARAM2<sup class="footnote-symbol"> <font color=gray size=1>[准备参数]</font></sup>



1. 将`ctx(应用上下文变量).work_item` 设置给  `dto(传入后台对象).pid`

#### 更新父标识 :id=DEACTION1<sup class="footnote-symbol"> <font color=gray size=1>[实体行为]</font></sup>



调用实体 [工作项(WORK_ITEM)](module/ProjMgmt/work_item.md) 行为 [选择子工作项(choose_child)](module/ProjMgmt/work_item#行为) ，行为参数为`dto(传入后台对象)`

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
ibiz.mc.command.update.send({ srfdecodename: 'work_item'})
```

### 连接条件说明
#### 选中数据不为空 :id=RAWJSCODE2-PREPAREJSPARAM2

```dto(传入后台对象).srfactionparam``` ISNOTNULL
#### 选中数据为空 :id=RAWJSCODE2-RAWJSCODE1

```dto(传入后台对象).srfactionparam``` ISNULL


### 实体逻辑参数

|    中文名   |    代码名    |  数据类型      |备注 |
| --------| --------| --------  | --------   |
|表格对象|grid|部件对象||
|视图对象|view|当前视图对象||
|传入后台对象|dto|数据对象||
|传入变量(<i class="fa fa-check"/></i>)|Default|数据对象||
|应用上下文变量|ctx|导航视图参数绑定参数||
