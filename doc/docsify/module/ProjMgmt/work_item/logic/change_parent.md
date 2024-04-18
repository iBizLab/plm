## 变更父工作项 <!-- {docsify-ignore-all} -->

   变更父工作项

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
state "开始" as Begin <<start>> [[$./change_parent#begin {"开始"}]]
state "绑定参数" as BINDPARAM1  [[$./change_parent#bindparam1 {"绑定参数"}]]
state "循环子调用" as LOOPSUBCALL1  [[$./change_parent#loopsubcall1 {"循环子调用"}]] #green {
state "填充工作项父级标识" as PREPAREPARAM1  [[$./change_parent#prepareparam1 {"填充工作项父级标识"}]]
state "变更父工作项" as DEACTION1  [[$./change_parent#deaction1 {"变更父工作项"}]]
state "继承父工作项的顶级标识" as PREPAREPARAM2  [[$./change_parent#prepareparam2 {"继承父工作项的顶级标识"}]]
state "父工作项ID为顶级标识" as PREPAREPARAM3  [[$./change_parent#prepareparam3 {"父工作项ID为顶级标识"}]]
state "变更顶级工作项" as DELOGIC1  [[$./change_parent#delogic1 {"变更顶级工作项"}]]
}


Begin --> BINDPARAM1
BINDPARAM1 --> LOOPSUBCALL1
LOOPSUBCALL1 --> PREPAREPARAM1
PREPAREPARAM1 --> DEACTION1
DEACTION1 --> PREPAREPARAM2 : [[$./change_parent#deaction1-prepareparam2{所选父工作项不存在顶级标识} 所选父工作项不存在顶级标识]]
PREPAREPARAM2 --> DELOGIC1
DEACTION1 --> PREPAREPARAM3 : [[$./change_parent#deaction1-prepareparam3{所选父工作项存在顶级标识} 所选父工作项存在顶级标识]]
PREPAREPARAM3 --> DELOGIC1


@enduml
```


### 处理步骤说明

#### 开始 :id=Begin<sup class="footnote-symbol"> <font color=gray size=1>[开始]</font></sup>



*- N/A*
#### 绑定参数 :id=BINDPARAM1<sup class="footnote-symbol"> <font color=gray size=1>[绑定参数]</font></sup>



绑定参数`Default(传入变量)` 到 `srfactionparam(选中数据列表)`
#### 循环子调用 :id=LOOPSUBCALL1<sup class="footnote-symbol"> <font color=gray size=1>[循环子调用]</font></sup>



循环参数`srfactionparam(选中数据列表)`，子循环参数使用`for_temp_obj(循环临时变量)`
#### 填充工作项父级标识 :id=PREPAREPARAM1<sup class="footnote-symbol"> <font color=gray size=1>[准备参数]</font></sup>



1. 将`for_temp_obj(循环临时变量).ID(标识)` 设置给  `Default(传入变量).PID(父标识)`

#### 变更父工作项 :id=DEACTION1<sup class="footnote-symbol"> <font color=gray size=1>[实体行为]</font></sup>



调用实体 [工作项(WORK_ITEM)](module/ProjMgmt/work_item.md) 行为 [Update](module/ProjMgmt/work_item#行为) ，行为参数为`Default(传入变量)`

#### 继承父工作项的顶级标识 :id=PREPAREPARAM2<sup class="footnote-symbol"> <font color=gray size=1>[准备参数]</font></sup>



1. 将`for_temp_obj(循环临时变量).TOP_ID(顶级工作项标识)` 设置给  `Default(传入变量).TOP_ID(顶级工作项标识)`

#### 父工作项ID为顶级标识 :id=PREPAREPARAM3<sup class="footnote-symbol"> <font color=gray size=1>[准备参数]</font></sup>



1. 将`for_temp_obj(循环临时变量).ID(标识)` 设置给  `Default(传入变量).TOP_ID(顶级工作项标识)`

#### 变更顶级工作项 :id=DELOGIC1<sup class="footnote-symbol"> <font color=gray size=1>[实体逻辑]</font></sup>



调用实体 [工作项(WORK_ITEM)](module/ProjMgmt/work_item.md) 处理逻辑 [变更顶级工作项]((module/ProjMgmt/work_item/logic/change_top.md)) ，行为参数为`Default(传入变量)`


### 连接条件说明
#### 所选父工作项不存在顶级标识 :id=DEACTION1-PREPAREPARAM2

`for_temp_obj(循环临时变量).TOP_ID(顶级工作项标识)` ISNOTNULL
#### 所选父工作项存在顶级标识 :id=DEACTION1-PREPAREPARAM3

`for_temp_obj(循环临时变量).TOP_ID(顶级工作项标识)` ISNULL


### 实体逻辑参数

|    中文名   |    代码名    |  数据类型    |  实体   |备注 |
| --------| --------| -------- | -------- | --------   |
|传入变量(<i class="fa fa-check"/></i>)|Default|数据对象|[工作项(WORK_ITEM)](module/ProjMgmt/work_item.md)||
|循环临时变量|for_temp_obj|数据对象|[工作项(WORK_ITEM)](module/ProjMgmt/work_item.md)||
|父工作项|parent_obj|数据对象|[工作项(WORK_ITEM)](module/ProjMgmt/work_item.md)||
|选中数据列表|srfactionparam|数据对象列表|[工作项(WORK_ITEM)](module/ProjMgmt/work_item.md)||
