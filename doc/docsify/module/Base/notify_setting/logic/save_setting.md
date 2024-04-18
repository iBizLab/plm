## 保存设置 <!-- {docsify-ignore-all} -->

   

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
state "开始" as Begin <<start>> [[$./save_setting#begin {"开始"}]]
state "准备参数" as PREPAREPARAM1  [[$./save_setting#prepareparam1 {"准备参数"}]]
state "实体行为" as DEACTION3  [[$./save_setting#deaction3 {"实体行为"}]]
state "更新" as DEACTION1  [[$./save_setting#deaction1 {"更新"}]]
state "结束" as END1 <<end>> [[$./save_setting#end1 {"结束"}]]
state "建立" as DEACTION2  [[$./save_setting#deaction2 {"建立"}]]


Begin --> PREPAREPARAM1
PREPAREPARAM1 --> DEACTION3
DEACTION3 --> DEACTION1
DEACTION1 --> END1
DEACTION3 -[#red]-> DEACTION2
DEACTION2 --> END1


@enduml
```


### 处理步骤说明

#### 开始 :id=Begin<sup class="footnote-symbol"> <font color=gray size=1>[开始]</font></sup>



*- N/A*
#### 准备参数 :id=PREPAREPARAM1<sup class="footnote-symbol"> <font color=gray size=1>[准备参数]</font></sup>



1. 将`Default(传入变量).ID(标识)` 设置给  `check_obj(检查对象).ID(标识)`

#### 实体行为 :id=DEACTION3<sup class="footnote-symbol"> <font color=gray size=1>[实体行为]</font></sup>



调用实体 [通知设置(NOTIFY_SETTING)](module/Base/notify_setting.md) 行为 [Get](module/Base/notify_setting#行为) ，行为参数为`check_obj(检查对象)`

#### 更新 :id=DEACTION1<sup class="footnote-symbol"> <font color=gray size=1>[实体行为]</font></sup>



调用实体 [通知设置(NOTIFY_SETTING)](module/Base/notify_setting.md) 行为 [Update](module/Base/notify_setting#行为) ，行为参数为`Default(传入变量)`

#### 结束 :id=END1<sup class="footnote-symbol"> <font color=gray size=1>[结束]</font></sup>



*- N/A*

#### 建立 :id=DEACTION2<sup class="footnote-symbol"> <font color=gray size=1>[实体行为]</font></sup>



调用实体 [通知设置(NOTIFY_SETTING)](module/Base/notify_setting.md) 行为 [Create](module/Base/notify_setting#行为) ，行为参数为`Default(传入变量)`



### 实体逻辑参数

|    中文名   |    代码名    |  数据类型    |  实体   |备注 |
| --------| --------| -------- | -------- | --------   |
|传入变量(<i class="fa fa-check"/></i>)|Default|数据对象|[通知设置(NOTIFY_SETTING)](module/Base/notify_setting.md)||
|检查对象|check_obj|数据对象|[通知设置(NOTIFY_SETTING)](module/Base/notify_setting.md)||
|上下文|context||||
