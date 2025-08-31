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
state "[条件组]OR" as 722674c3d11e603302106d1104383c34 [[$./end_at#a722674c3d11e603302106d1104383c34 {"[条件组]OR"}]] {
state " " as 722674c3d11e603302106d1104383c34_entry  <<entryPoint>>
state "(END_AT) 值为空(Nil)" as ae3a392d3fd7cea412260fdc8c320c95 [[$./end_at#aae3a392d3fd7cea412260fdc8c320c95 {"[常规条件] 值为空(Nil)"}]]
state "[条件组]OR" as c41c6c6476791a989f824c2091ef186a [[$./end_at#ac41c6c6476791a989f824c2091ef186a {"[条件组]OR"}]] {
state " " as c41c6c6476791a989f824c2091ef186a_entry  <<entryPoint>>
state "(START_AT) 值为空(Nil)" as 37f78e804fc3c4e54ded6b9a7cc943fe [[$./end_at#a37f78e804fc3c4e54ded6b9a7cc943fe {"[常规条件] 值为空(Nil)"}]]
state "(END_AT) 大于等于(>=) 数据对象属性 (START_AT)" as cbce4c37d28b6f3a9d8db75364924b92 [[$./end_at#acbce4c37d28b6f3a9d8db75364924b92 {"[常规条件] 大于等于(>=) 数据对象属性 (START_AT)"}]]
state " " as c41c6c6476791a989f824c2091ef186a_exit  <<exitPoint>>
}
state " " as 722674c3d11e603302106d1104383c34_exit  <<exitPoint>>
}


start --> 722674c3d11e603302106d1104383c34_entry 
722674c3d11e603302106d1104383c34_entry --> ae3a392d3fd7cea412260fdc8c320c95 
ae3a392d3fd7cea412260fdc8c320c95 --> 722674c3d11e603302106d1104383c34_exit  : yes
ae3a392d3fd7cea412260fdc8c320c95 -[#red]-> c41c6c6476791a989f824c2091ef186a_entry  : no

c41c6c6476791a989f824c2091ef186a_entry --> 37f78e804fc3c4e54ded6b9a7cc943fe 
37f78e804fc3c4e54ded6b9a7cc943fe --> c41c6c6476791a989f824c2091ef186a_exit  : yes
37f78e804fc3c4e54ded6b9a7cc943fe -[#red]-> cbce4c37d28b6f3a9d8db75364924b92  : no

cbce4c37d28b6f3a9d8db75364924b92 --> c41c6c6476791a989f824c2091ef186a_exit  : yes
cbce4c37d28b6f3a9d8db75364924b92 -[#red]-> end  : no
c41c6c6476791a989f824c2091ef186a_exit --> 722674c3d11e603302106d1104383c34_exit 
722674c3d11e603302106d1104383c34_exit --> end 


@enduml
```

#### 条件说明

##### (END_AT) 大于等于(>=) 数据对象属性 (START_AT) :id=acbce4c37d28b6f3a9d8db75364924b92



`END_AT(结束时间)` GTANDEQ  `START_AT`

> [!ATTENTION|label:规则信息|icon:fa fa-warning]
> 结束时间必须大于等于开始时间


##### (END_AT) 值为空(Nil) :id=aae3a392d3fd7cea412260fdc8c320c95



`END_AT(结束时间)` ISNULL 

##### (START_AT) 值为空(Nil) :id=a37f78e804fc3c4e54ded6b9a7cc943fe



`START_AT(开始时间)` ISNULL 






