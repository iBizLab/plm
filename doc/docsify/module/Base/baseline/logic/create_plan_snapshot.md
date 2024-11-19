## 新建规划快照 <!-- {docsify-ignore-all} -->

   新建规划快照

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
state "开始" as Begin <<start>> [[$./create_plan_snapshot#begin {"开始"}]]
state "设置快照类型" as PREPAREPARAM8  [[$./create_plan_snapshot#prepareparam8 {"设置快照类型"}]]
state "设置基线状态" as PREPAREPARAM1  [[$./create_plan_snapshot#prepareparam1 {"设置基线状态"}]]
state "设置快照状态" as PREPAREPARAM2  [[$./create_plan_snapshot#prepareparam2 {"设置快照状态"}]]
state "创建规划快照" as DEACTION1  [[$./create_plan_snapshot#deaction1 {"创建规划快照"}]]
state "传入项目标识至查询过滤器" as PREPAREPARAM3  [[$./create_plan_snapshot#prepareparam3 {"传入项目标识至查询过滤器"}]]
state "获取指定项目下的所有工作项" as DEDATASET1  [[$./create_plan_snapshot#dedataset1 {"获取指定项目下的所有工作项"}]]
state "循环子调用" as LOOPSUBCALL1  [[$./create_plan_snapshot#loopsubcall1 {"循环子调用"}]] #green {
state "重置关联对象" as RESETPARAM1  [[$./create_plan_snapshot#resetparam1 {"重置关联对象"}]]
state "将工作项标识赋值于关联对象" as PREPAREPARAM4  [[$./create_plan_snapshot#prepareparam4 {"将工作项标识赋值于关联对象"}]]
state "关联对象版本标识" as PREPAREPARAM5  [[$./create_plan_snapshot#prepareparam5 {"关联对象版本标识"}]]
state "重置版本对象" as RESETPARAM2  [[$./create_plan_snapshot#resetparam2 {"重置版本对象"}]]
state "准备初始化版本属性" as PREPAREPARAM6  [[$./create_plan_snapshot#prepareparam6 {"准备初始化版本属性"}]]
state "修复初始化版本" as DEACTION2  [[$./create_plan_snapshot#deaction2 {"修复初始化版本"}]]
state "关联对象版本标识" as PREPAREPARAM7  [[$./create_plan_snapshot#prepareparam7 {"关联对象版本标识"}]]
state "建立快照关联工作项数据" as DEACTION3  [[$./create_plan_snapshot#deaction3 {"建立快照关联工作项数据"}]]
}


Begin --> PREPAREPARAM8
PREPAREPARAM8 --> PREPAREPARAM1 : [[$./create_plan_snapshot#prepareparam8-prepareparam1{选择同时建立基线} 选择同时建立基线]]
PREPAREPARAM1 --> DEACTION1
DEACTION1 --> PREPAREPARAM3
PREPAREPARAM3 --> DEDATASET1
DEDATASET1 --> LOOPSUBCALL1
LOOPSUBCALL1 --> RESETPARAM1
RESETPARAM1 --> PREPAREPARAM4
PREPAREPARAM4 --> PREPAREPARAM5 : [[$./create_plan_snapshot#prepareparam4-prepareparam5{工作项存在版本标识} 工作项存在版本标识]]
PREPAREPARAM5 --> DEACTION3
PREPAREPARAM4 --> RESETPARAM2
RESETPARAM2 --> PREPAREPARAM6
PREPAREPARAM6 --> DEACTION2
DEACTION2 --> PREPAREPARAM7
PREPAREPARAM7 --> DEACTION3
PREPAREPARAM8 --> PREPAREPARAM2 : [[$./create_plan_snapshot#prepareparam8-prepareparam2{未选择同时建立基线} 未选择同时建立基线]]
PREPAREPARAM2 --> DEACTION1


@enduml
```


### 处理步骤说明

#### 开始 :id=Begin<sup class="footnote-symbol"> <font color=gray size=1>[开始]</font></sup>



*- N/A*
#### 设置快照类型 :id=PREPAREPARAM8<sup class="footnote-symbol"> <font color=gray size=1>[准备参数]</font></sup>



1. 将`plan` 设置给  `Default(传入变量).TYPE(基线类型)`

#### 设置基线状态 :id=PREPAREPARAM1<sup class="footnote-symbol"> <font color=gray size=1>[准备参数]</font></sup>



1. 将`1` 设置给  `Default(传入变量).STATUS(状态)`

#### 设置快照状态 :id=PREPAREPARAM2<sup class="footnote-symbol"> <font color=gray size=1>[准备参数]</font></sup>



1. 将`3` 设置给  `Default(传入变量).STATUS(状态)`

#### 创建规划快照 :id=DEACTION1<sup class="footnote-symbol"> <font color=gray size=1>[实体行为]</font></sup>



调用实体 [基线(BASELINE)](module/Base/baseline.md) 行为 [Create](module/Base/baseline#行为) ，行为参数为`Default(传入变量)`

将执行结果返回给参数`Default(传入变量)`

#### 传入项目标识至查询过滤器 :id=PREPAREPARAM3<sup class="footnote-symbol"> <font color=gray size=1>[准备参数]</font></sup>



1. 将`Default(传入变量).OWNER_ID(所属数据标识)` 设置给  `work_item_filter(工作项查询过滤器).n_project_id_eq`
2. 将`10000` 设置给  `work_item_filter(工作项查询过滤器).size`

#### 获取指定项目下的所有工作项 :id=DEDATASET1<sup class="footnote-symbol"> <font color=gray size=1>[实体数据集]</font></sup>



调用实体 [工作项(WORK_ITEM)](module/ProjMgmt/work_item.md) 数据集合 [新建规划快照时查询工作项(plan_snapshot)](module/ProjMgmt/work_item#数据集合) ，查询参数为`work_item_filter(工作项查询过滤器)`

将执行结果返回给参数`work_item_page(工作项分页查询结果变量)`

#### 循环子调用 :id=LOOPSUBCALL1<sup class="footnote-symbol"> <font color=gray size=1>[循环子调用]</font></sup>



循环参数`work_item_page(工作项分页查询结果变量)`，子循环参数使用`for_temp_obj(工作项循环临时变量)`
#### 重置关联对象 :id=RESETPARAM1<sup class="footnote-symbol"> <font color=gray size=1>[重置参数]</font></sup>



重置参数```relation(关联对象)```
#### 将工作项标识赋值于关联对象 :id=PREPAREPARAM4<sup class="footnote-symbol"> <font color=gray size=1>[准备参数]</font></sup>



1. 将`for_temp_obj(工作项循环临时变量).ID(标识)` 设置给  `relation(关联对象).TARGET_ID(目标主体标识)`
2. 将`Default(传入变量).ID(标识)` 设置给  `relation(关联对象).PRINCIPAL_ID(关联主体标识)`
3. 将`work_item` 设置给  `relation(关联对象).TARGET_TYPE(关联目标类型)`
4. 将`baseline` 设置给  `relation(关联对象).PRINCIPAL_TYPE(关联主体类型)`

#### 关联对象版本标识 :id=PREPAREPARAM5<sup class="footnote-symbol"> <font color=gray size=1>[准备参数]</font></sup>



1. 将`for_temp_obj(工作项循环临时变量).CUR_VERSION_ID(当前版本标识)` 设置给  `relation(关联对象).TARGET_VERSION_ID(目标对象版本标识)`

#### 重置版本对象 :id=RESETPARAM2<sup class="footnote-symbol"> <font color=gray size=1>[重置参数]</font></sup>



重置参数```version(初始版本对象)```
#### 准备初始化版本属性 :id=PREPAREPARAM6<sup class="footnote-symbol"> <font color=gray size=1>[准备参数]</font></sup>



1. 将`for_temp_obj(工作项循环临时变量).ID(标识)` 设置给  `version(初始版本对象).OWNER_ID(所属数据标识)`
2. 将`初始化创建` 设置给  `version(初始版本对象).DESCRIPTION(描述)`
3. 将`WORK_ITEM` 设置给  `version(初始版本对象).OWNER_TYPE(所属数据对象)`
4. 将`v1` 设置给  `version(初始版本对象).NAME(名称)`

#### 修复初始化版本 :id=DEACTION2<sup class="footnote-symbol"> <font color=gray size=1>[实体行为]</font></sup>



调用实体 [版本(VERSION)](module/Base/version.md) 行为 [修复版本(FixCommit)](module/Base/version#行为) ，行为参数为`version(初始版本对象)`

将执行结果返回给参数`version(初始版本对象)`

#### 关联对象版本标识 :id=PREPAREPARAM7<sup class="footnote-symbol"> <font color=gray size=1>[准备参数]</font></sup>



1. 将`version(初始版本对象).ID(标识)` 设置给  `relation(关联对象).TARGET_VERSION_ID(目标对象版本标识)`

#### 建立快照关联工作项数据 :id=DEACTION3<sup class="footnote-symbol"> <font color=gray size=1>[实体行为]</font></sup>



调用实体 [关联(RELATION)](module/Base/relation.md) 行为 [Save](module/Base/relation#行为) ，行为参数为`relation(关联对象)`

将执行结果返回给参数`relation(关联对象)`


### 连接条件说明
#### 选择同时建立基线 :id=PREPAREPARAM8-PREPAREPARAM1

`Default(传入变量).set_baseline` ISNOTNULL
#### 工作项存在版本标识 :id=PREPAREPARAM4-PREPAREPARAM5

`for_temp_obj(工作项循环临时变量).CUR_VERSION_ID(当前版本标识)` ISNOTNULL
#### 未选择同时建立基线 :id=PREPAREPARAM8-PREPAREPARAM2

`Default(传入变量).set_baseline` ISNULL


### 实体逻辑参数

|    中文名   |    代码名    |  数据类型    |  实体   |备注 |
| --------| --------| -------- | -------- | --------   |
|传入变量(<i class="fa fa-check"/></i>)|Default|数据对象|[基线(BASELINE)](module/Base/baseline.md)||
|工作项循环临时变量|for_temp_obj|数据对象|[工作项(WORK_ITEM)](module/ProjMgmt/work_item.md)||
|关联对象|relation|数据对象|[关联(RELATION)](module/Base/relation.md)||
|初始版本对象|version|数据对象|[版本(VERSION)](module/Base/version.md)||
|工作项查询过滤器|work_item_filter|过滤器|||
|工作项分页查询结果变量|work_item_page|分页查询|||
