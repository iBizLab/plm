## 维护人(MAINTENANCE_NAME) <!-- {docsify-ignore-all} -->

   

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
state "默认字符串长度" as e04bed294d04a2dfa63473598dafe503 [[$./Maintenance_name#ae04bed294d04a2dfa63473598dafe503 {"默认字符串长度"}]]


start --> e04bed294d04a2dfa63473598dafe503 
e04bed294d04a2dfa63473598dafe503 --> end 


@enduml
```

#### 条件说明

##### 默认字符串长度 :id=ae04bed294d04a2dfa63473598dafe503


*关键条件*


`MAINTENANCE_NAME(维护人)` 属性长度在区间 `(0 , 100]` 内

> [!ATTENTION|label:规则信息|icon:fa fa-warning]
> 内容长度必须小于等于[100]







