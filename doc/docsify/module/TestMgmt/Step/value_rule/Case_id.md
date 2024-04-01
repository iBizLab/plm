## 用例标识(CASE_ID) <!-- {docsify-ignore-all} -->

   

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
state "默认字符串长度" as 8dccccae4c7f23de54a1358150f5f3f8 [[$./Case_id#a8dccccae4c7f23de54a1358150f5f3f8 {"默认字符串长度"}]]


start --> 8dccccae4c7f23de54a1358150f5f3f8 
8dccccae4c7f23de54a1358150f5f3f8 --> end 


@enduml
```

#### 条件说明

##### 默认字符串长度 :id=a8dccccae4c7f23de54a1358150f5f3f8


*关键条件*


`CASE_ID(用例标识)` 属性长度在区间 `(0 , 100]` 内

> [!ATTENTION|label:规则信息|icon:fa fa-warning]
> 内容长度必须小于等于[100]







