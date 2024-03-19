## 测试用例标识(CASE_ID) <!-- {docsify-ignore-all} -->

   

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
state "默认字符串长度" as 5f511070d16d2cc401c66b70ba7e4f4e [[$./Case_id#a5f511070d16d2cc401c66b70ba7e4f4e {"默认字符串长度"}]]


start --> 5f511070d16d2cc401c66b70ba7e4f4e 
5f511070d16d2cc401c66b70ba7e4f4e --> end 


@enduml
```

#### 条件说明

##### 默认字符串长度 :id=a5f511070d16d2cc401c66b70ba7e4f4e


*关键条件*


`CASE_ID(测试用例标识)` 属性长度在区间 `(0 , 100]` 内

> [!ATTENTION|label:规则信息|icon:fa fa-warning]
> 内容长度必须小于等于[100]







