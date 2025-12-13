## 设置默认关注人 <!-- {docsify-ignore-all} -->

   新建工作项时，默认将创建人添加到此工作项的关注列表

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
state "开始" as Begin <<start>> [[$./set_default_attention#begin {开始}]]
state "准备关注人数据" as PREPAREJSPARAM1  [[$./set_default_attention#preparejsparam1 {准备关注人数据}]]
state "绑定关注人" as RAWJSCODE1  [[$./set_default_attention#rawjscode1 {绑定关注人}]]
state "结束" as END1 <<end>> [[$./set_default_attention#end1 {结束}]]


Begin --> PREPAREJSPARAM1
PREPAREJSPARAM1 --> RAWJSCODE1
RAWJSCODE1 --> END1


@enduml
```


### 处理步骤说明

#### 开始 :id=Begin<sup class="footnote-symbol"> <font color=gray size=1>[开始]</font></sup>




#### 结束 :id=END1<sup class="footnote-symbol"> <font color=gray size=1>[结束]</font></sup>




#### 准备关注人数据 :id=PREPAREJSPARAM1<sup class="footnote-symbol"> <font color=gray size=1>[准备参数]</font></sup>



1. 将`数据上下文[srfuserid] ==> attention[user_id]` 设置给  `attention(关注数据).user_id`
2. 将`40` 设置给  `attention(关注数据).type`
3. 将`数据上下文[srfusername] ==> attention[name]` 设置给  `attention(关注数据).name`

#### 绑定关注人 :id=RAWJSCODE1<sup class="footnote-symbol"> <font color=gray size=1>[直接前台代码]</font></sup>



<p class="panel-title"><b>执行代码</b></p>

```javascript
const attentions = uiLogic.form.state.data.attentions;
if (attentions && attentions[0]) {
  uiLogic.form.state.data.attentions = [{ ...attentions[0], ...uiLogic.attention }]
  return;
}
uiLogic.form.state.data.attentions = [uiLogic.attention];
```



### 实体逻辑参数

|    中文名   |    代码名    |  数据类型      |备注 |
| --------| --------| --------  | --------   |
|关注数据|attention|数据对象||
|传入变量(<i class="fa fa-check"/></i>)|Default|数据对象||
|表单|form|当前部件对象||
