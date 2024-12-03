## 归档 <!-- {docsify-ignore-all} -->

   未归档工作项数据的归档处理，修改工作项的归档状态为已归档，递归所有下级工作项

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
state "开始" as Begin <<start>> [[$./archive#begin {"开始"}]]
state "设置归档状态" as PREPAREPARAM2  [[$./archive#prepareparam2 {"设置归档状态"}]]
state "更新归档状态" as DEACTION1  [[$./archive#deaction1 {"更新归档状态"}]]
state "设置工作项过滤器参数" as PREPAREPARAM1  [[$./archive#prepareparam1 {"设置工作项过滤器参数"}]]
state "查询下级工作项" as DEDATASET1  [[$./archive#dedataset1 {"查询下级工作项"}]]
state "结束" as END1 <<end>> [[$./archive#end1 {"结束"}]]
state "循环子调用" as LOOPSUBCALL1  [[$./archive#loopsubcall1 {"循环子调用"}]] #green {
state "递归归档子工作项" as DELOGIC1  [[$./archive#delogic1 {"递归归档子工作项"}]]
}


Begin --> PREPAREPARAM2
PREPAREPARAM2 --> DEACTION1
DEACTION1 --> PREPAREPARAM1
PREPAREPARAM1 --> DEDATASET1
DEDATASET1 --> LOOPSUBCALL1 : [[$./archive#dedataset1-loopsubcall1{若存在子级工作项} 若存在子级工作项]]
LOOPSUBCALL1 --> DELOGIC1
LOOPSUBCALL1 --> END1
DEDATASET1 --> END1 : [[$./archive#dedataset1-end1{不存在子级工作项} 不存在子级工作项]]


@enduml
```


### 处理步骤说明

#### 开始 :id=Begin<sup class="footnote-symbol"> <font color=gray size=1>[开始]</font></sup>



*- N/A*
#### 设置归档状态 :id=PREPAREPARAM2<sup class="footnote-symbol"> <font color=gray size=1>[准备参数]</font></sup>



1. 将`1` 设置给  `Default(传入变量).IS_ARCHIVED(是否已归档)`

#### 更新归档状态 :id=DEACTION1<sup class="footnote-symbol"> <font color=gray size=1>[实体行为]</font></sup>



调用实体 [工作项(WORK_ITEM)](module/ProjMgmt/work_item.md) 行为 [Update](module/ProjMgmt/work_item#行为) ，行为参数为`Default(传入变量)`

#### 设置工作项过滤器参数 :id=PREPAREPARAM1<sup class="footnote-symbol"> <font color=gray size=1>[准备参数]</font></sup>



1. 将`Default(传入变量).ID(标识)` 设置给  `work_item_filter(工作项查询过滤器).n_pid_eq`

#### 查询下级工作项 :id=DEDATASET1<sup class="footnote-symbol"> <font color=gray size=1>[实体数据集]</font></sup>



调用实体 [工作项(WORK_ITEM)](module/ProjMgmt/work_item.md) 数据集合 [数据集(DEFAULT)](module/ProjMgmt/work_item#数据集合) ，查询参数为`work_item_filter(工作项查询过滤器)`

将执行结果返回给参数`work_item_page(工作项分页结果对象)`

#### 循环子调用 :id=LOOPSUBCALL1<sup class="footnote-symbol"> <font color=gray size=1>[循环子调用]</font></sup>



循环参数`work_item_page(工作项分页结果对象)`，子循环参数使用`for_temp_obj(循环临时变量)`
#### 递归归档子工作项 :id=DELOGIC1<sup class="footnote-symbol"> <font color=gray size=1>[实体逻辑]</font></sup>



调用实体 [工作项(WORK_ITEM)](module/ProjMgmt/work_item.md) 处理逻辑 [归档]((module/ProjMgmt/work_item/logic/archive.md)) ，行为参数为`for_temp_obj(循环临时变量)`

#### 结束 :id=END1<sup class="footnote-symbol"> <font color=gray size=1>[结束]</font></sup>



返回 `Default(传入变量)`


### 连接条件说明
#### 若存在子级工作项 :id=DEDATASET1-LOOPSUBCALL1

`work_item_page(工作项分页结果对象).size` GT `0`
#### 不存在子级工作项 :id=DEDATASET1-END1

`work_item_page(工作项分页结果对象).size` EQ `0`


### 实体逻辑参数

|    中文名   |    代码名    |  数据类型    |  实体   |备注 |
| --------| --------| -------- | -------- | --------   |
|传入变量(<i class="fa fa-check"/></i>)|Default|数据对象|[工作项(WORK_ITEM)](module/ProjMgmt/work_item.md)||
|循环临时变量|for_temp_obj|数据对象|[工作项(WORK_ITEM)](module/ProjMgmt/work_item.md)||
|工作项查询过滤器|work_item_filter|过滤器|||
|工作项分页结果对象|work_item_page|分页查询|||
