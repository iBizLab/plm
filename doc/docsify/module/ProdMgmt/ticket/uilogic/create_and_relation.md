## 新建工单并生成关联数据 <!-- {docsify-ignore-all} -->

   新建工单并生成关联数据

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
state "开始" as Begin <<start>> [[$./create_and_relation#begin {开始}]]
state "准备参数" as PREPAREJSPARAM1  [[$./create_and_relation#preparejsparam1 {准备参数}]]
state "结束" as END1 <<end>> [[$./create_and_relation#end1 {结束}]]
state "关闭视图" as VIEWCTRLINVOKE1  [[$./create_and_relation#viewctrlinvoke1 {关闭视图}]]
state "执行后行为" as DEUIACTION1  [[$./create_and_relation#deuiaction1 {执行后行为}]]
state "创建工单" as DEACTION1  [[$./create_and_relation#deaction1 {创建工单}]]


Begin --> PREPAREJSPARAM1
PREPAREJSPARAM1 --> DEACTION1
DEACTION1 --> DEUIACTION1
DEUIACTION1 --> VIEWCTRLINVOKE1
VIEWCTRLINVOKE1 --> END1


@enduml
```


### 处理步骤说明

#### 开始 :id=Begin<sup class="footnote-symbol"> <font color=gray size=1>[开始]</font></sup>




#### 准备参数 :id=PREPAREJSPARAM1<sup class="footnote-symbol"> <font color=gray size=1>[准备参数]</font></sup>



1. 将`form(表单).data` 绑定给  `form_data(表单数据)`
2. 将`Default(传入变量).id` 设置给  `form_data(表单数据).id`

#### 创建工单 :id=DEACTION1<sup class="footnote-symbol"> <font color=gray size=1>[实体行为]</font></sup>



调用实体 [工单(TICKET)](module/ProdMgmt/ticket.md) 行为 [Create](module/ProdMgmt/ticket#行为) ，行为参数为`form_data(表单数据)`

将执行结果返回给参数`Default(传入变量)`

#### 执行后行为 :id=DEUIACTION1<sup class="footnote-symbol"> <font color=gray size=1>[实体界面行为调用]</font></sup>



调用实体 [工单(TICKET)](module/ProdMgmt/ticket.md) 界面行为 [新建执行后（建立双向关联数据)](module/ProdMgmt/ticket#界面行为) ，行为参数为`Default(传入变量)`

#### 关闭视图 :id=VIEWCTRLINVOKE1<sup class="footnote-symbol"> <font color=gray size=1>[视图部件调用]</font></sup>



调用`view(当前视图)`的方法`closeView`，参数为`Default(传入变量)`
#### 结束 :id=END1<sup class="footnote-symbol"> <font color=gray size=1>[结束]</font></sup>






### 实体逻辑参数

|    中文名   |    代码名    |  数据类型      |备注 |
| --------| --------| --------  | --------   |
|表单|form|部件对象||
|传入变量(<i class="fa fa-check"/></i>)|Default|数据对象||
|当前视图|view|当前视图对象||
|表单数据|form_data|数据对象||
