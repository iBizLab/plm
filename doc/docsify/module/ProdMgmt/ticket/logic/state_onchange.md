## 状态变更附加逻辑 <!-- {docsify-ignore-all} -->

   工单状态变更时触发相应的通知消息，同时生成流转记录

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
state "开始" as Begin <<start>> [[$./state_onchange#begin {"开始"}]]
state "准备参数" as PREPAREPARAM1  [[$./state_onchange#prepareparam1 {"准备参数"}]]
state "创建流转历史" as DEACTION1  [[$./state_onchange#deaction1 {"创建流转历史"}]]
state "工单状态变更通知" as DENOTIFY1  [[$./state_onchange#denotify1 {"工单状态变更通知"}]]
state "结束" as END1 <<end>> [[$./state_onchange#end1 {"结束"}]]


Begin --> PREPAREPARAM1
PREPAREPARAM1 --> DEACTION1
DEACTION1 --> DENOTIFY1
DENOTIFY1 --> END1


@enduml
```


### 处理步骤说明

#### 开始 :id=Begin<sup class="footnote-symbol"> <font color=gray size=1>[开始]</font></sup>



*- N/A*
#### 准备参数 :id=PREPAREPARAM1<sup class="footnote-symbol"> <font color=gray size=1>[准备参数]</font></sup>



1. 将`Last(变更前).STATE` 设置给  `transition_history(流转对象).FROM_STATE(源状态)`
2. 将`Default(传入变量).STATE(状态)` 设置给  `transition_history(流转对象).TO_STATE(目标状态)`
3. 将`Default(传入变量).UPDATE_MAN(更新人)` 设置给  `transition_history(流转对象).CREATE_MAN(建立人)`
4. 将`Default(传入变量).ID(标识)` 设置给  `transition_history(流转对象).OWNER_ID(所属数据标识)`
5. 将`product` 设置给  `transition_history(流转对象).OWNER_TYPE(所属数据对象)`
6. 将`ticket` 设置给  `transition_history(流转对象).OWNER_SUBTYPE(所属对象子类型)`

#### 创建流转历史 :id=DEACTION1<sup class="footnote-symbol"> <font color=gray size=1>[实体行为]</font></sup>



调用实体 [流转记录(TRANSITION_HISTORY)](module/ProjMgmt/transition_history.md) 行为 [Create](module/ProjMgmt/transition_history#行为) ，行为参数为`transition_history(流转对象)`

#### 工单状态变更通知 :id=DENOTIFY1<sup class="footnote-symbol"> <font color=gray size=1>[实体通知]</font></sup>



调用实体 [工单(TICKET)](module/ProdMgmt/ticket.md) 通知 [工单状态变更通知(state_onchage_notify)](module/ProdMgmt/ticket/notify/state_onchage_notify) ，参数为`Default(传入变量)`
#### 结束 :id=END1<sup class="footnote-symbol"> <font color=gray size=1>[结束]</font></sup>



*- N/A*



### 实体逻辑参数

|    中文名   |    代码名    |  数据类型    |  实体   |备注 |
| --------| --------| -------- | -------- | --------   |
|传入变量(<i class="fa fa-check"/></i>)|Default|数据对象|[工单(TICKET)](module/ProdMgmt/ticket.md)||
|变更前|Last|最后数据变量|||
|流转对象|transition_history|数据对象|[流转记录(TRANSITION_HISTORY)](module/ProjMgmt/transition_history.md)||
