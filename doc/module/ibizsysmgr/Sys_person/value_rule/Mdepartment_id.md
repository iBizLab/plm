## 主部门(MDEPARTMENT_ID) <!-- {docsify-ignore-all} -->

   

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
state "默认字符串长度" as c5177834f00965c4c874b2f39f963b27 [[$./Mdepartment_id#ac5177834f00965c4c874b2f39f963b27 {"默认字符串长度"}]]


start --> c5177834f00965c4c874b2f39f963b27 
c5177834f00965c4c874b2f39f963b27 --> end 


@enduml
```

#### 条件说明

##### 默认字符串长度 :id=ac5177834f00965c4c874b2f39f963b27


*关键条件*


`MDEPARTMENT_ID(主部门)` 属性长度在区间 `(0 , 100]` 内

> [!ATTENTION|label:规则信息|icon:fa fa-warning]
> 内容长度必须小于等于[100]







