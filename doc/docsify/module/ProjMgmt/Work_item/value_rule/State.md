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
state "默认字符串长度" as 4ba7e5ff135a7a9e2247b186c7b38951 [[$./State#a4ba7e5ff135a7a9e2247b186c7b38951 {"默认字符串长度"}]]


start --> 4ba7e5ff135a7a9e2247b186c7b38951 
4ba7e5ff135a7a9e2247b186c7b38951 --> end 


@enduml
```

#### 条件说明

##### 默认字符串长度 :id=a4ba7e5ff135a7a9e2247b186c7b38951


*关键条件*


`STATE(状态)` 属性长度在区间 `(0 , 100]` 内

> [!ATTENTION|label:规则信息|icon:fa fa-warning]
> 内容长度必须小于等于[100]







