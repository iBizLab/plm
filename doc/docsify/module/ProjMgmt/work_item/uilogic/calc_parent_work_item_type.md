## 计算父工作项类型 <!-- {docsify-ignore-all} -->

   获取当前工作项类型，并计算父工作项类型

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
state "开始" as Begin <<start>> [[$./calc_parent_work_item_type#begin {开始}]]
state "合并父工作项类型" as PREPAREJSPARAM2  [[$./calc_parent_work_item_type#preparejsparam2 {合并父工作项类型}]]
state "计算敏捷项目父类型" as RAWJSCODE3  [[$./calc_parent_work_item_type#rawjscode3 {计算敏捷项目父类型}]]
state "结束" as END1 <<end>> [[$./calc_parent_work_item_type#end1 {结束}]]
state "计算瀑布项目父类型" as RAWJSCODE2  [[$./calc_parent_work_item_type#rawjscode2 {计算瀑布项目父类型}]]
state "获取工作项类型" as PREPAREJSPARAM1  [[$./calc_parent_work_item_type#preparejsparam1 {获取工作项类型}]]
state "计算看板项目父类型" as RAWJSCODE1  [[$./calc_parent_work_item_type#rawjscode1 {计算看板项目父类型}]]


Begin --> PREPAREJSPARAM1 : [[$./calc_parent_work_item_type#begin-preparejsparam1{工作项类型不为空} 工作项类型不为空]]
PREPAREJSPARAM1 --> RAWJSCODE1 : [[$./calc_parent_work_item_type#preparejsparam1-rawjscode1{看板项目} 看板项目]]
RAWJSCODE1 --> PREPAREJSPARAM2 : [[$./calc_parent_work_item_type#rawjscode1-preparejsparam2{父类型不为空} 父类型不为空]]
PREPAREJSPARAM2 --> END1
PREPAREJSPARAM1 --> RAWJSCODE2 : [[$./calc_parent_work_item_type#preparejsparam1-rawjscode2{瀑布项目} 瀑布项目]]
RAWJSCODE2 --> PREPAREJSPARAM2 : [[$./calc_parent_work_item_type#rawjscode2-preparejsparam2{父类型不为空} 父类型不为空]]
PREPAREJSPARAM1 --> RAWJSCODE3 : [[$./calc_parent_work_item_type#preparejsparam1-rawjscode3{敏捷项目} 敏捷项目]]
RAWJSCODE3 --> PREPAREJSPARAM2 : [[$./calc_parent_work_item_type#rawjscode3-preparejsparam2{父类型不为空} 父类型不为空]]


@enduml
```


### 处理步骤说明

#### 开始 :id=Begin<sup class="footnote-symbol"> <font color=gray size=1>[开始]</font></sup>




#### 获取工作项类型 :id=PREPAREJSPARAM1<sup class="footnote-symbol"> <font color=gray size=1>[准备参数]</font></sup>



1. 将`params(视图参数).work_item_type_id` 设置给  `type(工作项类型)`
2. 将`params(视图参数).work_item_type_id.split('_')[0]` 设置给  `project_type(项目类型)`

#### 计算看板项目父类型 :id=RAWJSCODE1<sup class="footnote-symbol"> <font color=gray size=1>[直接前台代码]</font></sup>



<p class="panel-title"><b>执行代码</b></p>

```javascript
const type = uiLogic.type.split('_')[1] || '';
// 事务类型与史诗类型无父工作项
if (!type || type === 'issue' || type === 'epic') {
    return;
}
const list = ['epic', 'feature', 'story', 'task', 'bug'];
const index = list.findIndex(x => x === type);
if (index === 1) {
    uiLogic.parent_type = `kanban_${list[0]}`;
} else if (index === 2) {
    uiLogic.parent_type = `kanban_${list[1]}`;
} else if (index === 3 || index === 4) {
    uiLogic.parent_type = `kanban_${list[2]}`;
}
```

#### 计算瀑布项目父类型 :id=RAWJSCODE2<sup class="footnote-symbol"> <font color=gray size=1>[直接前台代码]</font></sup>



<p class="panel-title"><b>执行代码</b></p>

```javascript
const type = uiLogic.type.split('_')[1] || '';
if (!type) {
    return;
}
if (type === 'stage' || type === 'milestone') {
    // 阶段与里程碑
    uiLogic.parent_type = `waterfall_milestone,waterfall_stage`;
} else if (type === 'requirement') {
    // 需求
    uiLogic.parent_type = `waterfall_requirement`;
} else if (type === 'task') {
    // 任务
    uiLogic.parent_type = `waterfall_requirement,waterfall_task`;
} else if (type === 'bug') {
    // 缺陷
    uiLogic.parent_type = `waterfall_requirement`;
}
```

#### 计算敏捷项目父类型 :id=RAWJSCODE3<sup class="footnote-symbol"> <font color=gray size=1>[直接前台代码]</font></sup>



<p class="panel-title"><b>执行代码</b></p>

```javascript
const type = uiLogic.type.split('_')[1] || '';
// 史诗类型无父工作项
if (!type || type === 'epic') {
    return;
}
if (type === 'feature') {
    // 特性
    uiLogic.parent_type = `scrum_epic`;
} else if (type === 'story') {
    // 用户故事
    uiLogic.parent_type = `scrum_feature`;
} else if (type === 'task' || type === 'bug') {
    // 任务与缺陷
    uiLogic.parent_type = `scrum_story`;
}
```

#### 合并父工作项类型 :id=PREPAREJSPARAM2<sup class="footnote-symbol"> <font color=gray size=1>[准备参数]</font></sup>



1. 将`parent_type(父工作项类型)` 设置给  `grid(表格).params.n_work_item_type_id_in`

#### 结束 :id=END1<sup class="footnote-symbol"> <font color=gray size=1>[结束]</font></sup>




### 连接条件说明
#### 工作项类型不为空 :id=Begin-PREPAREJSPARAM1

```params(视图参数).work_item_type_id``` ISNOTNULL
#### 看板项目 :id=PREPAREJSPARAM1-RAWJSCODE1

```project_type(项目类型)``` EQ ```kanban```
#### 父类型不为空 :id=RAWJSCODE1-PREPAREJSPARAM2

```parent_type(父工作项类型)``` ISNOTNULL
#### 瀑布项目 :id=PREPAREJSPARAM1-RAWJSCODE2

```project_type(项目类型)``` EQ ```waterfall```
#### 父类型不为空 :id=RAWJSCODE2-PREPAREJSPARAM2

```parent_type(父工作项类型)``` ISNOTNULL
#### 敏捷项目 :id=PREPAREJSPARAM1-RAWJSCODE3

```project_type(项目类型)``` EQ ```scrum```
#### 父类型不为空 :id=RAWJSCODE3-PREPAREJSPARAM2

```parent_type(父工作项类型)``` ISNOTNULL


### 实体逻辑参数

|    中文名   |    代码名    |  数据类型      |备注 |
| --------| --------| --------  | --------   |
|工作项类型|type|数据对象||
|父工作项类型|parent_type|数据对象||
|传入变量(<i class="fa fa-check"/></i>)|Default|数据对象||
|视图|view|当前视图对象||
|视图参数|params|||
|项目类型|project_type|数据对象||
|表格|grid|部件对象||
