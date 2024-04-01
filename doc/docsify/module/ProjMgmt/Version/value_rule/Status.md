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
state "默认字符串长度" as 690490b81a9e3a1274ebd6d336684e48 [[$./Status#a690490b81a9e3a1274ebd6d336684e48 {"默认字符串长度"}]]


start --> 690490b81a9e3a1274ebd6d336684e48 
690490b81a9e3a1274ebd6d336684e48 --> end 


@enduml
```

#### 条件说明

##### 默认字符串长度 :id=a690490b81a9e3a1274ebd6d336684e48


*关键条件*


`STATUS(状态)` 属性长度在区间 `(0 , 60]` 内

> [!ATTENTION|label:规则信息|icon:fa fa-warning]
> 内容长度必须小于等于[60]







