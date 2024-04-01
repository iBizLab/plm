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
state "默认字符串长度" as fdb924a6d24f8d06f082ba3713be2961 [[$./Work_item_title#afdb924a6d24f8d06f082ba3713be2961 {"默认字符串长度"}]]


start --> fdb924a6d24f8d06f082ba3713be2961 
fdb924a6d24f8d06f082ba3713be2961 --> end 


@enduml
```

#### 条件说明

##### 默认字符串长度 :id=afdb924a6d24f8d06f082ba3713be2961


*关键条件*


`WORK_ITEM_TITLE(工作项标题)` 属性长度在区间 `(0 , 100]` 内

> [!ATTENTION|label:规则信息|icon:fa fa-warning]
> 内容长度必须小于等于[100]







