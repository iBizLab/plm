## 测试计划名称(TEST_PLAN_NAME) <!-- {docsify-ignore-all} -->

   

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
state "默认字符串长度" as 18ebd0ed485d3911dfb224d1070df03f [[$./Test_plan_name#a18ebd0ed485d3911dfb224d1070df03f {"默认字符串长度"}]]


start --> 18ebd0ed485d3911dfb224d1070df03f 
18ebd0ed485d3911dfb224d1070df03f --> end 


@enduml
```

#### 条件说明

##### 默认字符串长度 :id=a18ebd0ed485d3911dfb224d1070df03f


*关键条件*


`TEST_PLAN_NAME(测试计划名称)` 属性长度在区间 `(0 , 100]` 内

> [!ATTENTION|label:规则信息|icon:fa fa-warning]
> 内容长度必须小于等于[100]







