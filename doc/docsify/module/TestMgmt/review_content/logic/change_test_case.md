## 变更测试用例 <!-- {docsify-ignore-all} -->

   完成评审后变更测试用例的评审状态

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
state "开始" as Begin <<start>> [[$./change_test_case#begin {"开始"}]]
state "设置评审状态为通过" as PREPAREPARAM2  [[$./change_test_case#prepareparam2 {"设置评审状态为通过"}]]
state "结束" as END1 <<end>> [[$./change_test_case#end1 {"结束"}]]
state "更新测试用例" as DEACTION1  [[$./change_test_case#deaction1 {"更新测试用例"}]]
state "获取测试用例ID" as PREPAREPARAM1  [[$./change_test_case#prepareparam1 {"获取测试用例ID"}]]
state "设置评审状态为拒绝" as PREPAREPARAM3  [[$./change_test_case#prepareparam3 {"设置评审状态为拒绝"}]]


Begin --> PREPAREPARAM1
PREPAREPARAM1 --> PREPAREPARAM2 : [[$./change_test_case#prepareparam1-prepareparam2{通过} 通过]]
PREPAREPARAM2 --> DEACTION1
DEACTION1 --> END1
PREPAREPARAM1 --> PREPAREPARAM3 : [[$./change_test_case#prepareparam1-prepareparam3{拒绝} 拒绝]]
PREPAREPARAM3 --> DEACTION1


@enduml
```


### 处理步骤说明

#### 设置评审状态为通过 :id=PREPAREPARAM2<sup class="footnote-symbol"> <font color=gray size=1>[准备参数]</font></sup>



1. 将`3` 设置给  `test_case(测试用例).REVIEW_RESULT_STATE(评审结果)`

#### 结束 :id=END1<sup class="footnote-symbol"> <font color=gray size=1>[结束]</font></sup>



*- N/A*

#### 更新测试用例 :id=DEACTION1<sup class="footnote-symbol"> <font color=gray size=1>[实体行为]</font></sup>



调用实体 [用例(TEST_CASE)](module/TestMgmt/test_case.md) 行为 [Update](module/TestMgmt/test_case#行为) ，行为参数为`test_case(测试用例)`

#### 开始 :id=Begin<sup class="footnote-symbol"> <font color=gray size=1>[开始]</font></sup>



*- N/A*
#### 获取测试用例ID :id=PREPAREPARAM1<sup class="footnote-symbol"> <font color=gray size=1>[准备参数]</font></sup>



1. 将`Default(传入变量).TARGET_ID(关联目标标识)` 设置给  `test_case(测试用例).ID(标识)`

#### 设置评审状态为拒绝 :id=PREPAREPARAM3<sup class="footnote-symbol"> <font color=gray size=1>[准备参数]</font></sup>



1. 将`4` 设置给  `test_case(测试用例).REVIEW_RESULT_STATE(评审结果)`


### 连接条件说明
#### 通过 :id=PREPAREPARAM1-PREPAREPARAM2

`Default(传入变量).FINAL_STAGE_RESULTS(最终评审结果)` EQ `1`
#### 拒绝 :id=PREPAREPARAM1-PREPAREPARAM3

`Default(传入变量).FINAL_STAGE_RESULTS(最终评审结果)` EQ `0`


### 实体逻辑参数

|    中文名   |    代码名    |  数据类型    |  实体   |备注 |
| --------| --------| -------- | -------- | --------   |
|传入变量(<i class="fa fa-check"/></i>)|Default|数据对象|[评审内容(REVIEW_CONTENT)](module/TestMgmt/review_content.md)||
|测试用例|test_case|数据对象|[用例(TEST_CASE)](module/TestMgmt/test_case.md)||
