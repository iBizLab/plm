## 实际时间(REAL_AT) <!-- {docsify-ignore-all} -->

   

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
state "默认字符串长度" as f4fb92eede8c79693cca4b15bd6becc8 [[$./Real_at#af4fb92eede8c79693cca4b15bd6becc8 {"默认字符串长度"}]]


start --> f4fb92eede8c79693cca4b15bd6becc8 
f4fb92eede8c79693cca4b15bd6becc8 --> end 


@enduml
```

#### 条件说明

##### 默认字符串长度 :id=af4fb92eede8c79693cca4b15bd6becc8


*关键条件*


`REAL_AT(实际时间)` 属性长度在区间 `(0 , 100]` 内

> [!ATTENTION|label:规则信息|icon:fa fa-warning]
> 内容长度必须小于等于[100]







