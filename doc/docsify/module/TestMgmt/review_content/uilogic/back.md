## 返回 <!-- {docsify-ignore-all} -->

   查看评审结果后，返回主表单按钮使用

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
state "开始" as Begin <<start>> [[$./back#begin {开始}]]
state "获取父视图对象" as PREPAREJSPARAM1  [[$./back#preparejsparam1 {获取父视图对象}]]
state "切换显示组件" as RAWJSCODE1  [[$./back#rawjscode1 {切换显示组件}]]
state "绑定表单" as PREPAREJSPARAM2  [[$./back#preparejsparam2 {绑定表单}]]


Begin --> PREPAREJSPARAM1
PREPAREJSPARAM1 --> PREPAREJSPARAM2
PREPAREJSPARAM2 --> RAWJSCODE1


@enduml
```


### 处理步骤说明

#### 开始 :id=Begin<sup class="footnote-symbol"> <font color=gray size=1>[开始]</font></sup>




#### 获取父视图对象 :id=PREPAREJSPARAM1<sup class="footnote-symbol"> <font color=gray size=1>[准备参数]</font></sup>



1. 将`view(当前视图对象).parentView` 设置给  `parentView`

#### 绑定表单 :id=PREPAREJSPARAM2<sup class="footnote-symbol"> <font color=gray size=1>[准备参数]</font></sup>



1. 将`parentView.layoutPanel.panelItems.form` 绑定给  `parent_form(父表单)`

#### 切换显示组件 :id=RAWJSCODE1<sup class="footnote-symbol"> <font color=gray size=1>[直接前台代码]</font></sup>



<p class="panel-title"><b>执行代码</b></p>

```javascript
uiLogic.parent_form.control.details.grouppanel6.state.visible=true;
uiLogic.parent_form.control.details.review_results.state.keepAlive=true;
uiLogic.parent_form.control.details.review_results.state.visible=false;

const choose_data = uiLogic.parent_form.control.details.choosed_content;
choose_data.setDataValue(null);
```



### 实体逻辑参数

|    中文名   |    代码名    |  数据类型      |备注 |
| --------| --------| --------  | --------   |
|当前视图对象|view|当前视图对象||
|传入变量(<i class="fa fa-check"/></i>)|Default|数据对象||
|parentView|parentView|数据对象||
|父表单|parent_form|数据对象||
