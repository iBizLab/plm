## 批设置执行结果 <!-- {docsify-ignore-all} -->

   批量设置执行用例的执行结果

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
state "开始" as Begin <<start>> [[$./batch_save_run_history#begin {"开始"}]]
state "绑定参数" as BINDPARAM1  [[$./batch_save_run_history#bindparam1 {"绑定参数"}]]
state "准备参数" as PREPAREPARAM3  [[$./batch_save_run_history#prepareparam3 {"准备参数"}]]
state "循环子调用" as LOOPSUBCALL1  [[$./batch_save_run_history#loopsubcall1 {"循环子调用"}]] #green {
state "获取执行用例详情" as DEACTION1  [[$./batch_save_run_history#deaction1 {"获取执行用例详情"}]]
state "准备参数" as PREPAREPARAM1  [[$./batch_save_run_history#prepareparam1 {"准备参数"}]]
state "修改执行用例" as DEACTION2  [[$./batch_save_run_history#deaction2 {"修改执行用例"}]]
state "准备参数" as PREPAREPARAM2  [[$./batch_save_run_history#prepareparam2 {"准备参数"}]]
state "创建执行结果" as DEACTION3  [[$./batch_save_run_history#deaction3 {"创建执行结果"}]]
}


Begin --> BINDPARAM1
BINDPARAM1 --> PREPAREPARAM3
PREPAREPARAM3 --> LOOPSUBCALL1
LOOPSUBCALL1 --> DEACTION1
DEACTION1 --> PREPAREPARAM1
PREPAREPARAM1 --> DEACTION2
DEACTION2 --> PREPAREPARAM2
PREPAREPARAM2 --> DEACTION3


@enduml
```


### 处理步骤说明

#### 开始 :id=Begin<sup class="footnote-symbol"> <font color=gray size=1>[开始]</font></sup>



*- N/A*
#### 绑定参数 :id=BINDPARAM1<sup class="footnote-symbol"> <font color=gray size=1>[绑定参数]</font></sup>



绑定参数`Default(传入变量)` 到 `srfactionparam(选中数据对象)`
#### 准备参数 :id=PREPAREPARAM3<sup class="footnote-symbol"> <font color=gray size=1>[准备参数]</font></sup>



1. 将`Default(传入变量).ID(标识)` 设置给  `ID(执行用例ID).ID(标识)`

#### 循环子调用 :id=LOOPSUBCALL1<sup class="footnote-symbol"> <font color=gray size=1>[循环子调用]</font></sup>



循环参数`srfactionparam(选中数据对象)`，子循环参数使用`for_temp_obj(临时循环变量)`
#### 获取执行用例详情 :id=DEACTION1<sup class="footnote-symbol"> <font color=gray size=1>[实体行为]</font></sup>



调用实体 [执行用例(RUN)](module/TestMgmt/run.md) 行为 [Get](module/TestMgmt/run#行为) ，行为参数为`ID(执行用例ID)`

将执行结果返回给参数`Default(传入变量)`

#### 准备参数 :id=PREPAREPARAM1<sup class="footnote-symbol"> <font color=gray size=1>[准备参数]</font></sup>



1. 将`for_temp_obj(临时循环变量).STATUS(执行结果)` 设置给  `Default(传入变量).STATUS(执行结果)`

#### 修改执行用例 :id=DEACTION2<sup class="footnote-symbol"> <font color=gray size=1>[实体行为]</font></sup>



调用实体 [执行用例(RUN)](module/TestMgmt/run.md) 行为 [Update](module/TestMgmt/run#行为) ，行为参数为`Default(传入变量)`

#### 准备参数 :id=PREPAREPARAM2<sup class="footnote-symbol"> <font color=gray size=1>[准备参数]</font></sup>



1. 将`Default(传入变量)` 拷贝到  `run_history(执行结果)`
2. 将`空值（NULL）` 设置给  `run_history(执行结果).ID(标识)`
3. 将`Default(传入变量).ID(标识)` 设置给  `run_history(执行结果).RUN_ID(执行用例标识)`

#### 创建执行结果 :id=DEACTION3<sup class="footnote-symbol"> <font color=gray size=1>[实体行为]</font></sup>



调用实体 [执行结果(RUN_HISTORY)](module/TestMgmt/run_history.md) 行为 [Create](module/TestMgmt/run_history#行为) ，行为参数为`run_history(执行结果)`



### 实体逻辑参数

|    中文名   |    代码名    |  数据类型    |  实体   |备注 |
| --------| --------| -------- | -------- | --------   |
|传入变量(<i class="fa fa-check"/></i>)|Default|数据对象|[执行用例(RUN)](module/TestMgmt/run.md)||
|执行用例ID|ID|数据对象|[执行用例(RUN)](module/TestMgmt/run.md)||
|临时循环变量|for_temp_obj|数据对象|[执行用例(RUN)](module/TestMgmt/run.md)||
|执行结果|run_history|数据对象|[执行结果(RUN_HISTORY)](module/TestMgmt/run_history.md)||
|选中数据对象|srfactionparam|数据对象列表|[执行用例(RUN)](module/TestMgmt/run.md)||
