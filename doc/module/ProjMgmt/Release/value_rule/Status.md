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
state "默认字符串长度" as 5f4fb9fc167fd0e058b8c1640eeb70cf [[$./Status#a5f4fb9fc167fd0e058b8c1640eeb70cf {"默认字符串长度"}]]


start --> 5f4fb9fc167fd0e058b8c1640eeb70cf 
5f4fb9fc167fd0e058b8c1640eeb70cf --> end 


@enduml
```

#### 条件说明

##### 默认字符串长度 :id=a5f4fb9fc167fd0e058b8c1640eeb70cf


*关键条件*


`STATUS(状态)` 属性长度在区间 `(0 , 60]` 内

> [!ATTENTION|label:规则信息|icon:fa fa-warning]
> 内容长度必须小于等于[60]







