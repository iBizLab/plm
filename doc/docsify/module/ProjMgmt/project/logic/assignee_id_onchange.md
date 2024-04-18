## 负责人变更附加逻辑 <!-- {docsify-ignore-all} -->

   项目负责人变更时触发相应的通知消息

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
state "开始" as Begin <<start>> [[$./assignee_id_onchange#begin {"开始"}]]
state "项目变更负责人通知" as DENOTIFY1  [[$./assignee_id_onchange#denotify1 {"项目变更负责人通知"}]]
state "项目分配负责人通知" as DENOTIFY2  [[$./assignee_id_onchange#denotify2 {"项目分配负责人通知"}]]
state "结束" as END1 <<end>> [[$./assignee_id_onchange#end1 {"结束"}]]


Begin --> DENOTIFY1
DENOTIFY1 --> DENOTIFY2 : [[$./assignee_id_onchange#denotify1-denotify2{已分配负责人且不等于当前操作用户} 已分配负责人且不等于当前操作用户]]
DENOTIFY2 --> END1


@enduml
```


### 处理步骤说明

#### 开始 :id=Begin<sup class="footnote-symbol"> <font color=gray size=1>[开始]</font></sup>



*- N/A*
#### 项目变更负责人通知 :id=DENOTIFY1<sup class="footnote-symbol"> <font color=gray size=1>[实体通知]</font></sup>



调用实体 [项目(PROJECT)](module/ProjMgmt/project.md) 通知 [项目变更负责人通知(change_assignee_notify)](module/ProjMgmt/project/notify/change_assignee_notify) ，参数为`Default(传入变量)`
#### 项目分配负责人通知 :id=DENOTIFY2<sup class="footnote-symbol"> <font color=gray size=1>[实体通知]</font></sup>



调用实体 [项目(PROJECT)](module/ProjMgmt/project.md) 通知 [项目分配负责人通知(assignee_notify)](module/ProjMgmt/project/notify/assignee_notify) ，参数为`Default(传入变量)`
#### 结束 :id=END1<sup class="footnote-symbol"> <font color=gray size=1>[结束]</font></sup>



*- N/A*


### 连接条件说明
#### 已分配负责人且不等于当前操作用户 :id=DENOTIFY1-DENOTIFY2

`Default(传入变量).ASSIGNEE_ID(负责人标识)` ISNOTNULL AND 


### 实体逻辑参数

|    中文名   |    代码名    |  数据类型    |  实体   |备注 |
| --------| --------| -------- | -------- | --------   |
|传入变量(<i class="fa fa-check"/></i>)|Default|数据对象|[项目(PROJECT)](module/ProjMgmt/project.md)||
