## 获取模板 <!-- {docsify-ignore-all} -->

   测试。新建时获取模板信息

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
state "开始" as Begin <<start>> [[$./get_stencil_info#begin {开始}]]
state "准备参数" as PREPAREJSPARAM1  [[$./get_stencil_info#preparejsparam1 {准备参数}]]
state "结束" as END1 <<end>> [[$./get_stencil_info#end1 {结束}]]


Begin --> PREPAREJSPARAM1
PREPAREJSPARAM1 --> END1


@enduml
```


### 处理步骤说明

#### 开始 :id=Begin<sup class="footnote-symbol"> <font color=gray size=1>[开始]</font></sup>




#### 结束 :id=END1<sup class="footnote-symbol"> <font color=gray size=1>[结束]</font></sup>




#### 准备参数 :id=PREPAREJSPARAM1<sup class="footnote-symbol"> <font color=gray size=1>[准备参数]</font></sup>



1. 将`form.details.mdctrl1.mdController.state.selectedData` 绑定给  `selectdata(选中数据)`



### 实体逻辑参数

|    中文名   |    代码名    |  数据类型      |备注 |
| --------| --------| --------  | --------   |
|传入变量(<i class="fa fa-check"/></i>)|Default|数据对象||
|form|form|部件对象||
|ctx|ctx|导航视图参数绑定参数||
|view|view|当前视图对象||
|选中数据|selectdata|数据对象||