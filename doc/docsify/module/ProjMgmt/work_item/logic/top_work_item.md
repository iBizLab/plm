## 顶级工作项 <!-- {docsify-ignore-all} -->

   创建时继承父工作项的顶级工作项

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
state "开始" as Begin <<start>> [[$./top_work_item#begin {"开始"}]]
state "准备参数" as PREPAREPARAM1  [[$./top_work_item#prepareparam1 {"准备参数"}]]
state "获取父工作项的顶级工作项" as DEACTION1  [[$./top_work_item#deaction1 {"获取父工作项的顶级工作项"}]]
state "父工作项就是子工作项的顶级" as PREPAREPARAM3  [[$./top_work_item#prepareparam3 {"父工作项就是子工作项的顶级"}]]
state "继承父工作项的顶级标识" as PREPAREPARAM2  [[$./top_work_item#prepareparam2 {"继承父工作项的顶级标识"}]]
state "结束" as END1 <<end>> [[$./top_work_item#end1 {"结束"}]]


Begin --> PREPAREPARAM1 : [[$./top_work_item#begin-prepareparam1{如果已选择父工作项} 如果已选择父工作项]]
PREPAREPARAM1 --> DEACTION1
DEACTION1 --> PREPAREPARAM2 : [[$./top_work_item#deaction1-prepareparam2{若父工作项的top_id不为空则继承} 若父工作项的top_id不为空则继承]]
PREPAREPARAM2 --> END1
DEACTION1 --> PREPAREPARAM3 : [[$./top_work_item#deaction1-prepareparam3{若父工作项的top_id为空} 若父工作项的top_id为空]]
PREPAREPARAM3 --> END1


@enduml
```


### 处理步骤说明

#### 开始 :id=Begin<sup class="footnote-symbol"> <font color=gray size=1>[开始]</font></sup>



*- N/A*
#### 准备参数 :id=PREPAREPARAM1<sup class="footnote-symbol"> <font color=gray size=1>[准备参数]</font></sup>



1. 将`Default(传入变量).PID(父标识)` 设置给  `parent_item(父工作项).ID(标识)`

#### 获取父工作项的顶级工作项 :id=DEACTION1<sup class="footnote-symbol"> <font color=gray size=1>[实体行为]</font></sup>



调用实体 [工作项(WORK_ITEM)](module/ProjMgmt/work_item.md) 行为 [Get](module/ProjMgmt/work_item#行为) ，行为参数为`parent_item(父工作项)`

将执行结果返回给参数`parent_item(父工作项)`

#### 父工作项就是子工作项的顶级 :id=PREPAREPARAM3<sup class="footnote-symbol"> <font color=gray size=1>[准备参数]</font></sup>



1. 将`parent_item(父工作项).ID(标识)` 设置给  `Default(传入变量).TOP_ID(顶级工作项标识)`

#### 继承父工作项的顶级标识 :id=PREPAREPARAM2<sup class="footnote-symbol"> <font color=gray size=1>[准备参数]</font></sup>



1. 将`parent_item(父工作项).TOP_ID(顶级工作项标识)` 设置给  `Default(传入变量).TOP_ID(顶级工作项标识)`

#### 结束 :id=END1<sup class="footnote-symbol"> <font color=gray size=1>[结束]</font></sup>



返回 `Default(传入变量)`


### 连接条件说明
#### 如果已选择父工作项 :id=Begin-PREPAREPARAM1

`Default(传入变量).PID(父标识)` ISNOTNULL
#### 若父工作项的top_id不为空则继承 :id=DEACTION1-PREPAREPARAM2

`parent_item(父工作项).TOP_ID(顶级工作项标识)` ISNOTNULL
#### 若父工作项的top_id为空 :id=DEACTION1-PREPAREPARAM3

`parent_item(父工作项).TOP_ID(顶级工作项标识)` ISNULL


### 实体逻辑参数

|    中文名   |    代码名    |  数据类型    |  实体   |备注 |
| --------| --------| -------- | -------- | --------   |
|传入变量(<i class="fa fa-check"/></i>)|Default|数据对象|[工作项(WORK_ITEM)](module/ProjMgmt/work_item.md)||
|父工作项|parent_item|数据对象|[工作项(WORK_ITEM)](module/ProjMgmt/work_item.md)||
