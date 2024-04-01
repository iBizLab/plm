## 添加关注后发送通知 <!-- {docsify-ignore-all} -->

   

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
state "提醒关注通知" as DENOTIFY1  [[$./after_create_notify#denotify1 {"提醒关注通知"}]]
state "提醒关注页面通知" as DENOTIFY2  [[$./after_create_notify#denotify2 {"提醒关注页面通知"}]]


Begin --> DENOTIFY1 : [[$./after_create_notify#begin-denotify1{连接名称} 连接名称]]
Begin --> DENOTIFY2 : [[$./after_create_notify#begin-denotify2{连接名称} 连接名称]]


@enduml
```


### 处理步骤说明

#### 开始 :id=Begin<sup class="footnote-symbol"> <font color=gray size=1>[开始]</font></sup>



*- N/A*
#### 提醒关注通知 :id=DENOTIFY1<sup class="footnote-symbol"> <font color=gray size=1>[实体通知]</font></sup>



调用实体 [关注(ATTENTION)](module/Base/Attention.md) 通知 [提醒关注通知(notice_attention_notify)](module/Base/Attention/notify/notice_attention_notify) ，参数为`Default(传入变量)`
#### 提醒关注页面通知 :id=DENOTIFY2<sup class="footnote-symbol"> <font color=gray size=1>[实体通知]</font></sup>



调用实体 [关注(ATTENTION)](module/Base/Attention.md) 通知 [提醒关注页面通知(attention_page_notify)](module/Base/Attention/notify/attention_page_notify) ，参数为`Default(传入变量)`

### 连接条件说明
#### 连接名称 :id=Begin-DENOTIFY1

`Default(传入变量).OWNER_TYPE(所属数据对象)` NOTEQ `PAGE`
#### 连接名称 :id=Begin-DENOTIFY2

`Default(传入变量).OWNER_TYPE(所属数据对象)` EQ `PAGE`


### 实体逻辑参数

|    中文名   |    代码名    |  数据类型    |  实体   |备注 |
| --------| --------| -------- | -------- | --------   |
|传入变量(<i class="fa fa-check"/></i>)|Default|数据对象|[关注(ATTENTION)](module/Base/Attention.md)||
