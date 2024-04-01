## 工单类型标识(TICKET_TYPE_ID) <!-- {docsify-ignore-all} -->

   

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
state "默认字符串长度" as d0c6ed60caacb8970a044828878ba94c [[$./Ticket_type_id#ad0c6ed60caacb8970a044828878ba94c {"默认字符串长度"}]]


start --> d0c6ed60caacb8970a044828878ba94c 
d0c6ed60caacb8970a044828878ba94c --> end 


@enduml
```

#### 条件说明

##### 默认字符串长度 :id=ad0c6ed60caacb8970a044828878ba94c


*关键条件*


`TICKET_TYPE_ID(工单类型标识)` 属性长度在区间 `(0 , 100]` 内

> [!ATTENTION|label:规则信息|icon:fa fa-warning]
> 内容长度必须小于等于[100]







