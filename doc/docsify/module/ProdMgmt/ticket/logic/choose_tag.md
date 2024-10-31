## 设置标签 <!-- {docsify-ignore-all} -->

   设置工单标签，修改工单标签信息

### 处理过程

```plantuml
@startuml
hide empty description
<style>
root {
  HyperlinkColor #42b983
}
</style>

hide empty description
state "开始" as Begin <<start>> [[$./choose_tag#begin {"开始"}]]
state "绑定选中标签" as BINDPARAM1  [[$./choose_tag#bindparam1 {"绑定选中标签"}]]
state "循环子调用" as LOOPSUBCALL1  [[$./choose_tag#loopsubcall1 {"循环子调用"}]] #green {
state "设置工单标签信息" as PREPAREPARAM2  [[$./choose_tag#prepareparam2 {"设置工单标签信息"}]]
state "变更工单标签信息" as DEACTION1  [[$./choose_tag#deaction1 {"变更工单标签信息"}]]
}


Begin --> BINDPARAM1
BINDPARAM1 --> LOOPSUBCALL1
LOOPSUBCALL1 --> PREPAREPARAM2
PREPAREPARAM2 --> DEACTION1


@enduml
```


### 处理步骤说明

#### 开始 :id=Begin<sup class="footnote-symbol"> <font color=gray size=1>[开始]</font></sup>



*- N/A*
#### 绑定选中标签 :id=BINDPARAM1<sup class="footnote-symbol"> <font color=gray size=1>[绑定参数]</font></sup>



绑定参数`Default(传入变量)` 到 `srfactionparam(选择数据对象)`
#### 循环子调用 :id=LOOPSUBCALL1<sup class="footnote-symbol"> <font color=gray size=1>[循环子调用]</font></sup>



循环参数`srfactionparam(选择数据对象)`，子循环参数使用`for_temp_obj(循环临时变量)`
#### 设置工单标签信息 :id=PREPAREPARAM2<sup class="footnote-symbol"> <font color=gray size=1>[准备参数]</font></sup>



1. 将`for_temp_obj(循环临时变量).tags(标签)` 设置给  `Default(传入变量).TAGS(标签)`

#### 变更工单标签信息 :id=DEACTION1<sup class="footnote-symbol"> <font color=gray size=1>[实体行为]</font></sup>



调用实体 [工单(TICKET)](module/ProdMgmt/ticket.md) 行为 [Update](module/ProdMgmt/ticket#行为) ，行为参数为`Default(传入变量)`



### 实体逻辑参数

|    中文名   |    代码名    |  数据类型    |  实体   |备注 |
| --------| --------| -------- | -------- | --------   |
|传入变量(<i class="fa fa-check"/></i>)|Default|数据对象|[工单(TICKET)](module/ProdMgmt/ticket.md)||
|循环临时变量|for_temp_obj|数据对象|[工单(TICKET)](module/ProdMgmt/ticket.md)||
|选择数据对象|srfactionparam|数据对象列表|[工单(TICKET)](module/ProdMgmt/ticket.md)||
