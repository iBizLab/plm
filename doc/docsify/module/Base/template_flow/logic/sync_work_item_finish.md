## 同步父子工作项的完成状态 <!-- {docsify-ignore-all} -->

   同步父子工作项的完成状态

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
state "开始" as BEGIN_01 <<start>> [[$./sync_work_item_finish#begin_01 {"开始"}]]
state "设置子工作项过滤条件" as PREPAREPARAM_02  [[$./sync_work_item_finish#prepareparam_02 {"设置子工作项过滤条件"}]]
state "获取子工作项" as DEDATASET_01  [[$./sync_work_item_finish#dedataset_01 {"获取子工作项"}]]
state "结束" as END_01 <<end>> [[$./sync_work_item_finish#end_01 {"结束"}]]
state "准备参数" as PREPAREPARAM_03  [[$./sync_work_item_finish#prepareparam_03 {"准备参数"}]]
state "更新工作项状态" as DEACTION_02  [[$./sync_work_item_finish#deaction_02 {"更新工作项状态"}]]


BEGIN_01 --> PREPAREPARAM_02
PREPAREPARAM_02 --> DEDATASET_01
DEDATASET_01 --> PREPAREPARAM_03 : [[$./sync_work_item_finish#dedataset_01-prepareparam_03{子工作项状态全部为已完成或修复} 子工作项状态全部为已完成或修复]]
PREPAREPARAM_03 --> DEACTION_02
DEACTION_02 --> END_01


@enduml
```


### 处理步骤说明

#### 开始 :id=BEGIN_01<sup class="footnote-symbol"> <font color=gray size=1>[开始]</font></sup>



*- N/A*
#### 设置子工作项过滤条件 :id=PREPAREPARAM_02<sup class="footnote-symbol"> <font color=gray size=1>[准备参数]</font></sup>



1. 将`30,40` 设置给  `filter(子工作项过滤器).n_state_notin`
2. 将`default(属性变更工作项).PID(父标识)` 设置给  `filter(子工作项过滤器).n_pid_eq`

#### 获取子工作项 :id=DEDATASET_01<sup class="footnote-symbol"> <font color=gray size=1>[实体数据集]</font></sup>



调用实体 [工作项(WORK_ITEM)](module/ProjMgmt/work_item.md) 数据集合 [数据集(DEFAULT)](module/ProjMgmt/work_item#数据集合) ，查询参数为`filter(子工作项过滤器)`

将执行结果返回给参数`child_work_items(子工作项集合)`

#### 结束 :id=END_01<sup class="footnote-symbol"> <font color=gray size=1>[结束]</font></sup>



*- N/A*

#### 准备参数 :id=PREPAREPARAM_03<sup class="footnote-symbol"> <font color=gray size=1>[准备参数]</font></sup>



1. 将`default(属性变更工作项).PID(父标识)` 设置给  `parent_work_item(父工作项).ID(标识)`
2. 将`default(属性变更工作项).STATE(状态)` 设置给  `parent_work_item(父工作项).STATE(状态)`

#### 更新工作项状态 :id=DEACTION_02<sup class="footnote-symbol"> <font color=gray size=1>[实体行为]</font></sup>



调用实体 [工作项(WORK_ITEM)](module/ProjMgmt/work_item.md) 行为 [Update](module/ProjMgmt/work_item#行为) ，行为参数为`parent_work_item(父工作项)`


### 连接条件说明
#### 子工作项状态全部为已完成或修复 :id=DEDATASET_01-PREPAREPARAM_03

`child_work_items(子工作项集合).total` EQ `0`


### 实体逻辑参数

|    中文名   |    代码名    |  数据类型    |  实体   |备注 |
| --------| --------| -------- | -------- | --------   |
|子工作项集合|child_work_items|分页查询|||
|属性变更工作项|default|数据对象|[工作项(WORK_ITEM)](module/ProjMgmt/work_item.md)||
|子工作项过滤器|filter|过滤器|||
|父工作项|parent_work_item|数据对象|[工作项(WORK_ITEM)](module/ProjMgmt/work_item.md)||
