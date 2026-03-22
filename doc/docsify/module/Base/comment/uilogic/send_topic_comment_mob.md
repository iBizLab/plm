## 发送讨论评论（移动端） <!-- {docsify-ignore-all} -->

   发送讨论评论，用于讨论页面评论框

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
state "开始" as Begin <<start>> [[$./send_topic_comment_mob#begin {开始}]]
state "刷新回复" as RAWJSCODE_02  [[$./send_topic_comment_mob#rawjscode_02 {刷新回复}]]
state "发送回复评论" as DEACTION_01  [[$./send_topic_comment_mob#deaction_01 {发送回复评论}]]
state "发送评论（讨论）" as DEACTION4  [[$./send_topic_comment_mob#deaction4 {发送评论（讨论）}]]
state "刷新讨论" as RAWJSCODE_01  [[$./send_topic_comment_mob#rawjscode_01 {刷新讨论}]]
state "结束" as END1 <<end>> [[$./send_topic_comment_mob#end1 {结束}]]
state "设置评论principal_id与principal_type" as PREPAREJSPARAM1  [[$./send_topic_comment_mob#preparejsparam1 {设置评论principal_id与principal_type}]]
state "准备参数" as PREPAREJSPARAM10  [[$./send_topic_comment_mob#preparejsparam10 {准备参数}]]
state "准备参数" as PREPAREJSPARAM9  [[$./send_topic_comment_mob#preparejsparam9 {准备参数}]]
state "获取评论框内容" as RAWJSCODE1  [[$./send_topic_comment_mob#rawjscode1 {获取评论框内容}]]
state "填入临时数据" as RAWJSCODE4  [[$./send_topic_comment_mob#rawjscode4 {填入临时数据}]]


Begin --> RAWJSCODE1
RAWJSCODE1 --> PREPAREJSPARAM1 : [[$./send_topic_comment_mob#rawjscode1-preparejsparam1{评论内容不为空} 评论内容不为空]]
PREPAREJSPARAM1 --> PREPAREJSPARAM9
PREPAREJSPARAM9 --> DEACTION4 : [[$./send_topic_comment_mob#preparejsparam9-deaction4{连接名称} 连接名称]]
DEACTION4 --> PREPAREJSPARAM10
PREPAREJSPARAM10 --> RAWJSCODE4
RAWJSCODE4 --> RAWJSCODE_01 : [[$./send_topic_comment_mob#rawjscode4-rawjscode_01{连接名称} 连接名称]]
RAWJSCODE_01 --> END1
RAWJSCODE4 --> RAWJSCODE_02 : [[$./send_topic_comment_mob#rawjscode4-rawjscode_02{连接名称} 连接名称]]
RAWJSCODE_02 --> END1
PREPAREJSPARAM9 --> DEACTION_01 : [[$./send_topic_comment_mob#preparejsparam9-deaction_01{连接名称} 连接名称]]
DEACTION_01 --> PREPAREJSPARAM10


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

#### 准备参数 :id=PREPAREJSPARAM9<sup class="footnote-symbol"> <font color=gray size=1>[准备参数]</font></sup>



1. 将`comment(评论对象).content` 设置给  `Default(传入变量).content`
2. 将`comment(评论对象).principal_id` 设置给  `Default(传入变量).principal_id`

#### 发送回复评论 :id=DEACTION_01<sup class="footnote-symbol"> <font color=gray size=1>[实体行为]</font></sup>



调用实体 [讨论回复(DISCUSS_REPLY)](module/Team/discuss_reply.md) 行为 [发送评论(send_comment)](module/Team/discuss_reply#行为) ，行为参数为`Default(传入变量)`

将执行结果返回给参数`Default(传入变量)`

#### 发送评论（讨论） :id=DEACTION4<sup class="footnote-symbol"> <font color=gray size=1>[实体行为]</font></sup>



调用实体 [讨论(DISCUSS_POST)](module/Team/discuss_post.md) 行为 [添加评论(send_comment)](module/Team/discuss_post#行为) ，行为参数为`Default(传入变量)`

将执行结果返回给参数`Default(传入变量)`

#### 准备参数 :id=PREPAREJSPARAM10<sup class="footnote-symbol"> <font color=gray size=1>[准备参数]</font></sup>



1. 将`Default(传入变量).create_man` 设置给  `comment(评论对象).create_man`
2. 将`Default(传入变量).create_time` 设置给  `comment(评论对象).create_time`
3. 将`Default(传入变量).update_man` 设置给  `comment(评论对象).update_man`
4. 将`Default(传入变量).update_time` 设置给  `comment(评论对象).update_time`
5. 将`Default(传入变量).id` 设置给  `comment(评论对象).id`

#### 填入临时数据 :id=RAWJSCODE4<sup class="footnote-symbol"> <font color=gray size=1>[直接前台代码]</font></sup>



<p class="panel-title"><b>执行代码</b></p>

```javascript
await ibiz.hub.getApp(context.srfappid).deService.exec(
    'plmmob.comment',
    'Create',
    context,
    uiLogic.comment,
);

```

#### 刷新讨论 :id=RAWJSCODE_01<sup class="footnote-symbol"> <font color=gray size=1>[直接前台代码]</font></sup>



<p class="panel-title"><b>执行代码</b></p>

```javascript
ibiz.mc.command.update.send({ srfdecodename: 'discuss_post', srfkey: context.discuss_post});

```

#### 刷新回复 :id=RAWJSCODE_02<sup class="footnote-symbol"> <font color=gray size=1>[直接前台代码]</font></sup>



<p class="panel-title"><b>执行代码</b></p>

```javascript
ibiz.mc.command.update.send({ srfdecodename: 'discuss_reply', srfkey: context.discuss_reply});

```

#### 结束 :id=END1<sup class="footnote-symbol"> <font color=gray size=1>[结束]</font></sup>




### 连接条件说明
#### 评论内容不为空 :id=RAWJSCODE1-PREPAREJSPARAM1

```comment(评论对象).content``` ISNOTNULL
#### 连接名称 :id=PREPAREJSPARAM9-DEACTION4

```comment(评论对象).principal_type``` EQ ```discuss_post```
#### 连接名称 :id=RAWJSCODE4-RAWJSCODE_01

```comment(评论对象).principal_type``` EQ ```discuss_post```
#### 连接名称 :id=RAWJSCODE4-RAWJSCODE_02

```comment(评论对象).principal_type``` EQ ```discuss_reply```
#### 连接名称 :id=PREPAREJSPARAM9-DEACTION_01

```comment(评论对象).principal_type``` EQ ```discuss_reply```


### 实体逻辑参数

|    中文名   |    代码名    |  数据类型      |备注 |
| --------| --------| --------  | --------   |
|评论对象|comment|数据对象||
|应用上下文变量|ctx|导航视图参数绑定参数||
|传入变量(<i class="fa fa-check"/></i>)|Default|数据对象||
|编辑器|editor|数据对象||
|当前视图对象|view|当前视图对象||
