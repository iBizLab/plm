## 计划开始(START_AT) <!-- {docsify-ignore-all} -->

   

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
state "[条件组]OR" as 1432dffe12e94a5be1829703ccab4fde [[$./start_at#a1432dffe12e94a5be1829703ccab4fde {"[条件组]OR"}]] {
state " " as 1432dffe12e94a5be1829703ccab4fde_entry  <<entryPoint>>
state "(START_AT) 值为空(Nil)" as eb92f953056e6eac3cad499971b91b36 [[$./start_at#aeb92f953056e6eac3cad499971b91b36 {"[常规条件] 值为空(Nil)"}]]
state "[条件组]OR" as 1b3624d2a945be7b4dc64100ffc43a30 [[$./start_at#a1b3624d2a945be7b4dc64100ffc43a30 {"[条件组]OR"}]] {
state " " as 1b3624d2a945be7b4dc64100ffc43a30_entry  <<entryPoint>>
state "(END_AT) 值为空(Nil)" as c9c74ca013f2b50850915d2bd27faf75 [[$./start_at#ac9c74ca013f2b50850915d2bd27faf75 {"[常规条件] 值为空(Nil)"}]]
state "(START_AT) 小于等于(<=) 数据对象属性 (END_AT)" as 82da2bfd6a374678a4cbcc28385ad331 [[$./start_at#a82da2bfd6a374678a4cbcc28385ad331 {"[常规条件] 小于等于(<=) 数据对象属性 (END_AT)"}]]
state " " as 1b3624d2a945be7b4dc64100ffc43a30_exit  <<exitPoint>>
}
state " " as 1432dffe12e94a5be1829703ccab4fde_exit  <<exitPoint>>
}


start --> 1432dffe12e94a5be1829703ccab4fde_entry 
1432dffe12e94a5be1829703ccab4fde_entry --> eb92f953056e6eac3cad499971b91b36 
eb92f953056e6eac3cad499971b91b36 --> 1432dffe12e94a5be1829703ccab4fde_exit  : yes
eb92f953056e6eac3cad499971b91b36 -[#red]-> 1b3624d2a945be7b4dc64100ffc43a30_entry  : no

1b3624d2a945be7b4dc64100ffc43a30_entry --> c9c74ca013f2b50850915d2bd27faf75 
c9c74ca013f2b50850915d2bd27faf75 --> 1b3624d2a945be7b4dc64100ffc43a30_exit  : yes
c9c74ca013f2b50850915d2bd27faf75 -[#red]-> 82da2bfd6a374678a4cbcc28385ad331  : no

82da2bfd6a374678a4cbcc28385ad331 --> 1b3624d2a945be7b4dc64100ffc43a30_exit  : yes
82da2bfd6a374678a4cbcc28385ad331 -[#red]-> end  : no
1b3624d2a945be7b4dc64100ffc43a30_exit --> 1432dffe12e94a5be1829703ccab4fde_exit 
1432dffe12e94a5be1829703ccab4fde_exit --> end 


@enduml
```

#### 条件说明

##### (START_AT) 小于等于(<=) 数据对象属性 (END_AT) :id=a82da2bfd6a374678a4cbcc28385ad331



`START_AT(计划开始)` LTANDEQ  `END_AT`

> [!ATTENTION|label:规则信息|icon:fa fa-warning]
> 开始时间必须小于等于发布时间


##### (START_AT) 值为空(Nil) :id=aeb92f953056e6eac3cad499971b91b36



`START_AT(计划开始)` ISNULL 

##### (END_AT) 值为空(Nil) :id=ac9c74ca013f2b50850915d2bd27faf75



`END_AT(计划结束)` ISNULL 






