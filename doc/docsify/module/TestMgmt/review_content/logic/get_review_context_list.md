## 获取评审结果列表 <!-- {docsify-ignore-all} -->

   根据评审id和阶段id，获取评审数据列表
需要给default传入评审id（review_id）和阶段id（stage_id）

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
state "开始" as Begin <<start>> [[$./get_review_context_list#begin {"开始"}]]
state "结束" as END1 <<end>> [[$./get_review_context_list#end1 {"结束"}]]
state "设置评审id" as PREPAREPARAM1  [[$./get_review_context_list#prepareparam1 {"设置评审id"}]]
state "获取评审内容" as DEDATASET1  [[$./get_review_context_list#dedataset1 {"获取评审内容"}]]
state "调试逻辑参数" as DEBUGPARAM2  [[$./get_review_context_list#debugparam2 {"调试逻辑参数"}]]
state "循环评审内容" as LOOPSUBCALL1  [[$./get_review_context_list#loopsubcall1 {"循环评审内容"}]] #green {
state "获取评审结果" as PREPAREPARAM2  [[$./get_review_context_list#prepareparam2 {"获取评审结果"}]]
state "调试逻辑参数" as DEBUGPARAM1  [[$./get_review_context_list#debugparam1 {"调试逻辑参数"}]]
}
state "循环评审结果" as LOOPSUBCALL2  [[$./get_review_context_list#loopsubcall2 {"循环评审结果"}]] #green {
state "填充返回结果" as APPENDPARAM1  [[$./get_review_context_list#appendparam1 {"填充返回结果"}]]
}


Begin --> PREPAREPARAM1
PREPAREPARAM1 --> DEDATASET1
DEDATASET1 --> LOOPSUBCALL1
LOOPSUBCALL1 --> PREPAREPARAM2
PREPAREPARAM2 --> DEBUGPARAM1
DEBUGPARAM1 --> LOOPSUBCALL2
LOOPSUBCALL2 --> APPENDPARAM1 : [[$./get_review_context_list#loopsubcall2-appendparam1{连接名称} 连接名称]]
LOOPSUBCALL1 --> DEBUGPARAM2
DEBUGPARAM2 --> END1


@enduml
```


### 处理步骤说明

#### 开始 :id=Begin<sup class="footnote-symbol"> <font color=gray size=1>[开始]</font></sup>



*- N/A*
#### 结束 :id=END1<sup class="footnote-symbol"> <font color=gray size=1>[结束]</font></sup>



返回 `return_context(返回的评审内容)`

#### 设置评审id :id=PREPAREPARAM1<sup class="footnote-symbol"> <font color=gray size=1>[准备参数]</font></sup>



1. 将`Default(传入变量).review_id` 设置给  `filter(过滤器).N_PRINCIPAL_ID_EQ`

#### 获取评审内容 :id=DEDATASET1<sup class="footnote-symbol"> <font color=gray size=1>[实体数据集]</font></sup>



调用实体 [评审内容(REVIEW_CONTENT)](module/TestMgmt/review_content.md) 数据集合 [全部数据(all)](module/TestMgmt/review_content#数据集合) ，查询参数为`filter(过滤器)`

将执行结果返回给参数`review_contexts(评审内容)`

#### 循环评审内容 :id=LOOPSUBCALL1<sup class="footnote-symbol"> <font color=gray size=1>[循环子调用]</font></sup>



循环参数`review_contexts(评审内容)`，子循环参数使用`for_obj(循环变量)`
#### 调试逻辑参数 :id=DEBUGPARAM2<sup class="footnote-symbol"> <font color=gray size=1>[调试逻辑参数]</font></sup>



> [!NOTE|label:调试信息|icon:fa fa-bug]
> 调试输出参数`return_context(返回的评审内容)`的详细信息


#### 获取评审结果 :id=PREPAREPARAM2<sup class="footnote-symbol"> <font color=gray size=1>[准备参数]</font></sup>



1. 将`for_obj(循环变量).STAGE_RESULTS(评审结果)` 绑定给  `result_list(评审结果列表)`
2. 将`Default(传入变量).stage_id` 设置给  `result_filter(评审结果过滤器).N_STAGE_ID_EQ`

#### 调试逻辑参数 :id=DEBUGPARAM1<sup class="footnote-symbol"> <font color=gray size=1>[调试逻辑参数]</font></sup>



> [!NOTE|label:调试信息|icon:fa fa-bug]
> 调试输出参数`result_list(评审结果列表)`的详细信息


#### 循环评审结果 :id=LOOPSUBCALL2<sup class="footnote-symbol"> <font color=gray size=1>[循环子调用]</font></sup>



循环参数`result_list(评审结果列表)`，子循环参数使用`result_obj(评审结果循环变量)`
#### 填充返回结果 :id=APPENDPARAM1<sup class="footnote-symbol"> <font color=gray size=1>[附加到数组参数]</font></sup>



将参数`result_obj(评审结果循环变量)` 添加到数组参数`return_context(返回的评审内容)`

### 连接条件说明
#### 连接名称 :id=LOOPSUBCALL2-APPENDPARAM1

`result_obj(评审结果循环变量).RESULT_STATE(状态)` EQ `1`


### 实体逻辑参数

|    中文名   |    代码名    |  数据类型    |  实体   |备注 |
| --------| --------| -------- | -------- | --------   |
|传入变量(<i class="fa fa-check"/></i>)|Default|数据对象|[评审内容(REVIEW_CONTENT)](module/TestMgmt/review_content.md)||
|过滤器|filter|过滤器|||
|循环变量|for_obj|数据对象|[评审内容(REVIEW_CONTENT)](module/TestMgmt/review_content.md)||
|评审结果过滤器|result_filter|过滤器|||
|评审结果列表|result_list|分页查询|||
|评审结果循环变量|result_obj|数据对象|[评审结果(REVIEW_RESULT)](module/TestMgmt/review_result.md)||
|返回的评审内容|return_context|数据对象列表|[评审内容(REVIEW_CONTENT)](module/TestMgmt/review_content.md)||
|评审内容|review_contexts|分页查询|||
