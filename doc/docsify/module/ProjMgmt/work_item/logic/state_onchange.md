## 工作项状态变更附加逻辑 <!-- {docsify-ignore-all} -->

   工作项状态变更时触发相应的通知消息，同时生成流转记录

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
state "工作项状态变换通知" as DENOTIFY1  [[$./state_onchange#denotify1 {"工作项状态变换通知"}]]
state "填充流转记录属性" as PREPAREPARAM1  [[$./state_onchange#prepareparam1 {"填充流转记录属性"}]]
state "创建流转历史" as DEACTION1  [[$./state_onchange#deaction1 {"创建流转历史"}]]
state "生成实际完成时间" as RAWSFCODE1  [[$./state_onchange#rawsfcode1 {"生成实际完成时间"}]]
state "保存工作项" as DEACTION2  [[$./state_onchange#deaction2 {"保存工作项"}]]
state "结束" as END1 <<end>> [[$./state_onchange#end1 {"结束"}]]


Begin --> DENOTIFY1
DENOTIFY1 --> PREPAREPARAM1
PREPAREPARAM1 --> DEACTION1
DEACTION1 --> RAWSFCODE1
RAWSFCODE1 --> DEACTION2
DEACTION2 --> END1


@enduml
```


### 处理步骤说明

#### 开始 :id=Begin<sup class="footnote-symbol"> <font color=gray size=1>[开始]</font></sup>



*- N/A*
#### 工作项状态变换通知 :id=DENOTIFY1<sup class="footnote-symbol"> <font color=gray size=1>[实体通知]</font></sup>



调用实体 [工作项(WORK_ITEM)](module/ProjMgmt/work_item.md) 通知 [工作项状态变换通知(state_notify)](module/ProjMgmt/work_item/notify/state_notify) ，参数为`Default(传入变量)`
#### 填充流转记录属性 :id=PREPAREPARAM1<sup class="footnote-symbol"> <font color=gray size=1>[准备参数]</font></sup>



1. 将`Last(last).STATE(状态)` 设置给  `transition_history(流转对象).FROM_STATE(源状态)`
2. 将`Default(传入变量).STATE(状态)` 设置给  `transition_history(流转对象).TO_STATE(目标状态)`
3. 将`Default(传入变量).UPDATE_MAN(更新人)` 设置给  `transition_history(流转对象).CREATE_MAN(建立人)`
4. 将`Default(传入变量).ID(标识)` 设置给  `transition_history(流转对象).OWNER_ID(所属数据标识)`
5. 将`project` 设置给  `transition_history(流转对象).OWNER_TYPE(所属数据对象)`
6. 将`work_item` 设置给  `transition_history(流转对象).OWNER_SUBTYPE(所属对象子类型)`

#### 创建流转历史 :id=DEACTION1<sup class="footnote-symbol"> <font color=gray size=1>[实体行为]</font></sup>



调用实体 [流转记录(TRANSITION_HISTORY)](module/ProjMgmt/transition_history.md) 行为 [Create](module/ProjMgmt/transition_history#行为) ，行为参数为`transition_history(流转对象)`

#### 生成实际完成时间 :id=RAWSFCODE1<sup class="footnote-symbol"> <font color=gray size=1>[直接后台代码]</font></sup>



<p class="panel-title"><b>执行代码[JavaScript]</b></p>

```javascript
var updated_data = logic.getParam("default");
if (updated_data.get('state_type') == 'in_progress' && updated_data.get('actual_start_at') == null) {
    updated_data.set("actual_start_at", new Date());
}
if (updated_data.get('state_type') == 'completed') {
    updated_data.set('actual_end_at', new Date());
}
```

#### 保存工作项 :id=DEACTION2<sup class="footnote-symbol"> <font color=gray size=1>[实体行为]</font></sup>



调用实体 [工作项(WORK_ITEM)](module/ProjMgmt/work_item.md) 行为 [Save](module/ProjMgmt/work_item#行为) ，行为参数为`Default(传入变量)`

#### 结束 :id=END1<sup class="footnote-symbol"> <font color=gray size=1>[结束]</font></sup>



*- N/A*



### 实体逻辑参数

|    中文名   |    代码名    |  数据类型    |  实体   |备注 |
| --------| --------| -------- | -------- | --------   |
|传入变量(<i class="fa fa-check"/></i>)|Default|数据对象|[工作项(WORK_ITEM)](module/ProjMgmt/work_item.md)||
|last|Last|最后数据变量|||
|流转对象|transition_history|数据对象|[流转记录(TRANSITION_HISTORY)](module/ProjMgmt/transition_history.md)||
