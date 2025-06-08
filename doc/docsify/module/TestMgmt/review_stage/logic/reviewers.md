## 参与评审人 <!-- {docsify-ignore-all} -->

   

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
state "开始" as Begin <<start>> [[$./reviewers#begin {"开始"}]]
state "结束" as END1 <<end>> [[$./reviewers#end1 {"结束"}]]
state "调试逻辑参数" as DEBUGPARAM2  [[$./reviewers#debugparam2 {"调试逻辑参数"}]]
state "准备参数" as PREPAREPARAM1  [[$./reviewers#prepareparam1 {"准备参数"}]]
state "实体数据集" as DEDATASET1  [[$./reviewers#dedataset1 {"实体数据集"}]]
state "调试逻辑参数" as DEBUGPARAM1  [[$./reviewers#debugparam1 {"调试逻辑参数"}]]
state "实体行为" as DEACTION1  [[$./reviewers#deaction1 {"实体行为"}]]
state "绑定参数" as BINDPARAM1  [[$./reviewers#bindparam1 {"绑定参数"}]]


Begin --> DEBUGPARAM2
DEBUGPARAM2 --> PREPAREPARAM1
PREPAREPARAM1 --> DEDATASET1
DEDATASET1 --> DEBUGPARAM1
DEBUGPARAM1 --> END1


@enduml
```


### 处理步骤说明

#### 开始 :id=Begin<sup class="footnote-symbol"> <font color=gray size=1>[开始]</font></sup>



*- N/A*
#### 结束 :id=END1<sup class="footnote-symbol"> <font color=gray size=1>[结束]</font></sup>



返回 `pages`

#### 调试逻辑参数 :id=DEBUGPARAM2<sup class="footnote-symbol"> <font color=gray size=1>[调试逻辑参数]</font></sup>



> [!NOTE|label:调试信息|icon:fa fa-bug]
> 调试输出参数`Default(传入变量)`的详细信息


#### 准备参数 :id=PREPAREPARAM1<sup class="footnote-symbol"> <font color=gray size=1>[准备参数]</font></sup>



1. 将`Default(传入变量).id(标识)` 设置给  `review.ID(标识)`

#### 实体数据集 :id=DEDATASET1<sup class="footnote-symbol"> <font color=gray size=1>[实体数据集]</font></sup>



调用实体 [评审阶段(REVIEW_STAGE)](module/TestMgmt/review_stage.md) 数据集合 [数据集(DEFAULT)](module/TestMgmt/review_stage#数据集合) ，查询参数为`Default(传入变量)`

将执行结果返回给参数`pages`

#### 调试逻辑参数 :id=DEBUGPARAM1<sup class="footnote-symbol"> <font color=gray size=1>[调试逻辑参数]</font></sup>



> [!NOTE|label:调试信息|icon:fa fa-bug]
> 调试输出参数`pages`的详细信息


#### 实体行为 :id=DEACTION1<sup class="footnote-symbol"> <font color=gray size=1>[实体行为]</font></sup>



调用实体 [评审(REVIEW)](module/TestMgmt/review.md) 行为 [Get](module/TestMgmt/review#行为) ，行为参数为`review`

将执行结果返回给参数`review`

#### 绑定参数 :id=BINDPARAM1<sup class="footnote-symbol"> <font color=gray size=1>[绑定参数]</font></sup>



绑定参数`review` 到 `reviewer_list(评审人列表)`


### 实体逻辑参数

|    中文名   |    代码名    |  数据类型    |  实体   |备注 |
| --------| --------| -------- | -------- | --------   |
|传入变量(<i class="fa fa-check"/></i>)|Default|过滤器|||
|pages|pages|分页查询|||
|review|review|数据对象|[评审(REVIEW)](module/TestMgmt/review.md)||
|评审人列表|reviewer_list|数据对象列表|[评审阶段(REVIEW_STAGE)](module/TestMgmt/review_stage.md)||
