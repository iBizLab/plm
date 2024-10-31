## 发布时间(END_AT) <!-- {docsify-ignore-all} -->

   

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
state "[条件组]OR" as 02360a17e60569921253f553c1cae64d [[$./end_at#a02360a17e60569921253f553c1cae64d {"[条件组]OR"}]] {
state " " as 02360a17e60569921253f553c1cae64d_entry  <<entryPoint>>
state "(END_AT) 值为空(Nil)" as a1d20a5832624074e3c5f9c855d54cff [[$./end_at#aa1d20a5832624074e3c5f9c855d54cff {"[常规条件] 值为空(Nil)"}]]
state "[条件组]OR" as 2e203f4336ef84bb18d2346052ab0d6b [[$./end_at#a2e203f4336ef84bb18d2346052ab0d6b {"[条件组]OR"}]] {
state " " as 2e203f4336ef84bb18d2346052ab0d6b_entry  <<entryPoint>>
state "(END_AT) 大于等于(>=) 数据对象属性 (START_AT)" as b49b886499f640900274320c42a73e57 [[$./end_at#ab49b886499f640900274320c42a73e57 {"[常规条件] 大于等于(>=) 数据对象属性 (START_AT)"}]]
state "(START_AT) 值为空(Nil)" as 893aab4a0d3ca26514c8a1cb251127b7 [[$./end_at#a893aab4a0d3ca26514c8a1cb251127b7 {"[常规条件] 值为空(Nil)"}]]
state " " as 2e203f4336ef84bb18d2346052ab0d6b_exit  <<exitPoint>>
}
state " " as 02360a17e60569921253f553c1cae64d_exit  <<exitPoint>>
}


start --> 02360a17e60569921253f553c1cae64d_entry 
02360a17e60569921253f553c1cae64d_entry --> a1d20a5832624074e3c5f9c855d54cff 
a1d20a5832624074e3c5f9c855d54cff --> 02360a17e60569921253f553c1cae64d_exit  : yes
a1d20a5832624074e3c5f9c855d54cff -[#red]-> 2e203f4336ef84bb18d2346052ab0d6b_entry  : no

2e203f4336ef84bb18d2346052ab0d6b_entry --> b49b886499f640900274320c42a73e57 
b49b886499f640900274320c42a73e57 --> 2e203f4336ef84bb18d2346052ab0d6b_exit  : yes
b49b886499f640900274320c42a73e57 -[#red]-> 893aab4a0d3ca26514c8a1cb251127b7  : no

893aab4a0d3ca26514c8a1cb251127b7 --> 2e203f4336ef84bb18d2346052ab0d6b_exit  : yes
893aab4a0d3ca26514c8a1cb251127b7 -[#red]-> end  : no
2e203f4336ef84bb18d2346052ab0d6b_exit --> 02360a17e60569921253f553c1cae64d_exit 
02360a17e60569921253f553c1cae64d_exit --> end 


@enduml
```

#### 条件说明

##### (START_AT) 值为空(Nil) :id=a893aab4a0d3ca26514c8a1cb251127b7



`START_AT(开始时间)` ISNULL 

##### (END_AT) 值为空(Nil) :id=aa1d20a5832624074e3c5f9c855d54cff



`END_AT(发布时间)` ISNULL 

##### (END_AT) 大于等于(>=) 数据对象属性 (START_AT) :id=ab49b886499f640900274320c42a73e57



`END_AT(发布时间)` GTANDEQ  `START_AT`

> [!ATTENTION|label:规则信息|icon:fa fa-warning]
> 发布时间必须大于等于开始时间







