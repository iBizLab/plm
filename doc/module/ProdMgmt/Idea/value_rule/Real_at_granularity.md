## 计划时间周期单位(REAL_AT_GRANULARITY) <!-- {docsify-ignore-all} -->

   

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
state "默认字符串长度" as c63a4e8fbb8edff237b52ccc2dd72027 [[$./Real_at_granularity#ac63a4e8fbb8edff237b52ccc2dd72027 {"默认字符串长度"}]]


start --> c63a4e8fbb8edff237b52ccc2dd72027 
c63a4e8fbb8edff237b52ccc2dd72027 --> end 


@enduml
```

#### 条件说明

##### 默认字符串长度 :id=ac63a4e8fbb8edff237b52ccc2dd72027


*关键条件*


`REAL_AT_GRANULARITY(计划时间周期单位)` 属性长度在区间 `(0 , 60]` 内

> [!ATTENTION|label:规则信息|icon:fa fa-warning]
> 内容长度必须小于等于[60]







