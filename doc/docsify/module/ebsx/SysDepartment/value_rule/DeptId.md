## 部门标识(DEPTID) <!-- {docsify-ignore-all} -->

   

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
state "默认字符串长度" as a5bc9b0f8de9d3f16a5ef8eb199e0c5a [[$./DeptId#aa5bc9b0f8de9d3f16a5ef8eb199e0c5a {"默认字符串长度"}]]


start --> a5bc9b0f8de9d3f16a5ef8eb199e0c5a 
a5bc9b0f8de9d3f16a5ef8eb199e0c5a --> end 


@enduml
```

#### 条件说明

##### 默认字符串长度 :id=aa5bc9b0f8de9d3f16a5ef8eb199e0c5a


*关键条件*


`DEPTID(部门标识)` 属性长度在区间 `(0 , 100]` 内

> [!ATTENTION|label:规则信息|icon:fa fa-warning]
> 内容长度必须小于等于[100]







