## 状态(STATE) <!-- {docsify-ignore-all} -->

   

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
state "默认字符串长度" as c5988788bcf8d6e6f042d020a735c0ec [[$./State#ac5988788bcf8d6e6f042d020a735c0ec {"默认字符串长度"}]]


start --> c5988788bcf8d6e6f042d020a735c0ec 
c5988788bcf8d6e6f042d020a735c0ec --> end 


@enduml
```

#### 条件说明

##### 默认字符串长度 :id=ac5988788bcf8d6e6f042d020a735c0ec


*关键条件*


`STATE(状态)` 属性长度在区间 `(0 , 60]` 内

> [!ATTENTION|label:规则信息|icon:fa fa-warning]
> 内容长度必须小于等于[60]







