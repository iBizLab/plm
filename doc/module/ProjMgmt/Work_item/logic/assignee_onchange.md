## 工作项负责人变更附加逻辑 <!-- {docsify-ignore-all} -->

   

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
state "开始" as Begin <<start>> [[$./assignee_onchange#begin {"开始"}]]
state "准备参数" as PREPAREPARAM1  [[$./assignee_onchange#prepareparam1 {"准备参数"}]]
state "取消分配通知" as DENOTIFY2  [[$./assignee_onchange#denotify2 {"取消分配通知"}]]
state "分配通知" as DENOTIFY1  [[$./assignee_onchange#denotify1 {"分配通知"}]]
state "变更负责人通知" as DENOTIFY3  [[$./assignee_onchange#denotify3 {"变更负责人通知"}]]


Begin --> DENOTIFY1 : [[$./assignee_onchange#begin-denotify1{连接名称} 连接名称]]
Begin --> PREPAREPARAM1 : [[$./assignee_onchange#begin-prepareparam1{连接名称} 连接名称]]
PREPAREPARAM1 --> DENOTIFY2
Begin --> DENOTIFY3 : [[$./assignee_onchange#begin-denotify3{连接名称} 连接名称]]


@enduml
```


### 处理步骤说明

#### 开始 :id=Begin<sup class="footnote-symbol"> <font color=gray size=1>[开始]</font></sup>



*- N/A*
#### 准备参数 :id=PREPAREPARAM1<sup class="footnote-symbol"> <font color=gray size=1>[准备参数]</font></sup>



1. 将`Default(传入变量).UPDATE_MAN(更新人)` 设置给  `Last(变更前).UPDATE_MAN`

#### 取消分配通知 :id=DENOTIFY2<sup class="footnote-symbol"> <font color=gray size=1>[实体通知]</font></sup>



调用实体 [工作项(WORK_ITEM)](module/ProjMgmt/Work_item.md) 通知 [工作项取消负责人通知(cancel_assignee_notify)](module/ProjMgmt/Work_item/notify/cancel_assignee_notify) ，参数为`Last(变更前)`
#### 分配通知 :id=DENOTIFY1<sup class="footnote-symbol"> <font color=gray size=1>[实体通知]</font></sup>



调用实体 [工作项(WORK_ITEM)](module/ProjMgmt/Work_item.md) 通知 [工作项分配负责人通知(allocation_notify)](module/ProjMgmt/Work_item/notify/allocation_notify) ，参数为`Default(传入变量)`
#### 变更负责人通知 :id=DENOTIFY3<sup class="footnote-symbol"> <font color=gray size=1>[实体通知]</font></sup>



调用实体 [工作项(WORK_ITEM)](module/ProjMgmt/Work_item.md) 通知 [工作项负责人变更通知(assignee_onchange_notify)](module/ProjMgmt/Work_item/notify/assignee_onchange_notify) ，参数为`Default(传入变量)`

### 连接条件说明
#### 连接名称 :id=Begin-DENOTIFY1

`Default(传入变量).ASSIGNEE_ID(负责人标识)` ISNOTNULL
#### 连接名称 :id=Begin-PREPAREPARAM1

`Last(变更前).ASSIGNEE_ID` ISNOTNULL
#### 连接名称 :id=Begin-DENOTIFY3

`Default(传入变量).ID(标识)` ISNOTNULL


### 实体逻辑参数

|    中文名   |    代码名    |  数据类型    |  实体   |备注 |
| --------| --------| -------- | -------- | --------   |
|传入变量(<i class="fa fa-check"/></i>)|Default|数据对象|[工作项(WORK_ITEM)](module/ProjMgmt/Work_item.md)||
|变更前|Last|最后数据变量|||
