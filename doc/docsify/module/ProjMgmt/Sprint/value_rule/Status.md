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
state "默认字符串长度" as 847c09406e33705f35970665f2eabad1 [[$./Status#a847c09406e33705f35970665f2eabad1 {"默认字符串长度"}]]


start --> 847c09406e33705f35970665f2eabad1 
847c09406e33705f35970665f2eabad1 --> end 


@enduml
```

#### 条件说明

##### 默认字符串长度 :id=a847c09406e33705f35970665f2eabad1


*关键条件*


`STATUS(状态)` 属性长度在区间 `(0 , 60]` 内

> [!ATTENTION|label:规则信息|icon:fa fa-warning]
> 内容长度必须小于等于[60]







