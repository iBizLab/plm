## 变更角色 <!-- {docsify-ignore-all} -->

   批量设置角色身份（role_id）

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
state "开始" as Begin <<start>> [[$./change_role#begin {"开始"}]]
state "获取传递成员的参数" as BINDPARAM1  [[$./change_role#bindparam1 {"获取传递成员的参数"}]]
state "循环ID列表进行操作" as LOOPSUBCALL1  [[$./change_role#loopsubcall1 {"循环ID列表进行操作"}]] #green {
state "获取传递成员的状态" as PREPAREPARAM2  [[$./change_role#prepareparam2 {"获取传递成员的状态"}]]
state "变更成员状态" as DEACTION1  [[$./change_role#deaction1 {"变更成员状态"}]]
}


Begin --> BINDPARAM1
BINDPARAM1 --> LOOPSUBCALL1
LOOPSUBCALL1 --> PREPAREPARAM2
PREPAREPARAM2 --> DEACTION1


@enduml
```


### 处理步骤说明

#### 开始 :id=Begin<sup class="footnote-symbol"> <font color=gray size=1>[开始]</font></sup>



*- N/A*
#### 获取传递成员的参数 :id=BINDPARAM1<sup class="footnote-symbol"> <font color=gray size=1>[绑定参数]</font></sup>



绑定参数`Default(传入变量)` 到 `srfactionparam(选择数据对象)`
#### 循环ID列表进行操作 :id=LOOPSUBCALL1<sup class="footnote-symbol"> <font color=gray size=1>[循环子调用]</font></sup>



循环参数`srfactionparam(选择数据对象)`，子循环参数使用`for_temp_obj(循环临时变量)`
#### 获取传递成员的状态 :id=PREPAREPARAM2<sup class="footnote-symbol"> <font color=gray size=1>[准备参数]</font></sup>



1. 将`for_temp_obj(循环临时变量).ROLE_ID(角色)` 设置给  `Default(传入变量).ROLE_ID(角色)`

#### 变更成员状态 :id=DEACTION1<sup class="footnote-symbol"> <font color=gray size=1>[实体行为]</font></sup>



调用实体 [测试库成员(LIBRARY_MEMBER)](module/TestMgmt/library_member.md) 行为 [Update](module/TestMgmt/library_member#行为) ，行为参数为`Default(传入变量)`



### 实体逻辑参数

|    中文名   |    代码名    |  数据类型    |  实体   |备注 |
| --------| --------| -------- | -------- | --------   |
|传入变量(<i class="fa fa-check"/></i>)|Default|数据对象|[测试库成员(LIBRARY_MEMBER)](module/TestMgmt/library_member.md)||
|循环临时变量|for_temp_obj|数据对象|[测试库成员(LIBRARY_MEMBER)](module/TestMgmt/library_member.md)||
|选择数据对象|srfactionparam|数据对象列表|[测试库成员(LIBRARY_MEMBER)](module/TestMgmt/library_member.md)||
