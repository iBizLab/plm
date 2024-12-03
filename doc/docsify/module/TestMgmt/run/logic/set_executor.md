## 设置执行人 <!-- {docsify-ignore-all} -->

   设置当前执行用例执行人

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
state "开始" as Begin <<start>> [[$./set_executor#begin {"开始"}]]
state "获取选中数据" as BINDPARAM1  [[$./set_executor#bindparam1 {"获取选中数据"}]]
state "循环子调用" as LOOPSUBCALL1  [[$./set_executor#loopsubcall1 {"循环子调用"}]] #green {
state "填充执行人" as PREPAREPARAM2  [[$./set_executor#prepareparam2 {"填充执行人"}]]
state "变更执行人" as DEACTION1  [[$./set_executor#deaction1 {"变更执行人"}]]
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
#### 获取选中数据 :id=BINDPARAM1<sup class="footnote-symbol"> <font color=gray size=1>[绑定参数]</font></sup>



绑定参数`Default(传入变量)` 到 `srfactionparam(选择数据对象)`
#### 循环子调用 :id=LOOPSUBCALL1<sup class="footnote-symbol"> <font color=gray size=1>[循环子调用]</font></sup>



循环参数`srfactionparam(选择数据对象)`，子循环参数使用`for_temp_obj(循环临时变量)`
#### 填充执行人 :id=PREPAREPARAM2<sup class="footnote-symbol"> <font color=gray size=1>[准备参数]</font></sup>



1. 将`for_temp_obj(循环临时变量).EXECUTOR_ID(执行人标识)` 设置给  `Default(传入变量).EXECUTOR_ID(执行人标识)`
2. 将`for_temp_obj(循环临时变量).EXECUTOR_NAME(执行人)` 设置给  `Default(传入变量).EXECUTOR_NAME(执行人)`

#### 变更执行人 :id=DEACTION1<sup class="footnote-symbol"> <font color=gray size=1>[实体行为]</font></sup>



调用实体 [执行用例(RUN)](module/TestMgmt/run.md) 行为 [Update](module/TestMgmt/run#行为) ，行为参数为`Default(传入变量)`



### 实体逻辑参数

|    中文名   |    代码名    |  数据类型    |  实体   |备注 |
| --------| --------| -------- | -------- | --------   |
|传入变量(<i class="fa fa-check"/></i>)|Default|数据对象|[执行用例(RUN)](module/TestMgmt/run.md)||
|循环临时变量|for_temp_obj|数据对象|[执行用例(RUN)](module/TestMgmt/run.md)||
|选择数据对象|srfactionparam|数据对象列表|[执行用例(RUN)](module/TestMgmt/run.md)||
