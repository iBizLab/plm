## 关注人员更新 <!-- {docsify-ignore-all} -->

   

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
state "开始" as Begin <<start>> [[$./attention_personnel_update#begin {开始}]]
state "保存关注人数据" as DEACTION1  [[$./attention_personnel_update#deaction1 {保存关注人数据}]]
state "保存关注人数据" as DEACTION6  [[$./attention_personnel_update#deaction6 {保存关注人数据}]]
state "保存关注人数据" as DEACTION3  [[$./attention_personnel_update#deaction3 {保存关注人数据}]]
state "获取关注人员" as PREPAREJSPARAM2  [[$./attention_personnel_update#preparejsparam2 {获取关注人员}]]
state "工单" as PREPAREJSPARAM4  [[$./attention_personnel_update#preparejsparam4 {工单}]]
state "保存关注人数据" as DEACTION4  [[$./attention_personnel_update#deaction4 {保存关注人数据}]]
state "需求" as PREPAREJSPARAM3  [[$./attention_personnel_update#preparejsparam3 {需求}]]
state "工作项" as PREPAREJSPARAM1  [[$./attention_personnel_update#preparejsparam1 {工作项}]]
state "保存关注人信息" as DEACTION7  [[$./attention_personnel_update#deaction7 {保存关注人信息}]]
state "保存关注人数据" as DEACTION5  [[$./attention_personnel_update#deaction5 {保存关注人数据}]]
state "页面" as PREPAREJSPARAM8  [[$./attention_personnel_update#preparejsparam8 {页面}]]
state "测试用例" as PREPAREJSPARAM7  [[$./attention_personnel_update#preparejsparam7 {测试用例}]]
state "结束" as END1 <<end>> [[$./attention_personnel_update#end1 {结束}]]
state "执行用例" as PREPAREJSPARAM6  [[$./attention_personnel_update#preparejsparam6 {执行用例}]]
state "保存关注人数据" as DEACTION2  [[$./attention_personnel_update#deaction2 {保存关注人数据}]]
state "客户" as PREPAREJSPARAM5  [[$./attention_personnel_update#preparejsparam5 {客户}]]


Begin --> PREPAREJSPARAM2
PREPAREJSPARAM2 --> PREPAREJSPARAM1 : [[$./attention_personnel_update#preparejsparam2-preparejsparam1{连接名称} 连接名称]]
PREPAREJSPARAM1 --> DEACTION1
DEACTION1 --> END1
PREPAREJSPARAM2 --> PREPAREJSPARAM3 : [[$./attention_personnel_update#preparejsparam2-preparejsparam3{连接名称} 连接名称]]
PREPAREJSPARAM3 --> DEACTION2
DEACTION2 --> END1
PREPAREJSPARAM2 --> PREPAREJSPARAM4 : [[$./attention_personnel_update#preparejsparam2-preparejsparam4{连接名称} 连接名称]]
PREPAREJSPARAM4 --> DEACTION3
DEACTION3 --> END1
PREPAREJSPARAM2 --> PREPAREJSPARAM5 : [[$./attention_personnel_update#preparejsparam2-preparejsparam5{连接名称} 连接名称]]
PREPAREJSPARAM5 --> DEACTION4
DEACTION4 --> END1
PREPAREJSPARAM2 --> PREPAREJSPARAM7 : [[$./attention_personnel_update#preparejsparam2-preparejsparam7{连接名称} 连接名称]]
PREPAREJSPARAM7 --> DEACTION5
DEACTION5 --> END1
PREPAREJSPARAM2 --> PREPAREJSPARAM6 : [[$./attention_personnel_update#preparejsparam2-preparejsparam6{连接名称} 连接名称]]
PREPAREJSPARAM6 --> DEACTION6
DEACTION6 --> END1
PREPAREJSPARAM2 --> PREPAREJSPARAM8 : [[$./attention_personnel_update#preparejsparam2-preparejsparam8{连接名称} 连接名称]]
PREPAREJSPARAM8 --> DEACTION7
DEACTION7 --> END1


@enduml
```


### 处理步骤说明

#### 开始 :id=Begin




#### 保存关注人数据 :id=DEACTION1



调用实体 [工作项(WORK_ITEM)](module/ProjMgmt/Work_item.md) 行为 [Update](module/ProjMgmt/Work_item#行为) ，行为参数为`commit_object(提交对象)`

#### 保存关注人数据 :id=DEACTION6



调用实体 [执行用例(RUN)](module/TestMgmt/Run.md) 行为 [Update](module/TestMgmt/Run#行为) ，行为参数为`commit_object(提交对象)`

#### 保存关注人数据 :id=DEACTION3



调用实体 [工单(TICKET)](module/ProdMgmt/Ticket.md) 行为 [Update](module/ProdMgmt/Ticket#行为) ，行为参数为`commit_object(提交对象)`

#### 获取关注人员 :id=PREPAREJSPARAM2



1. 将`view(当前视图对象).layoutPanel.panelItems.container_attention` 绑定给  `attention_container(关注人容器对象)`
2. 将`attention_container(关注人容器对象).panelItems.attentions.value` 设置给  `commit_object(提交对象).attentions`

#### 工单 :id=PREPAREJSPARAM4



1. 将`ctx(应用上下文).ticket` 设置给  `commit_object(提交对象).id`

#### 保存关注人数据 :id=DEACTION4



调用实体 [客户(CUSTOMER)](module/ProdMgmt/Customer.md) 行为 [Update](module/ProdMgmt/Customer#行为) ，行为参数为`commit_object(提交对象)`

#### 需求 :id=PREPAREJSPARAM3



1. 将`ctx(应用上下文).idea` 设置给  `commit_object(提交对象).id`

#### 工作项 :id=PREPAREJSPARAM1



1. 将`ctx(应用上下文).work_item` 设置给  `commit_object(提交对象).id`

#### 保存关注人信息 :id=DEACTION7



调用实体 [页面(PAGE)](module/Wiki/Article_page.md) 行为 [Update](module/Wiki/Article_page#行为) ，行为参数为`commit_object(提交对象)`

#### 保存关注人数据 :id=DEACTION5



调用实体 [用例(TEST_CASE)](module/TestMgmt/Test_case.md) 行为 [Update](module/TestMgmt/Test_case#行为) ，行为参数为`commit_object(提交对象)`

#### 页面 :id=PREPAREJSPARAM8



1. 将`ctx(应用上下文).article_page` 设置给  `commit_object(提交对象).id`

#### 测试用例 :id=PREPAREJSPARAM7



1. 将`ctx(应用上下文).test_case` 设置给  `commit_object(提交对象).id`

#### 结束 :id=END1




#### 执行用例 :id=PREPAREJSPARAM6



1. 将`ctx(应用上下文).run` 设置给  `commit_object(提交对象).id`

#### 保存关注人数据 :id=DEACTION2



调用实体 [需求(IDEA)](module/ProdMgmt/Idea.md) 行为 [Update](module/ProdMgmt/Idea#行为) ，行为参数为`commit_object(提交对象)`

#### 客户 :id=PREPAREJSPARAM5



1. 将`ctx(应用上下文).customer` 设置给  `commit_object(提交对象).id`

### 连接条件说明
#### 连接名称 :id=PREPAREJSPARAM2-PREPAREJSPARAM1

```ctx(应用上下文).work_item``` ISNOTNULL
#### 连接名称 :id=PREPAREJSPARAM2-PREPAREJSPARAM3

```ctx(应用上下文).idea``` ISNOTNULL
#### 连接名称 :id=PREPAREJSPARAM2-PREPAREJSPARAM4

```ctx(应用上下文).ticket``` ISNOTNULL
#### 连接名称 :id=PREPAREJSPARAM2-PREPAREJSPARAM5

```ctx(应用上下文).customer``` ISNOTNULL
#### 连接名称 :id=PREPAREJSPARAM2-PREPAREJSPARAM7

```ctx(应用上下文).test_case``` ISNOTNULL
#### 连接名称 :id=PREPAREJSPARAM2-PREPAREJSPARAM6

```ctx(应用上下文).run``` ISNOTNULL
#### 连接名称 :id=PREPAREJSPARAM2-PREPAREJSPARAM8

```ctx(应用上下文).article_page``` ISNOTNULL


### 实体逻辑参数

|    中文名   |    代码名    |  数据类型      |备注 |
| --------| --------| --------  | --------   |
|提交对象|commit_object|数据对象||
|应用上下文|ctx|导航视图参数绑定参数||
|当前视图对象|view|当前视图对象||
|传入变量(<i class="fa fa-check"/></i>)|Default|数据对象||
|关注人容器对象|attention_container|数据对象||
