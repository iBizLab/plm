## 发布时间变更附加逻辑 <!-- {docsify-ignore-all} -->

   更新最末发布阶段的时间

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
state "开始" as Begin <<start>> [[$./end_at_onchange#begin {"开始"}]]
state "填充更新发布对象标识" as PREPAREPARAM1  [[$./end_at_onchange#prepareparam1 {"填充更新发布对象标识"}]]
state "获取末发布阶段标识" as RAWSQLCALL1  [[$./end_at_onchange#rawsqlcall1 {"获取末发布阶段标识"}]]
state "获取末阶段对象" as DEACTION1  [[$./end_at_onchange#deaction1 {"获取末阶段对象"}]]
state "同步发布时间" as PREPAREPARAM2  [[$./end_at_onchange#prepareparam2 {"同步发布时间"}]]
state "将发布时间同步更新至末阶段时间" as DEACTION2  [[$./end_at_onchange#deaction2 {"将发布时间同步更新至末阶段时间"}]]
state "结束" as END1 <<end>> [[$./end_at_onchange#end1 {"结束"}]]


Begin --> PREPAREPARAM1
PREPAREPARAM1 --> RAWSQLCALL1
RAWSQLCALL1 --> DEACTION1
DEACTION1 --> PREPAREPARAM2
PREPAREPARAM2 --> DEACTION2
DEACTION2 --> END1


@enduml
```


### 处理步骤说明

#### 开始 :id=Begin<sup class="footnote-symbol"> <font color=gray size=1>[开始]</font></sup>



*- N/A*
#### 填充更新发布对象标识 :id=PREPAREPARAM1<sup class="footnote-symbol"> <font color=gray size=1>[准备参数]</font></sup>



1. 将`Default(传入变量).ID(标识)` 设置给  `update_obj(更新发布对象).ID(标识)`

#### 获取末发布阶段标识 :id=RAWSQLCALL1<sup class="footnote-symbol"> <font color=gray size=1>[直接SQL调用]</font></sup>



<p class="panel-title"><b>执行sql语句</b></p>

```sql
select  t1.`id` 
from `stage` t1, `stage` t2 
where  t1.`RELEASE_ID` = ?
and t1.`pid` = t2.`id` 
order by t2.`SEQUENCE` desc limit 1
```

<p class="panel-title"><b>执行sql参数</b></p>

1. `Default(传入变量).ID(标识)`

将执行sql结果赋值给参数`last_stage(末发布阶段)`

#### 获取末阶段对象 :id=DEACTION1<sup class="footnote-symbol"> <font color=gray size=1>[实体行为]</font></sup>



调用实体 [发布阶段(STAGE)](module/ProjMgmt/stage.md) 行为 [Get](module/ProjMgmt/stage#行为) ，行为参数为`last_stage(末发布阶段)`

将执行结果返回给参数`last_stage(末发布阶段)`

#### 同步发布时间 :id=PREPAREPARAM2<sup class="footnote-symbol"> <font color=gray size=1>[准备参数]</font></sup>



1. 将`Default(传入变量).END_AT(发布时间)` 设置给  `last_stage(末发布阶段).OPERATED_TIME(操作时间)`

#### 将发布时间同步更新至末阶段时间 :id=DEACTION2<sup class="footnote-symbol"> <font color=gray size=1>[实体行为]</font></sup>



调用实体 [发布阶段(STAGE)](module/ProjMgmt/stage.md) 行为 [Update](module/ProjMgmt/stage#行为) ，行为参数为`last_stage(末发布阶段)`

#### 结束 :id=END1<sup class="footnote-symbol"> <font color=gray size=1>[结束]</font></sup>



*- N/A*


### 连接条件说明
#### 发布时间和末阶段时间不一致 




### 实体逻辑参数

|    中文名   |    代码名    |  数据类型    |  实体   |备注 |
| --------| --------| -------- | -------- | --------   |
|传入变量(<i class="fa fa-check"/></i>)|Default|数据对象|[项目发布(RELEASE)](module/ProjMgmt/release.md)||
|末发布阶段|last_stage|数据对象|[发布阶段(STAGE)](module/ProjMgmt/stage.md)||
|更新发布对象|update_obj|数据对象|[项目发布(RELEASE)](module/ProjMgmt/release.md)||
