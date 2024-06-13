## 设置评审结果 <!-- {docsify-ignore-all} -->

   待删除

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
state "获取表单数据" as BINDPARAM1  [[$./set_review_result#bindparam1 {"获取表单数据"}]]
state "准备参数" as PREPAREPARAM2  [[$./set_review_result#prepareparam2 {"准备参数"}]]
state "结束" as END1 <<end>> [[$./set_review_result#end1 {"结束"}]]
state "准备参数" as PREPAREPARAM1  [[$./set_review_result#prepareparam1 {"准备参数"}]]
state "循环子调用" as LOOPSUBCALL1  [[$./set_review_result#loopsubcall1 {"循环子调用"}]] #green {
state "评审结果" as DEBUGPARAM3  [[$./set_review_result#debugparam3 {"评审结果"}]]
}


Begin --> DEBUGPARAM1
DEBUGPARAM1 --> BINDPARAM1
BINDPARAM1 --> PREPAREPARAM2
PREPAREPARAM2 --> LOOPSUBCALL1
LOOPSUBCALL1 --> DEBUGPARAM3
LOOPSUBCALL1 --> PREPAREPARAM1
PREPAREPARAM1 --> END1


@enduml
```


### 处理步骤说明

#### 开始 :id=Begin<sup class="footnote-symbol"> <font color=gray size=1>[开始]</font></sup>



*- N/A*
#### 调试逻辑参数 :id=DEBUGPARAM1<sup class="footnote-symbol"> <font color=gray size=1>[调试逻辑参数]</font></sup>



> [!NOTE|label:调试信息|icon:fa fa-bug]
> 调试输出参数`Default(传入变量)`的详细信息


#### 获取表单数据 :id=BINDPARAM1<sup class="footnote-symbol"> <font color=gray size=1>[绑定参数]</font></sup>



绑定参数`Default(传入变量)` 到 `srfactionparam`
#### 准备参数 :id=PREPAREPARAM2<sup class="footnote-symbol"> <font color=gray size=1>[准备参数]</font></sup>



1. 将`Default(传入变量).stage_results(评审结果)` 绑定给  `review_result_list(评审结果列表)`

#### 结束 :id=END1<sup class="footnote-symbol"> <font color=gray size=1>[结束]</font></sup>



*- N/A*

#### 循环子调用 :id=LOOPSUBCALL1<sup class="footnote-symbol"> <font color=gray size=1>[循环子调用]</font></sup>



循环参数`review_result_list(评审结果列表)`，子循环参数使用`review_result(评审结果)`
#### 准备参数 :id=PREPAREPARAM1<sup class="footnote-symbol"> <font color=gray size=1>[准备参数]</font></sup>



1. 将`srfactionparam.0` 绑定给  `form_date(表单数据)`
2. 将`review_result(评审结果).result_info` 设置给  `result(评审结果).COMMENT`
3. 将`review_result(评审结果).id(标识)` 设置给  `result(评审结果).CONTENT_ID`

#### 评审结果 :id=DEBUGPARAM3<sup class="footnote-symbol"> <font color=gray size=1>[调试逻辑参数]</font></sup>



> [!NOTE|label:调试信息|icon:fa fa-bug]
> 调试输出参数`review_result(评审结果)`的详细信息




### 实体逻辑参数

|    中文名   |    代码名    |  数据类型    |  实体   |备注 |
| --------| --------| -------- | -------- | --------   |
|传入变量(<i class="fa fa-check"/></i>)|Default|数据对象|[评审内容(REVIEW_CONTENT)](module/TestMgmt/review_content.md)||
|表单数据|form_date|数据对象|||
|评审结果|result|数据对象|||
|评审结果|review_result|数据对象|[评审结果(REVIEW_RESULT)](module/TestMgmt/review_result.md)||
|评审结果列表|review_result_list|数据对象列表|[评审结果(REVIEW_RESULT)](module/TestMgmt/review_result.md)||
|srfactionparam|srfactionparam|数据对象列表|||
