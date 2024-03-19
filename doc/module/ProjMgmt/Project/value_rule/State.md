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
state "默认字符串长度" as b10c3752022407244b1f1e1a018cdcf1 [[$./State#ab10c3752022407244b1f1e1a018cdcf1 {"默认字符串长度"}]]


start --> b10c3752022407244b1f1e1a018cdcf1 
b10c3752022407244b1f1e1a018cdcf1 --> end 


@enduml
```

#### 条件说明

##### 默认字符串长度 :id=ab10c3752022407244b1f1e1a018cdcf1


*关键条件*


`STATE(状态)` 属性长度在区间 `(0 , 60]` 内

> [!ATTENTION|label:规则信息|icon:fa fa-warning]
> 内容长度必须小于等于[60]







