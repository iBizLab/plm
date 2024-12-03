## 设置执行人 <!-- {docsify-ignore-all} -->

   设置执行人

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
state "开始" as Begin <<start>> [[$./setting_executors#begin {开始}]]
state "结束" as END1 <<end>> [[$./setting_executors#end1 {结束}]]
state "设置执行人回写主表单" as RAWJSCODE1  [[$./setting_executors#rawjscode1 {设置执行人回写主表单}]]


Begin --> RAWJSCODE1
RAWJSCODE1 --> END1


@enduml
```


### 处理步骤说明

#### 开始 :id=Begin<sup class="footnote-symbol"> <font color=gray size=1>[开始]</font></sup>




#### 设置执行人回写主表单 :id=RAWJSCODE1<sup class="footnote-symbol"> <font color=gray size=1>[直接前台代码]</font></sup>



<p class="panel-title"><b>执行代码</b></p>

```javascript
var main_form_executors = view.layoutPanel.panelItems.form.control.details.executors;
var executors = uiLogic.default.executors;
main_form_executors.setDataValue(executors)


```

#### 结束 :id=END1<sup class="footnote-symbol"> <font color=gray size=1>[结束]</font></sup>






### 实体逻辑参数

|    中文名   |    代码名    |  数据类型      |备注 |
| --------| --------| --------  | --------   |
|传入变量(<i class="fa fa-check"/></i>)|Default|数据对象||
|view|view|当前视图对象||
