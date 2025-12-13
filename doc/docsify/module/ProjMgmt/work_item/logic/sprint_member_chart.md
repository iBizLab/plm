## 迭代成员工作项图表查询 <!-- {docsify-ignore-all} -->

   迭代成员工作项图表查询

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
state "开始" as Begin <<start>> [[$./sprint_member_chart#begin {"开始"}]]
state "准备工作项查询过滤器参数" as PREPAREPARAM1  [[$./sprint_member_chart#prepareparam1 {"准备工作项查询过滤器参数"}]]
state "查询此迭代中的工作项" as DEDATASET1  [[$./sprint_member_chart#dedataset1 {"查询此迭代中的工作项"}]]
state "结束" as END1 <<end>> [[$./sprint_member_chart#end1 {"结束"}]]
state "循环子调用" as LOOPSUBCALL1  [[$./sprint_member_chart#loopsubcall1 {"循环子调用"}]] #green {
state "负责人名称置为未分配" as PREPAREPARAM2  [[$./sprint_member_chart#prepareparam2 {"负责人名称置为未分配"}]]
}


Begin --> PREPAREPARAM1
PREPAREPARAM1 --> DEDATASET1
DEDATASET1 --> LOOPSUBCALL1
LOOPSUBCALL1 --> PREPAREPARAM2 : [[$./sprint_member_chart#loopsubcall1-prepareparam2{未分配} 未分配]]
LOOPSUBCALL1 --> END1


@enduml
```


### 处理步骤说明

#### 开始 :id=Begin<sup class="footnote-symbol"> <font color=gray size=1>[开始]</font></sup>



*- N/A*
#### 准备工作项查询过滤器参数 :id=PREPAREPARAM1<sup class="footnote-symbol"> <font color=gray size=1>[准备参数]</font></sup>



1. 将`Default(传入变量).sprint` 设置给  `Default(传入变量).n_sprint_id_eq`
2. 将`0` 设置给  `Default(传入变量).n_is_deleted_eq`
3. 将`Default(传入变量).project` 设置给  `Default(传入变量).n_project_id_eq`
4. 将`1000` 设置给  `Default(传入变量).size`

#### 查询此迭代中的工作项 :id=DEDATASET1<sup class="footnote-symbol"> <font color=gray size=1>[实体数据集]</font></sup>



调用实体 [工作项(WORK_ITEM)](module/ProjMgmt/work_item.md) 数据集合 [数据集(DEFAULT)](module/ProjMgmt/work_item#数据集合) ，查询参数为`Default(传入变量)`

将执行结果返回给参数`work_item_page(工作项分页查询结果变量)`

#### 循环子调用 :id=LOOPSUBCALL1<sup class="footnote-symbol"> <font color=gray size=1>[循环子调用]</font></sup>



循环参数`work_item_page(工作项分页查询结果变量)`，子循环参数使用`for_obj(循环临时变量)`
#### 负责人名称置为未分配 :id=PREPAREPARAM2<sup class="footnote-symbol"> <font color=gray size=1>[准备参数]</font></sup>



1. 将`未分配` 设置给  `for_obj(循环临时变量).ASSIGNEE_NAME(负责人)`

#### 结束 :id=END1<sup class="footnote-symbol"> <font color=gray size=1>[结束]</font></sup>



返回 `work_item_page(工作项分页查询结果变量)`


### 连接条件说明
#### 未分配 :id=LOOPSUBCALL1-PREPAREPARAM2

`for_obj(循环临时变量).ASSIGNEE_NAME(负责人)` ISNULL


### 实体逻辑参数

|    中文名   |    代码名    |  数据类型    |  实体   |备注 |
| --------| --------| -------- | -------- | --------   |
|传入变量(<i class="fa fa-check"/></i>)|Default|过滤器|||
|循环临时变量|for_obj|数据对象|[工作项(WORK_ITEM)](module/ProjMgmt/work_item.md)||
|工作项分页查询结果变量|work_item_page|分页查询|||
