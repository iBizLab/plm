## 移动项目 <!-- {docsify-ignore-all} -->

   项目更多设置移动项目


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
state "开始" as Begin <<start>> [[$./project_move#begin {"开始"}]]
state "绑定项目参数" as BINDPARAM1  [[$./project_move#bindparam1 {"绑定项目参数"}]]
state "结束" as END2 <<end>> [[$./project_move#end2 {"结束"}]]
state "循环子调用" as LOOPSUBCALL1  [[$./project_move#loopsubcall1 {"循环子调用"}]] #green {
state "准备更新项目参数" as PREPAREPARAM1  [[$./project_move#prepareparam1 {"准备更新项目参数"}]]
state "更新项目信息" as DEACTION2  [[$./project_move#deaction2 {"更新项目信息"}]]
}


Begin --> BINDPARAM1
BINDPARAM1 --> LOOPSUBCALL1
LOOPSUBCALL1 --> PREPAREPARAM1
PREPAREPARAM1 --> DEACTION2
LOOPSUBCALL1 --> END2


@enduml
```


### 处理步骤说明

#### 开始 :id=Begin<sup class="footnote-symbol"> <font color=gray size=1>[开始]</font></sup>



*- N/A*
#### 绑定项目参数 :id=BINDPARAM1<sup class="footnote-symbol"> <font color=gray size=1>[绑定参数]</font></sup>



绑定参数`Default(传入变量)` 到 `srfactionparam`
#### 循环子调用 :id=LOOPSUBCALL1<sup class="footnote-symbol"> <font color=gray size=1>[循环子调用]</font></sup>



循环参数`srfactionparam`，子循环参数使用`for_temp_obj(循环临时变量)`
#### 准备更新项目参数 :id=PREPAREPARAM1<sup class="footnote-symbol"> <font color=gray size=1>[准备参数]</font></sup>



1. 将`for_temp_obj(循环临时变量).SCOPE_ID(所属对象)` 设置给  `update_obj(更新项目变量).SCOPE_ID(所属对象)`
2. 将`for_temp_obj(循环临时变量).SCOPE_TYPE(所属)` 设置给  `update_obj(更新项目变量).SCOPE_TYPE(所属)`
3. 将`for_temp_obj(循环临时变量).VISIBILITY(可见范围)` 设置给  `update_obj(更新项目变量).VISIBILITY(可见范围)`
4. 将`for_temp_obj(循环临时变量).ID(标识)` 设置给  `update_obj(更新项目变量).ID(标识)`

#### 更新项目信息 :id=DEACTION2<sup class="footnote-symbol"> <font color=gray size=1>[实体行为]</font></sup>



调用实体 [项目(PROJECT)](module/ProjMgmt/project.md) 行为 [Update](module/ProjMgmt/project#行为) ，行为参数为`update_obj(更新项目变量)`

#### 结束 :id=END2<sup class="footnote-symbol"> <font color=gray size=1>[结束]</font></sup>



*- N/A*



### 实体逻辑参数

|    中文名   |    代码名    |  数据类型    |  实体   |备注 |
| --------| --------| -------- | -------- | --------   |
|传入变量(<i class="fa fa-check"/></i>)|Default|数据对象|[项目(PROJECT)](module/ProjMgmt/project.md)||
|循环临时变量|for_temp_obj|数据对象|[项目(PROJECT)](module/ProjMgmt/project.md)||
|srfactionparam|srfactionparam|数据对象列表|[项目(PROJECT)](module/ProjMgmt/project.md)||
|更新项目变量|update_obj|数据对象|[项目(PROJECT)](module/ProjMgmt/project.md)||
