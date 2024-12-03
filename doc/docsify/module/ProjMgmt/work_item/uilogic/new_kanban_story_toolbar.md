## 新建用户故事（kanban）（工具栏） <!-- {docsify-ignore-all} -->

   获取首个代码表标识，并新建看板用户故事

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
state "开始" as Begin <<start>> [[$./new_kanban_story_toolbar#begin {开始}]]
state "结束" as END1 <<end>> [[$./new_kanban_story_toolbar#end1 {结束}]]
state "获取首个分组代码表标识" as PREPAREJSPARAM1  [[$./new_kanban_story_toolbar#preparejsparam1 {获取首个分组代码表标识}]]
state "新建看板用户故事" as DEUIACTION1  [[$./new_kanban_story_toolbar#deuiaction1 {新建看板用户故事}]]


Begin --> PREPAREJSPARAM1
PREPAREJSPARAM1 --> DEUIACTION1
DEUIACTION1 --> END1


@enduml
```


### 处理步骤说明

#### 开始 :id=Begin<sup class="footnote-symbol"> <font color=gray size=1>[开始]</font></sup>




#### 结束 :id=END1<sup class="footnote-symbol"> <font color=gray size=1>[结束]</font></sup>




#### 获取首个分组代码表标识 :id=PREPAREJSPARAM1<sup class="footnote-symbol"> <font color=gray size=1>[准备参数]</font></sup>



1. 将`kanban(看板).groupCodeListItems[0].value` 设置给  `Default(传入变量).srfgroup`

#### 新建看板用户故事 :id=DEUIACTION1<sup class="footnote-symbol"> <font color=gray size=1>[实体界面行为调用]</font></sup>



调用实体 [工作项(WORK_ITEM)](module/ProjMgmt/work_item.md) 界面行为 [新建用户故事（kanban动态）](module/ProjMgmt/work_item#界面行为) ，行为参数为`Default(传入变量)`



### 实体逻辑参数

|    中文名   |    代码名    |  数据类型      |备注 |
| --------| --------| --------  | --------   |
|看板|kanban|部件对象||
|传入变量(<i class="fa fa-check"/></i>)|Default|数据对象||
