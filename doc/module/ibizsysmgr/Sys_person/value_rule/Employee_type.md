## 类型(EMPLOYEE_TYPE) <!-- {docsify-ignore-all} -->

   

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
state "默认字符串长度" as ece80ad4833b825f3fc4e49132cd20f8 [[$./Employee_type#aece80ad4833b825f3fc4e49132cd20f8 {"默认字符串长度"}]]


start --> ece80ad4833b825f3fc4e49132cd20f8 
ece80ad4833b825f3fc4e49132cd20f8 --> end 


@enduml
```

#### 条件说明

##### 默认字符串长度 :id=aece80ad4833b825f3fc4e49132cd20f8


*关键条件*


`EMPLOYEE_TYPE(类型)` 属性长度在区间 `(0 , 100]` 内

> [!ATTENTION|label:规则信息|icon:fa fa-warning]
> 内容长度必须小于等于[100]







