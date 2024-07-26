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
state "[条件组]OR" as 04c96aed6dd41f5ffdac959847ed54aa [[$./end_at#a04c96aed6dd41f5ffdac959847ed54aa {"[条件组]OR"}]] {
state " " as 04c96aed6dd41f5ffdac959847ed54aa_entry  <<entryPoint>>
state "(END_AT) 值为空(Nil)" as 919a5ac4dda7d984365cc82608cac9a7 [[$./end_at#a919a5ac4dda7d984365cc82608cac9a7 {"[常规条件] 值为空(Nil)"}]]
state "[条件组]OR" as dff2cdbc3eff5370788fd606bceb75c2 [[$./end_at#adff2cdbc3eff5370788fd606bceb75c2 {"[条件组]OR"}]] {
state " " as dff2cdbc3eff5370788fd606bceb75c2_entry  <<entryPoint>>
state "(END_AT) 大于等于(>=) 数据对象属性 (START_AT)" as 876f518c423c2a0a23cf896af52c3431 [[$./end_at#a876f518c423c2a0a23cf896af52c3431 {"[常规条件] 大于等于(>=) 数据对象属性 (START_AT)"}]]
state "(START_AT) 值为空(Nil)" as 8e3fca521c7cb65218ccd7922dc9e9de [[$./end_at#a8e3fca521c7cb65218ccd7922dc9e9de {"[常规条件] 值为空(Nil)"}]]
state " " as dff2cdbc3eff5370788fd606bceb75c2_exit  <<exitPoint>>
}
state " " as 04c96aed6dd41f5ffdac959847ed54aa_exit  <<exitPoint>>
}


start --> 04c96aed6dd41f5ffdac959847ed54aa_entry 
04c96aed6dd41f5ffdac959847ed54aa_entry --> 919a5ac4dda7d984365cc82608cac9a7 
919a5ac4dda7d984365cc82608cac9a7 --> 04c96aed6dd41f5ffdac959847ed54aa_exit  : yes
919a5ac4dda7d984365cc82608cac9a7 -[#red]-> dff2cdbc3eff5370788fd606bceb75c2_entry  : no

dff2cdbc3eff5370788fd606bceb75c2_entry --> 876f518c423c2a0a23cf896af52c3431 
876f518c423c2a0a23cf896af52c3431 --> dff2cdbc3eff5370788fd606bceb75c2_exit  : yes
876f518c423c2a0a23cf896af52c3431 -[#red]-> 8e3fca521c7cb65218ccd7922dc9e9de  : no

8e3fca521c7cb65218ccd7922dc9e9de --> dff2cdbc3eff5370788fd606bceb75c2_exit  : yes
8e3fca521c7cb65218ccd7922dc9e9de -[#red]-> end  : no
dff2cdbc3eff5370788fd606bceb75c2_exit --> 04c96aed6dd41f5ffdac959847ed54aa_exit 
04c96aed6dd41f5ffdac959847ed54aa_exit --> end 


@enduml
```

#### 条件说明

##### (END_AT) 值为空(Nil) :id=a919a5ac4dda7d984365cc82608cac9a7



`END_AT(发布时间)` ISNULL 

##### (START_AT) 值为空(Nil) :id=a8e3fca521c7cb65218ccd7922dc9e9de



`START_AT(开始时间)` ISNULL 

##### (END_AT) 大于等于(>=) 数据对象属性 (START_AT) :id=a876f518c423c2a0a23cf896af52c3431



`END_AT(发布时间)` GTANDEQ  `START_AT`

> [!ATTENTION|label:规则信息|icon:fa fa-warning]
> 发布时间必须大于等于开始时间







