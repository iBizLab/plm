## 测试计划(PLAN_NAME) <!-- {docsify-ignore-all} -->

   

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
state "默认字符串长度" as 6c44f42d73e0d30ae1138f5d1ff9ccef [[$./PLAN_NAME#a6c44f42d73e0d30ae1138f5d1ff9ccef {"默认字符串长度"}]]


start --> 6c44f42d73e0d30ae1138f5d1ff9ccef 
6c44f42d73e0d30ae1138f5d1ff9ccef --> end 


@enduml
```

#### 条件说明

##### 默认字符串长度 :id=a6c44f42d73e0d30ae1138f5d1ff9ccef


*关键条件*


`PLAN_NAME(测试计划)` 属性长度在区间 `(0 , 200]` 内

> [!ATTENTION|label:规则信息|icon:fa fa-warning]
> 内容长度必须小于等于[200]







