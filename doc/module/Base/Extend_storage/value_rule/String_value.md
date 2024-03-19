## 文本值(STRING_VALUE) <!-- {docsify-ignore-all} -->

   

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
state "默认字符串长度" as 86a529a7f4f85f11945d5ff7b005b4c9 [[$./String_value#a86a529a7f4f85f11945d5ff7b005b4c9 {"默认字符串长度"}]]


start --> 86a529a7f4f85f11945d5ff7b005b4c9 
86a529a7f4f85f11945d5ff7b005b4c9 --> end 


@enduml
```

#### 条件说明

##### 默认字符串长度 :id=a86a529a7f4f85f11945d5ff7b005b4c9


*关键条件*


`STRING_VALUE(文本值)` 属性长度在区间 `(0 , 4000]` 内

> [!ATTENTION|label:规则信息|icon:fa fa-warning]
> 内容长度必须小于等于[4000]







