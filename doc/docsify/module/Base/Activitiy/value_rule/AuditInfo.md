## 审计信息(AUDITINFO) <!-- {docsify-ignore-all} -->

   

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
state "默认字符串长度" as cd1eb1f105992e3114a2b0633c817bdf [[$./AuditInfo#acd1eb1f105992e3114a2b0633c817bdf {"默认字符串长度"}]]


start --> cd1eb1f105992e3114a2b0633c817bdf 
cd1eb1f105992e3114a2b0633c817bdf --> end 


@enduml
```

#### 条件说明

##### 默认字符串长度 :id=acd1eb1f105992e3114a2b0633c817bdf


*关键条件*


`AUDITINFO(审计信息)` 属性长度在区间 `(0 , 1048576]` 内

> [!ATTENTION|label:规则信息|icon:fa fa-warning]
> 内容长度必须小于等于[1048576]







