## 回复评论 <!-- {docsify-ignore-all} -->

   获取回复对象评论信息，并展开评论输入框，显示回复组件

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
state "开始" as Begin <<start>> [[$./reply_comment#begin {开始}]]
state "展开评论输入框并设值回复" as RAWJSCODE1  [[$./reply_comment#rawjscode1 {展开评论输入框并设值回复}]]
state "设置回复id" as PREPAREJSPARAM1  [[$./reply_comment#preparejsparam1 {设置回复id}]]


Begin --> PREPAREJSPARAM1
PREPAREJSPARAM1 --> RAWJSCODE1


@enduml
```


### 处理步骤说明

#### 开始 :id=Begin<sup class="footnote-symbol"> <font color=gray size=1>[开始]</font></sup>




#### 设置回复id :id=PREPAREJSPARAM1<sup class="footnote-symbol"> <font color=gray size=1>[准备参数]</font></sup>



1. 将`view(当前视图对象).parentView` 设置给  `parentView(父视图对象)`
2. 将`空值（NULL）` 设置给  `parentView(父视图对象).edit_comment_id`
3. 将`parentView(父视图对象).layoutPanel.panelItems.field_textbox.editor` 设置给  `comment(评论对象)`
4. 将`Default(传入变量).id` 设置给  `parentView(父视图对象).reply_comment_id`

#### 展开评论输入框并设值回复 :id=RAWJSCODE1<sup class="footnote-symbol"> <font color=gray size=1>[直接前台代码]</font></sup>



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
```



### 实体逻辑参数

|    中文名   |    代码名    |  数据类型      |备注 |
| --------| --------| --------  | --------   |
|评论对象|comment|数据对象||
|当前视图对象|view|当前视图对象||
|传入变量(<i class="fa fa-check"/></i>)|Default|数据对象||
|父视图对象|parentView|数据对象||
