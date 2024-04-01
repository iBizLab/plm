## 用户全局名(USERNAME) <!-- {docsify-ignore-all} -->

   

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
state "默认字符串长度" as 72c073a68b013452a612496b01472561 [[$./UserName#a72c073a68b013452a612496b01472561 {"默认字符串长度"}]]


start --> 72c073a68b013452a612496b01472561 
72c073a68b013452a612496b01472561 --> end 


@enduml
```

#### 条件说明

##### 默认字符串长度 :id=a72c073a68b013452a612496b01472561


*关键条件*


`USERNAME(用户全局名)` 属性长度在区间 `(0 , 100]` 内

> [!ATTENTION|label:规则信息|icon:fa fa-warning]
> 内容长度必须小于等于[100]







