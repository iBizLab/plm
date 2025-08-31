## 完成评审 <!-- {docsify-ignore-all} -->

   完成评审，判断是否为最终阶段，如果是变更评审的状态

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
state "开始" as Begin <<start>> [[$./complete_review#begin {"开始"}]]
state "结束" as END1 <<end>> [[$./complete_review#end1 {"结束"}]]
state "传入参数" as DEBUGPARAM1  [[$./complete_review#debugparam1 {"传入参数"}]]
state "获取评审详情ID" as PREPAREPARAM1  [[$./complete_review#prepareparam1 {"获取评审详情ID"}]]
state "获取评审详情" as DEACTION1  [[$./complete_review#deaction1 {"获取评审详情"}]]
state "获取阶段信息" as PREPAREPARAM2  [[$./complete_review#prepareparam2 {"获取阶段信息"}]]
state "排序数组参数" as SORTPARAM1  [[$./complete_review#sortparam1 {"排序数组参数"}]]
state "绑定阶段数据" as PREPAREPARAM5  [[$./complete_review#prepareparam5 {"绑定阶段数据"}]]
state "保存评审" as DEACTION2  [[$./complete_review#deaction2 {"保存评审"}]]
state "当前评审阶段赋予评审详情" as PREPAREPARAM7  [[$./complete_review#prepareparam7 {"当前评审阶段赋予评审详情"}]]
state "生成最终评审结果" as DELOGIC1  [[$./complete_review#delogic1 {"生成最终评审结果"}]]
state "循环子调用" as LOOPSUBCALL1  [[$./complete_review#loopsubcall1 {"循环子调用"}]] #green {
state "当前阶段数据" as DEBUGPARAM2  [[$./complete_review#debugparam2 {"当前阶段数据"}]]
state "设置阶段完成" as PREPAREPARAM3  [[$./complete_review#prepareparam3 {"设置阶段完成"}]]
state "变更阶段状态" as PREPAREPARAM6  [[$./complete_review#prepareparam6 {"变更阶段状态"}]]
state "通知关注人（需求）" as DENOTIFY3  [[$./complete_review#denotify3 {"通知关注人（需求）"}]]
state "通知关注人（用例）" as DENOTIFY4  [[$./complete_review#denotify4 {"通知关注人（用例）"}]]
state "通知关注人（工作项）" as DENOTIFY7  [[$./complete_review#denotify7 {"通知关注人（工作项）"}]]
state "通知关注人（页面）" as DENOTIFY8  [[$./complete_review#denotify8 {"通知关注人（页面）"}]]
state "完成时间" as RAWSFCODE1  [[$./complete_review#rawsfcode1 {"完成时间"}]]
state "附加到数组变量" as PREPAREPARAM4  [[$./complete_review#prepareparam4 {"附加到数组变量"}]]
state "附加到数组变量，且获取选中阶段的下一阶段数据" as PREPAREPARAM8  [[$./complete_review#prepareparam8 {"附加到数组变量，且获取选中阶段的下一阶段数据"}]]
state "通知下一评审人（需求）" as DENOTIFY1  [[$./complete_review#denotify1 {"通知下一评审人（需求）"}]]
state "通知下一评审人（测试用例）" as DENOTIFY2  [[$./complete_review#denotify2 {"通知下一评审人（测试用例）"}]]
state "通知下一评审人（工作项）" as DENOTIFY6  [[$./complete_review#denotify6 {"通知下一评审人（工作项）"}]]
state "通知下一评审人（页面）" as DENOTIFY5  [[$./complete_review#denotify5 {"通知下一评审人（页面）"}]]
}


Begin --> DEBUGPARAM1
DEBUGPARAM1 --> PREPAREPARAM1
PREPAREPARAM1 --> DEACTION1
DEACTION1 --> PREPAREPARAM2
PREPAREPARAM2 --> SORTPARAM1
SORTPARAM1 --> LOOPSUBCALL1
LOOPSUBCALL1 --> PREPAREPARAM5
PREPAREPARAM5 --> DEACTION2
DEACTION2 --> PREPAREPARAM7
PREPAREPARAM7 --> DELOGIC1
DELOGIC1 --> END1
LOOPSUBCALL1 --> DEBUGPARAM2
DEBUGPARAM2 --> PREPAREPARAM3
PREPAREPARAM3 --> PREPAREPARAM6
PREPAREPARAM6 --> DENOTIFY3 : [[$./complete_review#prepareparam6-denotify3{连接名称} 连接名称]]
DENOTIFY3 --> RAWSFCODE1
RAWSFCODE1 --> PREPAREPARAM4
PREPAREPARAM6 --> DENOTIFY4 : [[$./complete_review#prepareparam6-denotify4{连接名称} 连接名称]]
DENOTIFY4 --> RAWSFCODE1
PREPAREPARAM6 --> DENOTIFY7 : [[$./complete_review#prepareparam6-denotify7{连接名称} 连接名称]]
DENOTIFY7 --> RAWSFCODE1
PREPAREPARAM6 --> DENOTIFY8 : [[$./complete_review#prepareparam6-denotify8{连接名称} 连接名称]]
DENOTIFY8 --> RAWSFCODE1
PREPAREPARAM3 --> PREPAREPARAM4
DEBUGPARAM2 --> PREPAREPARAM4 : [[$./complete_review#debugparam2-prepareparam4{非选中阶段} 非选中阶段]]
DEBUGPARAM2 --> PREPAREPARAM8 : [[$./complete_review#debugparam2-prepareparam8{选中阶段的下一阶段} 选中阶段的下一阶段]]
PREPAREPARAM8 --> DENOTIFY1 : [[$./complete_review#prepareparam8-denotify1{连接名称} 连接名称]]
PREPAREPARAM8 --> DENOTIFY2 : [[$./complete_review#prepareparam8-denotify2{连接名称} 连接名称]]
PREPAREPARAM8 --> DENOTIFY6 : [[$./complete_review#prepareparam8-denotify6{连接名称} 连接名称]]
PREPAREPARAM8 --> DENOTIFY5 : [[$./complete_review#prepareparam8-denotify5{连接名称} 连接名称]]


@enduml
```


### 处理步骤说明

#### 开始 :id=Begin<sup class="footnote-symbol"> <font color=gray size=1>[开始]</font></sup>



*- N/A*
#### 结束 :id=END1<sup class="footnote-symbol"> <font color=gray size=1>[结束]</font></sup>



返回 `Default(传入变量)`

#### 传入参数 :id=DEBUGPARAM1<sup class="footnote-symbol"> <font color=gray size=1>[调试逻辑参数]</font></sup>



> [!NOTE|label:调试信息|icon:fa fa-bug]
> 调试输出参数`Default(传入变量)`的详细信息


#### 获取评审详情ID :id=PREPAREPARAM1<sup class="footnote-symbol"> <font color=gray size=1>[准备参数]</font></sup>



1. 将`Default(传入变量).principal_id(关联主体标识)` 设置给  `review_detail(评审详情).ID(标识)`

#### 获取评审详情 :id=DEACTION1<sup class="footnote-symbol"> <font color=gray size=1>[实体行为]</font></sup>



调用实体 [评审(REVIEW)](module/TestMgmt/review.md) 行为 [Get](module/TestMgmt/review#行为) ，行为参数为`review_detail(评审详情)`

#### 获取阶段信息 :id=PREPAREPARAM2<sup class="footnote-symbol"> <font color=gray size=1>[准备参数]</font></sup>



1. 将`review_detail(评审详情).STAGE(阶段)` 绑定给  `stage_list(阶段列表)`
2. 将`false` 设置给  `next_stage(下一阶段数据).is_next`
3. 将` ==> stage_list[ORDER]` 排序  `stage_list(阶段列表).ORDER(顺序)`
4. 将`stage_list(阶段列表).0` 绑定给  `end_stage(最终阶段)`

#### 排序数组参数 :id=SORTPARAM1<sup class="footnote-symbol"> <font color=gray size=1>[排序数组参数]</font></sup>




#### 循环子调用 :id=LOOPSUBCALL1<sup class="footnote-symbol"> <font color=gray size=1>[循环子调用]</font></sup>



循环参数`stage_list(阶段列表)`，子循环参数使用`for_stage(当前循环阶段)`
#### 绑定阶段数据 :id=PREPAREPARAM5<sup class="footnote-symbol"> <font color=gray size=1>[准备参数]</font></sup>



1. 将`stage_arr(阶段数据)` 设置给  `review_detail(评审详情).STAGE(阶段)`

#### 保存评审 :id=DEACTION2<sup class="footnote-symbol"> <font color=gray size=1>[实体行为]</font></sup>



调用实体 [评审(REVIEW)](module/TestMgmt/review.md) 行为 [Save](module/TestMgmt/review#行为) ，行为参数为`review_detail(评审详情)`

#### 当前评审阶段赋予评审详情 :id=PREPAREPARAM7<sup class="footnote-symbol"> <font color=gray size=1>[准备参数]</font></sup>



1. 将`Default(传入变量).curstage_id` 设置给  `review_detail(评审详情).curstage_id`

#### 生成最终评审结果 :id=DELOGIC1<sup class="footnote-symbol"> <font color=gray size=1>[实体逻辑]</font></sup>



调用实体 [评审内容(REVIEW_CONTENT)](module/TestMgmt/review_content.md) 处理逻辑 [生成最终评审结果]((module/TestMgmt/review_content/logic/generate_review_result_finally.md)) ，行为参数为`review_detail(评审详情)`

#### 通知下一评审人（需求） :id=DENOTIFY1<sup class="footnote-symbol"> <font color=gray size=1>[实体通知]</font></sup>



调用实体 [评审(REVIEW)](module/TestMgmt/review.md) 通知 [评审通知(review_notify)](module/TestMgmt/review/notify/review_notify) ，参数为`review_detail(评审详情)`
#### 当前阶段数据 :id=DEBUGPARAM2<sup class="footnote-symbol"> <font color=gray size=1>[调试逻辑参数]</font></sup>



> [!NOTE|label:调试信息|icon:fa fa-bug]
> 调试输出参数`for_stage(当前循环阶段)`的详细信息


#### 附加到数组变量，且获取选中阶段的下一阶段数据 :id=PREPAREPARAM8<sup class="footnote-symbol"> <font color=gray size=1>[准备参数]</font></sup>



1. 将`for_stage(当前循环阶段)` 追加到  `stage_arr(阶段数据)`
2. 将`for_stage(当前循环阶段).REVIEWER(评审人)` 设置给  `review_detail(评审详情).NEXT_REVIEWER(下一个评审人)`
3. 将`false` 设置给  `next_stage(下一阶段数据).is_next`
4. 将`20` 设置给  `for_stage(当前循环阶段).STAGE_STATE(评审阶段状态)`

#### 通知下一评审人（测试用例） :id=DENOTIFY2<sup class="footnote-symbol"> <font color=gray size=1>[实体通知]</font></sup>



调用实体 [评审(REVIEW)](module/TestMgmt/review.md) 通知 [测试用例评审通知(test_case_review_notify)](module/TestMgmt/review/notify/test_case_review_notify) ，参数为`review_detail(评审详情)`
#### 通知下一评审人（工作项） :id=DENOTIFY6<sup class="footnote-symbol"> <font color=gray size=1>[实体通知]</font></sup>



调用实体 [评审(REVIEW)](module/TestMgmt/review.md) 通知 [项目工作项评审通知(work_item_review_notify)](module/TestMgmt/review/notify/work_item_review_notify) ，参数为`review_detail(评审详情)`
#### 设置阶段完成 :id=PREPAREPARAM3<sup class="footnote-symbol"> <font color=gray size=1>[准备参数]</font></sup>



1. 将`30` 设置给  `for_stage(当前循环阶段).STAGE_STATE(评审阶段状态)`
2. 将`for_stage(当前循环阶段).REVIEWER(评审人)` 设置给  `review_detail(评审详情).REVIEWER(评审人)`
3. 将`true` 设置给  `next_stage(下一阶段数据).is_next`

#### 附加到数组变量 :id=PREPAREPARAM4<sup class="footnote-symbol"> <font color=gray size=1>[准备参数]</font></sup>



1. 将`for_stage(当前循环阶段)` 追加到  `stage_arr(阶段数据)`

#### 通知下一评审人（页面） :id=DENOTIFY5<sup class="footnote-symbol"> <font color=gray size=1>[实体通知]</font></sup>



调用实体 [评审(REVIEW)](module/TestMgmt/review.md) 通知 [空间页面评审通知(page_review_notify)](module/TestMgmt/review/notify/page_review_notify) ，参数为`review_detail(评审详情)`
#### 通知关注人（需求） :id=DENOTIFY3<sup class="footnote-symbol"> <font color=gray size=1>[实体通知]</font></sup>



调用实体 [评审(REVIEW)](module/TestMgmt/review.md) 通知 [完成需求评审通知(idea_review_notify)](module/TestMgmt/review/notify/idea_review_notify) ，参数为`review_detail(评审详情)`
#### 通知关注人（用例） :id=DENOTIFY4<sup class="footnote-symbol"> <font color=gray size=1>[实体通知]</font></sup>



调用实体 [评审(REVIEW)](module/TestMgmt/review.md) 通知 [完成用例评审通知(test_case_complete_notify)](module/TestMgmt/review/notify/test_case_complete_notify) ，参数为`review_detail(评审详情)`
#### 变更阶段状态 :id=PREPAREPARAM6<sup class="footnote-symbol"> <font color=gray size=1>[准备参数]</font></sup>



1. 将`60` 设置给  `review_detail(评审详情).STATE(评审状态)`

#### 完成时间 :id=RAWSFCODE1<sup class="footnote-symbol"> <font color=gray size=1>[直接后台代码]</font></sup>



<p class="panel-title"><b>执行代码[JavaScript]</b></p>

```javascript
var defaultObj = logic.getParam("review_detail");
defaultObj.set("COMPLETED_AT", new Date());
```

#### 通知关注人（工作项） :id=DENOTIFY7<sup class="footnote-symbol"> <font color=gray size=1>[实体通知]</font></sup>



调用实体 [评审(REVIEW)](module/TestMgmt/review.md) 通知 [完成工作项评审通知(work_item_complete_notify)](module/TestMgmt/review/notify/work_item_complete_notify) ，参数为`review_detail(评审详情)`
#### 通知关注人（页面） :id=DENOTIFY8<sup class="footnote-symbol"> <font color=gray size=1>[实体通知]</font></sup>



调用实体 [评审(REVIEW)](module/TestMgmt/review.md) 通知 [完成页面评审通知(page_complete_notify)](module/TestMgmt/review/notify/page_complete_notify) ，参数为`review_detail(评审详情)`

### 连接条件说明
#### 当前循环阶段为选中阶段 


#### 当前阶段为最后阶段 


#### 连接名称 :id=PREPAREPARAM6-DENOTIFY3

`review_detail(评审详情).TYPE(评审类型)` EQ `IDEA`
#### 连接名称 :id=PREPAREPARAM6-DENOTIFY4

`review_detail(评审详情).TYPE(评审类型)` EQ `TEST_CASE`
#### 连接名称 :id=PREPAREPARAM6-DENOTIFY7

`review_detail(评审详情).TYPE(评审类型)` EQ `WORK_ITEM`
#### 连接名称 :id=PREPAREPARAM6-DENOTIFY8

`review_detail(评审详情).TYPE(评审类型)` EQ `PAGE`
#### 非选中阶段 :id=DEBUGPARAM2-PREPAREPARAM4

( AND `next_stage(下一阶段数据).is_next` EQ `false`)
#### 选中阶段的下一阶段 :id=DEBUGPARAM2-PREPAREPARAM8

`next_stage(下一阶段数据).is_next` EQ `true`
#### 连接名称 :id=PREPAREPARAM8-DENOTIFY1

`review_detail(评审详情).TYPE(评审类型)` EQ `IDEA`
#### 连接名称 :id=PREPAREPARAM8-DENOTIFY2

`review_detail(评审详情).TYPE(评审类型)` EQ `TEST_CASE`
#### 连接名称 :id=PREPAREPARAM8-DENOTIFY6

`review_detail(评审详情).TYPE(评审类型)` EQ `WORK_ITEM`
#### 连接名称 :id=PREPAREPARAM8-DENOTIFY5

`review_detail(评审详情).TYPE(评审类型)` EQ `PAGE`


### 实体逻辑参数

|    中文名   |    代码名    |  数据类型    |  实体   |备注 |
| --------| --------| -------- | -------- | --------   |
|传入变量(<i class="fa fa-check"/></i>)|Default|数据对象|[评审内容(REVIEW_CONTENT)](module/TestMgmt/review_content.md)||
|最终阶段|end_stage|数据对象|[评审阶段(REVIEW_STAGE)](module/TestMgmt/review_stage.md)||
|当前循环阶段|for_stage|数据对象|[评审阶段(REVIEW_STAGE)](module/TestMgmt/review_stage.md)||
|下一阶段数据|next_stage|数据对象|[评审阶段(REVIEW_STAGE)](module/TestMgmt/review_stage.md)||
|评审详情|review_detail|数据对象|[评审(REVIEW)](module/TestMgmt/review.md)||
|阶段数据|stage_arr|数据对象列表|[评审阶段(REVIEW_STAGE)](module/TestMgmt/review_stage.md)||
|阶段列表|stage_list|数据对象列表|[评审阶段(REVIEW_STAGE)](module/TestMgmt/review_stage.md)||
