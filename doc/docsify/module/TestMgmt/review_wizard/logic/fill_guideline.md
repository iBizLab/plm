## 填充评审规则 <!-- {docsify-ignore-all} -->

   获取评审规则并返回

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
state "开始" as Begin <<start>> [[$./fill_guideline#begin {"开始"}]]
state "测试库参数" as PREPAREPARAM1  [[$./fill_guideline#prepareparam1 {"测试库参数"}]]
state "调试逻辑参数" as DEBUGPARAM1  [[$./fill_guideline#debugparam1 {"调试逻辑参数"}]]
state "结束" as END1 <<end>> [[$./fill_guideline#end1 {"结束"}]]
state "通用参数" as PREPAREPARAM4  [[$./fill_guideline#prepareparam4 {"通用参数"}]]
state "查询当前指定类型的规则" as DEDATASET1  [[$./fill_guideline#dedataset1 {"查询当前指定类型的规则"}]]
state "设置返回的guideline_id" as PREPAREPARAM2  [[$./fill_guideline#prepareparam2 {"设置返回的guideline_id"}]]
state "调试逻辑参数" as DEBUGPARAM2  [[$./fill_guideline#debugparam2 {"调试逻辑参数"}]]
state "需求参数" as PREPAREPARAM3  [[$./fill_guideline#prepareparam3 {"需求参数"}]]


Begin --> DEBUGPARAM1 : [[$./fill_guideline#begin-debugparam1{测试用例} 测试用例]]
DEBUGPARAM1 --> PREPAREPARAM1
PREPAREPARAM1 --> PREPAREPARAM4
PREPAREPARAM4 --> DEDATASET1
DEDATASET1 --> PREPAREPARAM2
PREPAREPARAM2 --> END1
Begin --> DEBUGPARAM2 : [[$./fill_guideline#begin-debugparam2{产品需求} 产品需求]]
DEBUGPARAM2 --> PREPAREPARAM3
PREPAREPARAM3 --> PREPAREPARAM4


@enduml
```


### 处理步骤说明

#### 测试库参数 :id=PREPAREPARAM1<sup class="footnote-symbol"> <font color=gray size=1>[准备参数]</font></sup>



1. 将`LIBRARY` 设置给  `guideline_filter(规则过滤器).N_OBJECT_TYPE_EQ`
2. 将`Default(传入变量).LIBRARY_ID(测试库标识)` 设置给  `guideline_filter(规则过滤器).N_SCOPE_ID_EQ`

#### 调试逻辑参数 :id=DEBUGPARAM1<sup class="footnote-symbol"> <font color=gray size=1>[调试逻辑参数]</font></sup>



> [!NOTE|label:调试信息|icon:fa fa-bug]
> 调试输出参数`Default(传入变量)`的详细信息


#### 结束 :id=END1<sup class="footnote-symbol"> <font color=gray size=1>[结束]</font></sup>



返回 `guideline_detail(规则详情)`

#### 通用参数 :id=PREPAREPARAM4<sup class="footnote-symbol"> <font color=gray size=1>[准备参数]</font></sup>



1. 将`Default(传入变量).TYPE(评审类型)` 设置给  `guideline_filter(规则过滤器).N_SUBJECT_TYPE_EQ`

#### 查询当前指定类型的规则 :id=DEDATASET1<sup class="footnote-symbol"> <font color=gray size=1>[实体数据集]</font></sup>



调用实体 [流程准则(GUIDELINE)](module/TestMgmt/guideline.md) 数据集合 [数据集(DEFAULT)](module/TestMgmt/guideline#数据集合) ，查询参数为`guideline_filter(规则过滤器)`

将执行结果返回给参数`guideline_page(规则分页结果)`

#### 设置返回的guideline_id :id=PREPAREPARAM2<sup class="footnote-symbol"> <font color=gray size=1>[准备参数]</font></sup>



1. 将`guideline_page(规则分页结果).0` 绑定给  `guideline_detail(规则详情).guideline_id`
2. 将`guideline_detail(规则详情).REVIEW_STAGE(评审阶段)` 设置给  `guideline_detail(规则详情).stage`
3. 将`guideline_detail(规则详情).ID(标识)` 设置给  `guideline_detail(规则详情).guideline_id`

#### 开始 :id=Begin<sup class="footnote-symbol"> <font color=gray size=1>[开始]</font></sup>



*- N/A*
#### 调试逻辑参数 :id=DEBUGPARAM2<sup class="footnote-symbol"> <font color=gray size=1>[调试逻辑参数]</font></sup>



> [!NOTE|label:调试信息|icon:fa fa-bug]
> 调试输出参数`Default(传入变量)`的详细信息


#### 需求参数 :id=PREPAREPARAM3<sup class="footnote-symbol"> <font color=gray size=1>[准备参数]</font></sup>



1. 将`PRODUCT` 设置给  `guideline_filter(规则过滤器).N_OBJECT_TYPE_EQ`
2. 将`Default(传入变量).PRINCIPAL_ID(评审主体标识)` 设置给  `guideline_filter(规则过滤器).N_SCOPE_ID_EQ`


### 连接条件说明
#### 测试用例 :id=Begin-DEBUGPARAM1

`Default(传入变量).TYPE(评审类型)` EQ `TEST_CASE`
#### 产品需求 :id=Begin-DEBUGPARAM2

`Default(传入变量).TYPE(评审类型)` EQ `IDEA`


### 实体逻辑参数

|    中文名   |    代码名    |  数据类型    |  实体   |备注 |
| --------| --------| -------- | -------- | --------   |
|传入变量(<i class="fa fa-check"/></i>)|Default|数据对象|[评审向导(REVIEW_WIZARD)](module/TestMgmt/review_wizard.md)||
|规则详情|guideline_detail|数据对象|[流程准则(GUIDELINE)](module/TestMgmt/guideline.md)||
|规则过滤器|guideline_filter|过滤器|||
|流程准则ID|guideline_id|数据对象|[流程准则(GUIDELINE)](module/TestMgmt/guideline.md)||
|规则分页结果|guideline_page|分页查询|||
