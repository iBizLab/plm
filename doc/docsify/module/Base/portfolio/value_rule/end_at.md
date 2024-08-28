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
state "[条件组]OR" as 949c35aa293864b5c392b66f3bb4f733 [[$./end_at#a949c35aa293864b5c392b66f3bb4f733 {"[条件组]OR"}]] {
state " " as 949c35aa293864b5c392b66f3bb4f733_entry  <<entryPoint>>
state "(END_AT) 值为空(Nil)" as 7a1ff8c9ed6b6b7c11b8dd0f1da4d3b7 [[$./end_at#a7a1ff8c9ed6b6b7c11b8dd0f1da4d3b7 {"[常规条件] 值为空(Nil)"}]]
state "[条件组]OR" as e2df421a673d7c2ce5317a7e6df4ebbd [[$./end_at#ae2df421a673d7c2ce5317a7e6df4ebbd {"[条件组]OR"}]] {
state " " as e2df421a673d7c2ce5317a7e6df4ebbd_entry  <<entryPoint>>
state "(START_AT) 值为空(Nil)" as d4de55e7c6502d440ce557ee7d1db7cb [[$./end_at#ad4de55e7c6502d440ce557ee7d1db7cb {"[常规条件] 值为空(Nil)"}]]
state "(END_AT) 大于等于(>=) 数据对象属性 (START_AT)" as 95c1dad890981e85a42ff007dac3a006 [[$./end_at#a95c1dad890981e85a42ff007dac3a006 {"[常规条件] 大于等于(>=) 数据对象属性 (START_AT)"}]]
state " " as e2df421a673d7c2ce5317a7e6df4ebbd_exit  <<exitPoint>>
}
state " " as 949c35aa293864b5c392b66f3bb4f733_exit  <<exitPoint>>
}


start --> 949c35aa293864b5c392b66f3bb4f733_entry 
949c35aa293864b5c392b66f3bb4f733_entry --> 7a1ff8c9ed6b6b7c11b8dd0f1da4d3b7 
7a1ff8c9ed6b6b7c11b8dd0f1da4d3b7 --> 949c35aa293864b5c392b66f3bb4f733_exit  : yes
7a1ff8c9ed6b6b7c11b8dd0f1da4d3b7 -[#red]-> e2df421a673d7c2ce5317a7e6df4ebbd_entry  : no

e2df421a673d7c2ce5317a7e6df4ebbd_entry --> d4de55e7c6502d440ce557ee7d1db7cb 
d4de55e7c6502d440ce557ee7d1db7cb --> e2df421a673d7c2ce5317a7e6df4ebbd_exit  : yes
d4de55e7c6502d440ce557ee7d1db7cb -[#red]-> 95c1dad890981e85a42ff007dac3a006  : no

95c1dad890981e85a42ff007dac3a006 --> e2df421a673d7c2ce5317a7e6df4ebbd_exit  : yes
95c1dad890981e85a42ff007dac3a006 -[#red]-> end  : no
e2df421a673d7c2ce5317a7e6df4ebbd_exit --> 949c35aa293864b5c392b66f3bb4f733_exit 
949c35aa293864b5c392b66f3bb4f733_exit --> end 


@enduml
```

#### 条件说明

##### (START_AT) 值为空(Nil) :id=ad4de55e7c6502d440ce557ee7d1db7cb



`START_AT(开始时间)` ISNULL 

##### (END_AT) 值为空(Nil) :id=a7a1ff8c9ed6b6b7c11b8dd0f1da4d3b7



`END_AT(结束时间)` ISNULL 

##### (END_AT) 大于等于(>=) 数据对象属性 (START_AT) :id=a95c1dad890981e85a42ff007dac3a006



`END_AT(结束时间)` GTANDEQ  `START_AT`

> [!ATTENTION|label:规则信息|icon:fa fa-warning]
> 结束时间必须大于等于开始时间







