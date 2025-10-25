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
state "[条件组]OR" as 1702cdcbf4f88a3657e65271551743c1 [[$./end_at#a1702cdcbf4f88a3657e65271551743c1 {"[条件组]OR"}]] {
state " " as 1702cdcbf4f88a3657e65271551743c1_entry  <<entryPoint>>
state "(END_AT) 值为空(Nil)" as dd923aeb5bb38b822e7e90d5326e19aa [[$./end_at#add923aeb5bb38b822e7e90d5326e19aa {"[常规条件] 值为空(Nil)"}]]
state "[条件组]OR" as 68dbfec283cadc268cb47a3cc8b7a20a [[$./end_at#a68dbfec283cadc268cb47a3cc8b7a20a {"[条件组]OR"}]] {
state " " as 68dbfec283cadc268cb47a3cc8b7a20a_entry  <<entryPoint>>
state "(START_AT) 值为空(Nil)" as 8a5671b91578a8f62dbb375534287688 [[$./end_at#a8a5671b91578a8f62dbb375534287688 {"[常规条件] 值为空(Nil)"}]]
state "(END_AT) 大于等于(>=) 数据对象属性 (START_AT)" as 84a9c49a4c4b7dde9066fd9432855e0c [[$./end_at#a84a9c49a4c4b7dde9066fd9432855e0c {"[常规条件] 大于等于(>=) 数据对象属性 (START_AT)"}]]
state " " as 68dbfec283cadc268cb47a3cc8b7a20a_exit  <<exitPoint>>
}
state " " as 1702cdcbf4f88a3657e65271551743c1_exit  <<exitPoint>>
}


start --> 1702cdcbf4f88a3657e65271551743c1_entry 
1702cdcbf4f88a3657e65271551743c1_entry --> dd923aeb5bb38b822e7e90d5326e19aa 
dd923aeb5bb38b822e7e90d5326e19aa --> 1702cdcbf4f88a3657e65271551743c1_exit  : yes
dd923aeb5bb38b822e7e90d5326e19aa -[#red]-> 68dbfec283cadc268cb47a3cc8b7a20a_entry  : no

68dbfec283cadc268cb47a3cc8b7a20a_entry --> 8a5671b91578a8f62dbb375534287688 
8a5671b91578a8f62dbb375534287688 --> 68dbfec283cadc268cb47a3cc8b7a20a_exit  : yes
8a5671b91578a8f62dbb375534287688 -[#red]-> 84a9c49a4c4b7dde9066fd9432855e0c  : no

84a9c49a4c4b7dde9066fd9432855e0c --> 68dbfec283cadc268cb47a3cc8b7a20a_exit  : yes
84a9c49a4c4b7dde9066fd9432855e0c -[#red]-> end  : no
68dbfec283cadc268cb47a3cc8b7a20a_exit --> 1702cdcbf4f88a3657e65271551743c1_exit 
1702cdcbf4f88a3657e65271551743c1_exit --> end 


@enduml
```

#### 条件说明

##### (END_AT) 大于等于(>=) 数据对象属性 (START_AT) :id=a84a9c49a4c4b7dde9066fd9432855e0c



`END_AT(结束时间)` GTANDEQ  `START_AT`

> [!ATTENTION|label:规则信息|icon:fa fa-warning]
> 结束时间必须大于等于开始时间


##### (END_AT) 值为空(Nil) :id=add923aeb5bb38b822e7e90d5326e19aa



`END_AT(结束时间)` ISNULL 

##### (START_AT) 值为空(Nil) :id=a8a5671b91578a8f62dbb375534287688



`START_AT(开始时间)` ISNULL 






