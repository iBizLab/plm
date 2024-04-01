## 维护人标识(MAINTENANCE_ID) <!-- {docsify-ignore-all} -->

   

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
state "默认字符串长度" as 0f28e118e0dd16a0bcb870e2bffa439e [[$./Maintenance_id#a0f28e118e0dd16a0bcb870e2bffa439e {"默认字符串长度"}]]


start --> 0f28e118e0dd16a0bcb870e2bffa439e 
0f28e118e0dd16a0bcb870e2bffa439e --> end 


@enduml
```

#### 条件说明

##### 默认字符串长度 :id=a0f28e118e0dd16a0bcb870e2bffa439e


*关键条件*


`MAINTENANCE_ID(维护人标识)` 属性长度在区间 `(0 , 100]` 内

> [!ATTENTION|label:规则信息|icon:fa fa-warning]
> 内容长度必须小于等于[100]







