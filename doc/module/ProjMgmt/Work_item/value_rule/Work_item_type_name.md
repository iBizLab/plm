## 工作项类型(WORK_ITEM_TYPE_NAME) <!-- {docsify-ignore-all} -->

   

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
state "默认字符串长度" as 954626dc56efb7dc38fc14113bad7cca [[$./Work_item_type_name#a954626dc56efb7dc38fc14113bad7cca {"默认字符串长度"}]]


start --> 954626dc56efb7dc38fc14113bad7cca 
954626dc56efb7dc38fc14113bad7cca --> end 


@enduml
```

#### 条件说明

##### 默认字符串长度 :id=a954626dc56efb7dc38fc14113bad7cca


*关键条件*


`WORK_ITEM_TYPE_NAME(工作项类型)` 属性长度在区间 `(0 , 200]` 内

> [!ATTENTION|label:规则信息|icon:fa fa-warning]
> 内容长度必须小于等于[200]







