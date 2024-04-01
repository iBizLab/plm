## 审计类型(AUDITTYPE) <!-- {docsify-ignore-all} -->

   

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
state "默认字符串长度" as cfef8b9d5378ec698d3aafea2aab1957 [[$./AuditType#acfef8b9d5378ec698d3aafea2aab1957 {"默认字符串长度"}]]


start --> cfef8b9d5378ec698d3aafea2aab1957 
cfef8b9d5378ec698d3aafea2aab1957 --> end 


@enduml
```

#### 条件说明

##### 默认字符串长度 :id=acfef8b9d5378ec698d3aafea2aab1957


*关键条件*


`AUDITTYPE(审计类型)` 属性长度在区间 `(0 , 100]` 内

> [!ATTENTION|label:规则信息|icon:fa fa-warning]
> 内容长度必须小于等于[100]







