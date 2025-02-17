## 填充表单 <!-- {docsify-ignore-all} -->

   

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
state "开始" as Begin <<start>> [[$./fill_idea_form#begin {"开始"}]]
state "结束" as END1 <<end>> [[$./fill_idea_form#end1 {"结束"}]]
state "准备参数" as PREPAREPARAM1  [[$./fill_idea_form#prepareparam1 {"准备参数"}]]
state "实体行为" as DEACTION1  [[$./fill_idea_form#deaction1 {"实体行为"}]]
state "准备参数" as PREPAREPARAM2  [[$./fill_idea_form#prepareparam2 {"准备参数"}]]


Begin --> PREPAREPARAM1 : [[$./fill_idea_form#begin-prepareparam1{需要填充} 需要填充]]
PREPAREPARAM1 --> DEACTION1 : [[$./fill_idea_form#prepareparam1-deaction1{连接名称} 连接名称]]
DEACTION1 --> PREPAREPARAM2
PREPAREPARAM2 --> END1


@enduml
```


### 处理步骤说明

#### 开始 :id=Begin<sup class="footnote-symbol"> <font color=gray size=1>[开始]</font></sup>



*- N/A*
#### 结束 :id=END1<sup class="footnote-symbol"> <font color=gray size=1>[结束]</font></sup>



返回 `draft_data(草稿数据)`

#### 准备参数 :id=PREPAREPARAM1<sup class="footnote-symbol"> <font color=gray size=1>[准备参数]</font></sup>



1. 将`Default(传入变量).fill_id` 设置给  `fill_obj(填充对象).ID(标识)`

#### 实体行为 :id=DEACTION1<sup class="footnote-symbol"> <font color=gray size=1>[实体行为]</font></sup>



调用实体 [需求(IDEA)](module/ProdMgmt/idea.md) 行为 [Get](module/ProdMgmt/idea#行为) ，行为参数为`fill_obj(填充对象)`

#### 准备参数 :id=PREPAREPARAM2<sup class="footnote-symbol"> <font color=gray size=1>[准备参数]</font></sup>



1. 将`fill_obj(填充对象).TITLE(标题)` 设置给  `Default(传入变量).TITLE(标题)`
2. 将`fill_obj(填充对象).DESCRIPTION(描述)` 设置给  `Default(传入变量).DESCRIPTION(描述)`


### 连接条件说明
#### 需要填充 :id=Begin-PREPAREPARAM1

`Default(传入变量).need_fill` EQ `true`
#### 连接名称 :id=PREPAREPARAM1-DEACTION1

`Default(传入变量).fill_type` EQ `idea`


### 实体逻辑参数

|    中文名   |    代码名    |  数据类型    |  实体   |备注 |
| --------| --------| -------- | -------- | --------   |
|传入变量(<i class="fa fa-check"/></i>)|Default|数据对象|[工单(TICKET)](module/ProdMgmt/ticket.md)||
|草稿数据|draft_data|数据对象|[工单(TICKET)](module/ProdMgmt/ticket.md)||
|填充对象|fill_obj|数据对象|[工单(TICKET)](module/ProdMgmt/ticket.md)||
