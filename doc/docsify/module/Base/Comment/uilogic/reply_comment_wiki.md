## 回复评论（知识库） <!-- {docsify-ignore-all} -->

   

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
state "开始" as Begin <<start>> [[$./reply_comment_wiki#begin {开始}]]
state "获取评论编辑器" as PREPAREJSPARAM1  [[$./reply_comment_wiki#preparejsparam1 {获取评论编辑器}]]
state "展开评论输入框并设值回复" as RAWJSCODE1  [[$./reply_comment_wiki#rawjscode1 {展开评论输入框并设值回复}]]
state "结束" as END1 <<end>> [[$./reply_comment_wiki#end1 {结束}]]


Begin --> PREPAREJSPARAM1
PREPAREJSPARAM1 --> RAWJSCODE1
RAWJSCODE1 --> END1


@enduml
```


### 处理步骤说明

#### 开始 :id=Begin




#### 获取评论编辑器 :id=PREPAREJSPARAM1



1. 将`view(当前视图对象).layoutPanel.panelItems.field_textbox.editor` 设置给  `comment(评论对象)`

#### 展开评论输入框并设值回复 :id=RAWJSCODE1



<p class="panel-title"><b>执行代码</b></p>

```javascript
const _app = ibiz.hub.getApp(context.srfappid);
_app.codeList.get('SysOperator', context, params).then(items => {
	const create_man = uiLogic.default.create_man;
	const findItem = items.find(item => item.value == create_man);
	const name = findItem ? findItem.text : create_man;
	const content = uiLogic.default.content;
	uiLogic.comment.setReply({name, content});
	uiLogic.comment.toggleCollapse(true);
})
uiLogic.view.edit_comment_id='';
uiLogic.view.reply_comment_id=uiLogic.default.id;
```

#### 结束 :id=END1






### 实体逻辑参数

|    中文名   |    代码名    |  数据类型      |备注 |
| --------| --------| --------  | --------   |
|当前视图对象|view|当前视图对象||
|传入变量(<i class="fa fa-check"/></i>)|Default|数据对象||
|评论对象|comment|数据对象||
