## 计算子工作项类型(上下文) <!-- {docsify-ignore-all} -->

   根据工作项类型，判断此工作项可变更的父工作项/子工作项类型

### 处理过程

```plantuml
@startuml
hide footbox
<style>
root {
  HyperlinkColor #42b983
}
</style>

hide empty description
state "开始" as Begin <<start>> [[$./calc_children_work_item_type_context#begin {开始}]]
state "获取工作项类型" as PREPAREJSPARAM1  [[$./calc_children_work_item_type_context#preparejsparam1 {获取工作项类型}]]
state "结束" as END1 <<end>> [[$./calc_children_work_item_type_context#end1 {结束}]]
state "计算敏捷项目子类型" as RAWJSCODE3  [[$./calc_children_work_item_type_context#rawjscode3 {计算敏捷项目子类型}]]
state "计算看板项目子类型" as RAWJSCODE1  [[$./calc_children_work_item_type_context#rawjscode1 {计算看板项目子类型}]]
state "计算瀑布项目子类型" as RAWJSCODE2  [[$./calc_children_work_item_type_context#rawjscode2 {计算瀑布项目子类型}]]
state "合并父工作项类型" as PREPAREJSPARAM2  [[$./calc_children_work_item_type_context#preparejsparam2 {合并父工作项类型}]]


Begin --> PREPAREJSPARAM1 : [[$./calc_children_work_item_type_context#begin-preparejsparam1{工作项类型不为空} 工作项类型不为空]]
PREPAREJSPARAM1 --> RAWJSCODE1 : [[$./calc_children_work_item_type_context#preparejsparam1-rawjscode1{看板项目} 看板项目]]
RAWJSCODE1 --> PREPAREJSPARAM2 : [[$./calc_children_work_item_type_context#rawjscode1-preparejsparam2{父类型不为空} 父类型不为空]]
PREPAREJSPARAM2 --> END1
PREPAREJSPARAM1 --> RAWJSCODE2 : [[$./calc_children_work_item_type_context#preparejsparam1-rawjscode2{瀑布项目} 瀑布项目]]
RAWJSCODE2 --> PREPAREJSPARAM2 : [[$./calc_children_work_item_type_context#rawjscode2-preparejsparam2{父类型不为空} 父类型不为空]]
PREPAREJSPARAM1 --> RAWJSCODE3 : [[$./calc_children_work_item_type_context#preparejsparam1-rawjscode3{敏捷项目} 敏捷项目]]
RAWJSCODE3 --> PREPAREJSPARAM2 : [[$./calc_children_work_item_type_context#rawjscode3-preparejsparam2{父类型不为空} 父类型不为空]]


@enduml
```


### 处理步骤说明

#### 开始 :id=Begin<sup class="footnote-symbol"> <font color=gray size=1>[开始]</font></sup>




#### 获取工作项类型 :id=PREPAREJSPARAM1<sup class="footnote-symbol"> <font color=gray size=1>[准备参数]</font></sup>



1. 将`数据上下文[work_item_type_id] ==> type` 设置给  `type(工作项类型)`
2. 将`数据上下文[work_item_type_id.split('_')[0]] ==> project_type` 设置给  `project_type(项目类型)`

#### 计算看板项目子类型 :id=RAWJSCODE1<sup class="footnote-symbol"> <font color=gray size=1>[直接前台代码]</font></sup>



<p class="panel-title"><b>执行代码</b></p>

```javascript
const type = uiLogic.type.split('_')[1] || '';
// 任务类型与缺陷类型无子工作项
if (!type || type === 'task' || type === 'bug') {
    return;
}
const list = ['epic', 'feature', 'story', 'task', 'bug'];
const index = list.findIndex(x => x === type);
if (index === 0) {
    uiLogic.children_type = `kanban_${list[1]}`;
} else if (index === 1) {
    uiLogic.children_type = `kanban_${list[2]}`;
} else if (index === 2) {
    uiLogic.children_type = `kanban_task,kanban_bug`;
    // uiLogic.children_type = `kanban_task`;
}
```

#### 计算瀑布项目子类型 :id=RAWJSCODE2<sup class="footnote-symbol"> <font color=gray size=1>[直接前台代码]</font></sup>



<p class="panel-title"><b>执行代码</b></p>

```javascript
const type = uiLogic.type.split('_')[1] || '';
// 缺陷无子类型
if (!type || type === 'bug') {
    return;
}
if (type === 'stage' || type === 'milestone') {
    // 阶段与里程碑
    uiLogic.children_type = `waterfall_milestone,waterfall_stage`;
    // uiLogic.children_type = `waterfall_milestone`;
} else if (type === 'requirement') {
    // 需求
    uiLogic.children_type = `waterfall_requirement,waterfall_task,waterfall_bug`;
    // uiLogic.children_type = `waterfall_requirement`;
} else if (type === 'task') {
    // 任务
    uiLogic.children_type = `waterfall_task`;
}
```

#### 计算敏捷项目子类型 :id=RAWJSCODE3<sup class="footnote-symbol"> <font color=gray size=1>[直接前台代码]</font></sup>



<p class="panel-title"><b>执行代码</b></p>

```javascript
const type = uiLogic.type.split('_')[1] || '';
// 用户故事类型无父工作项
if (!type || type === 'task' || type === 'bug') {
    return;
}
if (type === 'epic') {
    // 史诗
    uiLogic.children_type = `scrum_feature`;
} else if (type === 'feature') {
    // 特性
    uiLogic.children_type = `scrum_story`;
} else if (type === 'story') {
    // 任务与缺陷
    uiLogic.children_type = `scrum_task,scrum_bug`;
    // uiLogic.children_type = `scrum_task`;
}
```

#### 合并父工作项类型 :id=PREPAREJSPARAM2<sup class="footnote-symbol"> <font color=gray size=1>[准备参数]</font></sup>



1. 将`children_type(子工作项类型)` 设置给  `params(视图参数).n_work_item_type_id_in`

#### 结束 :id=END1<sup class="footnote-symbol"> <font color=gray size=1>[结束]</font></sup>




### 连接条件说明
#### 工作项类型不为空 :id=Begin-PREPAREJSPARAM1

```context(上下文).work_item_type_id``` ISNOTNULL
#### 看板项目 :id=PREPAREJSPARAM1-RAWJSCODE1

```project_type(项目类型)``` EQ ```kanban```
#### 父类型不为空 :id=RAWJSCODE1-PREPAREJSPARAM2

```children_type(子工作项类型)``` ISNOTNULL
#### 瀑布项目 :id=PREPAREJSPARAM1-RAWJSCODE2

```project_type(项目类型)``` EQ ```waterfall```
#### 父类型不为空 :id=RAWJSCODE2-PREPAREJSPARAM2

```children_type(子工作项类型)``` ISNOTNULL
#### 敏捷项目 :id=PREPAREJSPARAM1-RAWJSCODE3

```project_type(项目类型)``` EQ ```scrum```
#### 父类型不为空 :id=RAWJSCODE3-PREPAREJSPARAM2

```children_type(子工作项类型)``` ISNOTNULL


### 实体逻辑参数

|    中文名   |    代码名    |  数据类型      |备注 |
| --------| --------| --------  | --------   |
|视图参数|params|||
|工作项类型|type|数据对象||
|项目类型|project_type|数据对象||
|上下文|context|导航视图参数绑定参数||
|传入变量(<i class="fa fa-check"/></i>)|Default|数据对象||
|新建默认数据对象|srfDefaultData|数据对象||
|子工作项类型|children_type|数据对象||
