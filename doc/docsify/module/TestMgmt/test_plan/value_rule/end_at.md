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
state "[条件组]OR" as 46d1a7fe56617006510e73103e690f7d [[$./end_at#a46d1a7fe56617006510e73103e690f7d {"[条件组]OR"}]] {
state " " as 46d1a7fe56617006510e73103e690f7d_entry  <<entryPoint>>
state "(END_AT) 值为空(Nil)" as d5bfae8431f0cd3be66f7b41009de968 [[$./end_at#ad5bfae8431f0cd3be66f7b41009de968 {"[常规条件] 值为空(Nil)"}]]
state "[条件组]OR" as 1c372434305ea0970741f664dcdd0c25 [[$./end_at#a1c372434305ea0970741f664dcdd0c25 {"[条件组]OR"}]] {
state " " as 1c372434305ea0970741f664dcdd0c25_entry  <<entryPoint>>
state "(END_AT) 大于等于(>=) 数据对象属性 (START_AT)" as 65ca5aa643399624cba60ac1b55c4d30 [[$./end_at#a65ca5aa643399624cba60ac1b55c4d30 {"[常规条件] 大于等于(>=) 数据对象属性 (START_AT)"}]]
state "(START_AT) 值为空(Nil)" as 30d47303f36680969828c6933b9da872 [[$./end_at#a30d47303f36680969828c6933b9da872 {"[常规条件] 值为空(Nil)"}]]
state " " as 1c372434305ea0970741f664dcdd0c25_exit  <<exitPoint>>
}
state " " as 46d1a7fe56617006510e73103e690f7d_exit  <<exitPoint>>
}


start --> 46d1a7fe56617006510e73103e690f7d_entry 
46d1a7fe56617006510e73103e690f7d_entry --> d5bfae8431f0cd3be66f7b41009de968 
d5bfae8431f0cd3be66f7b41009de968 --> 46d1a7fe56617006510e73103e690f7d_exit  : yes
d5bfae8431f0cd3be66f7b41009de968 -[#red]-> 1c372434305ea0970741f664dcdd0c25_entry  : no

1c372434305ea0970741f664dcdd0c25_entry --> 65ca5aa643399624cba60ac1b55c4d30 
65ca5aa643399624cba60ac1b55c4d30 --> 1c372434305ea0970741f664dcdd0c25_exit  : yes
65ca5aa643399624cba60ac1b55c4d30 -[#red]-> 30d47303f36680969828c6933b9da872  : no

30d47303f36680969828c6933b9da872 --> 1c372434305ea0970741f664dcdd0c25_exit  : yes
30d47303f36680969828c6933b9da872 -[#red]-> end  : no
1c372434305ea0970741f664dcdd0c25_exit --> 46d1a7fe56617006510e73103e690f7d_exit 
46d1a7fe56617006510e73103e690f7d_exit --> end 


@enduml
```

#### 条件说明

##### (START_AT) 值为空(Nil) :id=a30d47303f36680969828c6933b9da872



`START_AT(计划开始)` ISNULL 

##### (END_AT) 值为空(Nil) :id=ad5bfae8431f0cd3be66f7b41009de968



`END_AT(计划结束)` ISNULL 

##### (END_AT) 大于等于(>=) 数据对象属性 (START_AT) :id=a65ca5aa643399624cba60ac1b55c4d30



`END_AT(计划结束)` GTANDEQ  `START_AT`

> [!ATTENTION|label:规则信息|icon:fa fa-warning]
> 发布时间必须大于等于开始时间







