## 提交评审 <!-- {docsify-ignore-all} -->

   测试

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
state "开始" as Begin <<start>> [[$./submit_review#begin {"开始"}]]
state "通知第一评审人（需求）" as DENOTIFY1  [[$./submit_review#denotify1 {"通知第一评审人（需求）"}]]
state "获取评审详情" as DEACTION4  [[$./submit_review#deaction4 {"获取评审详情"}]]
state "设置提交时间" as RAWSFCODE1  [[$./submit_review#rawsfcode1 {"设置提交时间"}]]
state "调试逻辑参数" as DEBUGPARAM3  [[$./submit_review#debugparam3 {"调试逻辑参数"}]]
state "设置提交人、状态" as PREPAREPARAM1  [[$./submit_review#prepareparam1 {"设置提交人、状态"}]]
state "设置关系过滤器参数" as PREPAREPARAM3  [[$./submit_review#prepareparam3 {"设置关系过滤器参数"}]]
state "通知第一评审人（项目工作项）" as DENOTIFY3  [[$./submit_review#denotify3 {"通知第一评审人（项目工作项）"}]]
state "绑定参数" as BINDPARAM1  [[$./submit_review#bindparam1 {"绑定参数"}]]
state "获取关系数据集" as DEDATASET1  [[$./submit_review#dedataset1 {"获取关系数据集"}]]
state "设置阶段的状态" as PREPAREPARAM2  [[$./submit_review#prepareparam2 {"设置阶段的状态"}]]
state "获取评审ID" as PREPAREPARAM6  [[$./submit_review#prepareparam6 {"获取评审ID"}]]
state "通知第一评审人（空间页面）" as DENOTIFY4  [[$./submit_review#denotify4 {"通知第一评审人（空间页面）"}]]
state "调试逻辑参数" as DEBUGPARAM2  [[$./submit_review#debugparam2 {"调试逻辑参数"}]]
state "通知第一评审人（测试用例）" as DENOTIFY2  [[$./submit_review#denotify2 {"通知第一评审人（测试用例）"}]]
state "更新评审" as DEACTION1  [[$./submit_review#deaction1 {"更新评审"}]]
state "评审内容为空" as THROWEXCEPTION1  [[$./submit_review#throwexception1 {"评审内容为空"}]]
state "结束" as END1 <<end>> [[$./submit_review#end1 {"结束"}]]
state "循环子调用" as LOOPSUBCALL2  [[$./submit_review#loopsubcall2 {"循环子调用"}]] #green {
state "准备参数" as PREPAREPARAM9  [[$./submit_review#prepareparam9 {"准备参数"}]]
}
state "循环子调用" as LOOPSUBCALL1  [[$./submit_review#loopsubcall1 {"循环子调用"}]] #green {
state "调试逻辑参数" as DEBUGPARAM1  [[$./submit_review#debugparam1 {"调试逻辑参数"}]]
state "获取测试用例ID" as PREPAREPARAM4  [[$./submit_review#prepareparam4 {"获取测试用例ID"}]]
state "获取测试用例详情" as DEACTION2  [[$./submit_review#deaction2 {"获取测试用例详情"}]]
state "设置测试用例评审状态" as PREPAREPARAM5  [[$./submit_review#prepareparam5 {"设置测试用例评审状态"}]]
state "更新测试用例" as DEACTION3  [[$./submit_review#deaction3 {"更新测试用例"}]]
state "重置测试用例参数" as RESETPARAM1  [[$./submit_review#resetparam1 {"重置测试用例参数"}]]
state "获取工作项ID" as PREPAREPARAM10  [[$./submit_review#prepareparam10 {"获取工作项ID"}]]
state "获取项目工作项详情" as DEACTION7  [[$./submit_review#deaction7 {"获取项目工作项详情"}]]
state "设置项目工作项评审状态" as PREPAREPARAM11  [[$./submit_review#prepareparam11 {"设置项目工作项评审状态"}]]
state "更新项目工作项" as DEACTION8  [[$./submit_review#deaction8 {"更新项目工作项"}]]
state "重置项目工作项参数" as RESETPARAM3  [[$./submit_review#resetparam3 {"重置项目工作项参数"}]]
state "获取需求ID" as PREPAREPARAM7  [[$./submit_review#prepareparam7 {"获取需求ID"}]]
state "获取产品需求详情" as DEACTION5  [[$./submit_review#deaction5 {"获取产品需求详情"}]]
state "设置产品需求评审状态" as PREPAREPARAM8  [[$./submit_review#prepareparam8 {"设置产品需求评审状态"}]]
state "更新产品需求" as DEACTION6  [[$./submit_review#deaction6 {"更新产品需求"}]]
state "重置产品需求参数" as RESETPARAM2  [[$./submit_review#resetparam2 {"重置产品需求参数"}]]
state "获取页面ID" as PREPAREPARAM12  [[$./submit_review#prepareparam12 {"获取页面ID"}]]
state "获取空间页面详情" as DEACTION9  [[$./submit_review#deaction9 {"获取空间页面详情"}]]
state "设置空间页面评审状态" as PREPAREPARAM13  [[$./submit_review#prepareparam13 {"设置空间页面评审状态"}]]
state "更新空间页面" as DEACTION10  [[$./submit_review#deaction10 {"更新空间页面"}]]
state "重置空间页面参数" as RESETPARAM4  [[$./submit_review#resetparam4 {"重置空间页面参数"}]]
}


Begin --> PREPAREPARAM3
PREPAREPARAM3 --> DEDATASET1
DEDATASET1 --> PREPAREPARAM6 : [[$./submit_review#dedataset1-prepareparam6{连接名称} 连接名称]]
PREPAREPARAM6 --> DEACTION4
DEACTION4 --> RAWSFCODE1
RAWSFCODE1 --> BINDPARAM1
BINDPARAM1 --> DEBUGPARAM2
DEBUGPARAM2 --> LOOPSUBCALL2
LOOPSUBCALL2 --> PREPAREPARAM9 : [[$./submit_review#loopsubcall2-prepareparam9{连接名称} 连接名称]]
LOOPSUBCALL2 --> DEBUGPARAM3
DEBUGPARAM3 --> DENOTIFY1 : [[$./submit_review#debugparam3-denotify1{连接名称} 连接名称]]
DENOTIFY1 --> PREPAREPARAM1
PREPAREPARAM1 --> PREPAREPARAM2
PREPAREPARAM2 --> DEACTION1
DEACTION1 --> LOOPSUBCALL1
LOOPSUBCALL1 --> DEBUGPARAM1
DEBUGPARAM1 --> PREPAREPARAM4 : [[$./submit_review#debugparam1-prepareparam4{连接名称} 连接名称]]
PREPAREPARAM4 --> DEACTION2
DEACTION2 --> PREPAREPARAM5
PREPAREPARAM5 --> DEACTION3
DEACTION3 --> RESETPARAM1
DEBUGPARAM1 --> PREPAREPARAM10 : [[$./submit_review#debugparam1-prepareparam10{连接名称} 连接名称]]
PREPAREPARAM10 --> DEACTION7
DEACTION7 --> PREPAREPARAM11
PREPAREPARAM11 --> DEACTION8
DEACTION8 --> RESETPARAM3
DEBUGPARAM1 --> PREPAREPARAM7 : [[$./submit_review#debugparam1-prepareparam7{连接名称} 连接名称]]
PREPAREPARAM7 --> DEACTION5
DEACTION5 --> PREPAREPARAM8
PREPAREPARAM8 --> DEACTION6
DEACTION6 --> RESETPARAM2
DEBUGPARAM1 --> PREPAREPARAM12 : [[$./submit_review#debugparam1-prepareparam12{连接名称} 连接名称]]
PREPAREPARAM12 --> DEACTION9
DEACTION9 --> PREPAREPARAM13
PREPAREPARAM13 --> DEACTION10
DEACTION10 --> RESETPARAM4
LOOPSUBCALL1 --> END1
DEBUGPARAM3 --> DENOTIFY3 : [[$./submit_review#debugparam3-denotify3{连接名称} 连接名称]]
DENOTIFY3 --> PREPAREPARAM1
DEBUGPARAM3 --> DENOTIFY2 : [[$./submit_review#debugparam3-denotify2{连接名称} 连接名称]]
DENOTIFY2 --> PREPAREPARAM1
DEBUGPARAM3 --> DENOTIFY4 : [[$./submit_review#debugparam3-denotify4{连接名称} 连接名称]]
DENOTIFY4 --> PREPAREPARAM1
DEDATASET1 --> THROWEXCEPTION1 : [[$./submit_review#dedataset1-throwexception1{连接名称} 连接名称]]


@enduml
```


### 处理步骤说明

#### 开始 :id=Begin<sup class="footnote-symbol"> <font color=gray size=1>[开始]</font></sup>



*- N/A*
#### 通知第一评审人（测试用例） :id=DENOTIFY2<sup class="footnote-symbol"> <font color=gray size=1>[实体通知]</font></sup>



调用实体 [评审(REVIEW)](module/TestMgmt/review.md) 通知 [测试用例评审通知(test_case_review_notify)](module/TestMgmt/review/notify/test_case_review_notify) ，参数为`review_detail(评审详情)`
#### 通知第一评审人（需求） :id=DENOTIFY1<sup class="footnote-symbol"> <font color=gray size=1>[实体通知]</font></sup>



调用实体 [评审(REVIEW)](module/TestMgmt/review.md) 通知 [评审通知(review_notify)](module/TestMgmt/review/notify/review_notify) ，参数为`review_detail(评审详情)`
#### 设置关系过滤器参数 :id=PREPAREPARAM3<sup class="footnote-symbol"> <font color=gray size=1>[准备参数]</font></sup>



1. 将`Default(传入变量).PRINCIPAL_ID(关联主体标识)` 设置给  `reltion_filter(relation过滤器).N_PRINCIPAL_ID_EQ`
2. 将`REVIEW` 设置给  `reltion_filter(relation过滤器).N_PRINCIPAL_TYPE_EQ`

#### 获取评审详情 :id=DEACTION4<sup class="footnote-symbol"> <font color=gray size=1>[实体行为]</font></sup>



调用实体 [评审(REVIEW)](module/TestMgmt/review.md) 行为 [Get](module/TestMgmt/review#行为) ，行为参数为`review_detail(评审详情)`

#### 设置提交时间 :id=RAWSFCODE1<sup class="footnote-symbol"> <font color=gray size=1>[直接后台代码]</font></sup>



<p class="panel-title"><b>执行代码[JavaScript]</b></p>

```javascript
var review_detail = logic.getParam("review_detail");
review_detail.set("submitted_at", new Date());
```

#### 调试逻辑参数 :id=DEBUGPARAM3<sup class="footnote-symbol"> <font color=gray size=1>[调试逻辑参数]</font></sup>



> [!NOTE|label:调试信息|icon:fa fa-bug]
> 调试输出参数`Default(传入变量)`的详细信息


#### 设置提交人、状态 :id=PREPAREPARAM1<sup class="footnote-symbol"> <font color=gray size=1>[准备参数]</font></sup>



1. 将`用户全局对象.srfpersonname` 设置给  `review_detail(评审详情).SUBMITTER_NAME(提交人)`
2. 将`用户全局对象.srfpersonid` 设置给  `review_detail(评审详情).SUBMITTER_ID(提交人标识)`
3. 将`20` 设置给  `review_detail(评审详情).STATE(评审状态)`

#### 通知第一评审人（项目工作项） :id=DENOTIFY3<sup class="footnote-symbol"> <font color=gray size=1>[实体通知]</font></sup>



调用实体 [评审(REVIEW)](module/TestMgmt/review.md) 通知 [项目工作项评审通知(work_item_review_notify)](module/TestMgmt/review/notify/work_item_review_notify) ，参数为`review_detail(评审详情)`
#### 获取关系数据集 :id=DEDATASET1<sup class="footnote-symbol"> <font color=gray size=1>[实体数据集]</font></sup>



调用实体 [关联(RELATION)](module/Base/relation.md) 数据集合 [数据集(DEFAULT)](module/Base/relation#数据集合) ，查询参数为`reltion_filter(relation过滤器)`

将执行结果返回给参数`relation_page(relation分页数据)`

#### 获取评审ID :id=PREPAREPARAM6<sup class="footnote-symbol"> <font color=gray size=1>[准备参数]</font></sup>



1. 将`Default(传入变量).PRINCIPAL_ID(关联主体标识)` 设置给  `review_detail(评审详情).ID(标识)`

#### 绑定参数 :id=BINDPARAM1<sup class="footnote-symbol"> <font color=gray size=1>[绑定参数]</font></sup>



绑定参数`review_detail(评审详情)` 到 `reviewer_list(评审人列表)`
#### 设置阶段的状态 :id=PREPAREPARAM2<sup class="footnote-symbol"> <font color=gray size=1>[准备参数]</font></sup>

设置第一个阶段的状态为进行中

1. 将`review_detail(评审详情).STAGE(阶段)` 绑定给  `stages(评审阶段)`
2. 将`stages(评审阶段).0` 绑定给  `stage(阶段)`
3. 将`20` 设置给  `stage(阶段).STAGE_STATE(评审阶段状态)`

#### 通知第一评审人（空间页面） :id=DENOTIFY4<sup class="footnote-symbol"> <font color=gray size=1>[实体通知]</font></sup>



调用实体 [评审(REVIEW)](module/TestMgmt/review.md) 通知 [空间页面评审通知(page_review_notify)](module/TestMgmt/review/notify/page_review_notify) ，参数为`review_detail(评审详情)`
#### 调试逻辑参数 :id=DEBUGPARAM2<sup class="footnote-symbol"> <font color=gray size=1>[调试逻辑参数]</font></sup>



> [!NOTE|label:调试信息|icon:fa fa-bug]
> 调试输出参数`reviewer_list(评审人列表)`的详细信息


#### 循环子调用 :id=LOOPSUBCALL2<sup class="footnote-symbol"> <font color=gray size=1>[循环子调用]</font></sup>



循环参数`reviewer_list(评审人列表)`，子循环参数使用`reviewer_temp(评审人临时变量)`
#### 更新评审 :id=DEACTION1<sup class="footnote-symbol"> <font color=gray size=1>[实体行为]</font></sup>



调用实体 [评审(REVIEW)](module/TestMgmt/review.md) 行为 [Update](module/TestMgmt/review#行为) ，行为参数为`review_detail(评审详情)`

#### 评审内容为空 :id=THROWEXCEPTION1<sup class="footnote-symbol"> <font color=gray size=1>[抛出异常]</font></sup>



> [!ATTENTION|label:抛出异常|icon:fa fa-warning]
> 错误信息：请添加评审内容

#### 结束 :id=END1<sup class="footnote-symbol"> <font color=gray size=1>[结束]</font></sup>



返回 `Default(传入变量)`

#### 准备参数 :id=PREPAREPARAM9<sup class="footnote-symbol"> <font color=gray size=1>[准备参数]</font></sup>



1. 将`review_detail(评审详情).create_man(建立人)` 设置给  `review_detail(评审详情).REVIEWER(评审人)`
2. 将`reviewer_temp(评审人临时变量).reviewer` 设置给  `review_detail(评审详情).NEXT_REVIEWER(下一个评审人)`

#### 循环子调用 :id=LOOPSUBCALL1<sup class="footnote-symbol"> <font color=gray size=1>[循环子调用]</font></sup>



循环参数`relation_page(relation分页数据)`，子循环参数使用`for_reltion(循环中的关联对象)`
#### 调试逻辑参数 :id=DEBUGPARAM1<sup class="footnote-symbol"> <font color=gray size=1>[调试逻辑参数]</font></sup>



> [!NOTE|label:调试信息|icon:fa fa-bug]
> 调试输出参数`for_reltion(循环中的关联对象)`的详细信息


#### 获取页面ID :id=PREPAREPARAM12<sup class="footnote-symbol"> <font color=gray size=1>[准备参数]</font></sup>



1. 将`for_reltion(循环中的关联对象).TARGET_ID(目标主体标识)` 设置给  `page(页面).ID(标识)`

#### 获取工作项ID :id=PREPAREPARAM10<sup class="footnote-symbol"> <font color=gray size=1>[准备参数]</font></sup>



1. 将`for_reltion(循环中的关联对象).TARGET_ID(目标主体标识)` 设置给  `work_item(工作项).ID(标识)`

#### 获取需求ID :id=PREPAREPARAM7<sup class="footnote-symbol"> <font color=gray size=1>[准备参数]</font></sup>



1. 将`for_reltion(循环中的关联对象).TARGET_ID(目标主体标识)` 设置给  `idea(产品需求).ID(标识)`

#### 获取测试用例ID :id=PREPAREPARAM4<sup class="footnote-symbol"> <font color=gray size=1>[准备参数]</font></sup>



1. 将`for_reltion(循环中的关联对象).TARGET_ID(目标主体标识)` 设置给  `test_case(测试用例).ID(标识)`

#### 获取空间页面详情 :id=DEACTION9<sup class="footnote-symbol"> <font color=gray size=1>[实体行为]</font></sup>



调用实体 [页面(PAGE)](module/Wiki/article_page.md) 行为 [Get](module/Wiki/article_page#行为) ，行为参数为`page(页面)`

#### 获取项目工作项详情 :id=DEACTION7<sup class="footnote-symbol"> <font color=gray size=1>[实体行为]</font></sup>



调用实体 [工作项(WORK_ITEM)](module/ProjMgmt/work_item.md) 行为 [Get](module/ProjMgmt/work_item#行为) ，行为参数为`work_item(工作项)`

#### 获取产品需求详情 :id=DEACTION5<sup class="footnote-symbol"> <font color=gray size=1>[实体行为]</font></sup>



调用实体 [需求(IDEA)](module/ProdMgmt/idea.md) 行为 [Get](module/ProdMgmt/idea#行为) ，行为参数为`idea(产品需求)`

#### 获取测试用例详情 :id=DEACTION2<sup class="footnote-symbol"> <font color=gray size=1>[实体行为]</font></sup>



调用实体 [用例(TEST_CASE)](module/TestMgmt/test_case.md) 行为 [Get](module/TestMgmt/test_case#行为) ，行为参数为`test_case(测试用例)`

#### 设置空间页面评审状态 :id=PREPAREPARAM13<sup class="footnote-symbol"> <font color=gray size=1>[准备参数]</font></sup>



1. 将`2` 设置给  `page(页面).REVIEW_RESULT_STATE(评审结果)`

#### 设置项目工作项评审状态 :id=PREPAREPARAM11<sup class="footnote-symbol"> <font color=gray size=1>[准备参数]</font></sup>



1. 将`2` 设置给  `work_item(工作项).REVIEW_RESULT_STATE(评审结果)`

#### 设置产品需求评审状态 :id=PREPAREPARAM8<sup class="footnote-symbol"> <font color=gray size=1>[准备参数]</font></sup>



1. 将`2` 设置给  `idea(产品需求).REVIEW_RESULT_STATE(评审结果)`

#### 设置测试用例评审状态 :id=PREPAREPARAM5<sup class="footnote-symbol"> <font color=gray size=1>[准备参数]</font></sup>



1. 将`2` 设置给  `test_case(测试用例).REVIEW_RESULT_STATE(评审结果)`

#### 更新空间页面 :id=DEACTION10<sup class="footnote-symbol"> <font color=gray size=1>[实体行为]</font></sup>



调用实体 [页面(PAGE)](module/Wiki/article_page.md) 行为 [Update](module/Wiki/article_page#行为) ，行为参数为`page(页面)`

#### 更新项目工作项 :id=DEACTION8<sup class="footnote-symbol"> <font color=gray size=1>[实体行为]</font></sup>



调用实体 [工作项(WORK_ITEM)](module/ProjMgmt/work_item.md) 行为 [Update](module/ProjMgmt/work_item#行为) ，行为参数为`work_item(工作项)`

#### 更新产品需求 :id=DEACTION6<sup class="footnote-symbol"> <font color=gray size=1>[实体行为]</font></sup>



调用实体 [需求(IDEA)](module/ProdMgmt/idea.md) 行为 [Update](module/ProdMgmt/idea#行为) ，行为参数为`idea(产品需求)`

#### 更新测试用例 :id=DEACTION3<sup class="footnote-symbol"> <font color=gray size=1>[实体行为]</font></sup>



调用实体 [用例(TEST_CASE)](module/TestMgmt/test_case.md) 行为 [Update](module/TestMgmt/test_case#行为) ，行为参数为`test_case(测试用例)`

#### 重置空间页面参数 :id=RESETPARAM4<sup class="footnote-symbol"> <font color=gray size=1>[重置参数]</font></sup>



重置参数```page(页面)```
#### 重置项目工作项参数 :id=RESETPARAM3<sup class="footnote-symbol"> <font color=gray size=1>[重置参数]</font></sup>



重置参数```work_item(工作项)```
#### 重置产品需求参数 :id=RESETPARAM2<sup class="footnote-symbol"> <font color=gray size=1>[重置参数]</font></sup>



重置参数```idea(产品需求)```
#### 重置测试用例参数 :id=RESETPARAM1<sup class="footnote-symbol"> <font color=gray size=1>[重置参数]</font></sup>



重置参数```test_case(测试用例)```

### 连接条件说明
#### 连接名称 :id=DEDATASET1-PREPAREPARAM6

`relation_page(relation分页数据).size` NOTEQ `0`
#### 连接名称 :id=LOOPSUBCALL2-PREPAREPARAM9

`reviewer_temp(评审人临时变量).order` EQ `1`
#### 连接名称 :id=DEBUGPARAM3-DENOTIFY1

`review_detail(评审详情).TYPE(评审类型)` EQ `IDEA`
#### 连接名称 :id=DEBUGPARAM1-PREPAREPARAM4

`for_reltion(循环中的关联对象).target_type(关联目标类型)` EQ `TEST_CASE`
#### 连接名称 :id=DEBUGPARAM1-PREPAREPARAM10

`for_reltion(循环中的关联对象).target_type(关联目标类型)` EQ `WORK_ITEM`
#### 连接名称 :id=DEBUGPARAM1-PREPAREPARAM7

`for_reltion(循环中的关联对象).target_type(关联目标类型)` EQ `IDEA`
#### 连接名称 :id=DEBUGPARAM1-PREPAREPARAM12

`for_reltion(循环中的关联对象).target_type(关联目标类型)` EQ `PAGE`
#### 连接名称 :id=DEBUGPARAM3-DENOTIFY3

`review_detail(评审详情).TYPE(评审类型)` EQ `WORK_ITEM`
#### 连接名称 :id=DEBUGPARAM3-DENOTIFY2

`review_detail(评审详情).TYPE(评审类型)` EQ `TEST_CASE`
#### 连接名称 :id=DEBUGPARAM3-DENOTIFY4

`review_detail(评审详情).TYPE(评审类型)` EQ `PAGE`
#### 连接名称 :id=DEDATASET1-THROWEXCEPTION1

`relation_page(relation分页数据).size` EQ `0`


### 实体逻辑参数

|    中文名   |    代码名    |  数据类型    |  实体   |备注 |
| --------| --------| -------- | -------- | --------   |
|传入变量(<i class="fa fa-check"/></i>)|Default|数据对象|[评审内容(REVIEW_CONTENT)](module/TestMgmt/review_content.md)||
|循环中的关联对象|for_reltion|数据对象|[关联(RELATION)](module/Base/relation.md)||
|产品需求|idea|数据对象|[需求(IDEA)](module/ProdMgmt/idea.md)||
|页面|page|数据对象|[页面(PAGE)](module/Wiki/article_page.md)||
|relation分页数据|relation_page|分页查询|||
|relation过滤器|reltion_filter|过滤器|||
|评审内容|review_content|分页查询|||
|评审详情|review_detail|数据对象|[评审(REVIEW)](module/TestMgmt/review.md)||
|评审人列表|reviewer_list|数据对象列表|||
|评审人临时变量|reviewer_temp|数据对象|||
|阶段|stage|数据对象|[评审阶段(REVIEW_STAGE)](module/TestMgmt/review_stage.md)||
|评审阶段|stages|数据对象列表|[评审阶段(REVIEW_STAGE)](module/TestMgmt/review_stage.md)||
|测试用例|test_case|数据对象|[用例(TEST_CASE)](module/TestMgmt/test_case.md)||
|工作项|work_item|数据对象|[工作项(WORK_ITEM)](module/ProjMgmt/work_item.md)||
