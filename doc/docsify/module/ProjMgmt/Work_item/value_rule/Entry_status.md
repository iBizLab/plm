## 看板栏状态(ENTRY_STATUS) <!-- {docsify-ignore-all} -->

   

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
state "默认字符串长度" as 3761a8528fbe0c739112e4400da0f2e7 [[$./Entry_status#a3761a8528fbe0c739112e4400da0f2e7 {"默认字符串长度"}]]


start --> 3761a8528fbe0c739112e4400da0f2e7 
3761a8528fbe0c739112e4400da0f2e7 --> end 


@enduml
```

#### 条件说明

##### 默认字符串长度 :id=a3761a8528fbe0c739112e4400da0f2e7


*关键条件*


`ENTRY_STATUS(看板栏状态)` 属性长度在区间 `(0 , 100]` 内

> [!ATTENTION|label:规则信息|icon:fa fa-warning]
> 内容长度必须小于等于[100]







