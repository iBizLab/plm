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
state "[条件组]OR" as 99b41f3245742cc4e875ca87b9649d2e [[$./start_at#a99b41f3245742cc4e875ca87b9649d2e {"[条件组]OR"}]] {
state " " as 99b41f3245742cc4e875ca87b9649d2e_entry  <<entryPoint>>
state "(START_AT) 值为空(Nil)" as 9c7759262e43aa1bfe5e42140dc0aef8 [[$./start_at#a9c7759262e43aa1bfe5e42140dc0aef8 {"[常规条件] 值为空(Nil)"}]]
state "[条件组]OR" as 70d1bb0c5f21a5f1a1620ca39863a14b [[$./start_at#a70d1bb0c5f21a5f1a1620ca39863a14b {"[条件组]OR"}]] {
state " " as 70d1bb0c5f21a5f1a1620ca39863a14b_entry  <<entryPoint>>
state "(END_AT) 值为空(Nil)" as 5d4c8909b6273114a9e0452817336e69 [[$./start_at#a5d4c8909b6273114a9e0452817336e69 {"[常规条件] 值为空(Nil)"}]]
state "(START_AT) 小于等于(<=) 数据对象属性 (END_AT)" as 63ad842ca08df84288a00bd58c941ef3 [[$./start_at#a63ad842ca08df84288a00bd58c941ef3 {"[常规条件] 小于等于(<=) 数据对象属性 (END_AT)"}]]
state " " as 70d1bb0c5f21a5f1a1620ca39863a14b_exit  <<exitPoint>>
}
state " " as 99b41f3245742cc4e875ca87b9649d2e_exit  <<exitPoint>>
}


start --> 99b41f3245742cc4e875ca87b9649d2e_entry 
99b41f3245742cc4e875ca87b9649d2e_entry --> 9c7759262e43aa1bfe5e42140dc0aef8 
9c7759262e43aa1bfe5e42140dc0aef8 --> 99b41f3245742cc4e875ca87b9649d2e_exit  : yes
9c7759262e43aa1bfe5e42140dc0aef8 -[#red]-> 70d1bb0c5f21a5f1a1620ca39863a14b_entry  : no

70d1bb0c5f21a5f1a1620ca39863a14b_entry --> 5d4c8909b6273114a9e0452817336e69 
5d4c8909b6273114a9e0452817336e69 --> 70d1bb0c5f21a5f1a1620ca39863a14b_exit  : yes
5d4c8909b6273114a9e0452817336e69 -[#red]-> 63ad842ca08df84288a00bd58c941ef3  : no

63ad842ca08df84288a00bd58c941ef3 --> 70d1bb0c5f21a5f1a1620ca39863a14b_exit  : yes
63ad842ca08df84288a00bd58c941ef3 -[#red]-> end  : no
70d1bb0c5f21a5f1a1620ca39863a14b_exit --> 99b41f3245742cc4e875ca87b9649d2e_exit 
99b41f3245742cc4e875ca87b9649d2e_exit --> end 


@enduml
```

#### 条件说明

##### (START_AT) 小于等于(<=) 数据对象属性 (END_AT) :id=a63ad842ca08df84288a00bd58c941ef3



`START_AT(开始时间)` LTANDEQ  `END_AT`

> [!ATTENTION|label:规则信息|icon:fa fa-warning]
> 开始时间必须小于等于结束时间


##### (START_AT) 值为空(Nil) :id=a9c7759262e43aa1bfe5e42140dc0aef8



`START_AT(开始时间)` ISNULL 

##### (END_AT) 值为空(Nil) :id=a5d4c8909b6273114a9e0452817336e69



`END_AT(结束时间)` ISNULL 






