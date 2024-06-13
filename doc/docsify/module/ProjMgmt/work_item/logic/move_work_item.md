## 移动工作项 <!-- {docsify-ignore-all} -->

   工作项移动至其他的同类型项目

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
state "开始" as Begin <<start>> [[$./move_work_item#begin {"开始"}]]
state "绑定参数" as BINDPARAM1  [[$./move_work_item#bindparam1 {"绑定参数"}]]
state "结束" as END1 <<end>> [[$./move_work_item#end1 {"结束"}]]
state "循环子调用" as LOOPSUBCALL1  [[$./move_work_item#loopsubcall1 {"循环子调用"}]] #green {
state "准备参数" as PREPAREPARAM3  [[$./move_work_item#prepareparam3 {"准备参数"}]]
state "填充父工作项的标识" as PREPAREPARAM5  [[$./move_work_item#prepareparam5 {"填充父工作项的标识"}]]
state "获取选中父工作项" as DEACTION2  [[$./move_work_item#deaction2 {"获取选中父工作项"}]]
state "填充父工作项标识" as PREPAREPARAM2  [[$./move_work_item#prepareparam2 {"填充父工作项标识"}]]
state "执行更新" as DEACTION1  [[$./move_work_item#deaction1 {"执行更新"}]]
state "移动时子工作项的处理" as DELOGIC1  [[$./move_work_item#delogic1 {"移动时子工作项的处理"}]]
}


Begin --> BINDPARAM1
BINDPARAM1 --> LOOPSUBCALL1
LOOPSUBCALL1 --> PREPAREPARAM3
PREPAREPARAM3 --> DEACTION1 : [[$./move_work_item#prepareparam3-deaction1{移动时未选择父工作项} 移动时未选择父工作项]]
DEACTION1 --> DELOGIC1
PREPAREPARAM3 --> PREPAREPARAM5 : [[$./move_work_item#prepareparam3-prepareparam5{移动时选择父工作项} 移动时选择父工作项]]
PREPAREPARAM5 --> DEACTION2
DEACTION2 --> PREPAREPARAM2
PREPAREPARAM2 --> DEACTION1
LOOPSUBCALL1 --> END1


@enduml
```


### 处理步骤说明

#### 开始 :id=Begin<sup class="footnote-symbol"> <font color=gray size=1>[开始]</font></sup>



*- N/A*
#### 填充父工作项的标识 :id=PREPAREPARAM5<sup class="footnote-symbol"> <font color=gray size=1>[准备参数]</font></sup>



1. 将`for_temp_obj(循环临时变量).PID(父标识)` 设置给  `parent_work_item(父工作项).ID(标识)`

#### 获取选中父工作项 :id=DEACTION2<sup class="footnote-symbol"> <font color=gray size=1>[实体行为]</font></sup>



调用实体 [工作项(WORK_ITEM)](module/ProjMgmt/work_item.md) 行为 [Get](module/ProjMgmt/work_item#行为) ，行为参数为`parent_work_item(父工作项)`

将执行结果返回给参数`parent_work_item(父工作项)`

#### 绑定参数 :id=BINDPARAM1<sup class="footnote-symbol"> <font color=gray size=1>[绑定参数]</font></sup>



绑定参数`Default(传入变量)` 到 `srfactionparam(选中项目)`
#### 填充父工作项标识 :id=PREPAREPARAM2<sup class="footnote-symbol"> <font color=gray size=1>[准备参数]</font></sup>



1. 将`parent_work_item(父工作项).ID(标识)` 设置给  `Default(传入变量).PID(父标识)`

#### 循环子调用 :id=LOOPSUBCALL1<sup class="footnote-symbol"> <font color=gray size=1>[循环子调用]</font></sup>



循环参数`srfactionparam(选中项目)`，子循环参数使用`for_temp_obj(循环临时变量)`
#### 准备参数 :id=PREPAREPARAM3<sup class="footnote-symbol"> <font color=gray size=1>[准备参数]</font></sup>



1. 将`for_temp_obj(循环临时变量).target_project_id` 设置给  `Default(传入变量).PROJECT_ID(项目)`
2. 将` ==> Default[IDENTIFIER]` 设置给  `Default(传入变量).IDENTIFIER(编号)`
3. 将`空值（NULL）` 设置给  `Default(传入变量).BOARD_ID(看板标识)`
4. 将`空值（NULL）` 设置给  `Default(传入变量).ENTRY_ID(看板栏标识)`
5. 将`空值（NULL）` 设置给  `Default(传入变量).SWIMLANE_ID(泳道标识)`
6. 将`空值（NULL）` 设置给  `Default(传入变量).TOP_ID(顶级工作项标识)`
7. 将`空值（NULL）` 设置给  `Default(传入变量).PID(父标识)`

#### 执行更新 :id=DEACTION1<sup class="footnote-symbol"> <font color=gray size=1>[实体行为]</font></sup>



调用实体 [工作项(WORK_ITEM)](module/ProjMgmt/work_item.md) 行为 [Update](module/ProjMgmt/work_item#行为) ，行为参数为`Default(传入变量)`

将执行结果返回给参数`Default(传入变量)`

#### 移动时子工作项的处理 :id=DELOGIC1<sup class="footnote-symbol"> <font color=gray size=1>[实体逻辑]</font></sup>



调用实体 [工作项(WORK_ITEM)](module/ProjMgmt/work_item.md) 处理逻辑 [移动时子工作项的处理]((module/ProjMgmt/work_item/logic/move_child_work_item.md)) ，行为参数为`Default(传入变量)`

#### 结束 :id=END1<sup class="footnote-symbol"> <font color=gray size=1>[结束]</font></sup>



返回 `Default(传入变量)`


### 连接条件说明
#### 移动时未选择父工作项 :id=PREPAREPARAM3-DEACTION1

`for_temp_obj(循环临时变量).PID(父标识)` ISNULL
#### 移动时选择父工作项 :id=PREPAREPARAM3-PREPAREPARAM5

`for_temp_obj(循环临时变量).PID(父标识)` ISNOTNULL


### 实体逻辑参数

|    中文名   |    代码名    |  数据类型    |  实体   |备注 |
| --------| --------| -------- | -------- | --------   |
|传入变量(<i class="fa fa-check"/></i>)|Default|数据对象|[工作项(WORK_ITEM)](module/ProjMgmt/work_item.md)||
|循环临时变量|for_temp_obj|数据对象|[工作项(WORK_ITEM)](module/ProjMgmt/work_item.md)||
|父工作项|parent_work_item|数据对象|[工作项(WORK_ITEM)](module/ProjMgmt/work_item.md)||
|选中项目|srfactionparam|数据对象列表|[工作项(WORK_ITEM)](module/ProjMgmt/work_item.md)||
