## 提交评审 <!-- {docsify-ignore-all} -->

   提交评审

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
state "开始" as Begin <<start>> [[$./commit_review#begin {开始}]]
state "注入脚本代码" as RAWJSCODE2  [[$./commit_review#rawjscode2 {注入脚本代码}]]
state "实体行为" as DEACTION1  [[$./commit_review#deaction1 {实体行为}]]
state "结束" as END1 <<end>> [[$./commit_review#end1 {结束}]]
state "通知刷新" as RAWJSCODE1  [[$./commit_review#rawjscode1 {通知刷新}]]
state "准备参数" as PREPAREJSPARAM1  [[$./commit_review#preparejsparam1 {准备参数}]]


Begin --> PREPAREJSPARAM1 : [[$./commit_review#begin-preparejsparam1{表单内} 表单内]]
PREPAREJSPARAM1 --> RAWJSCODE2
RAWJSCODE2 --> DEACTION1
DEACTION1 --> RAWJSCODE1
RAWJSCODE1 --> END1
Begin --> DEACTION1 : [[$./commit_review#begin-deaction1{表格上} 表格上]]


@enduml
```


### 处理步骤说明

#### 开始 :id=Begin<sup class="footnote-symbol"> <font color=gray size=1>[开始]</font></sup>




#### 结束 :id=END1<sup class="footnote-symbol"> <font color=gray size=1>[结束]</font></sup>




#### 实体行为 :id=DEACTION1<sup class="footnote-symbol"> <font color=gray size=1>[实体行为]</font></sup>



调用实体 [评审内容(REVIEW_CONTENT)](module/TestMgmt/review_content.md) 行为 [提交评审(submit_review)](module/TestMgmt/review_content#行为) ，行为参数为`Default(传入变量)`

#### 通知刷新 :id=RAWJSCODE1<sup class="footnote-symbol"> <font color=gray size=1>[直接前台代码]</font></sup>



<p class="panel-title"><b>执行代码</b></p>

```javascript
ibiz.mc.command.update.send({ srfdecodename: 'review', srfkey: context.review})
```

#### 准备参数 :id=PREPAREJSPARAM1<sup class="footnote-symbol"> <font color=gray size=1>[准备参数]</font></sup>



1. 将`view(当前视图对象).parentView` 设置给  `parent_view(父视图)`
2. 将`parent_view(父视图).layoutPanel.panelItems.form.control` 设置给  `parent_form(父表单)`

#### 注入脚本代码 :id=RAWJSCODE2<sup class="footnote-symbol"> <font color=gray size=1>[直接前台代码]</font></sup>



<p class="panel-title"><b>执行代码</b></p>

```javascript
const choose_data = uiLogic.parent_form.details.choosed_content;
choose_data.setDataValue(null);
uiLogic.parent_form.details.grouppanel6.state.keepAlive=true;
uiLogic.parent_form.details.grouppanel6.state.visible=true;
uiLogic.parent_form.details.review_results.state.visible=false;
```

### 连接条件说明
#### 表单内 :id=Begin-PREPAREJSPARAM1

```ctx(上下文).review``` ISNOTNULL
#### 表格上 :id=Begin-DEACTION1

```ctx(上下文).review``` ISNULL


### 实体逻辑参数

|    中文名   |    代码名    |  数据类型      |备注 |
| --------| --------| --------  | --------   |
|父表单|parent_form|数据对象||
|上下文|ctx|导航视图参数绑定参数||
|传入变量(<i class="fa fa-check"/></i>)|Default|数据对象||
|当前视图对象|view|当前视图对象||
|父视图|parent_view|数据对象||
