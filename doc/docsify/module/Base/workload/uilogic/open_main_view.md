## 工时打开对应事项详情视图 <!-- {docsify-ignore-all} -->

   链接跳转工作项/产品需求/测试用例详情主视图

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
state "获取工作项类型" as DEACTION1  [[$./open_main_view#deaction1 {获取工作项类型}]]
state "打开测试用例主视图" as DEUIACTION2  [[$./open_main_view#deuiaction2 {打开测试用例主视图}]]
state "打开产品需求主视图" as DEUIACTION3  [[$./open_main_view#deuiaction3 {打开产品需求主视图}]]
state "打开工作项主视图" as DEUIACTION1  [[$./open_main_view#deuiaction1 {打开工作项主视图}]]
state "上下文中填充项目和工作项" as PREPAREJSPARAM1  [[$./open_main_view#preparejsparam1 {上下文中填充项目和工作项}]]


Begin --> PREPAREJSPARAM1 : [[$./open_main_view#begin-preparejsparam1{工作项} 工作项]]
PREPAREJSPARAM1 --> DEACTION1
DEACTION1 --> DEUIACTION1
Begin --> DEUIACTION2 : [[$./open_main_view#begin-deuiaction2{测试用例} 测试用例]]
Begin --> DEUIACTION3 : [[$./open_main_view#begin-deuiaction3{产品需求} 产品需求]]


@enduml
```


### 处理步骤说明

#### 开始 :id=Begin<sup class="footnote-symbol"> <font color=gray size=1>[开始]</font></sup>




#### 上下文中填充项目和工作项 :id=PREPAREJSPARAM1<sup class="footnote-symbol"> <font color=gray size=1>[准备参数]</font></sup>



1. 将`Default(传入变量).recent_parent` 设置给  `ctx(上下文).project`
2. 将`Default(传入变量).principal_id` 设置给  `ctx(上下文).work_item`
3. 将`Default(传入变量).principal_id` 设置给  `work_item(工作项).id`

#### 打开测试用例主视图 :id=DEUIACTION2<sup class="footnote-symbol"> <font color=gray size=1>[实体界面行为调用]</font></sup>



调用实体 [工时(WORKLOAD)](module/Base/workload.md) 界面行为 [打开测试用例主视图](module/Base/workload#界面行为) ，行为参数为`Default(传入变量)`

#### 打开产品需求主视图 :id=DEUIACTION3<sup class="footnote-symbol"> <font color=gray size=1>[实体界面行为调用]</font></sup>



调用实体 [工时(WORKLOAD)](module/Base/workload.md) 界面行为 [打开产品需求主视图](module/Base/workload#界面行为) ，行为参数为`Default(传入变量)`

#### 获取工作项类型 :id=DEACTION1<sup class="footnote-symbol"> <font color=gray size=1>[实体行为]</font></sup>



调用实体 [工作项(WORK_ITEM)](module/ProjMgmt/work_item.md) 行为 [获取工作项类型(work_item_type_id)](module/ProjMgmt/work_item#行为) ，行为参数为`work_item(工作项)`

将执行结果返回给参数`work_item(工作项)`

#### 打开工作项主视图 :id=DEUIACTION1<sup class="footnote-symbol"> <font color=gray size=1>[实体界面行为调用]</font></sup>



调用实体 [工时(WORKLOAD)](module/Base/workload.md) 界面行为 [打开工作项主视图](module/Base/workload#界面行为) ，行为参数为`work_item(工作项)`

### 连接条件说明
#### 工作项 :id=Begin-PREPAREJSPARAM1

```Default(传入变量).principal_type``` EQ ```WORK_ITEM```
#### 测试用例 :id=Begin-DEUIACTION2

```Default(传入变量).principal_type``` EQ ```TEST_CASE```
#### 产品需求 :id=Begin-DEUIACTION3

```Default(传入变量).principal_type``` EQ ```IDEA```


### 实体逻辑参数

|    中文名   |    代码名    |  数据类型      |备注 |
| --------| --------| --------  | --------   |
|工作项|work_item|数据对象||
|上下文|ctx|导航视图参数绑定参数||
|传入变量(<i class="fa fa-check"/></i>)|Default|数据对象||
