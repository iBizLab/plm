## 结束测试 <!-- {docsify-ignore-all} -->

   

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
state "开始" as Begin <<start>> [[$./end_test_plan#begin {"开始"}]]
state "设置状态值（completed）" as PREPAREPARAM1  [[$./end_test_plan#prepareparam1 {"设置状态值（completed）"}]]
state "更新测试状态" as DEACTION1  [[$./end_test_plan#deaction1 {"更新测试状态"}]]
state "结束" as END1 <<end>> [[$./end_test_plan#end1 {"结束"}]]


Begin --> PREPAREPARAM1
PREPAREPARAM1 --> DEACTION1
DEACTION1 --> END1


@enduml
```


### 处理步骤说明

#### 开始 :id=Begin<sup class="footnote-symbol"> <font color=gray size=1>[开始]</font></sup>



*- N/A*
#### 设置状态值（completed） :id=PREPAREPARAM1<sup class="footnote-symbol"> <font color=gray size=1>[准备参数]</font></sup>



1. 将`completed` 设置给  `Default(传入变量).STATUS(状态)`

#### 更新测试状态 :id=DEACTION1<sup class="footnote-symbol"> <font color=gray size=1>[实体行为]</font></sup>



调用实体 [测试计划(TEST_PLAN)](module/TestMgmt/Test_plan.md) 行为 [Update](module/TestMgmt/Test_plan#行为) ，行为参数为`Default(传入变量)`

将执行结果返回给参数`Default(传入变量)`

#### 结束 :id=END1<sup class="footnote-symbol"> <font color=gray size=1>[结束]</font></sup>



*- N/A*



### 实体逻辑参数

|    中文名   |    代码名    |  数据类型    |  实体   |备注 |
| --------| --------| -------- | -------- | --------   |
|传入变量(<i class="fa fa-check"/></i>)|Default|数据对象|[测试计划(TEST_PLAN)](module/TestMgmt/Test_plan.md)||
