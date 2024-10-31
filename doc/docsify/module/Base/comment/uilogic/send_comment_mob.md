## 发送评论（移动端） <!-- {docsify-ignore-all} -->

   发送评论，并关闭评论输入框

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
state "开始" as Begin <<start>> [[$./send_comment_mob#begin {开始}]]
state "修改评论" as DEACTION3  [[$./send_comment_mob#deaction3 {修改评论}]]
state "为评论重新赋值参数" as PREPAREJSPARAM6  [[$./send_comment_mob#preparejsparam6 {为评论重新赋值参数}]]
state "准备参数" as PREPAREJSPARAM10  [[$./send_comment_mob#preparejsparam10 {准备参数}]]
state "准备参数" as PREPAREJSPARAM9  [[$./send_comment_mob#preparejsparam9 {准备参数}]]
state "发送评论（讨论）" as DEACTION4  [[$./send_comment_mob#deaction4 {发送评论（讨论）}]]
state "通知刷新主表单" as RAWJSCODE5  [[$./send_comment_mob#rawjscode5 {通知刷新主表单}]]
state "设置评论principal_id与principal_type" as PREPAREJSPARAM1  [[$./send_comment_mob#preparejsparam1 {设置评论principal_id与principal_type}]]
state "清空评论框与评论id" as RAWJSCODE2  [[$./send_comment_mob#rawjscode2 {清空评论框与评论id}]]
state "暂时承载" as PREPAREJSPARAM7  [[$./send_comment_mob#preparejsparam7 {暂时承载}]]
state "设置评论id" as PREPAREJSPARAM3  [[$./send_comment_mob#preparejsparam3 {设置评论id}]]
state "结束" as END1 <<end>> [[$./send_comment_mob#end1 {结束}]]
state "暂时承载" as PREPAREJSPARAM8  [[$./send_comment_mob#preparejsparam8 {暂时承载}]]
state "获取评论框内容" as RAWJSCODE1  [[$./send_comment_mob#rawjscode1 {获取评论框内容}]]
state "创建评论" as DEACTION2  [[$./send_comment_mob#deaction2 {创建评论}]]
state "填入临时数据" as RAWJSCODE4  [[$./send_comment_mob#rawjscode4 {填入临时数据}]]
state "回复标识" as PREPAREJSPARAM2  [[$./send_comment_mob#preparejsparam2 {回复标识}]]
state "无操作（仅用于连接）" as PREPAREJSPARAM5  [[$./send_comment_mob#preparejsparam5 {无操作（仅用于连接）}]]
state "空，用于条件分支" as PREPAREJSPARAM4  [[$./send_comment_mob#preparejsparam4 {空，用于条件分支}]]
state "视图部件调用" as VIEWCTRLINVOKE1  [[$./send_comment_mob#viewctrlinvoke1 {视图部件调用}]]
state "发送评论（回复）" as DEACTION5  [[$./send_comment_mob#deaction5 {发送评论（回复）}]]


Begin --> RAWJSCODE1
RAWJSCODE1 --> PREPAREJSPARAM1 : [[$./send_comment_mob#rawjscode1-preparejsparam1{评论内容不为空} 评论内容不为空]]
PREPAREJSPARAM1 --> PREPAREJSPARAM6 : [[$./send_comment_mob#preparejsparam1-preparejsparam6{视图上下文中存在srfowner_type参数} 视图上下文中存在srfowner_type参数]]
PREPAREJSPARAM6 --> PREPAREJSPARAM5
PREPAREJSPARAM5 --> PREPAREJSPARAM7
PREPAREJSPARAM7 --> PREPAREJSPARAM4 : [[$./send_comment_mob#preparejsparam7-preparejsparam4{不存在回复评论标识} 不存在回复评论标识]]
PREPAREJSPARAM4 --> PREPAREJSPARAM8 : [[$./send_comment_mob#preparejsparam4-preparejsparam8{无存在评论id} 无存在评论id]]
PREPAREJSPARAM8 --> DEACTION2 : [[$./send_comment_mob#preparejsparam8-deaction2{连接名称} 连接名称]]
DEACTION2 --> RAWJSCODE2
RAWJSCODE2 --> RAWJSCODE5
RAWJSCODE5 --> VIEWCTRLINVOKE1
VIEWCTRLINVOKE1 --> END1
PREPAREJSPARAM8 --> PREPAREJSPARAM9 : [[$./send_comment_mob#preparejsparam8-preparejsparam9{连接名称} 连接名称]]
PREPAREJSPARAM9 --> DEACTION4 : [[$./send_comment_mob#preparejsparam9-deaction4{连接名称} 连接名称]]
DEACTION4 --> PREPAREJSPARAM10
PREPAREJSPARAM10 --> RAWJSCODE4
PREPAREJSPARAM9 --> DEACTION5 : [[$./send_comment_mob#preparejsparam9-deaction5{连接名称} 连接名称]]
DEACTION5 --> PREPAREJSPARAM10
PREPAREJSPARAM4 --> PREPAREJSPARAM3 : [[$./send_comment_mob#preparejsparam4-preparejsparam3{存在评论id} 存在评论id]]
PREPAREJSPARAM3 --> DEACTION3
DEACTION3 --> RAWJSCODE2
PREPAREJSPARAM7 --> PREPAREJSPARAM2 : [[$./send_comment_mob#preparejsparam7-preparejsparam2{存在回复评论标识} 存在回复评论标识]]
PREPAREJSPARAM2 --> PREPAREJSPARAM8
PREPAREJSPARAM1 --> PREPAREJSPARAM5 : [[$./send_comment_mob#preparejsparam1-preparejsparam5{视图上下文不存在srfowner_type参数} 视图上下文不存在srfowner_type参数]]


@enduml
```


### 处理步骤说明

#### 开始 :id=Begin<sup class="footnote-symbol"> <font color=gray size=1>[开始]</font></sup>




#### 获取评论框内容 :id=RAWJSCODE1<sup class="footnote-symbol"> <font color=gray size=1>[直接前台代码]</font></sup>



<p class="panel-title"><b>执行代码</b></p>

```javascript
uiLogic.comment.content = uiLogic.view.layoutPanel.panelItems.field_textbox.value;
```

#### 设置评论principal_id与principal_type :id=PREPAREJSPARAM1<sup class="footnote-symbol"> <font color=gray size=1>[准备参数]</font></sup>



1. 将`ctx(应用上下文变量).principal_id` 设置给  `comment(评论对象).principal_id`
2. 将`ctx(应用上下文变量).principal_type` 设置给  `comment(评论对象).principal_type`
3. 将`view(当前视图对象).layoutPanel.panelItems.field_textbox.editor` 设置给  `editor(编辑器)`
4. 将`ctx(应用上下文变量).principal_type` 设置给  `comment(评论对象).owner_type`

#### 为评论重新赋值参数 :id=PREPAREJSPARAM6<sup class="footnote-symbol"> <font color=gray size=1>[准备参数]</font></sup>



1. 将`ctx(应用上下文变量).srfowner_type` 设置给  `comment(评论对象).owner_type`
2. 将`ctx(应用上下文变量).srfowner_type` 设置给  `comment(评论对象).principal_type`

#### 无操作（仅用于连接） :id=PREPAREJSPARAM5<sup class="footnote-symbol"> <font color=gray size=1>[准备参数]</font></sup>




    无

#### 回复标识 :id=PREPAREJSPARAM2<sup class="footnote-symbol"> <font color=gray size=1>[准备参数]</font></sup>



1. 将`view(当前视图对象).reply_comment_id` 设置给  `comment(评论对象).pid`

#### 暂时承载 :id=PREPAREJSPARAM7<sup class="footnote-symbol"> <font color=gray size=1>[准备参数]</font></sup>




    无

#### 暂时承载 :id=PREPAREJSPARAM8<sup class="footnote-symbol"> <font color=gray size=1>[准备参数]</font></sup>




    无

#### 准备参数 :id=PREPAREJSPARAM9<sup class="footnote-symbol"> <font color=gray size=1>[准备参数]</font></sup>



1. 将`comment(评论对象).content` 设置给  `Default(传入变量).content`
2. 将`comment(评论对象).principal_id` 设置给  `Default(传入变量).principal_id`

#### 空，用于条件分支 :id=PREPAREJSPARAM4<sup class="footnote-symbol"> <font color=gray size=1>[准备参数]</font></sup>




    无

#### 发送评论（讨论） :id=DEACTION4<sup class="footnote-symbol"> <font color=gray size=1>[实体行为]</font></sup>



调用实体 [讨论(DISCUSS_POST)](module/Team/discuss_post.md) 行为 [添加评论(send_comment)](module/Team/discuss_post#行为) ，行为参数为`Default(传入变量)`

将执行结果返回给参数`Default(传入变量)`

#### 发送评论（回复） :id=DEACTION5<sup class="footnote-symbol"> <font color=gray size=1>[实体行为]</font></sup>



调用实体 [讨论回复(DISCUSS_REPLY)](module/Team/discuss_reply.md) 行为 [发送评论(send_comment)](module/Team/discuss_reply#行为) ，行为参数为`Default(传入变量)`

将执行结果返回给参数`Default(传入变量)`

#### 创建评论 :id=DEACTION2<sup class="footnote-symbol"> <font color=gray size=1>[实体行为]</font></sup>



调用实体 [评论(COMMENT)](module/Base/comment.md) 行为 [Create](module/Base/comment#行为) ，行为参数为`comment(评论对象)`

#### 设置评论id :id=PREPAREJSPARAM3<sup class="footnote-symbol"> <font color=gray size=1>[准备参数]</font></sup>



1. 将`view(当前视图对象).edit_comment_id` 设置给  `comment(评论对象).id`
2. 将`view(当前视图对象).edit_comment_id` 设置给  `ctx(应用上下文变量).comment`

#### 准备参数 :id=PREPAREJSPARAM10<sup class="footnote-symbol"> <font color=gray size=1>[准备参数]</font></sup>



1. 将`Default(传入变量).create_man` 设置给  `comment(评论对象).create_man`
2. 将`Default(传入变量).create_time` 设置给  `comment(评论对象).create_time`
3. 将`Default(传入变量).update_man` 设置给  `comment(评论对象).update_man`
4. 将`Default(传入变量).update_time` 设置给  `comment(评论对象).update_time`
5. 将`Default(传入变量).id` 设置给  `comment(评论对象).id`

#### 修改评论 :id=DEACTION3<sup class="footnote-symbol"> <font color=gray size=1>[实体行为]</font></sup>



调用实体 [评论(COMMENT)](module/Base/comment.md) 行为 [Update](module/Base/comment#行为) ，行为参数为`comment(评论对象)`

#### 清空评论框与评论id :id=RAWJSCODE2<sup class="footnote-symbol"> <font color=gray size=1>[直接前台代码]</font></sup>



<p class="panel-title"><b>执行代码</b></p>

```javascript
uiLogic.view.layoutPanel.panelItems.field_textbox.value = '';
uiLogic.view.layoutPanel.panelItems.field_textbox.data.field_textbox = '';
uiLogic.view.edit_comment_id = null;
uiLogic.view.reply_comment_id = null;
uiLogic.editor.clearReply();
// uiLogic.editor.toggleCollapse(false)

```

#### 填入临时数据 :id=RAWJSCODE4<sup class="footnote-symbol"> <font color=gray size=1>[直接前台代码]</font></sup>



<p class="panel-title"><b>执行代码</b></p>

```javascript
ibiz.hub.getApp(context.srfappid).deService.exec(
    'plmmob.comment',
    'Create',
    context,
    uiLogic.comment,
);

```

#### 通知刷新主表单 :id=RAWJSCODE5<sup class="footnote-symbol"> <font color=gray size=1>[直接前台代码]</font></sup>



<p class="panel-title"><b>执行代码</b></p>

```javascript
ibiz.mc.command.update.send({ srfdecodename: context.principal_type,srfkey: context.principal_id})
```

#### 视图部件调用 :id=VIEWCTRLINVOKE1<sup class="footnote-symbol"> <font color=gray size=1>[视图部件调用]</font></sup>



调用`MDCTRL`的方法`refresh`，参数为`MDCTRL`
#### 结束 :id=END1<sup class="footnote-symbol"> <font color=gray size=1>[结束]</font></sup>




### 连接条件说明
#### 评论内容不为空 :id=RAWJSCODE1-PREPAREJSPARAM1

```comment(评论对象).content``` ISNOTNULL
#### 视图上下文中存在srfowner_type参数 :id=PREPAREJSPARAM1-PREPAREJSPARAM6

```ctx(应用上下文变量).srfowner_type``` ISNOTNULL
#### 不存在回复评论标识 :id=PREPAREJSPARAM7-PREPAREJSPARAM4

```editor(编辑器).reply``` ISNULL
#### 无存在评论id :id=PREPAREJSPARAM4-PREPAREJSPARAM8

```view(当前视图对象).edit_comment_id``` ISNULL
#### 连接名称 :id=PREPAREJSPARAM8-DEACTION2

```ctx(应用上下文变量).principal_type``` NOTEQ ```discuss_post``` AND ```ctx(应用上下文变量).principal_type``` NOTEQ ```discuss_reply```
#### 连接名称 :id=PREPAREJSPARAM8-PREPAREJSPARAM9

(```ctx(应用上下文变量).principal_type``` EQ ```discuss_post``` OR ```ctx(应用上下文变量).principal_type``` EQ ```discuss_reply```)
#### 连接名称 :id=PREPAREJSPARAM9-DEACTION4

```ctx(应用上下文变量).principal_type``` EQ ```discuss_post```
#### 连接名称 :id=PREPAREJSPARAM9-DEACTION5

```ctx(应用上下文变量).principal_type``` EQ ```discuss_reply```
#### 存在评论id :id=PREPAREJSPARAM4-PREPAREJSPARAM3

```view(当前视图对象).edit_comment_id``` ISNOTNULL
#### 存在回复评论标识 :id=PREPAREJSPARAM7-PREPAREJSPARAM2

```editor(编辑器).reply``` ISNOTNULL
#### 视图上下文不存在srfowner_type参数 :id=PREPAREJSPARAM1-PREPAREJSPARAM5

```ctx(应用上下文变量).srfowner_type``` ISNULL


### 实体逻辑参数

|    中文名   |    代码名    |  数据类型      |备注 |
| --------| --------| --------  | --------   |
|应用上下文变量|ctx|导航视图参数绑定参数||
|当前视图对象|view|当前视图对象||
|编辑器|editor|数据对象||
|传入变量(<i class="fa fa-check"/></i>)|Default|数据对象||
|MDCTRL|MDCTRL|部件对象||
|评论对象|comment|数据对象||
