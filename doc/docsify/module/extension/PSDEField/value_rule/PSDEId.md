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
state "默认字符串长度" as fa3551639ae029ed6ca8215edde220b3 [[$./PSDEId#afa3551639ae029ed6ca8215edde220b3 {"默认字符串长度"}]]


start --> fa3551639ae029ed6ca8215edde220b3 
fa3551639ae029ed6ca8215edde220b3 --> end 


@enduml
```

#### 条件说明

##### 默认字符串长度 :id=afa3551639ae029ed6ca8215edde220b3


*关键条件*


`PSDEID(实体)` 属性长度在区间 `(0 , 100]` 内

> [!ATTENTION|label:规则信息|icon:fa fa-warning]
> 内容长度必须小于等于[100]







