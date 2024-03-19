## 测试用例标识(CASE_ID) <!-- {docsify-ignore-all} -->

   

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
state "默认字符串长度" as cbf3708907010c239cc87bc85bf251a9 [[$./Case_id#acbf3708907010c239cc87bc85bf251a9 {"默认字符串长度"}]]


start --> cbf3708907010c239cc87bc85bf251a9 
cbf3708907010c239cc87bc85bf251a9 --> end 


@enduml
```

#### 条件说明

##### 默认字符串长度 :id=acbf3708907010c239cc87bc85bf251a9


*关键条件*


`CASE_ID(测试用例标识)` 属性长度在区间 `(0 , 100]` 内

> [!ATTENTION|label:规则信息|icon:fa fa-warning]
> 内容长度必须小于等于[100]







