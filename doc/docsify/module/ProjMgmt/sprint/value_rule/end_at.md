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
state "[条件组]OR" as 63f725bdb4afbd4f922ab91c653b4702 [[$./end_at#a63f725bdb4afbd4f922ab91c653b4702 {"[条件组]OR"}]] {
state " " as 63f725bdb4afbd4f922ab91c653b4702_entry  <<entryPoint>>
state "(END_AT) 值为空(Nil)" as 367e1e3ba47347c0a718a8ff1f5a31e9 [[$./end_at#a367e1e3ba47347c0a718a8ff1f5a31e9 {"[常规条件] 值为空(Nil)"}]]
state "[条件组]OR" as 1b8ac64c80dbe06c8ac8bf6cd032911f [[$./end_at#a1b8ac64c80dbe06c8ac8bf6cd032911f {"[条件组]OR"}]] {
state " " as 1b8ac64c80dbe06c8ac8bf6cd032911f_entry  <<entryPoint>>
state "(START_AT) 值为空(Nil)" as cc44435879ce2efcf3f05645746eeaff [[$./end_at#acc44435879ce2efcf3f05645746eeaff {"[常规条件] 值为空(Nil)"}]]
state "(END_AT) 大于等于(>=) 数据对象属性 (START_AT)" as 04f6b82eed18ce85540a1ef43a7b1faa [[$./end_at#a04f6b82eed18ce85540a1ef43a7b1faa {"[常规条件] 大于等于(>=) 数据对象属性 (START_AT)"}]]
state " " as 1b8ac64c80dbe06c8ac8bf6cd032911f_exit  <<exitPoint>>
}
state " " as 63f725bdb4afbd4f922ab91c653b4702_exit  <<exitPoint>>
}


start --> 63f725bdb4afbd4f922ab91c653b4702_entry 
63f725bdb4afbd4f922ab91c653b4702_entry --> 367e1e3ba47347c0a718a8ff1f5a31e9 
367e1e3ba47347c0a718a8ff1f5a31e9 --> 63f725bdb4afbd4f922ab91c653b4702_exit  : yes
367e1e3ba47347c0a718a8ff1f5a31e9 -[#red]-> 1b8ac64c80dbe06c8ac8bf6cd032911f_entry  : no

1b8ac64c80dbe06c8ac8bf6cd032911f_entry --> cc44435879ce2efcf3f05645746eeaff 
cc44435879ce2efcf3f05645746eeaff --> 1b8ac64c80dbe06c8ac8bf6cd032911f_exit  : yes
cc44435879ce2efcf3f05645746eeaff -[#red]-> 04f6b82eed18ce85540a1ef43a7b1faa  : no

04f6b82eed18ce85540a1ef43a7b1faa --> 1b8ac64c80dbe06c8ac8bf6cd032911f_exit  : yes
04f6b82eed18ce85540a1ef43a7b1faa -[#red]-> end  : no
1b8ac64c80dbe06c8ac8bf6cd032911f_exit --> 63f725bdb4afbd4f922ab91c653b4702_exit 
63f725bdb4afbd4f922ab91c653b4702_exit --> end 


@enduml
```

#### 条件说明

##### (START_AT) 值为空(Nil) :id=acc44435879ce2efcf3f05645746eeaff



`START_AT(开始时间)` ISNULL 

##### (END_AT) 大于等于(>=) 数据对象属性 (START_AT) :id=a04f6b82eed18ce85540a1ef43a7b1faa



`END_AT(结束时间)` GTANDEQ  `START_AT`

> [!ATTENTION|label:规则信息|icon:fa fa-warning]
> 结束时间必须大于等于开始时间


##### (END_AT) 值为空(Nil) :id=a367e1e3ba47347c0a718a8ff1f5a31e9



`END_AT(结束时间)` ISNULL 






