## 联系电话(TELEPHONE_NUMBER) <!-- {docsify-ignore-all} -->

   

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
state "默认字符串长度" as d68534b0247e243886525088b4e8476e [[$./Telephone_number#ad68534b0247e243886525088b4e8476e {"默认字符串长度"}]]


start --> d68534b0247e243886525088b4e8476e 
d68534b0247e243886525088b4e8476e --> end 


@enduml
```

#### 条件说明

##### 默认字符串长度 :id=ad68534b0247e243886525088b4e8476e


*关键条件*


`TELEPHONE_NUMBER(联系电话)` 属性长度在区间 `(0 , 100]` 内

> [!ATTENTION|label:规则信息|icon:fa fa-warning]
> 内容长度必须小于等于[100]







