## 子工作项取消关联 <!-- {docsify-ignore-all} -->

   

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
state "开始" as Begin <<start>> [[$./child_del_relation#begin {"开始"}]]
state "把子工作项的父标识和顶级标识置空" as PREPAREPARAM1  [[$./child_del_relation#prepareparam1 {"把子工作项的父标识和顶级标识置空"}]]
state "变更顶级工作项" as DELOGIC1  [[$./child_del_relation#delogic1 {"变更顶级工作项"}]]
state "结束" as END1 <<end>> [[$./child_del_relation#end1 {"结束"}]]


Begin --> PREPAREPARAM1
PREPAREPARAM1 --> DELOGIC1
DELOGIC1 --> END1


@enduml
```


### 处理步骤说明

#### 开始 :id=Begin<sup class="footnote-symbol"> <font color=gray size=1>[开始]</font></sup>



*- N/A*
#### 把子工作项的父标识和顶级标识置空 :id=PREPAREPARAM1<sup class="footnote-symbol"> <font color=gray size=1>[准备参数]</font></sup>



1. 将`空值（NULL）` 设置给  `Default(传入变量).PID(父标识)`
2. 将`空值（NULL）` 设置给  `Default(传入变量).TOP_ID(顶级工作项标识)`

#### 变更顶级工作项 :id=DELOGIC1<sup class="footnote-symbol"> <font color=gray size=1>[实体逻辑]</font></sup>



调用实体 [工作项(WORK_ITEM)](module/ProjMgmt/Work_item.md) 处理逻辑 [变更顶级工作项]((module/ProjMgmt/Work_item/logic/change_top.md)) ，行为参数为`Default(传入变量)`

#### 结束 :id=END1<sup class="footnote-symbol"> <font color=gray size=1>[结束]</font></sup>



*- N/A*



### 实体逻辑参数

|    中文名   |    代码名    |  数据类型    |  实体   |备注 |
| --------| --------| -------- | -------- | --------   |
|传入变量(<i class="fa fa-check"/></i>)|Default|数据对象|[工作项(WORK_ITEM)](module/ProjMgmt/Work_item.md)||
