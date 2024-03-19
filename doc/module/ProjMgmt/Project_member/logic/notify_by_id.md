## 通过标识通知成员 <!-- {docsify-ignore-all} -->

   

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
state "开始" as Begin <<start>> [[$./notify_by_id#begin {"开始"}]]
state "获取数据" as DEACTION1  [[$./notify_by_id#deaction1 {"获取数据"}]]
state "填充当前操作人" as PREPAREPARAM1  [[$./notify_by_id#prepareparam1 {"填充当前操作人"}]]
state "填充操作时间" as RAWSFCODE1  [[$./notify_by_id#rawsfcode1 {"填充操作时间"}]]
state "移除成员通知" as DENOTIFY1  [[$./notify_by_id#denotify1 {"移除成员通知"}]]
state "结束" as END1 <<end>> [[$./notify_by_id#end1 {"结束"}]]


Begin --> DEACTION1
DEACTION1 --> PREPAREPARAM1
PREPAREPARAM1 --> RAWSFCODE1
RAWSFCODE1 --> DENOTIFY1
DENOTIFY1 --> END1


@enduml
```


### 处理步骤说明

#### 开始 :id=Begin<sup class="footnote-symbol"> <font color=gray size=1>[开始]</font></sup>



*- N/A*
#### 获取数据 :id=DEACTION1<sup class="footnote-symbol"> <font color=gray size=1>[实体行为]</font></sup>



调用实体 [项目成员(PROJECT_MEMBER)](module/ProjMgmt/Project_member.md) 行为 [Get](module/ProjMgmt/Project_member#行为) ，行为参数为`Default(传入变量)`

#### 填充当前操作人 :id=PREPAREPARAM1<sup class="footnote-symbol"> <font color=gray size=1>[准备参数]</font></sup>



1. 将`用户全局对象.srfpersonid` 设置给  `Default(传入变量).UPDATE_MAN(更新人)`

#### 填充操作时间 :id=RAWSFCODE1<sup class="footnote-symbol"> <font color=gray size=1>[直接后台代码]</font></sup>



<p class="panel-title"><b>执行代码[JavaScript]</b></p>

```groovy
var defaultObj = logic.getParam("default");
defaultObj.set("update_time", new Date());
```

#### 移除成员通知 :id=DENOTIFY1<sup class="footnote-symbol"> <font color=gray size=1>[实体通知]</font></sup>



调用实体 [项目成员(PROJECT_MEMBER)](module/ProjMgmt/Project_member.md) 通知 [移除项目成员通知(remove_member_nofity)](module/ProjMgmt/Project_member/notify/remove_member_nofity) ，参数为`Default(传入变量)`
#### 结束 :id=END1<sup class="footnote-symbol"> <font color=gray size=1>[结束]</font></sup>



*- N/A*



### 实体逻辑参数

|    中文名   |    代码名    |  数据类型    |  实体   |备注 |
| --------| --------| -------- | -------- | --------   |
|传入变量(<i class="fa fa-check"/></i>)|Default|数据对象|[项目成员(PROJECT_MEMBER)](module/ProjMgmt/Project_member.md)||