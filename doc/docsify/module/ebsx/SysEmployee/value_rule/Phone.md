## 手机号(PHONE) <!-- {docsify-ignore-all} -->

   

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
state "默认字符串长度" as d43eb600ee013e9b4e14208a1424be60 [[$./Phone#ad43eb600ee013e9b4e14208a1424be60 {"默认字符串长度"}]]


start --> d43eb600ee013e9b4e14208a1424be60 
d43eb600ee013e9b4e14208a1424be60 --> end 


@enduml
```

#### 条件说明

##### 默认字符串长度 :id=ad43eb600ee013e9b4e14208a1424be60


*关键条件*


`PHONE(手机号)` 属性长度在区间 `(0 , 100]` 内

> [!ATTENTION|label:规则信息|icon:fa fa-warning]
> 内容长度必须小于等于[100]







