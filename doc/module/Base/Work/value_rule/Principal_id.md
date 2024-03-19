## 关联主体标识(PRINCIPAL_ID) <!-- {docsify-ignore-all} -->

   

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
state "默认字符串长度" as 1cd270879f3e7a7ee656d307ca79a85b [[$./Principal_id#a1cd270879f3e7a7ee656d307ca79a85b {"默认字符串长度"}]]


start --> 1cd270879f3e7a7ee656d307ca79a85b 
1cd270879f3e7a7ee656d307ca79a85b --> end 


@enduml
```

#### 条件说明

##### 默认字符串长度 :id=a1cd270879f3e7a7ee656d307ca79a85b


*关键条件*


`PRINCIPAL_ID(关联主体标识)` 属性长度在区间 `(0 , 100]` 内

> [!ATTENTION|label:规则信息|icon:fa fa-warning]
> 内容长度必须小于等于[100]







