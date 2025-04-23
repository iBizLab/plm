## 关闭评论区 <!-- {docsify-ignore-all} -->

   隐藏评论区，同时显示评论按钮

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
state "开始" as Begin <<start>> [[$./close_comment#begin {开始}]]
state "准备界面元素" as PREPAREJSPARAM1  [[$./close_comment#preparejsparam1 {准备界面元素}]]
state "设置工具栏项、评论列表显隐" as PREPAREJSPARAM3  [[$./close_comment#preparejsparam3 {设置工具栏项、评论列表显隐}]]
state "通知刷新" as RAWJSCODE2  [[$./close_comment#rawjscode2 {通知刷新}]]
state "结束" as END1 <<end>> [[$./close_comment#end1 {结束}]]
state "清空评论" as DEUIACTION1  [[$./close_comment#deuiaction1 {清空评论}]]
state "设置视图评论显隐" as PREPAREJSPARAM4  [[$./close_comment#preparejsparam4 {设置视图评论显隐}]]
state "记录评论状态" as RAWJSCODE1  [[$./close_comment#rawjscode1 {记录评论状态}]]


Begin --> DEUIACTION1
DEUIACTION1 --> PREPAREJSPARAM1
PREPAREJSPARAM1 --> PREPAREJSPARAM3
PREPAREJSPARAM3 --> PREPAREJSPARAM4
PREPAREJSPARAM4 --> RAWJSCODE1
RAWJSCODE1 --> RAWJSCODE2
RAWJSCODE2 --> END1


@enduml
```


### 处理步骤说明

#### 清空评论 :id=DEUIACTION1<sup class="footnote-symbol"> <font color=gray size=1>[实体界面行为调用]</font></sup>



调用实体 [评论(COMMENT)](module/Base/comment.md) 界面行为 [清空评论（知识库）](module/Base/comment#界面行为) 

#### 设置工具栏项、评论列表显隐 :id=PREPAREJSPARAM3<sup class="footnote-symbol"> <font color=gray size=1>[准备参数]</font></sup>



1. 将`false` 设置给  `right_grouppanel_state(容器状态).visible`
2. 将`false` 设置给  `button3_state_obj(关闭按钮状态).visible`
3. 将`true` 设置给  `button2_state_obj(评论按钮状态).visible`

#### 准备界面元素 :id=PREPAREJSPARAM1<sup class="footnote-symbol"> <font color=gray size=1>[准备参数]</font></sup>



1. 将`view.layoutPanel.panelItems.right_container.state` 设置给  `right_grouppanel_state(容器状态)`
2. 将`toolbar(工具栏).state.buttonsState.deuiaction3` 设置给  `button3_state_obj(关闭按钮状态)`
3. 将`toolbar(工具栏).state.buttonsState.deuiaction2` 设置给  `button2_state_obj(评论按钮状态)`

#### 设置视图评论显隐 :id=PREPAREJSPARAM4<sup class="footnote-symbol"> <font color=gray size=1>[准备参数]</font></sup>



1. 将`false` 设置给  `view.common_list_isshow`

#### 记录评论状态 :id=RAWJSCODE1<sup class="footnote-symbol"> <font color=gray size=1>[直接前台代码]</font></sup>



<p class="panel-title"><b>执行代码</b></p>

```javascript
const operator = context.loginname;

localStorage.removeItem(operator);
```

#### 通知刷新 :id=RAWJSCODE2<sup class="footnote-symbol"> <font color=gray size=1>[直接前台代码]</font></sup>



<p class="panel-title"><b>执行代码</b></p>

```javascript
ibiz.mc.command.create.send({ srfdecodename: 'article_page'})
```

#### 开始 :id=Begin<sup class="footnote-symbol"> <font color=gray size=1>[开始]</font></sup>




#### 结束 :id=END1<sup class="footnote-symbol"> <font color=gray size=1>[结束]</font></sup>






### 实体逻辑参数

|    中文名   |    代码名    |  数据类型      |备注 |
| --------| --------| --------  | --------   |
|传入变量(<i class="fa fa-check"/></i>)|Default|数据对象||
|view|view|当前视图对象||
|关闭按钮状态|button3_state_obj|数据对象||
|工具栏|toolbar|部件对象||
|容器状态|right_grouppanel_state|数据对象||
|评论按钮状态|button2_state_obj|数据对象||
|form|form|部件对象||
