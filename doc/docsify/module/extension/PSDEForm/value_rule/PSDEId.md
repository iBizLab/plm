## 实体(PSDEID) <!-- {docsify-ignore-all} -->

   

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
state "默认字符串长度" as 2684b7c0c3f62917f5a8c9e40366757b [[$./PSDEId#a2684b7c0c3f62917f5a8c9e40366757b {"默认字符串长度"}]]


start --> 2684b7c0c3f62917f5a8c9e40366757b 
2684b7c0c3f62917f5a8c9e40366757b --> end 


@enduml
```

#### 条件说明

##### 默认字符串长度 :id=a2684b7c0c3f62917f5a8c9e40366757b


*关键条件*


`PSDEID(实体)` 属性长度在区间 `(0 , 100]` 内

> [!ATTENTION|label:规则信息|icon:fa fa-warning]
> 内容长度必须小于等于[100]







