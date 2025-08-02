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
state "[条件组]OR" as 3a547d533fb04b7f8c93aad4230e5983 [[$./end_at#a3a547d533fb04b7f8c93aad4230e5983 {"[条件组]OR"}]] {
state " " as 3a547d533fb04b7f8c93aad4230e5983_entry  <<entryPoint>>
state "(END_AT) 值为空(Nil)" as 06fca9d2c0457148f347aaaea247799c [[$./end_at#a06fca9d2c0457148f347aaaea247799c {"[常规条件] 值为空(Nil)"}]]
state "[条件组]OR" as 203c2dcc66e5e023bba253ca901718b8 [[$./end_at#a203c2dcc66e5e023bba253ca901718b8 {"[条件组]OR"}]] {
state " " as 203c2dcc66e5e023bba253ca901718b8_entry  <<entryPoint>>
state "(START_AT) 值为空(Nil)" as cdd6f005424c3b3aa36c8f4a656b914b [[$./end_at#acdd6f005424c3b3aa36c8f4a656b914b {"[常规条件] 值为空(Nil)"}]]
state "(END_AT) 大于等于(>=) 数据对象属性 (START_AT)" as b7c8e9506727c16079cf8f530248c6cb [[$./end_at#ab7c8e9506727c16079cf8f530248c6cb {"[常规条件] 大于等于(>=) 数据对象属性 (START_AT)"}]]
state " " as 203c2dcc66e5e023bba253ca901718b8_exit  <<exitPoint>>
}
state " " as 3a547d533fb04b7f8c93aad4230e5983_exit  <<exitPoint>>
}


start --> 3a547d533fb04b7f8c93aad4230e5983_entry 
3a547d533fb04b7f8c93aad4230e5983_entry --> 06fca9d2c0457148f347aaaea247799c 
06fca9d2c0457148f347aaaea247799c --> 3a547d533fb04b7f8c93aad4230e5983_exit  : yes
06fca9d2c0457148f347aaaea247799c -[#red]-> 203c2dcc66e5e023bba253ca901718b8_entry  : no

203c2dcc66e5e023bba253ca901718b8_entry --> cdd6f005424c3b3aa36c8f4a656b914b 
cdd6f005424c3b3aa36c8f4a656b914b --> 203c2dcc66e5e023bba253ca901718b8_exit  : yes
cdd6f005424c3b3aa36c8f4a656b914b -[#red]-> b7c8e9506727c16079cf8f530248c6cb  : no

b7c8e9506727c16079cf8f530248c6cb --> 203c2dcc66e5e023bba253ca901718b8_exit  : yes
b7c8e9506727c16079cf8f530248c6cb -[#red]-> end  : no
203c2dcc66e5e023bba253ca901718b8_exit --> 3a547d533fb04b7f8c93aad4230e5983_exit 
3a547d533fb04b7f8c93aad4230e5983_exit --> end 


@enduml
```

#### 条件说明

##### (END_AT) 大于等于(>=) 数据对象属性 (START_AT) :id=ab7c8e9506727c16079cf8f530248c6cb



`END_AT(结束时间)` GTANDEQ  `START_AT`

> [!ATTENTION|label:规则信息|icon:fa fa-warning]
> 结束时间必须大于等于开始时间


##### (END_AT) 值为空(Nil) :id=a06fca9d2c0457148f347aaaea247799c



`END_AT(结束时间)` ISNULL 

##### (START_AT) 值为空(Nil) :id=acdd6f005424c3b3aa36c8f4a656b914b



`START_AT(开始时间)` ISNULL 






