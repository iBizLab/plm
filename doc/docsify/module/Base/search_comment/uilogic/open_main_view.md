## 打开详情视图 <!-- {docsify-ignore-all} -->

   链接跳转工作项/产品需求/测试用例/工单/客户/页面详情主视图

### 处理过程

```plantuml
@startuml
hide footbox
<style>
root {
  HyperlinkColor #42b983
}
</style>

hide empty description
state "开始" as Begin <<start>> [[$./open_main_view#begin {开始}]]
state "打开产品需求主视图" as DEUIACTION3  [[$./open_main_view#deuiaction3 {打开产品需求主视图}]]
state " 打开页面主视图" as DEUIACTION6  [[$./open_main_view#deuiaction6 { 打开页面主视图}]]
state "打开执行用例主视图" as DEUIACTION7  [[$./open_main_view#deuiaction7 {打开执行用例主视图}]]
state "打开测试用例主视图" as DEUIACTION2  [[$./open_main_view#deuiaction2 {打开测试用例主视图}]]
state "打开工单主视图" as DEUIACTION4  [[$./open_main_view#deuiaction4 {打开工单主视图}]]
state "打开工作项主视图" as DEUIACTION1  [[$./open_main_view#deuiaction1 {打开工作项主视图}]]
state "打开客户主视图" as DEUIACTION5  [[$./open_main_view#deuiaction5 {打开客户主视图}]]


Begin --> DEUIACTION1 : [[$./open_main_view#begin-deuiaction1{工作项} 工作项]]
Begin --> DEUIACTION2 : [[$./open_main_view#begin-deuiaction2{测试用例} 测试用例]]
Begin --> DEUIACTION3 : [[$./open_main_view#begin-deuiaction3{产品需求} 产品需求]]
Begin --> DEUIACTION4 : [[$./open_main_view#begin-deuiaction4{工单} 工单]]
Begin --> DEUIACTION5 : [[$./open_main_view#begin-deuiaction5{客户} 客户]]
Begin --> DEUIACTION6 : [[$./open_main_view#begin-deuiaction6{页面} 页面]]
Begin --> DEUIACTION7 : [[$./open_main_view#begin-deuiaction7{连接名称} 连接名称]]


@enduml
```


### 处理步骤说明

#### 开始 :id=Begin<sup class="footnote-symbol"> <font color=gray size=1>[开始]</font></sup>




#### 打开工作项主视图 :id=DEUIACTION1<sup class="footnote-symbol"> <font color=gray size=1>[实体界面行为调用]</font></sup>



调用实体 [评论搜索(SEARCH_COMMENT)](module/Base/search_comment.md) 界面行为 [打开工作项主视图](module/Base/search_comment#界面行为) ，行为参数为`Default(传入变量)`

#### 打开测试用例主视图 :id=DEUIACTION2<sup class="footnote-symbol"> <font color=gray size=1>[实体界面行为调用]</font></sup>



调用实体 [评论搜索(SEARCH_COMMENT)](module/Base/search_comment.md) 界面行为 [打开测试用例主视图](module/Base/search_comment#界面行为) ，行为参数为`Default(传入变量)`

#### 打开产品需求主视图 :id=DEUIACTION3<sup class="footnote-symbol"> <font color=gray size=1>[实体界面行为调用]</font></sup>



调用实体 [评论搜索(SEARCH_COMMENT)](module/Base/search_comment.md) 界面行为 [打开产品需求主视图](module/Base/search_comment#界面行为) ，行为参数为`Default(传入变量)`

#### 打开工单主视图 :id=DEUIACTION4<sup class="footnote-symbol"> <font color=gray size=1>[实体界面行为调用]</font></sup>



调用实体 [评论搜索(SEARCH_COMMENT)](module/Base/search_comment.md) 界面行为 [打开工单主视图](module/Base/search_comment#界面行为) ，行为参数为`Default(传入变量)`

#### 打开客户主视图 :id=DEUIACTION5<sup class="footnote-symbol"> <font color=gray size=1>[实体界面行为调用]</font></sup>



调用实体 [评论搜索(SEARCH_COMMENT)](module/Base/search_comment.md) 界面行为 [打开客户主视图](module/Base/search_comment#界面行为) ，行为参数为`Default(传入变量)`

####  打开页面主视图 :id=DEUIACTION6<sup class="footnote-symbol"> <font color=gray size=1>[实体界面行为调用]</font></sup>



调用实体 [评论搜索(SEARCH_COMMENT)](module/Base/search_comment.md) 界面行为 [打开页面主视图](module/Base/search_comment#界面行为) ，行为参数为`Default(传入变量)`

#### 打开执行用例主视图 :id=DEUIACTION7<sup class="footnote-symbol"> <font color=gray size=1>[实体界面行为调用]</font></sup>



调用实体 [评论搜索(SEARCH_COMMENT)](module/Base/search_comment.md) 界面行为 [打开执行用例主视图](module/Base/search_comment#界面行为) ，行为参数为`Default(传入变量)`

### 连接条件说明
#### 工作项 :id=Begin-DEUIACTION1

```Default(传入变量).owner_type``` EQ ```WORK_ITEM```
#### 测试用例 :id=Begin-DEUIACTION2

```Default(传入变量).owner_type``` EQ ```TEST_CASE```
#### 产品需求 :id=Begin-DEUIACTION3

```Default(传入变量).owner_type``` EQ ```IDEA```
#### 工单 :id=Begin-DEUIACTION4

```Default(传入变量).owner_type``` EQ ```TICKET```
#### 客户 :id=Begin-DEUIACTION5

```Default(传入变量).owner_type``` EQ ```CUSTOMER```
#### 页面 :id=Begin-DEUIACTION6

```Default(传入变量).owner_type``` EQ ```PAGE```
#### 连接名称 :id=Begin-DEUIACTION7

```Default(传入变量).principal_type``` EQ ```RUN```


### 实体逻辑参数

|    中文名   |    代码名    |  数据类型      |备注 |
| --------| --------| --------  | --------   |
|传入变量(<i class="fa fa-check"/></i>)|Default|数据对象||
