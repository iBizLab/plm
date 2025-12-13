## 填充评审规则 <!-- {docsify-ignore-all} -->

   填充评审规则

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
state "结束" as END1 <<end>> [[$./fill_guideline#end1 {"结束"}]]
state "设置过滤参数" as PREPAREPARAM1  [[$./fill_guideline#prepareparam1 {"设置过滤参数"}]]
state "查询当前测试库指定类型的规则" as DEDATASET1  [[$./fill_guideline#dedataset1 {"查询当前测试库指定类型的规则"}]]
state "循环子调用" as LOOPSUBCALL1  [[$./fill_guideline#loopsubcall1 {"循环子调用"}]] #green {
state "设置返回的guideline_id" as PREPAREPARAM2  [[$./fill_guideline#prepareparam2 {"设置返回的guideline_id"}]]
}


Begin --> PREPAREPARAM1
PREPAREPARAM1 --> DEDATASET1
DEDATASET1 --> LOOPSUBCALL1
LOOPSUBCALL1 --> PREPAREPARAM2
PREPAREPARAM2 --> END1


@enduml
```


### 处理步骤说明

#### 开始 :id=Begin<sup class="footnote-symbol"> <font color=gray size=1>[开始]</font></sup>



*- N/A*
#### 结束 :id=END1<sup class="footnote-symbol"> <font color=gray size=1>[结束]</font></sup>



返回 `guideline_detail(规则详情)`

#### 设置过滤参数 :id=PREPAREPARAM1<sup class="footnote-symbol"> <font color=gray size=1>[准备参数]</font></sup>



1. 将`Default(传入变量).TYPE(评审类型)` 设置给  `guideline_filter(规则过滤器).N_SUBJECT_TYPE_EQ`
2. 将`LIBRARY` 设置给  `guideline_filter(规则过滤器).N_OBJECT_TYPE_EQ`
3. 将`Default(传入变量).LIBRARY_ID(测试库标识)` 设置给  `guideline_filter(规则过滤器).N_SCOPE_ID_EQ`

#### 查询当前测试库指定类型的规则 :id=DEDATASET1<sup class="footnote-symbol"> <font color=gray size=1>[实体数据集]</font></sup>



调用实体 [流程准则(GUIDELINE)](module/TestMgmt/guideline.md) 数据集合 [数据集(DEFAULT)](module/TestMgmt/guideline#数据集合) ，查询参数为`guideline_filter(规则过滤器)`

将执行结果返回给参数`guideline_page(规则分页结果)`

#### 循环子调用 :id=LOOPSUBCALL1<sup class="footnote-symbol"> <font color=gray size=1>[循环子调用]</font></sup>



循环参数`guideline_page(规则分页结果)`，子循环参数使用`guideline_detail(规则详情)`
#### 设置返回的guideline_id :id=PREPAREPARAM2<sup class="footnote-symbol"> <font color=gray size=1>[准备参数]</font></sup>



1. 将`guideline_detail(规则详情).ID(标识)` 设置给  `guideline_detail(规则详情).guideline_id`



### 实体逻辑参数

|    中文名   |    代码名    |  数据类型    |  实体   |备注 |
| --------| --------| -------- | -------- | --------   |
|传入变量(<i class="fa fa-check"/></i>)|Default|数据对象|[评审(REVIEW)](module/TestMgmt/review.md)||
|规则详情|guideline_detail|数据对象|[流程准则(GUIDELINE)](module/TestMgmt/guideline.md)||
|规则过滤器|guideline_filter|过滤器|||
|规则分页结果|guideline_page|分页查询|||
