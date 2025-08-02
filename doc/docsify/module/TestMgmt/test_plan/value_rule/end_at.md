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
state "[条件组]OR" as c814f272a836f025698b10ad1cb7639e [[$./end_at#ac814f272a836f025698b10ad1cb7639e {"[条件组]OR"}]] {
state " " as c814f272a836f025698b10ad1cb7639e_entry  <<entryPoint>>
state "(END_AT) 值为空(Nil)" as ed044ac89fb5071beff5f9cbde298ee3 [[$./end_at#aed044ac89fb5071beff5f9cbde298ee3 {"[常规条件] 值为空(Nil)"}]]
state "[条件组]OR" as 92473f4a0c3b7280380e4562ae3af636 [[$./end_at#a92473f4a0c3b7280380e4562ae3af636 {"[条件组]OR"}]] {
state " " as 92473f4a0c3b7280380e4562ae3af636_entry  <<entryPoint>>
state "(END_AT) 大于等于(>=) 数据对象属性 (START_AT)" as 309032733041c64dd92e4ee3bd7e2812 [[$./end_at#a309032733041c64dd92e4ee3bd7e2812 {"[常规条件] 大于等于(>=) 数据对象属性 (START_AT)"}]]
state "(START_AT) 值为空(Nil)" as 60d051fc3c8048ecb9a4022f7f10aa02 [[$./end_at#a60d051fc3c8048ecb9a4022f7f10aa02 {"[常规条件] 值为空(Nil)"}]]
state " " as 92473f4a0c3b7280380e4562ae3af636_exit  <<exitPoint>>
}
state " " as c814f272a836f025698b10ad1cb7639e_exit  <<exitPoint>>
}


start --> c814f272a836f025698b10ad1cb7639e_entry 
c814f272a836f025698b10ad1cb7639e_entry --> ed044ac89fb5071beff5f9cbde298ee3 
ed044ac89fb5071beff5f9cbde298ee3 --> c814f272a836f025698b10ad1cb7639e_exit  : yes
ed044ac89fb5071beff5f9cbde298ee3 -[#red]-> 92473f4a0c3b7280380e4562ae3af636_entry  : no

92473f4a0c3b7280380e4562ae3af636_entry --> 309032733041c64dd92e4ee3bd7e2812 
309032733041c64dd92e4ee3bd7e2812 --> 92473f4a0c3b7280380e4562ae3af636_exit  : yes
309032733041c64dd92e4ee3bd7e2812 -[#red]-> 60d051fc3c8048ecb9a4022f7f10aa02  : no

60d051fc3c8048ecb9a4022f7f10aa02 --> 92473f4a0c3b7280380e4562ae3af636_exit  : yes
60d051fc3c8048ecb9a4022f7f10aa02 -[#red]-> end  : no
92473f4a0c3b7280380e4562ae3af636_exit --> c814f272a836f025698b10ad1cb7639e_exit 
c814f272a836f025698b10ad1cb7639e_exit --> end 


@enduml
```

#### 条件说明

##### (END_AT) 值为空(Nil) :id=aed044ac89fb5071beff5f9cbde298ee3



`END_AT(计划结束)` ISNULL 

##### (END_AT) 大于等于(>=) 数据对象属性 (START_AT) :id=a309032733041c64dd92e4ee3bd7e2812



`END_AT(计划结束)` GTANDEQ  `START_AT`

> [!ATTENTION|label:规则信息|icon:fa fa-warning]
> 发布时间必须大于等于开始时间


##### (START_AT) 值为空(Nil) :id=a60d051fc3c8048ecb9a4022f7f10aa02



`START_AT(计划开始)` ISNULL 






