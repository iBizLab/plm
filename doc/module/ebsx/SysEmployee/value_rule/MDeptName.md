## 主部门名称(MDEPTNAME) <!-- {docsify-ignore-all} -->

   

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
state "默认字符串长度" as 10ba578c6cc3a3ae388e8fa08cff8cb8 [[$./MDeptName#a10ba578c6cc3a3ae388e8fa08cff8cb8 {"默认字符串长度"}]]


start --> 10ba578c6cc3a3ae388e8fa08cff8cb8 
10ba578c6cc3a3ae388e8fa08cff8cb8 --> end 


@enduml
```

#### 条件说明

##### 默认字符串长度 :id=a10ba578c6cc3a3ae388e8fa08cff8cb8


*关键条件*


`MDEPTNAME(主部门名称)` 属性长度在区间 `(0 , 100]` 内

> [!ATTENTION|label:规则信息|icon:fa fa-warning]
> 内容长度必须小于等于[100]







