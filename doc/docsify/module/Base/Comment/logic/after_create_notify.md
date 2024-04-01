## 新建评论后通知 <!-- {docsify-ignore-all} -->

   

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
state "开始" as Begin <<start>> [[$./after_create_notify#begin {"开始"}]]
state "评论工作项通知" as DENOTIFY1  [[$./after_create_notify#denotify1 {"评论工作项通知"}]]
state "评论需求通知" as DENOTIFY2  [[$./after_create_notify#denotify2 {"评论需求通知"}]]
state "评论工单通知" as DENOTIFY3  [[$./after_create_notify#denotify3 {"评论工单通知"}]]
state "评论客户通知" as DENOTIFY4  [[$./after_create_notify#denotify4 {"评论客户通知"}]]
state "评论测试用例通知" as DENOTIFY5  [[$./after_create_notify#denotify5 {"评论测试用例通知"}]]
state "评论执行用例通知" as DENOTIFY6  [[$./after_create_notify#denotify6 {"评论执行用例通知"}]]
state "评论页面通知" as DENOTIFY7  [[$./after_create_notify#denotify7 {"评论页面通知"}]]


Begin --> DENOTIFY1 : [[$./after_create_notify#begin-denotify1{连接名称} 连接名称]]
Begin --> DENOTIFY2 : [[$./after_create_notify#begin-denotify2{连接名称} 连接名称]]
Begin --> DENOTIFY3 : [[$./after_create_notify#begin-denotify3{连接名称} 连接名称]]
Begin --> DENOTIFY4 : [[$./after_create_notify#begin-denotify4{连接名称} 连接名称]]
Begin --> DENOTIFY5 : [[$./after_create_notify#begin-denotify5{连接名称} 连接名称]]
Begin --> DENOTIFY6 : [[$./after_create_notify#begin-denotify6{连接名称} 连接名称]]
Begin --> DENOTIFY7 : [[$./after_create_notify#begin-denotify7{连接名称} 连接名称]]


@enduml
```


### 处理步骤说明

#### 开始 :id=Begin<sup class="footnote-symbol"> <font color=gray size=1>[开始]</font></sup>



*- N/A*
#### 评论工作项通知 :id=DENOTIFY1<sup class="footnote-symbol"> <font color=gray size=1>[实体通知]</font></sup>



调用实体 [评论(COMMENT)](module/Base/Comment.md) 通知 [评论工作项通知(work_item_notify)](module/Base/Comment/notify/work_item_notify) ，参数为`Default(传入变量)`
#### 评论需求通知 :id=DENOTIFY2<sup class="footnote-symbol"> <font color=gray size=1>[实体通知]</font></sup>



调用实体 [评论(COMMENT)](module/Base/Comment.md) 通知 [评论需求通知(idea_notify)](module/Base/Comment/notify/idea_notify) ，参数为`Default(传入变量)`
#### 评论工单通知 :id=DENOTIFY3<sup class="footnote-symbol"> <font color=gray size=1>[实体通知]</font></sup>



调用实体 [评论(COMMENT)](module/Base/Comment.md) 通知 [评论工单通知(ticket_notify)](module/Base/Comment/notify/ticket_notify) ，参数为`Default(传入变量)`
#### 评论客户通知 :id=DENOTIFY4<sup class="footnote-symbol"> <font color=gray size=1>[实体通知]</font></sup>



调用实体 [评论(COMMENT)](module/Base/Comment.md) 通知 [评论客户通知(customer_notify)](module/Base/Comment/notify/customer_notify) ，参数为`Default(传入变量)`
#### 评论测试用例通知 :id=DENOTIFY5<sup class="footnote-symbol"> <font color=gray size=1>[实体通知]</font></sup>



调用实体 [评论(COMMENT)](module/Base/Comment.md) 通知 [评论测试用例通知(test_case_notify)](module/Base/Comment/notify/test_case_notify) ，参数为`Default(传入变量)`
#### 评论执行用例通知 :id=DENOTIFY6<sup class="footnote-symbol"> <font color=gray size=1>[实体通知]</font></sup>



调用实体 [评论(COMMENT)](module/Base/Comment.md) 通知 [评论执行用例通知(run_notify)](module/Base/Comment/notify/run_notify) ，参数为`Default(传入变量)`
#### 评论页面通知 :id=DENOTIFY7<sup class="footnote-symbol"> <font color=gray size=1>[实体通知]</font></sup>



调用实体 [评论(COMMENT)](module/Base/Comment.md) 通知 [评论页面通知(page_notify)](module/Base/Comment/notify/page_notify) ，参数为`Default(传入变量)`

### 连接条件说明
#### 连接名称 :id=Begin-DENOTIFY1

`Default(传入变量).PRINCIPAL_TYPE(评论主体类型)` EQ `WORK_ITEM`
#### 连接名称 :id=Begin-DENOTIFY2

`Default(传入变量).PRINCIPAL_TYPE(评论主体类型)` EQ `TEST_CASE`
#### 连接名称 :id=Begin-DENOTIFY3

`Default(传入变量).PRINCIPAL_TYPE(评论主体类型)` EQ `TICKET`
#### 连接名称 :id=Begin-DENOTIFY4

`Default(传入变量).PRINCIPAL_TYPE(评论主体类型)` EQ `CUSTOMER`
#### 连接名称 :id=Begin-DENOTIFY5

`Default(传入变量).PRINCIPAL_TYPE(评论主体类型)` EQ `TEST_CASE`
#### 连接名称 :id=Begin-DENOTIFY6

`Default(传入变量).PRINCIPAL_TYPE(评论主体类型)` EQ `RUN`
#### 连接名称 :id=Begin-DENOTIFY7

`Default(传入变量).PRINCIPAL_TYPE(评论主体类型)` EQ `PAGE`


### 实体逻辑参数

|    中文名   |    代码名    |  数据类型    |  实体   |备注 |
| --------| --------| -------- | -------- | --------   |
|传入变量(<i class="fa fa-check"/></i>)|Default|数据对象|[评论(COMMENT)](module/Base/Comment.md)||
