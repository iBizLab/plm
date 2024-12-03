## 需求移动 <!-- {docsify-ignore-all} -->

   移动需求至其他位置（修改需求的所属产品，重新生成编号）

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
state "开始" as Begin <<start>> [[$./idea_move#begin {"开始"}]]
state "获取表单数据" as BINDPARAM1  [[$./idea_move#bindparam1 {"获取表单数据"}]]
state "获取ID" as BINDPARAM2  [[$./idea_move#bindparam2 {"获取ID"}]]
state "循环子调用" as LOOPSUBCALL1  [[$./idea_move#loopsubcall1 {"循环子调用"}]] #green {
state "获取需求信息" as DEACTION2  [[$./idea_move#deaction2 {"获取需求信息"}]]
state "填入移动产品ID，置空ID" as PREPAREPARAM1  [[$./idea_move#prepareparam1 {"填入移动产品ID，置空ID"}]]
state "填入模块" as PREPAREPARAM2  [[$./idea_move#prepareparam2 {"填入模块"}]]
state "修改需要移动的需求" as DEACTION1  [[$./idea_move#deaction1 {"修改需要移动的需求"}]]
}


Begin --> BINDPARAM1
BINDPARAM1 --> BINDPARAM2
BINDPARAM2 --> LOOPSUBCALL1
LOOPSUBCALL1 --> DEACTION2
DEACTION2 --> PREPAREPARAM1
PREPAREPARAM1 --> PREPAREPARAM2 : [[$./idea_move#prepareparam1-prepareparam2{存在模块} 存在模块]]
PREPAREPARAM2 --> DEACTION1
PREPAREPARAM1 --> DEACTION1 : [[$./idea_move#prepareparam1-deaction1{不存在模块} 不存在模块]]


@enduml
```


### 处理步骤说明

#### 开始 :id=Begin<sup class="footnote-symbol"> <font color=gray size=1>[开始]</font></sup>



*- N/A*
#### 获取表单数据 :id=BINDPARAM1<sup class="footnote-symbol"> <font color=gray size=1>[绑定参数]</font></sup>



绑定参数`Default(传入变量)` 到 `srfactionparam(选择的数据对象)`
#### 获取ID :id=BINDPARAM2<sup class="footnote-symbol"> <font color=gray size=1>[绑定参数]</font></sup>



绑定参数`Default(传入变量)` 到 `id(要更改状态的主键)`
#### 循环子调用 :id=LOOPSUBCALL1<sup class="footnote-symbol"> <font color=gray size=1>[循环子调用]</font></sup>



循环参数`srfactionparam(选择的数据对象)`，子循环参数使用`for_temp_obj(循环临时变量)`
#### 获取需求信息 :id=DEACTION2<sup class="footnote-symbol"> <font color=gray size=1>[实体行为]</font></sup>



调用实体 [需求(IDEA)](module/ProdMgmt/idea.md) 行为 [Get](module/ProdMgmt/idea#行为) ，行为参数为`id(要更改状态的主键)`

将执行结果返回给参数`temp_obj(临时变量)`

#### 填入移动产品ID，置空ID :id=PREPAREPARAM1<sup class="footnote-symbol"> <font color=gray size=1>[准备参数]</font></sup>



1. 将`for_temp_obj(循环临时变量).target_product_id` 设置给  `temp_obj(临时变量).PRODUCT_ID(产品)`
2. 将` ==> temp_obj[IDENTIFIER]` 设置给  `temp_obj(临时变量).IDENTIFIER(编号)`
3. 将`Default(传入变量).ID(标识)` 设置给  `temp_obj(临时变量).ID(标识)`

#### 填入模块 :id=PREPAREPARAM2<sup class="footnote-symbol"> <font color=gray size=1>[准备参数]</font></sup>



1. 将`for_temp_obj(循环临时变量).CATEGORY_ID(类别标识)` 设置给  `temp_obj(临时变量).CATEGORY_ID(类别标识)`

#### 修改需要移动的需求 :id=DEACTION1<sup class="footnote-symbol"> <font color=gray size=1>[实体行为]</font></sup>



调用实体 [需求(IDEA)](module/ProdMgmt/idea.md) 行为 [Update](module/ProdMgmt/idea#行为) ，行为参数为`temp_obj(临时变量)`


### 连接条件说明
#### 存在模块 :id=PREPAREPARAM1-PREPAREPARAM2

`for_temp_obj(循环临时变量).CATEGORY_ID(类别标识)` ISNOTNULL
#### 不存在模块 :id=PREPAREPARAM1-DEACTION1

`for_temp_obj(循环临时变量).CATEGORY_ID(类别标识)` ISNULL


### 实体逻辑参数

|    中文名   |    代码名    |  数据类型    |  实体   |备注 |
| --------| --------| -------- | -------- | --------   |
|传入变量(<i class="fa fa-check"/></i>)|Default|数据对象|[需求(IDEA)](module/ProdMgmt/idea.md)||
|循环临时变量|for_temp_obj|数据对象|[需求(IDEA)](module/ProdMgmt/idea.md)||
|要更改状态的主键|id|简单数据|||
|新建的需求|new_idea|数据对象|[需求(IDEA)](module/ProdMgmt/idea.md)||
|选择的数据对象|srfactionparam|数据对象列表|[需求(IDEA)](module/ProdMgmt/idea.md)||
|临时变量|temp_obj|数据对象|[需求(IDEA)](module/ProdMgmt/idea.md)||
