## 删除 <!-- {docsify-ignore-all} -->

   产品排期数据的逻辑删除，修改产品排期的是否删除属性

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
state "开始" as Begin <<start>> [[$./delete#begin {"开始"}]]
state "设置已删除状态" as PREPAREPARAM1  [[$./delete#prepareparam1 {"设置已删除状态"}]]
state "更新产品排期" as DEACTION1  [[$./delete#deaction1 {"更新产品排期"}]]
state "结束" as END1 <<end>> [[$./delete#end1 {"结束"}]]


Begin --> PREPAREPARAM1
PREPAREPARAM1 --> DEACTION1
DEACTION1 --> END1


@enduml
```


### 处理步骤说明

#### 开始 :id=Begin<sup class="footnote-symbol"> <font color=gray size=1>[开始]</font></sup>



*- N/A*
#### 设置已删除状态 :id=PREPAREPARAM1<sup class="footnote-symbol"> <font color=gray size=1>[准备参数]</font></sup>



1. 将`1` 设置给  `Default(传入变量).IS_DELETED(是否已删除)`

#### 更新产品排期 :id=DEACTION1<sup class="footnote-symbol"> <font color=gray size=1>[实体行为]</font></sup>



调用实体 [排期(PRODUCT_PLAN)](module/ProdMgmt/product_plan.md) 行为 [Update](module/ProdMgmt/product_plan#行为) ，行为参数为`Default(传入变量)`

#### 结束 :id=END1<sup class="footnote-symbol"> <font color=gray size=1>[结束]</font></sup>



*- N/A*



### 实体逻辑参数

|    中文名   |    代码名    |  数据类型    |  实体   |备注 |
| --------| --------| -------- | -------- | --------   |
|传入变量(<i class="fa fa-check"/></i>)|Default|数据对象|[排期(PRODUCT_PLAN)](module/ProdMgmt/product_plan.md)||
