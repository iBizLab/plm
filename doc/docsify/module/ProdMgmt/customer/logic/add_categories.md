## 添加至类别 <!-- {docsify-ignore-all} -->

   添加客户类别操作

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
state "开始" as Begin <<start>> [[$./add_categories#begin {"开始"}]]
state "绑定参数" as BINDPARAM1  [[$./add_categories#bindparam1 {"绑定参数"}]]
state "循环子调用" as LOOPSUBCALL1  [[$./add_categories#loopsubcall1 {"循环子调用"}]] #green {
state "设置类别路径" as PREPAREPARAM2  [[$./add_categories#prepareparam2 {"设置类别路径"}]]
state "变更客户属性" as DEACTION1  [[$./add_categories#deaction1 {"变更客户属性"}]]
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
#### 绑定参数 :id=BINDPARAM1<sup class="footnote-symbol"> <font color=gray size=1>[绑定参数]</font></sup>



绑定参数`Default(传入变量)` 到 `srfactionparam(选择数据对象)`
#### 循环子调用 :id=LOOPSUBCALL1<sup class="footnote-symbol"> <font color=gray size=1>[循环子调用]</font></sup>



循环参数`srfactionparam(选择数据对象)`，子循环参数使用`for_temp_obj(循环临时变量)`
#### 设置类别路径 :id=PREPAREPARAM2<sup class="footnote-symbol"> <font color=gray size=1>[准备参数]</font></sup>



1. 将`for_temp_obj(循环临时变量).CATEGORIES(类别)` 设置给  `Default(传入变量).CATEGORIES(类别)`

#### 变更客户属性 :id=DEACTION1<sup class="footnote-symbol"> <font color=gray size=1>[实体行为]</font></sup>



调用实体 [客户(CUSTOMER)](module/ProdMgmt/customer.md) 行为 [Update](module/ProdMgmt/customer#行为) ，行为参数为`Default(传入变量)`



### 实体逻辑参数

|    中文名   |    代码名    |  数据类型    |  实体   |备注 |
| --------| --------| -------- | -------- | --------   |
|传入变量(<i class="fa fa-check"/></i>)|Default|数据对象|[客户(CUSTOMER)](module/ProdMgmt/customer.md)||
|循环临时变量|for_temp_obj|数据对象|[客户(CUSTOMER)](module/ProdMgmt/customer.md)||
|选择数据对象|srfactionparam|数据对象列表|[客户(CUSTOMER)](module/ProdMgmt/customer.md)||
