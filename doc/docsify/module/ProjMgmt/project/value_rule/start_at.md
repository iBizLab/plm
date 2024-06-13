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
state "[条件组]OR" as 63034922c978eef984868aa1dece13e4 [[$./start_at#a63034922c978eef984868aa1dece13e4 {"[条件组]OR"}]] {
state " " as 63034922c978eef984868aa1dece13e4_entry  <<entryPoint>>
state "(START_AT) 值为空(Nil)" as 68c196a636247732ff229d0cc4f4645f [[$./start_at#a68c196a636247732ff229d0cc4f4645f {"[常规条件] 值为空(Nil)"}]]
state "[条件组]OR" as 6dd9dd5ceb2f43968293f12aeb39adef [[$./start_at#a6dd9dd5ceb2f43968293f12aeb39adef {"[条件组]OR"}]] {
state " " as 6dd9dd5ceb2f43968293f12aeb39adef_entry  <<entryPoint>>
state "(END_AT) 值为空(Nil)" as fc502d236395754dc165c86730650f34 [[$./start_at#afc502d236395754dc165c86730650f34 {"[常规条件] 值为空(Nil)"}]]
state "(START_AT) 小于等于(<=) 数据对象属性 (END_AT)" as 584ec753974410143ca2b0c3bd7b34f8 [[$./start_at#a584ec753974410143ca2b0c3bd7b34f8 {"[常规条件] 小于等于(<=) 数据对象属性 (END_AT)"}]]
state " " as 6dd9dd5ceb2f43968293f12aeb39adef_exit  <<exitPoint>>
}
state " " as 63034922c978eef984868aa1dece13e4_exit  <<exitPoint>>
}


start --> 63034922c978eef984868aa1dece13e4_entry 
63034922c978eef984868aa1dece13e4_entry --> 68c196a636247732ff229d0cc4f4645f 
68c196a636247732ff229d0cc4f4645f --> 63034922c978eef984868aa1dece13e4_exit  : yes
68c196a636247732ff229d0cc4f4645f -[#red]-> 6dd9dd5ceb2f43968293f12aeb39adef_entry  : no

6dd9dd5ceb2f43968293f12aeb39adef_entry --> fc502d236395754dc165c86730650f34 
fc502d236395754dc165c86730650f34 --> 6dd9dd5ceb2f43968293f12aeb39adef_exit  : yes
fc502d236395754dc165c86730650f34 -[#red]-> 584ec753974410143ca2b0c3bd7b34f8  : no

584ec753974410143ca2b0c3bd7b34f8 --> 6dd9dd5ceb2f43968293f12aeb39adef_exit  : yes
584ec753974410143ca2b0c3bd7b34f8 -[#red]-> end  : no
6dd9dd5ceb2f43968293f12aeb39adef_exit --> 63034922c978eef984868aa1dece13e4_exit 
63034922c978eef984868aa1dece13e4_exit --> end 


@enduml
```

#### 条件说明

##### (END_AT) 值为空(Nil) :id=afc502d236395754dc165c86730650f34



`END_AT(结束时间)` ISNULL 

##### (START_AT) 值为空(Nil) :id=a68c196a636247732ff229d0cc4f4645f



`START_AT(开始时间)` ISNULL 

##### (START_AT) 小于等于(<=) 数据对象属性 (END_AT) :id=a584ec753974410143ca2b0c3bd7b34f8



`START_AT(开始时间)` LTANDEQ  `END_AT`

> [!ATTENTION|label:规则信息|icon:fa fa-warning]
> 开始时间必须小于等于结束时间







