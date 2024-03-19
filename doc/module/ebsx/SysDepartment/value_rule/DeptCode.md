## 部门代码(DEPTCODE) <!-- {docsify-ignore-all} -->

   

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
state "默认字符串长度" as 22d03a78cb88670e18302123de4e3cef [[$./DeptCode#a22d03a78cb88670e18302123de4e3cef {"默认字符串长度"}]]


start --> 22d03a78cb88670e18302123de4e3cef 
22d03a78cb88670e18302123de4e3cef --> end 


@enduml
```

#### 条件说明

##### 默认字符串长度 :id=a22d03a78cb88670e18302123de4e3cef


*关键条件*


`DEPTCODE(部门代码)` 属性长度在区间 `(0 , 100]` 内

> [!ATTENTION|label:规则信息|icon:fa fa-warning]
> 内容长度必须小于等于[100]







