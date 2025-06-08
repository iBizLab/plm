## 开始时间(START_AT) <!-- {docsify-ignore-all} -->

   

### 开始时间 :id=START_AT

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
state "[条件组]OR" as cc50cdef92e441348de670f19b419244 [[$./start_at#acc50cdef92e441348de670f19b419244 {"[条件组]OR"}]] {
state " " as cc50cdef92e441348de670f19b419244_entry  <<entryPoint>>
state "(START_AT) 值为空(Nil)" as 73e2b29b2ab809afcfd61f8ecd0cc7c5 [[$./start_at#a73e2b29b2ab809afcfd61f8ecd0cc7c5 {"[常规条件] 值为空(Nil)"}]]
state "[条件组]OR" as 7d6e7bb45df1b5eece613e9fe128e22c [[$./start_at#a7d6e7bb45df1b5eece613e9fe128e22c {"[条件组]OR"}]] {
state " " as 7d6e7bb45df1b5eece613e9fe128e22c_entry  <<entryPoint>>
state "(END_AT) 值为空(Nil)" as 72b58a589d9cf9e2eb0742e2be705303 [[$./start_at#a72b58a589d9cf9e2eb0742e2be705303 {"[常规条件] 值为空(Nil)"}]]
state "(START_AT) 小于等于(<=) 数据对象属性 (END_AT)" as 49dda5283e8cc6bd01ceadf0135bbf30 [[$./start_at#a49dda5283e8cc6bd01ceadf0135bbf30 {"[常规条件] 小于等于(<=) 数据对象属性 (END_AT)"}]]
state " " as 7d6e7bb45df1b5eece613e9fe128e22c_exit  <<exitPoint>>
}
state " " as cc50cdef92e441348de670f19b419244_exit  <<exitPoint>>
}


start --> cc50cdef92e441348de670f19b419244_entry 
cc50cdef92e441348de670f19b419244_entry --> 73e2b29b2ab809afcfd61f8ecd0cc7c5 
73e2b29b2ab809afcfd61f8ecd0cc7c5 --> cc50cdef92e441348de670f19b419244_exit  : yes
73e2b29b2ab809afcfd61f8ecd0cc7c5 -[#red]-> 7d6e7bb45df1b5eece613e9fe128e22c_entry  : no

7d6e7bb45df1b5eece613e9fe128e22c_entry --> 72b58a589d9cf9e2eb0742e2be705303 
72b58a589d9cf9e2eb0742e2be705303 --> 7d6e7bb45df1b5eece613e9fe128e22c_exit  : yes
72b58a589d9cf9e2eb0742e2be705303 -[#red]-> 49dda5283e8cc6bd01ceadf0135bbf30  : no

49dda5283e8cc6bd01ceadf0135bbf30 --> 7d6e7bb45df1b5eece613e9fe128e22c_exit  : yes
49dda5283e8cc6bd01ceadf0135bbf30 -[#red]-> end  : no
7d6e7bb45df1b5eece613e9fe128e22c_exit --> cc50cdef92e441348de670f19b419244_exit 
cc50cdef92e441348de670f19b419244_exit --> end 


@enduml
```

#### 条件说明

##### (END_AT) 值为空(Nil) :id=a72b58a589d9cf9e2eb0742e2be705303



`END_AT(结束时间)` ISNULL 

##### (START_AT) 小于等于(<=) 数据对象属性 (END_AT) :id=a49dda5283e8cc6bd01ceadf0135bbf30



`START_AT(开始时间)` LTANDEQ  `END_AT`

> [!ATTENTION|label:规则信息|icon:fa fa-warning]
> 开始时间必须小于等于结束时间


##### (START_AT) 值为空(Nil) :id=a73e2b29b2ab809afcfd61f8ecd0cc7c5



`START_AT(开始时间)` ISNULL 






