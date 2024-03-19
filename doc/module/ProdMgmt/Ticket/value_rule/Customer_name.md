## 客户(CUSTOMER_NAME) <!-- {docsify-ignore-all} -->

   

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
state "默认字符串长度" as 48e1988ea3aa4cafc5c23f4f5a157239 [[$./Customer_name#a48e1988ea3aa4cafc5c23f4f5a157239 {"默认字符串长度"}]]


start --> 48e1988ea3aa4cafc5c23f4f5a157239 
48e1988ea3aa4cafc5c23f4f5a157239 --> end 


@enduml
```

#### 条件说明

##### 默认字符串长度 :id=a48e1988ea3aa4cafc5c23f4f5a157239


*关键条件*


`CUSTOMER_NAME(客户)` 属性长度在区间 `(0 , 500]` 内

> [!ATTENTION|label:规则信息|icon:fa fa-warning]
> 内容长度必须小于等于[500]







