## 变更负责人附加逻辑 <!-- {docsify-ignore-all} -->

   客户负责人变更时触发相应的通知消息

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
state "开始" as Begin <<start>> [[$./assignee_onchage#begin {"开始"}]]
state "变更负责人通知" as DENOTIFY1  [[$./assignee_onchage#denotify1 {"变更负责人通知"}]]
state "客户分配负责人通知" as DENOTIFY2  [[$./assignee_onchage#denotify2 {"客户分配负责人通知"}]]
state "准备更新人和更新时间参数" as PREPAREPARAM1  [[$./assignee_onchage#prepareparam1 {"准备更新人和更新时间参数"}]]
state "客户取消分配通知" as DENOTIFY3  [[$./assignee_onchage#denotify3 {"客户取消分配通知"}]]


Begin --> DENOTIFY1
DENOTIFY1 --> DENOTIFY2 : [[$./assignee_onchage#denotify1-denotify2{重新分配负责人} 重新分配负责人]]
DENOTIFY1 --> PREPAREPARAM1 : [[$./assignee_onchage#denotify1-prepareparam1{变更前数据存在负责人且负责人不等于当前操作用户} 变更前数据存在负责人且负责人不等于当前操作用户]]
PREPAREPARAM1 --> DENOTIFY3


@enduml
```


### 处理步骤说明

#### 开始 :id=Begin<sup class="footnote-symbol"> <font color=gray size=1>[开始]</font></sup>



*- N/A*
#### 变更负责人通知 :id=DENOTIFY1<sup class="footnote-symbol"> <font color=gray size=1>[实体通知]</font></sup>



调用实体 [客户(CUSTOMER)](module/ProdMgmt/customer.md) 通知 [客户变更负责人通知(assignee_onchange_notify)](module/ProdMgmt/customer/notify/assignee_onchange_notify) ，参数为`Default(传入变量)`
#### 准备更新人和更新时间参数 :id=PREPAREPARAM1<sup class="footnote-symbol"> <font color=gray size=1>[准备参数]</font></sup>



1. 将`Default(传入变量).UPDATE_MAN(更新人)` 设置给  `Last(变更前).UPDATE_MAN`
2. 将`Default(传入变量).UPDATE_TIME(更新时间)` 设置给  `Last(变更前).UPDATE_TIME`

#### 客户分配负责人通知 :id=DENOTIFY2<sup class="footnote-symbol"> <font color=gray size=1>[实体通知]</font></sup>



调用实体 [客户(CUSTOMER)](module/ProdMgmt/customer.md) 通知 [客户分配负责人通知(assignee_notify)](module/ProdMgmt/customer/notify/assignee_notify) ，参数为`Default(传入变量)`
#### 客户取消分配通知 :id=DENOTIFY3<sup class="footnote-symbol"> <font color=gray size=1>[实体通知]</font></sup>



调用实体 [客户(CUSTOMER)](module/ProdMgmt/customer.md) 通知 [客户取消分配负责人通知(assignee_cancel_notify)](module/ProdMgmt/customer/notify/assignee_cancel_notify) ，参数为`Last(变更前)`

### 连接条件说明
#### 重新分配负责人 :id=DENOTIFY1-DENOTIFY2

`Default(传入变量).ASSIGNEE_ID(负责人标识)` ISNOTNULL AND 
#### 变更前数据存在负责人且负责人不等于当前操作用户 :id=DENOTIFY1-PREPAREPARAM1

`Last(变更前).ASSIGNEE_ID` ISNOTNULL AND 


### 实体逻辑参数

|    中文名   |    代码名    |  数据类型    |  实体   |备注 |
| --------| --------| -------- | -------- | --------   |
|传入变量(<i class="fa fa-check"/></i>)|Default|数据对象|[客户(CUSTOMER)](module/ProdMgmt/customer.md)||
|变更前|Last|最后数据变量|||
