## 表单类型(FORMTYPE) <!-- {docsify-ignore-all} -->

   

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
state "默认字符串长度" as 95ce2c101bc552232f0adc2f9634a6bf [[$./FormType#a95ce2c101bc552232f0adc2f9634a6bf {"默认字符串长度"}]]


start --> 95ce2c101bc552232f0adc2f9634a6bf 
95ce2c101bc552232f0adc2f9634a6bf --> end 


@enduml
```

#### 条件说明

##### 默认字符串长度 :id=a95ce2c101bc552232f0adc2f9634a6bf


*关键条件*


`FORMTYPE(表单类型)` 属性长度在区间 `(0 , 20]` 内

> [!ATTENTION|label:规则信息|icon:fa fa-warning]
> 内容长度必须小于等于[20]







