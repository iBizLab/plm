## 泳道标识(SWIMLANE_ID) <!-- {docsify-ignore-all} -->

   

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
state "默认字符串长度" as d8ec0f51abc98f8e00b602166f8c80fe [[$./Swimlane_id#ad8ec0f51abc98f8e00b602166f8c80fe {"默认字符串长度"}]]


start --> d8ec0f51abc98f8e00b602166f8c80fe 
d8ec0f51abc98f8e00b602166f8c80fe --> end 


@enduml
```

#### 条件说明

##### 默认字符串长度 :id=ad8ec0f51abc98f8e00b602166f8c80fe


*关键条件*


`SWIMLANE_ID(泳道标识)` 属性长度在区间 `(0 , 100]` 内

> [!ATTENTION|label:规则信息|icon:fa fa-warning]
> 内容长度必须小于等于[100]







