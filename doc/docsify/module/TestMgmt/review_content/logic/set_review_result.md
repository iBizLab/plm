## 设置评审结果 <!-- {docsify-ignore-all} -->

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
state "开始" as Begin <<start>> [[$./set_review_result#begin {"开始"}]]
state "调试逻辑参数" as DEBUGPARAM1  [[$./set_review_result#debugparam1 {"调试逻辑参数"}]]
state "绑定参数" as BINDPARAM1  [[$./set_review_result#bindparam1 {"绑定参数"}]]
state "结束" as END1 <<end>> [[$./set_review_result#end1 {"结束"}]]
state "循环子调用" as LOOPSUBCALL1  [[$./set_review_result#loopsubcall1 {"循环子调用"}]] #green {
state "准备参数" as PREPAREPARAM1  [[$./set_review_result#prepareparam1 {"准备参数"}]]
state "调试逻辑参数" as DEBUGPARAM2  [[$./set_review_result#debugparam2 {"调试逻辑参数"}]]
state "实体行为" as DEACTION1  [[$./set_review_result#deaction1 {"实体行为"}]]
}


Begin --> DEBUGPARAM1
DEBUGPARAM1 --> BINDPARAM1
BINDPARAM1 --> LOOPSUBCALL1
LOOPSUBCALL1 --> PREPAREPARAM1
PREPAREPARAM1 --> DEBUGPARAM2
DEBUGPARAM2 --> DEACTION1
DEACTION1 --> END1


@enduml
```


### 处理步骤说明

#### 开始 :id=Begin<sup class="footnote-symbol"> <font color=gray size=1>[开始]</font></sup>



*- N/A*
#### 调试逻辑参数 :id=DEBUGPARAM1<sup class="footnote-symbol"> <font color=gray size=1>[调试逻辑参数]</font></sup>



> [!NOTE|label:调试信息|icon:fa fa-bug]
> 调试输出参数`Default(传入变量)`的详细信息


#### 绑定参数 :id=BINDPARAM1<sup class="footnote-symbol"> <font color=gray size=1>[绑定参数]</font></sup>



绑定参数`Default(传入变量)` 到 `srfactionparam`
#### 循环子调用 :id=LOOPSUBCALL1<sup class="footnote-symbol"> <font color=gray size=1>[循环子调用]</font></sup>



循环参数`srfactionparam`，子循环参数使用`for_obj(循环临时变量)`
#### 结束 :id=END1<sup class="footnote-symbol"> <font color=gray size=1>[结束]</font></sup>



*- N/A*

#### 准备参数 :id=PREPAREPARAM1<sup class="footnote-symbol"> <font color=gray size=1>[准备参数]</font></sup>



1. 将`for_obj(循环临时变量).result_info` 设置给  `result(评审结果).COMMENT`
2. 将`for_obj(循环临时变量).id` 设置给  `result(评审结果).CONTENT_ID`

#### 调试逻辑参数 :id=DEBUGPARAM2<sup class="footnote-symbol"> <font color=gray size=1>[调试逻辑参数]</font></sup>



> [!NOTE|label:调试信息|icon:fa fa-bug]
> 调试输出参数`result(评审结果)`的详细信息


#### 实体行为 :id=DEACTION1<sup class="footnote-symbol"> <font color=gray size=1>[实体行为]</font></sup>



调用实体 [评审结果(REVIEW_RESULT)](module/TestMgmt/review_result.md) 行为 [Create](module/TestMgmt/review_result#行为) ，行为参数为`result(评审结果)`



### 实体逻辑参数

|    中文名   |    代码名    |  数据类型    |  实体   |备注 |
| --------| --------| -------- | -------- | --------   |
|传入变量(<i class="fa fa-check"/></i>)|Default|数据对象|[评审内容(REVIEW_CONTENT)](module/TestMgmt/review_content.md)||
|循环临时变量|for_obj|数据对象|||
|评审结果|result|数据对象|||
|srfactionparam|srfactionparam|数据对象列表|||
