## 记录执行结果 <!-- {docsify-ignore-all} -->

   记录当前执行用例的执行结果

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
state "开始" as Begin <<start>> [[$./create_result#begin {"开始"}]]
state "创建执行结果" as DEACTION6  [[$./create_result#deaction6 {"创建执行结果"}]]
state "结束" as END3 <<end>> [[$./create_result#end3 {"结束"}]]
state "执行结果数据准备" as PREPAREPARAM5  [[$./create_result#prepareparam5 {"执行结果数据准备"}]]
state "执行用例数据准备" as PREPAREPARAM6  [[$./create_result#prepareparam6 {"执行用例数据准备"}]]
state "更新执行用例" as DEACTION7  [[$./create_result#deaction7 {"更新执行用例"}]]


Begin --> PREPAREPARAM5
PREPAREPARAM5 --> DEACTION6 : [[$./create_result#prepareparam5-deaction6{如果执行结果不为空} 如果执行结果不为空]]
DEACTION6 --> PREPAREPARAM6
PREPAREPARAM6 --> DEACTION7
DEACTION7 --> END3
PREPAREPARAM5 --> PREPAREPARAM6 : [[$./create_result#prepareparam5-prepareparam6{执行结果为空，只更新执行用例} 执行结果为空，只更新执行用例]]


@enduml
```


### 处理步骤说明

#### 创建执行结果 :id=DEACTION6<sup class="footnote-symbol"> <font color=gray size=1>[实体行为]</font></sup>



调用实体 [执行结果(RUN_HISTORY)](module/TestMgmt/run_history.md) 行为 [Create](module/TestMgmt/run_history#行为) ，行为参数为`run_history(执行历史)`

将执行结果返回给参数`run_history(执行历史)`

#### 开始 :id=Begin<sup class="footnote-symbol"> <font color=gray size=1>[开始]</font></sup>



*- N/A*
#### 结束 :id=END3<sup class="footnote-symbol"> <font color=gray size=1>[结束]</font></sup>



*- N/A*

#### 执行结果数据准备 :id=PREPAREPARAM5<sup class="footnote-symbol"> <font color=gray size=1>[准备参数]</font></sup>



1. 将`Default(传入变量)` 拷贝到  `run_history(执行历史)`
2. 将`Default(传入变量).REMARK(备注)` 设置给  `run_history(执行历史).REMARK(备注)`
3. 将`用户全局对象.srfpersonid` 设置给  `run_history(执行历史).EXECUTOR_ID(执行人标识)`
4. 将`Default(传入变量).ID(标识)` 设置给  `temp_obj(临时变量).ID(标识)`
5. 将`空值（NULL）` 设置给  `run_history(执行历史).EXECUTED_AT(执行时间)`
6. 将`Default(传入变量).ID(标识)` 设置给  `run_history(执行历史).RUN_ID(执行用例标识)`
7. 将`空值（NULL）` 设置给  `run_history(执行历史).ID(标识)`
8. 将`Default(传入变量).STEPS(步骤)` 设置给  `run_history(执行历史).STEPS(步骤)`

#### 执行用例数据准备 :id=PREPAREPARAM6<sup class="footnote-symbol"> <font color=gray size=1>[准备参数]</font></sup>



1. 将`run_history(执行历史).EXECUTED_AT(执行时间)` 设置给  `temp_obj(临时变量).EXECUTED_AT(执行时间)`
2. 将`Default(传入变量).ATTACHMENTS` 设置给  `temp_obj(临时变量).ATTACHMENTS`
3. 将`run_history(执行历史).STEPS(步骤)` 设置给  `temp_obj(临时变量).STEPS(步骤)`
4. 将`run_history(执行历史).STATUS(执行结果)` 设置给  `temp_obj(临时变量).STATUS(执行结果)`
5. 将`run_history(执行历史).RUN_ID(执行用例标识)` 设置给  `temp_obj(临时变量).ID(标识)`
6. 将`run_history(执行历史).EXECUTOR_NAME(执行人)` 设置给  `temp_obj(临时变量).EXECUTOR_NAME(执行人)`

#### 更新执行用例 :id=DEACTION7<sup class="footnote-symbol"> <font color=gray size=1>[实体行为]</font></sup>



调用实体 [执行用例(RUN)](module/TestMgmt/run.md) 行为 [Update](module/TestMgmt/run#行为) ，行为参数为`temp_obj(临时变量)`


### 连接条件说明
#### 如果执行结果不为空 :id=PREPAREPARAM5-DEACTION6

`Default(传入变量).STATUS(执行结果)` ISNOTNULL
#### 执行结果为空，只更新执行用例 :id=PREPAREPARAM5-PREPAREPARAM6

`Default(传入变量).STATUS(执行结果)` ISNULL


### 实体逻辑参数

|    中文名   |    代码名    |  数据类型    |  实体   |备注 |
| --------| --------| -------- | -------- | --------   |
|传入变量(<i class="fa fa-check"/></i>)|Default|数据对象|[执行用例(RUN)](module/TestMgmt/run.md)||
|要更改的ID|id|简单数据|||
|选中的数据ID|ids|简单数据列表|||
|执行历史|run_history|数据对象|[执行结果(RUN_HISTORY)](module/TestMgmt/run_history.md)||
|steps|steps|数据对象|[执行结果(RUN_HISTORY)](module/TestMgmt/run_history.md)||
|临时变量|temp_obj|数据对象|[执行用例(RUN)](module/TestMgmt/run.md)||
