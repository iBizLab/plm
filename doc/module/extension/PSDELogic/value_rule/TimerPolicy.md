## 定时触发策略(TIMERPOLICY) <!-- {docsify-ignore-all} -->

   

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
state "默认字符串长度" as c52ff517cc01226f4e88d15f2b8bbd0f [[$./TimerPolicy#ac52ff517cc01226f4e88d15f2b8bbd0f {"默认字符串长度"}]]


start --> c52ff517cc01226f4e88d15f2b8bbd0f 
c52ff517cc01226f4e88d15f2b8bbd0f --> end 


@enduml
```

#### 条件说明

##### 默认字符串长度 :id=ac52ff517cc01226f4e88d15f2b8bbd0f


*关键条件*


`TIMERPOLICY(定时触发策略)` 属性长度在区间 `(0 , 100]` 内

> [!ATTENTION|label:规则信息|icon:fa fa-warning]
> 内容长度必须小于等于[100]







