## 人员编号(EMPLOYEE_NUMBER) <!-- {docsify-ignore-all} -->

   

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
state "默认字符串长度" as 07dd884d385d2c6c7d2946dc5b97ed5f [[$./Employee_number#a07dd884d385d2c6c7d2946dc5b97ed5f {"默认字符串长度"}]]


start --> 07dd884d385d2c6c7d2946dc5b97ed5f 
07dd884d385d2c6c7d2946dc5b97ed5f --> end 


@enduml
```

#### 条件说明

##### 默认字符串长度 :id=a07dd884d385d2c6c7d2946dc5b97ed5f


*关键条件*


`EMPLOYEE_NUMBER(人员编号)` 属性长度在区间 `(0 , 100]` 内

> [!ATTENTION|label:规则信息|icon:fa fa-warning]
> 内容长度必须小于等于[100]







