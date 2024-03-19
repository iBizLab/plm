## 工作项标题(WORK_ITEM_TITLE) <!-- {docsify-ignore-all} -->

   

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
state "默认字符串长度" as 740a754a4171a45c05b654ffb91fbf27 [[$./Work_item_title#a740a754a4171a45c05b654ffb91fbf27 {"默认字符串长度"}]]


start --> 740a754a4171a45c05b654ffb91fbf27 
740a754a4171a45c05b654ffb91fbf27 --> end 


@enduml
```

#### 条件说明

##### 默认字符串长度 :id=a740a754a4171a45c05b654ffb91fbf27


*关键条件*


`WORK_ITEM_TITLE(工作项标题)` 属性长度在区间 `(0 , 100]` 内

> [!ATTENTION|label:规则信息|icon:fa fa-warning]
> 内容长度必须小于等于[100]







