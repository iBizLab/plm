## 移入迭代 <!-- {docsify-ignore-all} -->

   将工作项移入对应迭代

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
state "开始" as Begin <<start>> [[$./shift_in_sprint#begin {"开始"}]]
state "绑定参数" as BINDPARAM1  [[$./shift_in_sprint#bindparam1 {"绑定参数"}]]
state "结束" as END1 <<end>> [[$./shift_in_sprint#end1 {"结束"}]]
state "循环子调用" as LOOPSUBCALL1  [[$./shift_in_sprint#loopsubcall1 {"循环子调用"}]] #green {
state "填充迭代标识" as PREPAREPARAM1  [[$./shift_in_sprint#prepareparam1 {"填充迭代标识"}]]
state "移入迭代" as DEACTION1  [[$./shift_in_sprint#deaction1 {"移入迭代"}]]
}


Begin --> BINDPARAM1
BINDPARAM1 --> LOOPSUBCALL1
LOOPSUBCALL1 --> PREPAREPARAM1
PREPAREPARAM1 --> DEACTION1
LOOPSUBCALL1 --> END1


@enduml
```


### 处理步骤说明

#### 开始 :id=Begin<sup class="footnote-symbol"> <font color=gray size=1>[开始]</font></sup>



*- N/A*
#### 绑定参数 :id=BINDPARAM1<sup class="footnote-symbol"> <font color=gray size=1>[绑定参数]</font></sup>



绑定参数`Default(传入变量)` 到 `srfactionparam(选择数据列表)`
#### 循环子调用 :id=LOOPSUBCALL1<sup class="footnote-symbol"> <font color=gray size=1>[循环子调用]</font></sup>



循环参数`srfactionparam(选择数据列表)`，子循环参数使用`temp_obj(循环临时变量)`
#### 填充迭代标识 :id=PREPAREPARAM1<sup class="footnote-symbol"> <font color=gray size=1>[准备参数]</font></sup>



1. 将`temp_obj(循环临时变量).ID(标识)` 设置给  `update_obj(工作项更新对象).SPRINT_ID(迭代标识)`
2. 将`Default(传入变量).ID(标识)` 设置给  `update_obj(工作项更新对象).ID(标识)`

#### 移入迭代 :id=DEACTION1<sup class="footnote-symbol"> <font color=gray size=1>[实体行为]</font></sup>



调用实体 [工作项(WORK_ITEM)](module/ProjMgmt/work_item.md) 行为 [Update](module/ProjMgmt/work_item#行为) ，行为参数为`update_obj(工作项更新对象)`

#### 结束 :id=END1<sup class="footnote-symbol"> <font color=gray size=1>[结束]</font></sup>



*- N/A*



### 实体逻辑参数

|    中文名   |    代码名    |  数据类型    |  实体   |备注 |
| --------| --------| -------- | -------- | --------   |
|传入变量(<i class="fa fa-check"/></i>)|Default|数据对象|[工作项(WORK_ITEM)](module/ProjMgmt/work_item.md)||
|移入变更记录|shift_in|数据对象|[迭代变更(SPRINT_ALTERATION)](module/ProjMgmt/sprint_alteration.md)||
|移除变更记录|shift_out|数据对象|[迭代变更(SPRINT_ALTERATION)](module/ProjMgmt/sprint_alteration.md)||
|选择数据列表|srfactionparam|数据对象列表|[迭代(SPRINT)](module/ProjMgmt/sprint.md)||
|循环临时变量|temp_obj|数据对象|[迭代(SPRINT)](module/ProjMgmt/sprint.md)||
|工作项更新对象|update_obj|数据对象|[工作项(WORK_ITEM)](module/ProjMgmt/work_item.md)||
