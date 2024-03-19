## 自定义条件(CUSTOMCOND) <!-- {docsify-ignore-all} -->

   

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
state "默认字符串长度" as 345a9e31d866f6d36da1b334172c1fc2 [[$./CustomCond#a345a9e31d866f6d36da1b334172c1fc2 {"默认字符串长度"}]]


start --> 345a9e31d866f6d36da1b334172c1fc2 
345a9e31d866f6d36da1b334172c1fc2 --> end 


@enduml
```

#### 条件说明

##### 默认字符串长度 :id=a345a9e31d866f6d36da1b334172c1fc2


*关键条件*


`CUSTOMCOND(自定义条件)` 属性长度在区间 `(0 , 2000]` 内

> [!ATTENTION|label:规则信息|icon:fa fa-warning]
> 内容长度必须小于等于[2000]







