## 显示模板 <!-- {docsify-ignore-all} -->

   通过按钮触发，显示或隐藏模板信息

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
state "开始" as Begin <<start>> [[$./show_stencil#begin {开始}]]
state "隐藏" as PREPAREJSPARAM3  [[$./show_stencil#preparejsparam3 {隐藏}]]
state "获取状态" as PREPAREJSPARAM1  [[$./show_stencil#preparejsparam1 {获取状态}]]
state "结束" as END1 <<end>> [[$./show_stencil#end1 {结束}]]
state "显示" as PREPAREJSPARAM2  [[$./show_stencil#preparejsparam2 {显示}]]


Begin --> PREPAREJSPARAM1
PREPAREJSPARAM1 --> PREPAREJSPARAM2 : [[$./show_stencil#preparejsparam1-preparejsparam2{已隐藏} 已隐藏]]
PREPAREJSPARAM2 --> END1
PREPAREJSPARAM1 --> PREPAREJSPARAM3 : [[$./show_stencil#preparejsparam1-preparejsparam3{已显示} 已显示]]
PREPAREJSPARAM3 --> END1


@enduml
```


### 处理步骤说明

#### 显示 :id=PREPAREJSPARAM2<sup class="footnote-symbol"> <font color=gray size=1>[准备参数]</font></sup>



1. 将`true` 设置给  `state(分页容器状态).visible`

#### 开始 :id=Begin<sup class="footnote-symbol"> <font color=gray size=1>[开始]</font></sup>




#### 获取状态 :id=PREPAREJSPARAM1<sup class="footnote-symbol"> <font color=gray size=1>[准备参数]</font></sup>



1. 将`form.details.tabpanel1.state` 设置给  `state(分页容器状态)`

#### 结束 :id=END1<sup class="footnote-symbol"> <font color=gray size=1>[结束]</font></sup>




#### 隐藏 :id=PREPAREJSPARAM3<sup class="footnote-symbol"> <font color=gray size=1>[准备参数]</font></sup>



1. 将`false` 设置给  `state(分页容器状态).visible`

### 连接条件说明
#### 已隐藏 :id=PREPAREJSPARAM1-PREPAREJSPARAM2

```state(分页容器状态).visible``` EQ ```false```
#### 已显示 :id=PREPAREJSPARAM1-PREPAREJSPARAM3

```state(分页容器状态).visible``` EQ ```true```


### 实体逻辑参数

|    中文名   |    代码名    |  数据类型      |备注 |
| --------| --------| --------  | --------   |
|传入变量(<i class="fa fa-check"/></i>)|Default|数据对象||
|view|view|当前视图对象||
|分页容器状态|state|数据对象||
|form|form|部件对象||
