## 测试计划ID(TEST_PLAN_ID) <!-- {docsify-ignore-all} -->

   

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
state "默认字符串长度" as 906b68c1866726c3cfd970ae933018fa [[$./Test_plan_id#a906b68c1866726c3cfd970ae933018fa {"默认字符串长度"}]]


start --> 906b68c1866726c3cfd970ae933018fa 
906b68c1866726c3cfd970ae933018fa --> end 


@enduml
```

#### 条件说明

##### 默认字符串长度 :id=a906b68c1866726c3cfd970ae933018fa


*关键条件*


`TEST_PLAN_ID(测试计划ID)` 属性长度在区间 `(0 , 100]` 内

> [!ATTENTION|label:规则信息|icon:fa fa-warning]
> 内容长度必须小于等于[100]







