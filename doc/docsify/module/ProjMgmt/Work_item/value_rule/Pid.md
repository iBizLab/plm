## 父标识(PID) <!-- {docsify-ignore-all} -->

   

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
state "默认字符串长度" as cb234813bf99aaff48f1176bc7901d3e [[$./Pid#acb234813bf99aaff48f1176bc7901d3e {"默认字符串长度"}]]


start --> cb234813bf99aaff48f1176bc7901d3e 
cb234813bf99aaff48f1176bc7901d3e --> end 


@enduml
```

#### 条件说明

##### 默认字符串长度 :id=acb234813bf99aaff48f1176bc7901d3e


*关键条件*


`PID(父标识)` 属性长度在区间 `(0 , 100]` 内

> [!ATTENTION|label:规则信息|icon:fa fa-warning]
> 内容长度必须小于等于[100]







