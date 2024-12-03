## 生成评审结果 <!-- {docsify-ignore-all} -->

   创建后自动生成评审结果

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
state "开始" as Begin <<start>> [[$./generate_review_results#begin {"开始"}]]
state "结束" as END1 <<end>> [[$./generate_review_results#end1 {"结束"}]]
state "调试逻辑参数" as DEBUGPARAM2  [[$./generate_review_results#debugparam2 {"调试逻辑参数"}]]
state "获取所属测试库设置流程准则的过滤参数" as PREPAREPARAM1  [[$./generate_review_results#prepareparam1 {"获取所属测试库设置流程准则的过滤参数"}]]
state "查询流程准则" as DEDATASET1  [[$./generate_review_results#dedataset1 {"查询流程准则"}]]
state "获取流程准则信息，设置评审阶段过滤参数" as PREPAREPARAM2  [[$./generate_review_results#prepareparam2 {"获取流程准则信息，设置评审阶段过滤参数"}]]
state "绑定评审阶段数据" as PREPAREPARAM4  [[$./generate_review_results#prepareparam4 {"绑定评审阶段数据"}]]
state "循环评审阶段" as LOOPSUBCALL1  [[$./generate_review_results#loopsubcall1 {"循环评审阶段"}]] #green {
state "设置新建的评审结果数据" as PREPAREPARAM3  [[$./generate_review_results#prepareparam3 {"设置新建的评审结果数据"}]]
state "创建前的评审结果" as DEBUGPARAM3  [[$./generate_review_results#debugparam3 {"创建前的评审结果"}]]
state "创建评审结果" as DEACTION1  [[$./generate_review_results#deaction1 {"创建评审结果"}]]
state "重置评审结果" as RENEWPARAM1  [[$./generate_review_results#renewparam1 {"重置评审结果"}]]
}


Begin --> DEBUGPARAM2
DEBUGPARAM2 --> PREPAREPARAM1
PREPAREPARAM1 --> DEDATASET1
DEDATASET1 --> PREPAREPARAM2
PREPAREPARAM2 --> PREPAREPARAM4
PREPAREPARAM4 --> LOOPSUBCALL1
LOOPSUBCALL1 --> PREPAREPARAM3
PREPAREPARAM3 --> DEBUGPARAM3
DEBUGPARAM3 --> DEACTION1
DEACTION1 --> RENEWPARAM1
LOOPSUBCALL1 --> END1


@enduml
```


### 处理步骤说明

#### 开始 :id=Begin<sup class="footnote-symbol"> <font color=gray size=1>[开始]</font></sup>



*- N/A*
#### 结束 :id=END1<sup class="footnote-symbol"> <font color=gray size=1>[结束]</font></sup>



*- N/A*

#### 调试逻辑参数 :id=DEBUGPARAM2<sup class="footnote-symbol"> <font color=gray size=1>[调试逻辑参数]</font></sup>



> [!NOTE|label:调试信息|icon:fa fa-bug]
> 调试输出参数`Default(传入变量)`的详细信息


#### 获取所属测试库设置流程准则的过滤参数 :id=PREPAREPARAM1<sup class="footnote-symbol"> <font color=gray size=1>[准备参数]</font></sup>



1. 将`Default(传入变量).TEST_CASE(测试用例)` 绑定给  `test_case(测试用例)`
2. 将`test_case(测试用例).TEST_LIBRARY_ID(测试库)` 设置给  `guideline_filter(流程准则过滤器).N_SCOPE_ID_EQ`
3. 将`LIBRARY` 设置给  `guideline_filter(流程准则过滤器).N_OBJECT_TYPE_EQ`
4. 将`Default(传入变量).TARGET_TYPE(关联目标类型)` 设置给  `guideline_filter(流程准则过滤器).N_SUBJECT_TYPE_EQ`

#### 查询流程准则 :id=DEDATASET1<sup class="footnote-symbol"> <font color=gray size=1>[实体数据集]</font></sup>



调用实体 [流程准则(GUIDELINE)](module/TestMgmt/guideline.md) 数据集合 [数据集(DEFAULT)](module/TestMgmt/guideline#数据集合) ，查询参数为`guideline_filter(流程准则过滤器)`

将执行结果返回给参数`guideline_pages(流程准则分页查询结果)`

#### 获取流程准则信息，设置评审阶段过滤参数 :id=PREPAREPARAM2<sup class="footnote-symbol"> <font color=gray size=1>[准备参数]</font></sup>



1. 将`guideline_pages(流程准则分页查询结果).0` 绑定给  `guideline(流程准则)`
2. 将`guideline(流程准则).ID(标识)` 设置给  `review_stage_filter(过滤器).N_GUIDELINE_ID_EQ`

#### 绑定评审阶段数据 :id=PREPAREPARAM4<sup class="footnote-symbol"> <font color=gray size=1>[准备参数]</font></sup>



1. 将`guideline(流程准则).review_stage(评审阶段)` 绑定给  `review_stage_list(评审阶段对象列表)`

#### 循环评审阶段 :id=LOOPSUBCALL1<sup class="footnote-symbol"> <font color=gray size=1>[循环子调用]</font></sup>



循环参数`review_stage_list(评审阶段对象列表)`，子循环参数使用`review_stage(评审阶段)`
#### 设置新建的评审结果数据 :id=PREPAREPARAM3<sup class="footnote-symbol"> <font color=gray size=1>[准备参数]</font></sup>



1. 将`Default(传入变量).ID(标识)` 设置给  `review_result(评审结果).CONTENT_ID(评审内容标识)`
2. 将`review_stage(评审阶段).ORDER(顺序)` 设置给  `review_result(评审结果).SEQUENCES(顺序)`
3. 将`review_stage(评审阶段).NAME(名称)` 设置给  `review_result(评审结果).NAME(名称)`
4. 将`review_stage(评审阶段).ID(标识)` 设置给  `review_result(评审结果).STAGE_ID(阶段标识)`
5. 将`guideline(流程准则).ID(标识)` 设置给  `review_result(评审结果).GUIDELINE_ID`

#### 创建前的评审结果 :id=DEBUGPARAM3<sup class="footnote-symbol"> <font color=gray size=1>[调试逻辑参数]</font></sup>



> [!NOTE|label:调试信息|icon:fa fa-bug]
> 调试输出参数`review_result(评审结果)`的详细信息


#### 创建评审结果 :id=DEACTION1<sup class="footnote-symbol"> <font color=gray size=1>[实体行为]</font></sup>



调用实体 [评审结果(REVIEW_RESULT)](module/TestMgmt/review_result.md) 行为 [Create](module/TestMgmt/review_result#行为) ，行为参数为`review_result(评审结果)`

#### 重置评审结果 :id=RENEWPARAM1<sup class="footnote-symbol"> <font color=gray size=1>[重新建立参数]</font></sup>



重建参数```review_result(评审结果)```


### 实体逻辑参数

|    中文名   |    代码名    |  数据类型    |  实体   |备注 |
| --------| --------| -------- | -------- | --------   |
|传入变量(<i class="fa fa-check"/></i>)|Default|数据对象|[评审内容(REVIEW_CONTENT)](module/TestMgmt/review_content.md)||
|流程准则|guideline|数据对象|[流程准则(GUIDELINE)](module/TestMgmt/guideline.md)||
|流程准则过滤器|guideline_filter|过滤器|||
|流程准则分页查询结果|guideline_pages|分页查询|||
|评审结果|review_result|数据对象|[评审结果(REVIEW_RESULT)](module/TestMgmt/review_result.md)||
|评审阶段|review_stage|数据对象|[评审阶段(REVIEW_STAGE)](module/TestMgmt/review_stage.md)||
|过滤器|review_stage_filter|过滤器|||
|评审阶段对象列表|review_stage_list|数据对象列表|[评审阶段(REVIEW_STAGE)](module/TestMgmt/review_stage.md)||
|测试用例|test_case|数据对象|[用例(TEST_CASE)](module/TestMgmt/test_case.md)||
