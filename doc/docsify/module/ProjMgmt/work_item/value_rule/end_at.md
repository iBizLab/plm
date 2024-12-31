## 截止时间(END_AT) <!-- {docsify-ignore-all} -->

   

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
state "[条件组]OR" as ebed3768be580c465fc762be13208ab8 [[$./end_at#aebed3768be580c465fc762be13208ab8 {"[条件组]OR"}]] {
state " " as ebed3768be580c465fc762be13208ab8_entry  <<entryPoint>>
state "(END_AT) 值为空(Nil)" as 8b7fac8143329df3cb5e3f38912349be [[$./end_at#a8b7fac8143329df3cb5e3f38912349be {"[常规条件] 值为空(Nil)"}]]
state "[条件组]OR" as e294d8d1ea20d649f4199e3706dd70a2 [[$./end_at#ae294d8d1ea20d649f4199e3706dd70a2 {"[条件组]OR"}]] {
state " " as e294d8d1ea20d649f4199e3706dd70a2_entry  <<entryPoint>>
state "(END_AT) 大于等于(>=) 数据对象属性 (START_AT)" as 062e1533c17a21ee42f2a5aa89380f7a [[$./end_at#a062e1533c17a21ee42f2a5aa89380f7a {"[常规条件] 大于等于(>=) 数据对象属性 (START_AT)"}]]
state "(START_AT) 值为空(Nil)" as cc6a5d53efcc390f1689b25b7cc9402e [[$./end_at#acc6a5d53efcc390f1689b25b7cc9402e {"[常规条件] 值为空(Nil)"}]]
state " " as e294d8d1ea20d649f4199e3706dd70a2_exit  <<exitPoint>>
}
state " " as ebed3768be580c465fc762be13208ab8_exit  <<exitPoint>>
}


start --> ebed3768be580c465fc762be13208ab8_entry 
ebed3768be580c465fc762be13208ab8_entry --> 8b7fac8143329df3cb5e3f38912349be 
8b7fac8143329df3cb5e3f38912349be --> ebed3768be580c465fc762be13208ab8_exit  : yes
8b7fac8143329df3cb5e3f38912349be -[#red]-> e294d8d1ea20d649f4199e3706dd70a2_entry  : no

e294d8d1ea20d649f4199e3706dd70a2_entry --> 062e1533c17a21ee42f2a5aa89380f7a 
062e1533c17a21ee42f2a5aa89380f7a --> e294d8d1ea20d649f4199e3706dd70a2_exit  : yes
062e1533c17a21ee42f2a5aa89380f7a -[#red]-> cc6a5d53efcc390f1689b25b7cc9402e  : no

cc6a5d53efcc390f1689b25b7cc9402e --> e294d8d1ea20d649f4199e3706dd70a2_exit  : yes
cc6a5d53efcc390f1689b25b7cc9402e -[#red]-> end  : no
e294d8d1ea20d649f4199e3706dd70a2_exit --> ebed3768be580c465fc762be13208ab8_exit 
ebed3768be580c465fc762be13208ab8_exit --> end 


@enduml
```

#### 条件说明

##### (END_AT) 值为空(Nil) :id=a8b7fac8143329df3cb5e3f38912349be



`END_AT(截止时间)` ISNULL 

##### (START_AT) 值为空(Nil) :id=acc6a5d53efcc390f1689b25b7cc9402e



`START_AT(开始时间)` ISNULL 

##### (END_AT) 大于等于(>=) 数据对象属性 (START_AT) :id=a062e1533c17a21ee42f2a5aa89380f7a



`END_AT(截止时间)` GTANDEQ  `START_AT`

> [!ATTENTION|label:规则信息|icon:fa fa-warning]
> 结束时间必须大于等于开始时间







