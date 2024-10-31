## 发送评论(知识库) <!-- {docsify-ignore-all} -->

   发送评论，并关闭评论输入框，刷新评论列表

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
state "开始" as Begin <<start>> [[$./send_comment_wiki#begin {开始}]]
state "创建评论" as DEACTION2  [[$./send_comment_wiki#deaction2 {创建评论}]]
state "空，用于条件分支" as PREPAREJSPARAM4  [[$./send_comment_wiki#preparejsparam4 {空，用于条件分支}]]
state "获取评论框内容和编辑器对象" as RAWJSCODE1  [[$./send_comment_wiki#rawjscode1 {获取评论框内容和编辑器对象}]]
state "刷新评论列表" as RAWJSCODE3  [[$./send_comment_wiki#rawjscode3 {刷新评论列表}]]
state "视图部件调用" as VIEWCTRLINVOKE1  [[$./send_comment_wiki#viewctrlinvoke1 {视图部件调用}]]
state "回复标识" as PREPAREJSPARAM2  [[$./send_comment_wiki#preparejsparam2 {回复标识}]]
state "清空评论框与评论id" as RAWJSCODE2  [[$./send_comment_wiki#rawjscode2 {清空评论框与评论id}]]
state "设置评论principal_id与principal_type" as PREPAREJSPARAM1  [[$./send_comment_wiki#preparejsparam1 {设置评论principal_id与principal_type}]]
state "设置评论id" as PREPAREJSPARAM3  [[$./send_comment_wiki#preparejsparam3 {设置评论id}]]
state "修改评论" as DEACTION3  [[$./send_comment_wiki#deaction3 {修改评论}]]
state "结束" as END1 <<end>> [[$./send_comment_wiki#end1 {结束}]]


Begin --> RAWJSCODE1
RAWJSCODE1 --> PREPAREJSPARAM1 : [[$./send_comment_wiki#rawjscode1-preparejsparam1{评论内容不为空} 评论内容不为空]]
PREPAREJSPARAM1 --> PREPAREJSPARAM4 : [[$./send_comment_wiki#preparejsparam1-preparejsparam4{不存在回复评论标识} 不存在回复评论标识]]
PREPAREJSPARAM4 --> DEACTION2 : [[$./send_comment_wiki#preparejsparam4-deaction2{无存在评论id} 无存在评论id]]
DEACTION2 --> RAWJSCODE2
RAWJSCODE2 --> VIEWCTRLINVOKE1
VIEWCTRLINVOKE1 --> RAWJSCODE3
RAWJSCODE3 --> END1
PREPAREJSPARAM4 --> PREPAREJSPARAM3 : [[$./send_comment_wiki#preparejsparam4-preparejsparam3{存在评论id} 存在评论id]]
PREPAREJSPARAM3 --> DEACTION3
DEACTION3 --> RAWJSCODE2
PREPAREJSPARAM1 --> PREPAREJSPARAM2 : [[$./send_comment_wiki#preparejsparam1-preparejsparam2{存在回复评论标识} 存在回复评论标识]]
PREPAREJSPARAM2 --> DEACTION2


@enduml
```


### 处理步骤说明

#### 开始 :id=Begin<sup class="footnote-symbol"> <font color=gray size=1>[开始]</font></sup>




#### 获取评论框内容和编辑器对象 :id=RAWJSCODE1<sup class="footnote-symbol"> <font color=gray size=1>[直接前台代码]</font></sup>



<p class="panel-title"><b>执行代码</b></p>

```javascript
uiLogic.comment.content = uiLogic.view.layoutPanel.panelItems.container_singledata.panelItems.field_textbox.value;
uiLogic.editor = uiLogic.view.layoutPanel.panelItems.container_singledata.panelItems.field_textbox.editor
```

#### 设置评论principal_id与principal_type :id=PREPAREJSPARAM1<sup class="footnote-symbol"> <font color=gray size=1>[准备参数]</font></sup>



1. 将`ctx(应用上下文变量).principal_id` 设置给  `comment(评论对象).principal_id`
2. 将`ctx(应用上下文变量).principal_type` 设置给  `comment(评论对象).principal_type`
3. 将`ctx(应用上下文变量).principal_type` 设置给  `comment(评论对象).owner_type`

#### 空，用于条件分支 :id=PREPAREJSPARAM4<sup class="footnote-symbol"> <font color=gray size=1>[准备参数]</font></sup>




    无

#### 回复标识 :id=PREPAREJSPARAM2<sup class="footnote-symbol"> <font color=gray size=1>[准备参数]</font></sup>



1. 将`view(当前视图对象).reply_comment_id` 设置给  `comment(评论对象).pid`

#### 设置评论id :id=PREPAREJSPARAM3<sup class="footnote-symbol"> <font color=gray size=1>[准备参数]</font></sup>



1. 将`view(当前视图对象).edit_comment_id` 设置给  `comment(评论对象).id`
2. 将`view(当前视图对象).edit_comment_id` 设置给  `ctx(应用上下文变量).comment`

#### 创建评论 :id=DEACTION2<sup class="footnote-symbol"> <font color=gray size=1>[实体行为]</font></sup>



调用实体 [评论(COMMENT)](module/Base/comment.md) 行为 [Create](module/Base/comment#行为) ，行为参数为`comment(评论对象)`

#### 修改评论 :id=DEACTION3<sup class="footnote-symbol"> <font color=gray size=1>[实体行为]</font></sup>



调用实体 [评论(COMMENT)](module/Base/comment.md) 行为 [Update](module/Base/comment#行为) ，行为参数为`comment(评论对象)`

#### 清空评论框与评论id :id=RAWJSCODE2<sup class="footnote-symbol"> <font color=gray size=1>[直接前台代码]</font></sup>



<p class="panel-title"><b>执行代码</b></p>

```javascript
uiLogic.view.layoutPanel.panelItems.container_singledata.panelItems.field_textbox.value = '';
uiLogic.view.layoutPanel.panelItems.container_singledata.panelItems.field_textbox.data.field_textbox = '';
uiLogic.view.edit_comment_id = null;
uiLogic.view.reply_comment_id = null;
uiLogic.editor.reply.value = null;
```

#### 视图部件调用 :id=VIEWCTRLINVOKE1<sup class="footnote-symbol"> <font color=gray size=1>[视图部件调用]</font></sup>



调用`list(视图列表)`的方法`refresh`，参数为`Default(传入变量)`
#### 刷新评论列表 :id=RAWJSCODE3<sup class="footnote-symbol"> <font color=gray size=1>[直接前台代码]</font></sup>



<p class="panel-title"><b>执行代码</b></p>

```javascript
ibiz.mc.command.send({ srfdecodename: 'comment' }, 'OBJECTUPDATED');
```

#### 结束 :id=END1<sup class="footnote-symbol"> <font color=gray size=1>[结束]</font></sup>




### 连接条件说明
#### 评论内容不为空 :id=RAWJSCODE1-PREPAREJSPARAM1

```comment(评论对象).content``` ISNOTNULL
#### 不存在回复评论标识 :id=PREPAREJSPARAM1-PREPAREJSPARAM4

```editor(编辑器).reply.value``` ISNULL
#### 无存在评论id :id=PREPAREJSPARAM4-DEACTION2

```view(当前视图对象).edit_comment_id``` ISNULL
#### 存在评论id :id=PREPAREJSPARAM4-PREPAREJSPARAM3

```view(当前视图对象).edit_comment_id``` ISNOTNULL
#### 存在回复评论标识 :id=PREPAREJSPARAM1-PREPAREJSPARAM2

```editor(编辑器).reply.value``` ISNOTNULL


### 实体逻辑参数

|    中文名   |    代码名    |  数据类型      |备注 |
| --------| --------| --------  | --------   |
|视图列表|list|部件对象||
|传入变量(<i class="fa fa-check"/></i>)|Default|数据对象||
|应用上下文变量|ctx|导航视图参数绑定参数||
|当前视图对象|view|当前视图对象||
|编辑器|editor|数据对象||
|评论对象|comment|数据对象||
