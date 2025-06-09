## 设置缺陷类型 <!-- {docsify-ignore-all} -->

   设置当前工作项为缺陷类型

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
state "开始" as Begin <<start>> [[$./set_type_bug#begin {"开始"}]]
state "准备项目ID" as PREPAREPARAM1  [[$./set_type_bug#prepareparam1 {"准备项目ID"}]]
state "获取项目信息" as DEACTION1  [[$./set_type_bug#deaction1 {"获取项目信息"}]]
state "调试逻辑参数" as DEBUGPARAM1  [[$./set_type_bug#debugparam1 {"调试逻辑参数"}]]
state "设置项目类别" as PREPAREPARAM2  [[$./set_type_bug#prepareparam2 {"设置项目类别"}]]
state "执行脚本代码" as RAWSFCODE2  [[$./set_type_bug#rawsfcode2 {"执行脚本代码"}]]
state "设置缺陷类型" as RAWSFCODE1  [[$./set_type_bug#rawsfcode1 {"设置缺陷类型"}]]
state "结束" as END1 <<end>> [[$./set_type_bug#end1 {"结束"}]]


Begin --> PREPAREPARAM1 : [[$./set_type_bug#begin-prepareparam1{项目ID不为空} 项目ID不为空]]
PREPAREPARAM1 --> DEACTION1
DEACTION1 --> DEBUGPARAM1
DEBUGPARAM1 --> PREPAREPARAM2
PREPAREPARAM2 --> RAWSFCODE1 : [[$./set_type_bug#prepareparam2-rawsfcode1{缺陷类型不为空} 缺陷类型不为空]]
RAWSFCODE1 --> END1
PREPAREPARAM2 --> RAWSFCODE2 : [[$./set_type_bug#prepareparam2-rawsfcode2{缺陷类型为空} 缺陷类型为空]]
RAWSFCODE2 --> END1


@enduml
```


### 处理步骤说明

#### 开始 :id=Begin<sup class="footnote-symbol"> <font color=gray size=1>[开始]</font></sup>



*- N/A*
#### 准备项目ID :id=PREPAREPARAM1<sup class="footnote-symbol"> <font color=gray size=1>[准备参数]</font></sup>



1. 将`Default(传入变量).PROJECT_ID(项目)` 设置给  `project.ID(标识)`

#### 获取项目信息 :id=DEACTION1<sup class="footnote-symbol"> <font color=gray size=1>[实体行为]</font></sup>



调用实体 [项目(PROJECT)](module/ProjMgmt/project.md) 行为 [Get](module/ProjMgmt/project#行为) ，行为参数为`project`

将执行结果返回给参数`project`

#### 调试逻辑参数 :id=DEBUGPARAM1<sup class="footnote-symbol"> <font color=gray size=1>[调试逻辑参数]</font></sup>



> [!NOTE|label:调试信息|icon:fa fa-bug]
> 调试输出参数`project`的详细信息


#### 设置项目类别 :id=PREPAREPARAM2<sup class="footnote-symbol"> <font color=gray size=1>[准备参数]</font></sup>



1. 将`project.TYPE(类型)` 设置给  `Default(传入变量).PROJECT_TYPE(项目类型)`
2. 将`project.NAME(项目名称)` 设置给  `Default(传入变量).PROJECT_NAME(所属项目)`

#### 执行脚本代码 :id=RAWSFCODE2<sup class="footnote-symbol"> <font color=gray size=1>[直接后台代码]</font></sup>



<p class="panel-title"><b>执行代码[JavaScript]</b></p>

```javascript
var Default = logic.getParam("Default");
var project = logic.getParam("project");

if(project.get("type")=="scrum"){
    Default.set("work_item_type_id", "scrum_epic");
    Default.set("work_item_type_name", "史诗");
}
if(project.get("type")=="kanban"){
    Default.set("work_item_type_id", "kanban_epic");
    Default.set("work_item_type_name", "史诗");
}
if(project.get("type")=="waterfall"){
    Default.set("work_item_type_id", "waterfall_stage");
    Default.set("work_item_type_name", "阶段");
}
if(project.get("type")=="hybrid"){
    Default.set("work_item_type_id", "hybrid_stage");
    Default.set("work_item_type_name", "阶段");
}


```

#### 设置缺陷类型 :id=RAWSFCODE1<sup class="footnote-symbol"> <font color=gray size=1>[直接后台代码]</font></sup>



<p class="panel-title"><b>执行代码[JavaScript]</b></p>

```javascript
var Default = logic.getParam("Default");
var project = logic.getParam("project");
Default.set("work_item_type_id", project.get("type") + "_bug");
Default.set("work_item_type_name", "缺陷");

```

#### 结束 :id=END1<sup class="footnote-symbol"> <font color=gray size=1>[结束]</font></sup>



返回 `Default(传入变量)`


### 连接条件说明
#### 项目ID不为空 :id=Begin-PREPAREPARAM1

`Default(传入变量).PROJECT_ID(项目)` ISNOTNULL
#### 缺陷类型不为空 :id=PREPAREPARAM2-RAWSFCODE1

`Default(传入变量).work_item_type_group_bug` EQ `bug`
#### 缺陷类型为空 :id=PREPAREPARAM2-RAWSFCODE2

`Default(传入变量).work_item_type_group_bug` NOTEQ `bug`


### 实体逻辑参数

|    中文名   |    代码名    |  数据类型    |  实体   |备注 |
| --------| --------| -------- | -------- | --------   |
|传入变量(<i class="fa fa-check"/></i>)|Default|数据对象|[工作项(WORK_ITEM)](module/ProjMgmt/work_item.md)||
|project|project|数据对象|[项目(PROJECT)](module/ProjMgmt/project.md)||
