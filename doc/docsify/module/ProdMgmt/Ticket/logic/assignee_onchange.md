## 负责人变更附加逻辑 <!-- {docsify-ignore-all} -->

   

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
state "负责人变更通知" as DENOTIFY2  [[$./assignee_onchange#denotify2 {"负责人变更通知"}]]
state "分配负责人通知" as DENOTIFY1  [[$./assignee_onchange#denotify1 {"分配负责人通知"}]]
state "取消分配负责人通知" as DENOTIFY3  [[$./assignee_onchange#denotify3 {"取消分配负责人通知"}]]


Begin --> DENOTIFY1 : [[$./assignee_onchange#begin-denotify1{连接名称} 连接名称]]
Begin --> DENOTIFY2 : [[$./assignee_onchange#begin-denotify2{连接名称} 连接名称]]
Begin --> PREPAREPARAM1 : [[$./assignee_onchange#begin-prepareparam1{连接名称} 连接名称]]
PREPAREPARAM1 --> DENOTIFY3


@enduml
```


### 处理步骤说明

#### 开始 :id=Begin<sup class="footnote-symbol"> <font color=gray size=1>[开始]</font></sup>



*- N/A*
#### 准备参数 :id=PREPAREPARAM1<sup class="footnote-symbol"> <font color=gray size=1>[准备参数]</font></sup>



1. 将`Default(传入变量).UPDATE_MAN(更新人)` 设置给  `Last(变更前).UPDATE_MAN`

#### 负责人变更通知 :id=DENOTIFY2<sup class="footnote-symbol"> <font color=gray size=1>[实体通知]</font></sup>



调用实体 [工单(TICKET)](module/ProdMgmt/Ticket.md) 通知 [负责人变更通知(assignee_onchange_notify)](module/ProdMgmt/Ticket/notify/assignee_onchange_notify) ，参数为`Default(传入变量)`
#### 分配负责人通知 :id=DENOTIFY1<sup class="footnote-symbol"> <font color=gray size=1>[实体通知]</font></sup>



调用实体 [工单(TICKET)](module/ProdMgmt/Ticket.md) 通知 [分配负责人通知(assignee_notify)](module/ProdMgmt/Ticket/notify/assignee_notify) ，参数为`Default(传入变量)`
#### 取消分配负责人通知 :id=DENOTIFY3<sup class="footnote-symbol"> <font color=gray size=1>[实体通知]</font></sup>



调用实体 [工单(TICKET)](module/ProdMgmt/Ticket.md) 通知 [取消分配负责人通知(assignee_cancel_notify)](module/ProdMgmt/Ticket/notify/assignee_cancel_notify) ，参数为`Last(变更前)`

### 连接条件说明
#### 连接名称 :id=Begin-DENOTIFY1

`Default(传入变量).ASSIGNEE_ID(负责人标识)` ISNOTNULL
#### 连接名称 :id=Begin-DENOTIFY2

`Default(传入变量).ID(标识)` ISNOTNULL
#### 连接名称 :id=Begin-PREPAREPARAM1

`Last(变更前).ASSIGNEE_ID` ISNOTNULL


### 实体逻辑参数

|    中文名   |    代码名    |  数据类型    |  实体   |备注 |
| --------| --------| -------- | -------- | --------   |
|传入变量(<i class="fa fa-check"/></i>)|Default|数据对象|[工单(TICKET)](module/ProdMgmt/Ticket.md)||
|变更前|Last|最后数据变量|||
