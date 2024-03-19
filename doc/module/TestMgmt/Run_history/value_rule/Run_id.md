## 执行用例标识(RUN_ID) <!-- {docsify-ignore-all} -->

   

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
state "默认字符串长度" as 42d6911864257d7a5e55b7c2c8c847c1 [[$./Run_id#a42d6911864257d7a5e55b7c2c8c847c1 {"默认字符串长度"}]]


start --> 42d6911864257d7a5e55b7c2c8c847c1 
42d6911864257d7a5e55b7c2c8c847c1 --> end 


@enduml
```

#### 条件说明

##### 默认字符串长度 :id=a42d6911864257d7a5e55b7c2c8c847c1


*关键条件*


`RUN_ID(执行用例标识)` 属性长度在区间 `(0 , 100]` 内

> [!ATTENTION|label:规则信息|icon:fa fa-warning]
> 内容长度必须小于等于[100]







