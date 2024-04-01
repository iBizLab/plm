## 执行人标识(EXECUTOR_ID) <!-- {docsify-ignore-all} -->

   

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
state "默认字符串长度" as 24c60f138bd437d07117169702973a8f [[$./Executor_id#a24c60f138bd437d07117169702973a8f {"默认字符串长度"}]]


start --> 24c60f138bd437d07117169702973a8f 
24c60f138bd437d07117169702973a8f --> end 


@enduml
```

#### 条件说明

##### 默认字符串长度 :id=a24c60f138bd437d07117169702973a8f


*关键条件*


`EXECUTOR_ID(执行人标识)` 属性长度在区间 `(0 , 100]` 内

> [!ATTENTION|label:规则信息|icon:fa fa-warning]
> 内容长度必须小于等于[100]







