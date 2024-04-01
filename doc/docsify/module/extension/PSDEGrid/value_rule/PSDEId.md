## 实体(PSDEID) <!-- {docsify-ignore-all} -->

   

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
state "默认字符串长度" as cb331585ad314dcf049a10c09384daa3 [[$./PSDEId#acb331585ad314dcf049a10c09384daa3 {"默认字符串长度"}]]


start --> cb331585ad314dcf049a10c09384daa3 
cb331585ad314dcf049a10c09384daa3 --> end 


@enduml
```

#### 条件说明

##### 默认字符串长度 :id=acb331585ad314dcf049a10c09384daa3


*关键条件*


`PSDEID(实体)` 属性长度在区间 `(0 , 100]` 内

> [!ATTENTION|label:规则信息|icon:fa fa-warning]
> 内容长度必须小于等于[100]







