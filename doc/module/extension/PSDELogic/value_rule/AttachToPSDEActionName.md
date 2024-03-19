## 附加到指定行为(ATTACHTOPSDEACTIONNAME) <!-- {docsify-ignore-all} -->

   

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
state "默认字符串长度" as cb3ac9e9f6b867b51bc3b5d7702b49be [[$./AttachToPSDEActionName#acb3ac9e9f6b867b51bc3b5d7702b49be {"默认字符串长度"}]]


start --> cb3ac9e9f6b867b51bc3b5d7702b49be 
cb3ac9e9f6b867b51bc3b5d7702b49be --> end 


@enduml
```

#### 条件说明

##### 默认字符串长度 :id=acb3ac9e9f6b867b51bc3b5d7702b49be


*关键条件*


`ATTACHTOPSDEACTIONNAME(附加到指定行为)` 属性长度在区间 `(0 , 100]` 内

> [!ATTENTION|label:规则信息|icon:fa fa-warning]
> 内容长度必须小于等于[100]







