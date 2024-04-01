## 工作流版本名称(PSWFVERSIONNAME) <!-- {docsify-ignore-all} -->

   

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
state "默认字符串长度" as 2ccb8665cb45581b3f2e3b5602f8d3f2 [[$./PSWFVersionName#a2ccb8665cb45581b3f2e3b5602f8d3f2 {"默认字符串长度"}]]


start --> 2ccb8665cb45581b3f2e3b5602f8d3f2 
2ccb8665cb45581b3f2e3b5602f8d3f2 --> end 


@enduml
```

#### 条件说明

##### 默认字符串长度 :id=a2ccb8665cb45581b3f2e3b5602f8d3f2


*关键条件*


`PSWFVERSIONNAME(工作流版本名称)` 属性长度在区间 `(0 , 200]` 内

> [!ATTENTION|label:规则信息|icon:fa fa-warning]
> 内容长度必须小于等于[200]







