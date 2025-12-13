## 修复版本数据 <!-- {docsify-ignore-all} -->

   修复初始版本数据

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
state "开始" as Begin <<start>> [[$./fix_commit#begin {"开始"}]]
state "结束" as END1 <<end>> [[$./fix_commit#end1 {"结束"}]]
state "准备版本数据" as PREPAREPARAM1  [[$./fix_commit#prepareparam1 {"准备版本数据"}]]
state "修复版本" as DEACTION1  [[$./fix_commit#deaction1 {"修复版本"}]]


Begin --> PREPAREPARAM1
PREPAREPARAM1 --> DEACTION1
DEACTION1 --> END1


@enduml
```


### 处理步骤说明

#### 开始 :id=Begin<sup class="footnote-symbol"> <font color=gray size=1>[开始]</font></sup>



*- N/A*
#### 结束 :id=END1<sup class="footnote-symbol"> <font color=gray size=1>[结束]</font></sup>



*- N/A*

#### 准备版本数据 :id=PREPAREPARAM1<sup class="footnote-symbol"> <font color=gray size=1>[准备参数]</font></sup>



1. 将`Default(传入变量).ID(标识)` 设置给  `version(版本数据).OWNER_ID(所属数据标识)`
2. 将`WORK_ITEM` 设置给  `version(版本数据).OWNER_TYPE(所属数据对象)`

#### 修复版本 :id=DEACTION1<sup class="footnote-symbol"> <font color=gray size=1>[实体行为]</font></sup>



调用实体 [版本(VERSION)](module/Base/version.md) 行为 [修复版本(FixCommit)](module/Base/version#行为) ，行为参数为`version(版本数据)`



### 实体逻辑参数

|    中文名   |    代码名    |  数据类型    |  实体   |备注 |
| --------| --------| -------- | -------- | --------   |
|传入变量(<i class="fa fa-check"/></i>)|Default|数据对象|[工作项(WORK_ITEM)](module/ProjMgmt/work_item.md)||
|版本数据|version|数据对象|[版本(VERSION)](module/Base/version.md)||
