## 关联缺陷(WORK_ITEM_RELATIONS) <!-- {docsify-ignore-all} -->

   

### 默认规则 :id=Default

```plantuml
@startuml
hide empty description
<style>
root {
  HyperlinkColor #42b983
}
</style>

state "start" as start  <<start>>
state "end" as end <<end>>
state "默认字符串长度" as 583056835f8e4636b9f75a954b277d5a [[$./Work_item_relations#a583056835f8e4636b9f75a954b277d5a {"默认字符串长度"}]]


start --> 583056835f8e4636b9f75a954b277d5a 
583056835f8e4636b9f75a954b277d5a --> end 


@enduml
```

#### 条件说明

##### 默认字符串长度 :id=a583056835f8e4636b9f75a954b277d5a


*关键条件*


`WORK_ITEM_RELATIONS(关联缺陷)` 属性长度在区间 `(0 , 1048576]` 内

> [!ATTENTION|label:规则信息|icon:fa fa-warning]
> 内容长度必须小于等于[1048576]







