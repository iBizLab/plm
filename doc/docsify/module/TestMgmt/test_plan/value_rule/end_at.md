## 计划结束(END_AT) <!-- {docsify-ignore-all} -->

   

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
state "[条件组]OR" as 48132fb25b0df9f22ebcbd11b72c4076 [[$./end_at#a48132fb25b0df9f22ebcbd11b72c4076 {"[条件组]OR"}]] {
state " " as 48132fb25b0df9f22ebcbd11b72c4076_entry  <<entryPoint>>
state "(END_AT) 值为空(Nil)" as 2819b33b364dd978e5e8217f618f6a02 [[$./end_at#a2819b33b364dd978e5e8217f618f6a02 {"[常规条件] 值为空(Nil)"}]]
state "[条件组]OR" as f076173b10a468c335029742ae78be9f [[$./end_at#af076173b10a468c335029742ae78be9f {"[条件组]OR"}]] {
state " " as f076173b10a468c335029742ae78be9f_entry  <<entryPoint>>
state "(END_AT) 大于等于(>=) 数据对象属性 (START_AT)" as 5bdcc0b775d1cae46623d636ae9e2ba8 [[$./end_at#a5bdcc0b775d1cae46623d636ae9e2ba8 {"[常规条件] 大于等于(>=) 数据对象属性 (START_AT)"}]]
state "(START_AT) 值为空(Nil)" as 22165107d85264609a2ca813c5c563cb [[$./end_at#a22165107d85264609a2ca813c5c563cb {"[常规条件] 值为空(Nil)"}]]
state " " as f076173b10a468c335029742ae78be9f_exit  <<exitPoint>>
}
state " " as 48132fb25b0df9f22ebcbd11b72c4076_exit  <<exitPoint>>
}


start --> 48132fb25b0df9f22ebcbd11b72c4076_entry 
48132fb25b0df9f22ebcbd11b72c4076_entry --> 2819b33b364dd978e5e8217f618f6a02 
2819b33b364dd978e5e8217f618f6a02 --> 48132fb25b0df9f22ebcbd11b72c4076_exit  : yes
2819b33b364dd978e5e8217f618f6a02 -[#red]-> f076173b10a468c335029742ae78be9f_entry  : no

f076173b10a468c335029742ae78be9f_entry --> 5bdcc0b775d1cae46623d636ae9e2ba8 
5bdcc0b775d1cae46623d636ae9e2ba8 --> f076173b10a468c335029742ae78be9f_exit  : yes
5bdcc0b775d1cae46623d636ae9e2ba8 -[#red]-> 22165107d85264609a2ca813c5c563cb  : no

22165107d85264609a2ca813c5c563cb --> f076173b10a468c335029742ae78be9f_exit  : yes
22165107d85264609a2ca813c5c563cb -[#red]-> end  : no
f076173b10a468c335029742ae78be9f_exit --> 48132fb25b0df9f22ebcbd11b72c4076_exit 
48132fb25b0df9f22ebcbd11b72c4076_exit --> end 


@enduml
```

#### 条件说明

##### (END_AT) 大于等于(>=) 数据对象属性 (START_AT) :id=a5bdcc0b775d1cae46623d636ae9e2ba8



`END_AT(计划结束)` GTANDEQ  `START_AT`

> [!ATTENTION|label:规则信息|icon:fa fa-warning]
> 发布时间必须大于等于开始时间


##### (END_AT) 值为空(Nil) :id=a2819b33b364dd978e5e8217f618f6a02



`END_AT(计划结束)` ISNULL 

##### (START_AT) 值为空(Nil) :id=a22165107d85264609a2ca813c5c563cb



`START_AT(计划开始)` ISNULL 






