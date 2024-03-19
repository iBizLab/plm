## 移入发布 <!-- {docsify-ignore-all} -->

   

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
state "开始" as Begin <<start>> [[$./shift_in_version#begin {"开始"}]]
state "绑定参数" as BINDPARAM1  [[$./shift_in_version#bindparam1 {"绑定参数"}]]
state "结束" as END1 <<end>> [[$./shift_in_version#end1 {"结束"}]]
state "循环子调用" as LOOPSUBCALL1  [[$./shift_in_version#loopsubcall1 {"循环子调用"}]] #green {
state "填充release_id" as PREPAREPARAM1  [[$./shift_in_version#prepareparam1 {"填充release_id"}]]
state "实体行为" as DEACTION1  [[$./shift_in_version#deaction1 {"实体行为"}]]
}


Begin --> BINDPARAM1
BINDPARAM1 --> LOOPSUBCALL1
LOOPSUBCALL1 --> PREPAREPARAM1
PREPAREPARAM1 --> DEACTION1
LOOPSUBCALL1 --> END1


@enduml
```


### 处理步骤说明

#### 开始 :id=Begin<sup class="footnote-symbol"> <font color=gray size=1>[开始]</font></sup>



*- N/A*
#### 绑定参数 :id=BINDPARAM1<sup class="footnote-symbol"> <font color=gray size=1>[绑定参数]</font></sup>



绑定参数`Default(传入变量)` 到 `srfactionparam(选择数据列表)`
#### 循环子调用 :id=LOOPSUBCALL1<sup class="footnote-symbol"> <font color=gray size=1>[循环子调用]</font></sup>



循环参数`srfactionparam(选择数据列表)`，子循环参数使用`temp_obj(循环临时变量)`
#### 填充release_id :id=PREPAREPARAM1<sup class="footnote-symbol"> <font color=gray size=1>[准备参数]</font></sup>



1. 将`temp_obj(循环临时变量).ID(标识)` 设置给  `Default(传入变量).RELEASE_ID(项目发布标识)`

#### 实体行为 :id=DEACTION1<sup class="footnote-symbol"> <font color=gray size=1>[实体行为]</font></sup>



调用实体 [工作项(WORK_ITEM)](module/ProjMgmt/Work_item.md) 行为 [Update](module/ProjMgmt/Work_item#行为) ，行为参数为`Default(传入变量)`

#### 结束 :id=END1<sup class="footnote-symbol"> <font color=gray size=1>[结束]</font></sup>



*- N/A*



### 实体逻辑参数

|    中文名   |    代码名    |  数据类型    |  实体   |备注 |
| --------| --------| -------- | -------- | --------   |
|传入变量(<i class="fa fa-check"/></i>)|Default|数据对象|[工作项(WORK_ITEM)](module/ProjMgmt/Work_item.md)||
|选择数据列表|srfactionparam|数据对象列表|[版本（temp）(VERSION)](module/ProjMgmt/Version.md)||
|循环临时变量|temp_obj|数据对象|[版本（temp）(VERSION)](module/ProjMgmt/Version.md)||
