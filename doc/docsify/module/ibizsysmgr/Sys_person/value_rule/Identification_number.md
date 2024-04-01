## 证件号(IDENTIFICATION_NUMBER) <!-- {docsify-ignore-all} -->

   

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
state "默认字符串长度" as 2bfc7e2e0dc0263c73ed65127a7afe9b [[$./Identification_number#a2bfc7e2e0dc0263c73ed65127a7afe9b {"默认字符串长度"}]]


start --> 2bfc7e2e0dc0263c73ed65127a7afe9b 
2bfc7e2e0dc0263c73ed65127a7afe9b --> end 


@enduml
```

#### 条件说明

##### 默认字符串长度 :id=a2bfc7e2e0dc0263c73ed65127a7afe9b


*关键条件*


`IDENTIFICATION_NUMBER(证件号)` 属性长度在区间 `(0 , 100]` 内

> [!ATTENTION|label:规则信息|icon:fa fa-warning]
> 内容长度必须小于等于[100]







