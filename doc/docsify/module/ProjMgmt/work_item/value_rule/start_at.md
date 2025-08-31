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
state "[条件组]OR" as 8de2c92171581bd549641ad19f363236 [[$./start_at#a8de2c92171581bd549641ad19f363236 {"[条件组]OR"}]] {
state " " as 8de2c92171581bd549641ad19f363236_entry  <<entryPoint>>
state "(START_AT) 值为空(Nil)" as 1d596deccac133885754f62a65e34c7b [[$./start_at#a1d596deccac133885754f62a65e34c7b {"[常规条件] 值为空(Nil)"}]]
state "[条件组]OR" as 469006e03ce2eb60b6d25b16859c412e [[$./start_at#a469006e03ce2eb60b6d25b16859c412e {"[条件组]OR"}]] {
state " " as 469006e03ce2eb60b6d25b16859c412e_entry  <<entryPoint>>
state "(END_AT) 值为空(Nil)" as b6954ab0fb9733d4caafedd26f138a12 [[$./start_at#ab6954ab0fb9733d4caafedd26f138a12 {"[常规条件] 值为空(Nil)"}]]
state "(START_AT) 小于等于(<=) 数据对象属性 (END_AT)" as 225189037e850bded111537ee4de6865 [[$./start_at#a225189037e850bded111537ee4de6865 {"[常规条件] 小于等于(<=) 数据对象属性 (END_AT)"}]]
state " " as 469006e03ce2eb60b6d25b16859c412e_exit  <<exitPoint>>
}
state " " as 8de2c92171581bd549641ad19f363236_exit  <<exitPoint>>
}


start --> 8de2c92171581bd549641ad19f363236_entry 
8de2c92171581bd549641ad19f363236_entry --> 1d596deccac133885754f62a65e34c7b 
1d596deccac133885754f62a65e34c7b --> 8de2c92171581bd549641ad19f363236_exit  : yes
1d596deccac133885754f62a65e34c7b -[#red]-> 469006e03ce2eb60b6d25b16859c412e_entry  : no

469006e03ce2eb60b6d25b16859c412e_entry --> b6954ab0fb9733d4caafedd26f138a12 
b6954ab0fb9733d4caafedd26f138a12 --> 469006e03ce2eb60b6d25b16859c412e_exit  : yes
b6954ab0fb9733d4caafedd26f138a12 -[#red]-> 225189037e850bded111537ee4de6865  : no

225189037e850bded111537ee4de6865 --> 469006e03ce2eb60b6d25b16859c412e_exit  : yes
225189037e850bded111537ee4de6865 -[#red]-> end  : no
469006e03ce2eb60b6d25b16859c412e_exit --> 8de2c92171581bd549641ad19f363236_exit 
8de2c92171581bd549641ad19f363236_exit --> end 


@enduml
```

#### 条件说明

##### (END_AT) 值为空(Nil) :id=ab6954ab0fb9733d4caafedd26f138a12



`END_AT(截止时间)` ISNULL 

##### (START_AT) 值为空(Nil) :id=a1d596deccac133885754f62a65e34c7b



`START_AT(开始时间)` ISNULL 

##### (START_AT) 小于等于(<=) 数据对象属性 (END_AT) :id=a225189037e850bded111537ee4de6865



`START_AT(开始时间)` LTANDEQ  `END_AT`

> [!ATTENTION|label:规则信息|icon:fa fa-warning]
> 开始时间必须小于等于结束时间







