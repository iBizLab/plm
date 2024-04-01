## 实体(PSDENAME) <!-- {docsify-ignore-all} -->

   

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
state "默认字符串长度" as 20a1fd9322cca846e3e074f4e8c0f8fc [[$./PSDEName#a20a1fd9322cca846e3e074f4e8c0f8fc {"默认字符串长度"}]]


start --> 20a1fd9322cca846e3e074f4e8c0f8fc 
20a1fd9322cca846e3e074f4e8c0f8fc --> end 


@enduml
```

#### 条件说明

##### 默认字符串长度 :id=a20a1fd9322cca846e3e074f4e8c0f8fc


*关键条件*


`PSDENAME(实体)` 属性长度在区间 `(0 , 100]` 内

> [!ATTENTION|label:规则信息|icon:fa fa-warning]
> 内容长度必须小于等于[100]







