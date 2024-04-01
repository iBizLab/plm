## 部门领导标识(DEPTLEADERID) <!-- {docsify-ignore-all} -->

   

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
state "默认字符串长度" as 99b5aa690db6d2e739063b1252ff750e [[$./DeptLeaderId#a99b5aa690db6d2e739063b1252ff750e {"默认字符串长度"}]]


start --> 99b5aa690db6d2e739063b1252ff750e 
99b5aa690db6d2e739063b1252ff750e --> end 


@enduml
```

#### 条件说明

##### 默认字符串长度 :id=a99b5aa690db6d2e739063b1252ff750e


*关键条件*


`DEPTLEADERID(部门领导标识)` 属性长度在区间 `(0 , 500]` 内

> [!ATTENTION|label:规则信息|icon:fa fa-warning]
> 内容长度必须小于等于[500]







