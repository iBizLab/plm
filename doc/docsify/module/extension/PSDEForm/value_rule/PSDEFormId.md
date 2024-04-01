## 实体表单标识(PSDEFORMID) <!-- {docsify-ignore-all} -->

   

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
state "默认字符串长度" as 84bd2ffe7c068e0e31598655008c4eff [[$./PSDEFormId#a84bd2ffe7c068e0e31598655008c4eff {"默认字符串长度"}]]


start --> 84bd2ffe7c068e0e31598655008c4eff 
84bd2ffe7c068e0e31598655008c4eff --> end 


@enduml
```

#### 条件说明

##### 默认字符串长度 :id=a84bd2ffe7c068e0e31598655008c4eff


*关键条件*


`PSDEFORMID(实体表单标识)` 属性长度在区间 `(0 , 100]` 内

> [!ATTENTION|label:规则信息|icon:fa fa-warning]
> 内容长度必须小于等于[100]







