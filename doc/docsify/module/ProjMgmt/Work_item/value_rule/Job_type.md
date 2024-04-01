## 任务类别(JOB_TYPE) <!-- {docsify-ignore-all} -->

   

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
state "默认字符串长度" as 62e83f7624aca36e928cb95483547bd9 [[$./Job_type#a62e83f7624aca36e928cb95483547bd9 {"默认字符串长度"}]]


start --> 62e83f7624aca36e928cb95483547bd9 
62e83f7624aca36e928cb95483547bd9 --> end 


@enduml
```

#### 条件说明

##### 默认字符串长度 :id=a62e83f7624aca36e928cb95483547bd9


*关键条件*


`JOB_TYPE(任务类别)` 属性长度在区间 `(0 , 60]` 内

> [!ATTENTION|label:规则信息|icon:fa fa-warning]
> 内容长度必须小于等于[60]







