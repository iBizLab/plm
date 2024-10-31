## 规划工作项 <!-- {docsify-ignore-all} -->

   规划选中工作项至指定发布

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
state "开始" as Begin <<start>> [[$./plan_work_item#begin {"开始"}]]
state "绑定选择工作项数据" as BINDPARAM1  [[$./plan_work_item#bindparam1 {"绑定选择工作项数据"}]]
state "循环子调用" as LOOPSUBCALL1  [[$./plan_work_item#loopsubcall1 {"循环子调用"}]] #green {
state "重新建立工作项更新参数" as RENEWPARAM1  [[$./plan_work_item#renewparam1 {"重新建立工作项更新参数"}]]
state "设置规划信息" as PREPAREPARAM1  [[$./plan_work_item#prepareparam1 {"设置规划信息"}]]
state "修改工作项" as DEACTION1  [[$./plan_work_item#deaction1 {"修改工作项"}]]
}


Begin --> BINDPARAM1
BINDPARAM1 --> LOOPSUBCALL1
LOOPSUBCALL1 --> RENEWPARAM1
RENEWPARAM1 --> PREPAREPARAM1
PREPAREPARAM1 --> DEACTION1


@enduml
```


### 处理步骤说明

#### 开始 :id=Begin<sup class="footnote-symbol"> <font color=gray size=1>[开始]</font></sup>



*- N/A*
#### 绑定选择工作项数据 :id=BINDPARAM1<sup class="footnote-symbol"> <font color=gray size=1>[绑定参数]</font></sup>



绑定参数`Default(传入变量)` 到 `srfactionparam(选中数据列表)`
#### 循环子调用 :id=LOOPSUBCALL1<sup class="footnote-symbol"> <font color=gray size=1>[循环子调用]</font></sup>



循环参数`srfactionparam(选中数据列表)`，子循环参数使用`for_temp_obj(循环临时变量)`
#### 重新建立工作项更新参数 :id=RENEWPARAM1<sup class="footnote-symbol"> <font color=gray size=1>[重新建立参数]</font></sup>



重建参数```update_obj(更新对象)```
#### 设置规划信息 :id=PREPAREPARAM1<sup class="footnote-symbol"> <font color=gray size=1>[准备参数]</font></sup>



1. 将`for_temp_obj(循环临时变量).ID(标识)` 设置给  `update_obj(更新对象).ID(标识)`
2. 将`Default(传入变量).RELEASE_ID(项目发布标识)` 设置给  `update_obj(更新对象).RELEASE_ID(项目发布标识)`

#### 修改工作项 :id=DEACTION1<sup class="footnote-symbol"> <font color=gray size=1>[实体行为]</font></sup>



调用实体 [工作项(WORK_ITEM)](module/ProjMgmt/work_item.md) 行为 [Update](module/ProjMgmt/work_item#行为) ，行为参数为`update_obj(更新对象)`



### 实体逻辑参数

|    中文名   |    代码名    |  数据类型    |  实体   |备注 |
| --------| --------| -------- | -------- | --------   |
|传入变量(<i class="fa fa-check"/></i>)|Default|数据对象|[工作项(WORK_ITEM)](module/ProjMgmt/work_item.md)||
|循环临时变量|for_temp_obj|数据对象|[工作项(WORK_ITEM)](module/ProjMgmt/work_item.md)||
|选中数据列表|srfactionparam|数据对象列表|[工作项(WORK_ITEM)](module/ProjMgmt/work_item.md)||
|更新对象|update_obj|数据对象|[工作项(WORK_ITEM)](module/ProjMgmt/work_item.md)||
