## 变更评审内阶段 <!-- {docsify-ignore-all} -->

   变更评审内阶段

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
state "开始" as Begin <<start>> [[$./change_review_stage#begin {"开始"}]]
state "结束" as END1 <<end>> [[$./change_review_stage#end1 {"结束"}]]
state "传入参数" as DEBUGPARAM1  [[$./change_review_stage#debugparam1 {"传入参数"}]]
state "获取评审ID" as PREPAREPARAM1  [[$./change_review_stage#prepareparam1 {"获取评审ID"}]]
state "获取评审" as DEACTION1  [[$./change_review_stage#deaction1 {"获取评审"}]]
state "设置阶段集合参数" as PREPAREPARAM5  [[$./change_review_stage#prepareparam5 {"设置阶段集合参数"}]]
state "评审列表返回评审" as PREPAREPARAM4  [[$./change_review_stage#prepareparam4 {"评审列表返回评审"}]]
state "更新前评审数据" as DEBUGPARAM3  [[$./change_review_stage#debugparam3 {"更新前评审数据"}]]
state "保存评审" as DEACTION2  [[$./change_review_stage#deaction2 {"保存评审"}]]
state "循环评审阶段" as LOOPSUBCALL1  [[$./change_review_stage#loopsubcall1 {"循环评审阶段"}]] #green {
state "当前循环阶段" as DEBUGPARAM2  [[$./change_review_stage#debugparam2 {"当前循环阶段"}]]
state "设置评审人" as PREPAREPARAM2  [[$./change_review_stage#prepareparam2 {"设置评审人"}]]
state "附加到评审列表" as PREPAREPARAM3  [[$./change_review_stage#prepareparam3 {"附加到评审列表"}]]
}


Begin --> DEBUGPARAM1
DEBUGPARAM1 --> PREPAREPARAM1
PREPAREPARAM1 --> DEACTION1
DEACTION1 --> PREPAREPARAM5
PREPAREPARAM5 --> LOOPSUBCALL1
LOOPSUBCALL1 --> DEBUGPARAM2
DEBUGPARAM2 --> PREPAREPARAM2
PREPAREPARAM2 --> PREPAREPARAM3
DEBUGPARAM2 --> PREPAREPARAM3
LOOPSUBCALL1 --> PREPAREPARAM4
PREPAREPARAM4 --> DEBUGPARAM3
DEBUGPARAM3 --> DEACTION2
DEACTION2 --> END1


@enduml
```


### 处理步骤说明

#### 开始 :id=Begin<sup class="footnote-symbol"> <font color=gray size=1>[开始]</font></sup>



*- N/A*
#### 结束 :id=END1<sup class="footnote-symbol"> <font color=gray size=1>[结束]</font></sup>



*- N/A*

#### 传入参数 :id=DEBUGPARAM1<sup class="footnote-symbol"> <font color=gray size=1>[调试逻辑参数]</font></sup>



> [!NOTE|label:调试信息|icon:fa fa-bug]
> 调试输出参数`Default(传入变量)`的详细信息


#### 获取评审ID :id=PREPAREPARAM1<sup class="footnote-symbol"> <font color=gray size=1>[准备参数]</font></sup>



1. 将`Default(传入变量).review_id` 设置给  `review_info(评审信息).ID(标识)`

#### 获取评审 :id=DEACTION1<sup class="footnote-symbol"> <font color=gray size=1>[实体行为]</font></sup>



调用实体 [评审(REVIEW)](module/TestMgmt/review.md) 行为 [Get](module/TestMgmt/review#行为) ，行为参数为`review_info(评审信息)`

#### 设置阶段集合参数 :id=PREPAREPARAM5<sup class="footnote-symbol"> <font color=gray size=1>[准备参数]</font></sup>



1. 将`review_info(评审信息).STAGE(阶段)` 绑定给  `stage_page(阶段分页结果)`

#### 循环评审阶段 :id=LOOPSUBCALL1<sup class="footnote-symbol"> <font color=gray size=1>[循环子调用]</font></sup>



循环参数`stage_page(阶段分页结果)`，子循环参数使用`cur_stage(当前阶段)`
#### 评审列表返回评审 :id=PREPAREPARAM4<sup class="footnote-symbol"> <font color=gray size=1>[准备参数]</font></sup>



1. 将`stage_list(阶段集合)` 设置给  `review_info(评审信息).STAGE(阶段)`

#### 更新前评审数据 :id=DEBUGPARAM3<sup class="footnote-symbol"> <font color=gray size=1>[调试逻辑参数]</font></sup>



> [!NOTE|label:调试信息|icon:fa fa-bug]
> 调试输出参数`review_info(评审信息)`的详细信息


#### 保存评审 :id=DEACTION2<sup class="footnote-symbol"> <font color=gray size=1>[实体行为]</font></sup>



调用实体 [评审(REVIEW)](module/TestMgmt/review.md) 行为 [Save](module/TestMgmt/review#行为) ，行为参数为`review_info(评审信息)`

#### 设置评审人 :id=PREPAREPARAM2<sup class="footnote-symbol"> <font color=gray size=1>[准备参数]</font></sup>



1. 将`Default(传入变量).reviewer(评审人)` 设置给  `cur_stage(当前阶段).REVIEWER(评审人)`
2. 将`Default(传入变量).reviewer_name` 设置给  `cur_stage(当前阶段).REVIEWER_NAME(评审人名称)`

#### 当前循环阶段 :id=DEBUGPARAM2<sup class="footnote-symbol"> <font color=gray size=1>[调试逻辑参数]</font></sup>



> [!NOTE|label:调试信息|icon:fa fa-bug]
> 调试输出参数`cur_stage(当前阶段)`的详细信息


#### 附加到评审列表 :id=PREPAREPARAM3<sup class="footnote-symbol"> <font color=gray size=1>[准备参数]</font></sup>



1. 将`cur_stage(当前阶段)` 追加到  `stage_list(阶段集合)`


### 连接条件说明
#### 修改阶段为当前阶段 


#### 修改阶段不为当前阶段 




### 实体逻辑参数

|    中文名   |    代码名    |  数据类型    |  实体   |备注 |
| --------| --------| -------- | -------- | --------   |
|传入变量(<i class="fa fa-check"/></i>)|Default|数据对象|[评审(REVIEW)](module/TestMgmt/review.md)||
|当前阶段|cur_stage|数据对象|[评审阶段(REVIEW_STAGE)](module/TestMgmt/review_stage.md)||
|评审信息|review_info|数据对象|[评审(REVIEW)](module/TestMgmt/review.md)||
|阶段集合|stage_list|数据对象列表|[评审阶段(REVIEW_STAGE)](module/TestMgmt/review_stage.md)||
|阶段分页结果|stage_page|分页查询|||
