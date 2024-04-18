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
state "[条件组]OR" as df73e533dd1c80e8438723ce4571a3bd [[$./end_at#adf73e533dd1c80e8438723ce4571a3bd {"[条件组]OR"}]] {
state " " as df73e533dd1c80e8438723ce4571a3bd_entry  <<entryPoint>>
state "(END_AT) 值为空(Nil)" as 5debfe3974507cf627608ac1571e647f [[$./end_at#a5debfe3974507cf627608ac1571e647f {"[常规条件] 值为空(Nil)"}]]
state "[条件组]OR" as cb13820172f6c4252e8dce16a849cc74 [[$./end_at#acb13820172f6c4252e8dce16a849cc74 {"[条件组]OR"}]] {
state " " as cb13820172f6c4252e8dce16a849cc74_entry  <<entryPoint>>
state "(START_AT) 值为空(Nil)" as f75d1a7204b76e8af9b8c8e36ba79321 [[$./end_at#af75d1a7204b76e8af9b8c8e36ba79321 {"[常规条件] 值为空(Nil)"}]]
state "(END_AT) 大于等于(>=) 数据对象属性 (START_AT)" as b674b2d98d77969510f6e03eca1036cb [[$./end_at#ab674b2d98d77969510f6e03eca1036cb {"[常规条件] 大于等于(>=) 数据对象属性 (START_AT)"}]]
state " " as cb13820172f6c4252e8dce16a849cc74_exit  <<exitPoint>>
}
state " " as df73e533dd1c80e8438723ce4571a3bd_exit  <<exitPoint>>
}


start --> df73e533dd1c80e8438723ce4571a3bd_entry 
df73e533dd1c80e8438723ce4571a3bd_entry --> 5debfe3974507cf627608ac1571e647f 
5debfe3974507cf627608ac1571e647f --> df73e533dd1c80e8438723ce4571a3bd_exit  : yes
5debfe3974507cf627608ac1571e647f -[#red]-> cb13820172f6c4252e8dce16a849cc74_entry  : no

cb13820172f6c4252e8dce16a849cc74_entry --> f75d1a7204b76e8af9b8c8e36ba79321 
f75d1a7204b76e8af9b8c8e36ba79321 --> cb13820172f6c4252e8dce16a849cc74_exit  : yes
f75d1a7204b76e8af9b8c8e36ba79321 -[#red]-> b674b2d98d77969510f6e03eca1036cb  : no

b674b2d98d77969510f6e03eca1036cb --> cb13820172f6c4252e8dce16a849cc74_exit  : yes
b674b2d98d77969510f6e03eca1036cb -[#red]-> end  : no
cb13820172f6c4252e8dce16a849cc74_exit --> df73e533dd1c80e8438723ce4571a3bd_exit 
df73e533dd1c80e8438723ce4571a3bd_exit --> end 


@enduml
```

#### 条件说明

##### (END_AT) 值为空(Nil) :id=a5debfe3974507cf627608ac1571e647f



`END_AT(结束时间)` ISNULL 

##### (START_AT) 值为空(Nil) :id=af75d1a7204b76e8af9b8c8e36ba79321



`START_AT(开始时间)` ISNULL 

##### (END_AT) 大于等于(>=) 数据对象属性 (START_AT) :id=ab674b2d98d77969510f6e03eca1036cb



`END_AT(结束时间)` GTANDEQ  `START_AT`

> [!ATTENTION|label:规则信息|icon:fa fa-warning]
> 结束时间必须大于等于开始时间







