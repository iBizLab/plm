## 结束时间(END_AT) <!-- {docsify-ignore-all} -->

   

### 结束时间 :id=END_AT

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
state "[条件组]OR" as e0c225cdfe6018e3334f735835a5a4e7 [[$./end_at#ae0c225cdfe6018e3334f735835a5a4e7 {"[条件组]OR"}]] {
state " " as e0c225cdfe6018e3334f735835a5a4e7_entry  <<entryPoint>>
state "(END_AT) 值为空(Nil)" as f46f1a289f91d8996d90e395e8fa2ddc [[$./end_at#af46f1a289f91d8996d90e395e8fa2ddc {"[常规条件] 值为空(Nil)"}]]
state "[条件组]OR" as 3f9a69a82aa789ba17832dddf6fcd2b7 [[$./end_at#a3f9a69a82aa789ba17832dddf6fcd2b7 {"[条件组]OR"}]] {
state " " as 3f9a69a82aa789ba17832dddf6fcd2b7_entry  <<entryPoint>>
state "(START_AT) 值为空(Nil)" as 6753fd76f95ab5ee0b28e01d60f9056e [[$./end_at#a6753fd76f95ab5ee0b28e01d60f9056e {"[常规条件] 值为空(Nil)"}]]
state "(END_AT) 大于等于(>=) 数据对象属性 (START_AT)" as e2562a9642cf9a0fe83c1d31917128c4 [[$./end_at#ae2562a9642cf9a0fe83c1d31917128c4 {"[常规条件] 大于等于(>=) 数据对象属性 (START_AT)"}]]
state " " as 3f9a69a82aa789ba17832dddf6fcd2b7_exit  <<exitPoint>>
}
state " " as e0c225cdfe6018e3334f735835a5a4e7_exit  <<exitPoint>>
}


start --> e0c225cdfe6018e3334f735835a5a4e7_entry 
e0c225cdfe6018e3334f735835a5a4e7_entry --> f46f1a289f91d8996d90e395e8fa2ddc 
f46f1a289f91d8996d90e395e8fa2ddc --> e0c225cdfe6018e3334f735835a5a4e7_exit  : yes
f46f1a289f91d8996d90e395e8fa2ddc -[#red]-> 3f9a69a82aa789ba17832dddf6fcd2b7_entry  : no

3f9a69a82aa789ba17832dddf6fcd2b7_entry --> 6753fd76f95ab5ee0b28e01d60f9056e 
6753fd76f95ab5ee0b28e01d60f9056e --> 3f9a69a82aa789ba17832dddf6fcd2b7_exit  : yes
6753fd76f95ab5ee0b28e01d60f9056e -[#red]-> e2562a9642cf9a0fe83c1d31917128c4  : no

e2562a9642cf9a0fe83c1d31917128c4 --> 3f9a69a82aa789ba17832dddf6fcd2b7_exit  : yes
e2562a9642cf9a0fe83c1d31917128c4 -[#red]-> end  : no
3f9a69a82aa789ba17832dddf6fcd2b7_exit --> e0c225cdfe6018e3334f735835a5a4e7_exit 
e0c225cdfe6018e3334f735835a5a4e7_exit --> end 


@enduml
```

#### 条件说明

##### (END_AT) 大于等于(>=) 数据对象属性 (START_AT) :id=ae2562a9642cf9a0fe83c1d31917128c4



`END_AT(结束时间)` GTANDEQ  `START_AT`

> [!ATTENTION|label:规则信息|icon:fa fa-warning]
> 结束时间必须大于等于开始时间


##### (END_AT) 值为空(Nil) :id=af46f1a289f91d8996d90e395e8fa2ddc



`END_AT(结束时间)` ISNULL 

##### (START_AT) 值为空(Nil) :id=a6753fd76f95ab5ee0b28e01d60f9056e



`START_AT(开始时间)` ISNULL 






