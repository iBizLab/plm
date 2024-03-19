## 负责人标识(ASSIGNEE_ID) <!-- {docsify-ignore-all} -->

   

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
state "默认字符串长度" as 0b5ac577993cc903c79e321f6c2c168c [[$./Assignee_id#a0b5ac577993cc903c79e321f6c2c168c {"默认字符串长度"}]]


start --> 0b5ac577993cc903c79e321f6c2c168c 
0b5ac577993cc903c79e321f6c2c168c --> end 


@enduml
```

#### 条件说明

##### 默认字符串长度 :id=a0b5ac577993cc903c79e321f6c2c168c


*关键条件*


`ASSIGNEE_ID(负责人标识)` 属性长度在区间 `(0 , 100]` 内

> [!ATTENTION|label:规则信息|icon:fa fa-warning]
> 内容长度必须小于等于[100]







