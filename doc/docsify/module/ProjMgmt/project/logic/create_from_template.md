## 使用模板创建项目 <!-- {docsify-ignore-all} -->

   

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
state "开始" as Begin <<start>> [[$./create_from_template#begin {"开始"}]]
state "新建" as DEACTION_01  [[$./create_from_template#deaction_01 {"新建"}]]
state "复制" as DEACTION_02  [[$./create_from_template#deaction_02 {"复制"}]]
state "调试逻辑参数##" as DEBUGPARAM_01  [[$./create_from_template#debugparam_01 {"调试逻辑参数##"}]]
state "结束" as END_01 <<end>> [[$./create_from_template#end_01 {"结束"}]]
state "准备参数" as PREPAREPARAM_01  [[$./create_from_template#prepareparam_01 {"准备参数"}]]


Begin --> DEACTION_01 : [[$./create_from_template#begin-deaction_01{连接名称} 连接名称]]
DEACTION_01 --> END_01
Begin --> PREPAREPARAM_01 : [[$./create_from_template#begin-prepareparam_01{连接名称} 连接名称]]
PREPAREPARAM_01 --> DEACTION_02
DEACTION_02 --> DEBUGPARAM_01
DEBUGPARAM_01 --> END_01


@enduml
```


### 处理步骤说明

#### 开始 :id=Begin<sup class="footnote-symbol"> <font color=gray size=1>[开始]</font></sup>



*- N/A*
#### 准备参数 :id=PREPAREPARAM_01<sup class="footnote-symbol"> <font color=gray size=1>[准备参数]</font></sup>



1. 将`Default(传入变量).project_template_id(项目模板标识)` 设置给  `Default(传入变量).id(标识)`

#### 新建 :id=DEACTION_01<sup class="footnote-symbol"> <font color=gray size=1>[实体行为]</font></sup>



调用实体 [项目(PROJECT)](module/ProjMgmt/project.md) 行为 [Create](module/ProjMgmt/project#行为) ，行为参数为`Default(传入变量)`

将执行结果返回给参数`Default(传入变量)`

#### 复制 :id=DEACTION_02<sup class="footnote-symbol"> <font color=gray size=1>[实体行为]</font></sup>



调用实体 [项目(PROJECT)](module/ProjMgmt/project.md) 行为 [复制(Copy)](module/ProjMgmt/project#行为) ，行为参数为`Default(传入变量)`

将执行结果返回给参数`Default(传入变量)`

#### 调试逻辑参数## :id=DEBUGPARAM_01<sup class="footnote-symbol"> <font color=gray size=1>[调试逻辑参数]</font></sup>



> [!NOTE|label:调试信息|icon:fa fa-bug]
> 调试输出参数`Default(传入变量)`的详细信息


#### 结束 :id=END_01<sup class="footnote-symbol"> <font color=gray size=1>[结束]</font></sup>



返回 `Default(传入变量)`


### 连接条件说明
#### 连接名称 :id=Begin-DEACTION_01

`Default(传入变量).project_template_id(项目模板标识)` ISNULL
#### 连接名称 :id=Begin-PREPAREPARAM_01

`Default(传入变量).project_template_id(项目模板标识)` ISNOTNULL


### 实体逻辑参数

|    中文名   |    代码名    |  数据类型    |  实体   |备注 |
| --------| --------| -------- | -------- | --------   |
|传入变量(<i class="fa fa-check"/></i>)|Default|数据对象|[项目(PROJECT)](module/ProjMgmt/project.md)||
