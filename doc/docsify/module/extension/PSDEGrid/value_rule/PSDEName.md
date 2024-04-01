## 实体(PSDENAME) <!-- {docsify-ignore-all} -->

   

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
state "默认字符串长度" as de24a05c2ba77acc0953cdc901d98fdb [[$./PSDEName#ade24a05c2ba77acc0953cdc901d98fdb {"默认字符串长度"}]]


start --> de24a05c2ba77acc0953cdc901d98fdb 
de24a05c2ba77acc0953cdc901d98fdb --> end 


@enduml
```

#### 条件说明

##### 默认字符串长度 :id=ade24a05c2ba77acc0953cdc901d98fdb


*关键条件*


`PSDENAME(实体)` 属性长度在区间 `(0 , 100]` 内

> [!ATTENTION|label:规则信息|icon:fa fa-warning]
> 内容长度必须小于等于[100]







