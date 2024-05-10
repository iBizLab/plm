## 负责人变更附加逻辑 <!-- {docsify-ignore-all} -->

   测试计划负责人变更时触发相应的通知消息

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
state "分配负责人通知" as DENOTIFY1  [[$./assignee_onchange#denotify1 {"分配负责人通知"}]]
state "取消分配负责人通知" as DENOTIFY2  [[$./assignee_onchange#denotify2 {"取消分配负责人通知"}]]


Begin --> DENOTIFY1 : [[$./assignee_onchange#begin-denotify1{变更后数据存在负责人} 变更后数据存在负责人]]
Begin --> PREPAREPARAM1 : [[$./assignee_onchange#begin-prepareparam1{变更前数据存在负责人且不等于当前操作人} 变更前数据存在负责人且不等于当前操作人]]
PREPAREPARAM1 --> DENOTIFY2


@enduml
```


### 处理步骤说明

#### 开始 :id=Begin<sup class="footnote-symbol"> <font color=gray size=1>[开始]</font></sup>



*- N/A*
#### 准备参数 :id=PREPAREPARAM1<sup class="footnote-symbol"> <font color=gray size=1>[准备参数]</font></sup>



1. 将`Default(传入变量).UPDATE_MAN(更新人)` 设置给  `Last(变更前).UPDATE_MAN`
2. 将`Default(传入变量).UPDATE_TIME(更新时间)` 设置给  `Last(变更前).UPDATE_TIME`

#### 分配负责人通知 :id=DENOTIFY1<sup class="footnote-symbol"> <font color=gray size=1>[实体通知]</font></sup>



调用实体 [测试计划(TEST_PLAN)](module/TestMgmt/test_plan.md) 通知 [测试计划分配负责人通知(assignee_notify)](module/TestMgmt/test_plan/notify/assignee_notify) ，参数为`Default(传入变量)`
#### 取消分配负责人通知 :id=DENOTIFY2<sup class="footnote-symbol"> <font color=gray size=1>[实体通知]</font></sup>



调用实体 [测试计划(TEST_PLAN)](module/TestMgmt/test_plan.md) 通知 [测试计划取消分配负责人通知(assignee_cancel_notify)](module/TestMgmt/test_plan/notify/assignee_cancel_notify) ，参数为`Last(变更前)`

### 连接条件说明
#### 变更后数据存在负责人 :id=Begin-DENOTIFY1

`Default(传入变量).ASSIGNEE_ID(负责人标识)` ISNOTNULL AND 
#### 变更前数据存在负责人且不等于当前操作人 :id=Begin-PREPAREPARAM1

`Last(变更前).ASSIGNEE_ID` ISNOTNULL AND 


### 实体逻辑参数

|    中文名   |    代码名    |  数据类型    |  实体   |备注 |
| --------| --------| -------- | -------- | --------   |
|传入变量(<i class="fa fa-check"/></i>)|Default|数据对象|[测试计划(TEST_PLAN)](module/TestMgmt/test_plan.md)||
|变更前|Last|最后数据变量|||
