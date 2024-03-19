## 目标状态(TO_STATE) <!-- {docsify-ignore-all} -->

   

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
state "默认字符串长度" as a6e8e3c88a46f3833ae0d266b478918e [[$./To_state#aa6e8e3c88a46f3833ae0d266b478918e {"默认字符串长度"}]]


start --> a6e8e3c88a46f3833ae0d266b478918e 
a6e8e3c88a46f3833ae0d266b478918e --> end 


@enduml
```

#### 条件说明

##### 默认字符串长度 :id=aa6e8e3c88a46f3833ae0d266b478918e


*关键条件*


`TO_STATE(目标状态)` 属性长度在区间 `(0 , 100]` 内

> [!ATTENTION|label:规则信息|icon:fa fa-warning]
> 内容长度必须小于等于[100]







