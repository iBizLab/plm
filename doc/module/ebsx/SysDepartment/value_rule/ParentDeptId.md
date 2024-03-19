## 上级部门(PDEPTID) <!-- {docsify-ignore-all} -->

   

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
state "默认字符串长度" as 7e6a861987ac89162cb4c79709047c43 [[$./ParentDeptId#a7e6a861987ac89162cb4c79709047c43 {"默认字符串长度"}]]


start --> 7e6a861987ac89162cb4c79709047c43 
7e6a861987ac89162cb4c79709047c43 --> end 


@enduml
```

#### 条件说明

##### 默认字符串长度 :id=a7e6a861987ac89162cb4c79709047c43


*关键条件*


`PDEPTID(上级部门)` 属性长度在区间 `(0 , 100]` 内

> [!ATTENTION|label:规则信息|icon:fa fa-warning]
> 内容长度必须小于等于[100]







