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
state "[条件组]OR" as b708a6d8be7ce6255f4ee37a804d95cc [[$./end_at#ab708a6d8be7ce6255f4ee37a804d95cc {"[条件组]OR"}]] {
state " " as b708a6d8be7ce6255f4ee37a804d95cc_entry  <<entryPoint>>
state "(END_AT) 值为空(Nil)" as af46f9416d22511c68371e91b28fcdaa [[$./end_at#aaf46f9416d22511c68371e91b28fcdaa {"[常规条件] 值为空(Nil)"}]]
state "[条件组]OR" as 02360a17e60569921253f553c1cae64d [[$./end_at#a02360a17e60569921253f553c1cae64d {"[条件组]OR"}]] {
state " " as 02360a17e60569921253f553c1cae64d_entry  <<entryPoint>>
state "(START_AT) 值为空(Nil)" as a1d20a5832624074e3c5f9c855d54cff [[$./end_at#aa1d20a5832624074e3c5f9c855d54cff {"[常规条件] 值为空(Nil)"}]]
state "(END_AT) 大于等于(>=) 数据对象属性 (START_AT)" as fbef636d8b7ae821120316aee9589323 [[$./end_at#afbef636d8b7ae821120316aee9589323 {"[常规条件] 大于等于(>=) 数据对象属性 (START_AT)"}]]
state " " as 02360a17e60569921253f553c1cae64d_exit  <<exitPoint>>
}
state " " as b708a6d8be7ce6255f4ee37a804d95cc_exit  <<exitPoint>>
}


start --> b708a6d8be7ce6255f4ee37a804d95cc_entry 
b708a6d8be7ce6255f4ee37a804d95cc_entry --> af46f9416d22511c68371e91b28fcdaa 
af46f9416d22511c68371e91b28fcdaa --> b708a6d8be7ce6255f4ee37a804d95cc_exit  : yes
af46f9416d22511c68371e91b28fcdaa -[#red]-> 02360a17e60569921253f553c1cae64d_entry  : no

02360a17e60569921253f553c1cae64d_entry --> a1d20a5832624074e3c5f9c855d54cff 
a1d20a5832624074e3c5f9c855d54cff --> 02360a17e60569921253f553c1cae64d_exit  : yes
a1d20a5832624074e3c5f9c855d54cff -[#red]-> fbef636d8b7ae821120316aee9589323  : no

fbef636d8b7ae821120316aee9589323 --> 02360a17e60569921253f553c1cae64d_exit  : yes
fbef636d8b7ae821120316aee9589323 -[#red]-> end  : no
02360a17e60569921253f553c1cae64d_exit --> b708a6d8be7ce6255f4ee37a804d95cc_exit 
b708a6d8be7ce6255f4ee37a804d95cc_exit --> end 


@enduml
```

#### 条件说明

##### (END_AT) 值为空(Nil) :id=aaf46f9416d22511c68371e91b28fcdaa



`END_AT(结束时间)` ISNULL 

##### (END_AT) 大于等于(>=) 数据对象属性 (START_AT) :id=afbef636d8b7ae821120316aee9589323



`END_AT(结束时间)` GTANDEQ  `START_AT`

> [!ATTENTION|label:规则信息|icon:fa fa-warning]
> 结束时间必须大于等于开始时间


##### (START_AT) 值为空(Nil) :id=aa1d20a5832624074e3c5f9c855d54cff



`START_AT(开始时间)` ISNULL 






