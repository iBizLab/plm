## 工作项类型(WORK_ITEM_TYPE_ID) <!-- {docsify-ignore-all} -->

   

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
state "默认字符串长度" as 55763d494bdaebc5d28b9d47c3f0aaad [[$./Work_item_type_id#a55763d494bdaebc5d28b9d47c3f0aaad {"默认字符串长度"}]]


start --> 55763d494bdaebc5d28b9d47c3f0aaad 
55763d494bdaebc5d28b9d47c3f0aaad --> end 


@enduml
```

#### 条件说明

##### 默认字符串长度 :id=a55763d494bdaebc5d28b9d47c3f0aaad


*关键条件*


`WORK_ITEM_TYPE_ID(工作项类型)` 属性长度在区间 `(0 , 100]` 内

> [!ATTENTION|label:规则信息|icon:fa fa-warning]
> 内容长度必须小于等于[100]







