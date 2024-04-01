## 人员状态(STATE) <!-- {docsify-ignore-all} -->

   

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
state "默认字符串长度" as d772239c0d3703daa36d7fee3c69d5f1 [[$./State#ad772239c0d3703daa36d7fee3c69d5f1 {"默认字符串长度"}]]


start --> d772239c0d3703daa36d7fee3c69d5f1 
d772239c0d3703daa36d7fee3c69d5f1 --> end 


@enduml
```

#### 条件说明

##### 默认字符串长度 :id=ad772239c0d3703daa36d7fee3c69d5f1


*关键条件*


`STATE(人员状态)` 属性长度在区间 `(0 , 10]` 内

> [!ATTENTION|label:规则信息|icon:fa fa-warning]
> 内容长度必须小于等于[10]







