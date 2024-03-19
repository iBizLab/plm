## 用户标识(USERID) <!-- {docsify-ignore-all} -->

   

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
state "默认字符串长度" as d99d6937e3299317d2923d362b2688fb [[$./UserId#ad99d6937e3299317d2923d362b2688fb {"默认字符串长度"}]]


start --> d99d6937e3299317d2923d362b2688fb 
d99d6937e3299317d2923d362b2688fb --> end 


@enduml
```

#### 条件说明

##### 默认字符串长度 :id=ad99d6937e3299317d2923d362b2688fb


*关键条件*


`USERID(用户标识)` 属性长度在区间 `(0 , 100]` 内

> [!ATTENTION|label:规则信息|icon:fa fa-warning]
> 内容长度必须小于等于[100]







