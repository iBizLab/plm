## 部门编号(DEPARTMENT_NUMBER) <!-- {docsify-ignore-all} -->

   

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
state "默认字符串长度" as d5ba4f045134dca2992ec5376f376146 [[$./Department_number#ad5ba4f045134dca2992ec5376f376146 {"默认字符串长度"}]]


start --> d5ba4f045134dca2992ec5376f376146 
d5ba4f045134dca2992ec5376f376146 --> end 


@enduml
```

#### 条件说明

##### 默认字符串长度 :id=ad5ba4f045134dca2992ec5376f376146


*关键条件*


`DEPARTMENT_NUMBER(部门编号)` 属性长度在区间 `(0 , 100]` 内

> [!ATTENTION|label:规则信息|icon:fa fa-warning]
> 内容长度必须小于等于[100]







