## 状态(STATUS) <!-- {docsify-ignore-all} -->

   

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
state "默认字符串长度" as 1ef195357e3222c4ebce3e2d93a3fbd5 [[$./Status#a1ef195357e3222c4ebce3e2d93a3fbd5 {"默认字符串长度"}]]


start --> 1ef195357e3222c4ebce3e2d93a3fbd5 
1ef195357e3222c4ebce3e2d93a3fbd5 --> end 


@enduml
```

#### 条件说明

##### 默认字符串长度 :id=a1ef195357e3222c4ebce3e2d93a3fbd5


*关键条件*


`STATUS(状态)` 属性长度在区间 `(0 , 100]` 内

> [!ATTENTION|label:规则信息|icon:fa fa-warning]
> 内容长度必须小于等于[100]







