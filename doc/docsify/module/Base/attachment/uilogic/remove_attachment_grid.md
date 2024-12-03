## 附件删除（表格） <!-- {docsify-ignore-all} -->

   调用表格的行删除方法，删除指定行附件

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
state "开始" as Begin <<start>> [[$./remove_attachment_grid#begin {开始}]]
state "设置附件数据" as RAWJSCODE1  [[$./remove_attachment_grid#rawjscode1 {设置附件数据}]]
state "表格行删除" as VIEWCTRLINVOKE1  [[$./remove_attachment_grid#viewctrlinvoke1 {表格行删除}]]
state "结束" as END1 <<end>> [[$./remove_attachment_grid#end1 {结束}]]
state "获取表格部件" as PREPAREJSPARAM1  [[$./remove_attachment_grid#preparejsparam1 {获取表格部件}]]


Begin --> PREPAREJSPARAM1
PREPAREJSPARAM1 --> RAWJSCODE1
RAWJSCODE1 --> VIEWCTRLINVOKE1
VIEWCTRLINVOKE1 --> END1


@enduml
```


### 处理步骤说明

#### 开始 :id=Begin<sup class="footnote-symbol"> <font color=gray size=1>[开始]</font></sup>




#### 结束 :id=END1<sup class="footnote-symbol"> <font color=gray size=1>[结束]</font></sup>




#### 获取表格部件 :id=PREPAREJSPARAM1<sup class="footnote-symbol"> <font color=gray size=1>[准备参数]</font></sup>



1. 将`view(当前视图对象).getController('grid')` 设置给  `grid(表格)`
2. 将`Default(传入变量).id` 设置给  `params(视图参数).id`

#### 设置附件数据 :id=RAWJSCODE1<sup class="footnote-symbol"> <font color=gray size=1>[直接前台代码]</font></sup>



<p class="panel-title"><b>执行代码</b></p>

```javascript
uiLogic.attach = { data: data, silent: true };
```

#### 表格行删除 :id=VIEWCTRLINVOKE1<sup class="footnote-symbol"> <font color=gray size=1>[视图部件调用]</font></sup>



调用`grid(表格)`的方法`remove`，参数为`attach(附件数据)`


### 实体逻辑参数

|    中文名   |    代码名    |  数据类型      |备注 |
| --------| --------| --------  | --------   |
|附件数据|attach|数据对象||
|表格|grid|部件对象||
|传入变量(<i class="fa fa-check"/></i>)|Default|数据对象||
|当前视图对象|view|当前视图对象||
|视图参数|params|||
