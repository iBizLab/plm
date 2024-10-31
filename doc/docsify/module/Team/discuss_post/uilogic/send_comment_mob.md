## 发送评论（移动端讨论） <!-- {docsify-ignore-all} -->

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
state "通知刷新主表单" as RAWJSCODE5  [[$./send_comment_mob#rawjscode5 {通知刷新主表单}]]
state "准备参数" as PREPAREJSPARAM10  [[$./send_comment_mob#preparejsparam10 {准备参数}]]
state "为评论重新赋值参数" as PREPAREJSPARAM6  [[$./send_comment_mob#preparejsparam6 {为评论重新赋值参数}]]
state "结束" as END1 <<end>> [[$./send_comment_mob#end1 {结束}]]
state "发送评论（回复）" as DEACTION5  [[$./send_comment_mob#deaction5 {发送评论（回复）}]]
state "获取评论框内容" as RAWJSCODE1  [[$./send_comment_mob#rawjscode1 {获取评论框内容}]]
state "发送评论（讨论）" as DEACTION4  [[$./send_comment_mob#deaction4 {发送评论（讨论）}]]
state "设置评论principal_id与principal_type" as PREPAREJSPARAM1  [[$./send_comment_mob#preparejsparam1 {设置评论principal_id与principal_type}]]
state "准备参数" as PREPAREJSPARAM9  [[$./send_comment_mob#preparejsparam9 {准备参数}]]
state "清空评论框与评论id" as RAWJSCODE2  [[$./send_comment_mob#rawjscode2 {清空评论框与评论id}]]
state "填入临时数据" as RAWJSCODE4  [[$./send_comment_mob#rawjscode4 {填入临时数据}]]


Begin --> RAWJSCODE1
RAWJSCODE1 --> PREPAREJSPARAM1 : [[$./send_comment_mob#rawjscode1-preparejsparam1{评论内容不为空} 评论内容不为空]]
PREPAREJSPARAM1 --> PREPAREJSPARAM6 : [[$./send_comment_mob#preparejsparam1-preparejsparam6{视图上下文中存在srfowner_type参数} 视图上下文中存在srfowner_type参数]]
PREPAREJSPARAM6 --> PREPAREJSPARAM9
PREPAREJSPARAM9 --> DEACTION4 : [[$./send_comment_mob#preparejsparam9-deaction4{连接名称} 连接名称]]
DEACTION4 --> PREPAREJSPARAM10
PREPAREJSPARAM10 --> RAWJSCODE5
RAWJSCODE5 --> RAWJSCODE2
RAWJSCODE2 --> END1
PREPAREJSPARAM9 --> DEACTION5 : [[$./send_comment_mob#preparejsparam9-deaction5{连接名称} 连接名称]]
DEACTION5 --> PREPAREJSPARAM10
PREPAREJSPARAM1 --> PREPAREJSPARAM9 : [[$./send_comment_mob#preparejsparam1-preparejsparam9{视图上下文不存在srfowner_type参数} 视图上下文不存在srfowner_type参数]]


@enduml
```


### 处理步骤说明

#### 开始 :id=Begin<sup class="footnote-symbol"> <font color=gray size=1>[开始]</font></sup>




#### 获取评论框内容 :id=RAWJSCODE1<sup class="footnote-symbol"> <font color=gray size=1>[直接前台代码]</font></sup>



<p class="panel-title"><b>执行代码</b></p>

```javascript
uiLogic.comment.content = uiLogic.view.layoutPanel.panelItems.field_textbox1.value;
```

#### 设置评论principal_id与principal_type :id=PREPAREJSPARAM1<sup class="footnote-symbol"> <font color=gray size=1>[准备参数]</font></sup>



1. 将`ctx(应用上下文变量).principal_id` 设置给  `comment(评论对象).principal_id`
2. 将`ctx(应用上下文变量).principal_type` 设置给  `comment(评论对象).principal_type`
3. 将`view(当前视图对象).layoutPanel.panelItems.field_textbox1.editor` 设置给  `editor(编辑器)`
4. 将`ctx(应用上下文变量).principal_type` 设置给  `comment(评论对象).owner_type`

#### 为评论重新赋值参数 :id=PREPAREJSPARAM6<sup class="footnote-symbol"> <font color=gray size=1>[准备参数]</font></sup>



1. 将`ctx(应用上下文变量).srfowner_type` 设置给  `comment(评论对象).owner_type`
2. 将`ctx(应用上下文变量).srfowner_type` 设置给  `comment(评论对象).principal_type`

#### 准备参数 :id=PREPAREJSPARAM9<sup class="footnote-symbol"> <font color=gray size=1>[准备参数]</font></sup>



1. 将`comment(评论对象).content` 设置给  `Default(传入变量).content`
2. 将`comment(评论对象).principal_id` 设置给  `Default(传入变量).principal_id`

#### 发送评论（讨论） :id=DEACTION4<sup class="footnote-symbol"> <font color=gray size=1>[实体行为]</font></sup>



调用实体 [讨论(DISCUSS_POST)](module/Team/discuss_post.md) 行为 [添加评论(send_comment)](module/Team/discuss_post#行为) ，行为参数为`Default(传入变量)`

将执行结果返回给参数`Default(传入变量)`

#### 发送评论（回复） :id=DEACTION5<sup class="footnote-symbol"> <font color=gray size=1>[实体行为]</font></sup>



调用实体 [讨论回复(DISCUSS_REPLY)](module/Team/discuss_reply.md) 行为 [发送评论(send_comment)](module/Team/discuss_reply#行为) ，行为参数为`Default(传入变量)`

将执行结果返回给参数`Default(传入变量)`

#### 准备参数 :id=PREPAREJSPARAM10<sup class="footnote-symbol"> <font color=gray size=1>[准备参数]</font></sup>



1. 将`Default(传入变量).create_man` 设置给  `comment(评论对象).create_man`
2. 将`Default(传入变量).create_time` 设置给  `comment(评论对象).create_time`
3. 将`Default(传入变量).update_man` 设置给  `comment(评论对象).update_man`
4. 将`Default(传入变量).update_time` 设置给  `comment(评论对象).update_time`
5. 将`Default(传入变量).id` 设置给  `comment(评论对象).id`

#### 通知刷新主表单 :id=RAWJSCODE5<sup class="footnote-symbol"> <font color=gray size=1>[直接前台代码]</font></sup>



<p class="panel-title"><b>执行代码</b></p>

```javascript
ibiz.mc.command.update.send({ srfdecodename: context.principal_type,srfkey: context.principal_id})
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

#### 清空评论框与评论id :id=RAWJSCODE2<sup class="footnote-symbol"> <font color=gray size=1>[直接前台代码]</font></sup>



<p class="panel-title"><b>执行代码</b></p>

```javascript
uiLogic.view.layoutPanel.panelItems.field_textbox1.value = '';
uiLogic.view.layoutPanel.panelItems.field_textbox.data.field_textbox1 = '';
uiLogic.view.edit_comment_id = null;
uiLogic.view.reply_comment_id = null;
uiLogic.editor.clearReply();
view.layoutPanel.panelItems.send_comment_container.state.visible=false;
view.layoutPanel.panelItems.comment_container.state.visible=true;

```

#### 结束 :id=END1<sup class="footnote-symbol"> <font color=gray size=1>[结束]</font></sup>




### 连接条件说明
#### 评论内容不为空 :id=RAWJSCODE1-PREPAREJSPARAM1

```comment(评论对象).content``` ISNOTNULL
#### 视图上下文中存在srfowner_type参数 :id=PREPAREJSPARAM1-PREPAREJSPARAM6

```ctx(应用上下文变量).srfowner_type``` ISNOTNULL
#### 连接名称 :id=PREPAREJSPARAM9-DEACTION4

```ctx(应用上下文变量).principal_type``` EQ ```discuss_post```
#### 连接名称 :id=PREPAREJSPARAM9-DEACTION5

```ctx(应用上下文变量).principal_type``` EQ ```discuss_reply```
#### 视图上下文不存在srfowner_type参数 :id=PREPAREJSPARAM1-PREPAREJSPARAM9

```ctx(应用上下文变量).srfowner_type``` ISNULL


### 实体逻辑参数

|    中文名   |    代码名    |  数据类型      |备注 |
| --------| --------| --------  | --------   |
|应用上下文变量|ctx|导航视图参数绑定参数||
|当前视图对象|view|当前视图对象||
|传入变量(<i class="fa fa-check"/></i>)|Default|数据对象||
|评论对象|comment|数据对象||
|编辑器|editor|数据对象||
