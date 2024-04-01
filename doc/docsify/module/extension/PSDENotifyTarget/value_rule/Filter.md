## 过滤项(FILTER) <!-- {docsify-ignore-all} -->

   

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
state "默认字符串长度" as 926b8348ba3aed771b1daba39530f0fe [[$./Filter#a926b8348ba3aed771b1daba39530f0fe {"默认字符串长度"}]]


start --> 926b8348ba3aed771b1daba39530f0fe 
926b8348ba3aed771b1daba39530f0fe --> end 


@enduml
```

#### 条件说明

##### 默认字符串长度 :id=a926b8348ba3aed771b1daba39530f0fe


*关键条件*


`FILTER(过滤项)` 属性长度在区间 `(0 , 50]` 内

> [!ATTENTION|label:规则信息|icon:fa fa-warning]
> 内容长度必须小于等于[50]







