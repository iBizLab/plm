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
state "[条件组]OR" as 26bc5aa02236df4aae623a93992c6016 [[$./start_at#a26bc5aa02236df4aae623a93992c6016 {"[条件组]OR"}]] {
state " " as 26bc5aa02236df4aae623a93992c6016_entry  <<entryPoint>>
state "(START_AT) 值为空(Nil)" as 71818d196cf21d7be00342173073a4bd [[$./start_at#a71818d196cf21d7be00342173073a4bd {"[常规条件] 值为空(Nil)"}]]
state "[条件组]OR" as d7a928894ab0e5d05bf0d480334b1069 [[$./start_at#ad7a928894ab0e5d05bf0d480334b1069 {"[条件组]OR"}]] {
state " " as d7a928894ab0e5d05bf0d480334b1069_entry  <<entryPoint>>
state "(END_AT) 值为空(Nil)" as 86bddc14b4432d264746ce3313063438 [[$./start_at#a86bddc14b4432d264746ce3313063438 {"[常规条件] 值为空(Nil)"}]]
state "(START_AT) 小于等于(<=) 数据对象属性 (END_AT)" as 7fa812da9fb88f416f1c2440f10215f1 [[$./start_at#a7fa812da9fb88f416f1c2440f10215f1 {"[常规条件] 小于等于(<=) 数据对象属性 (END_AT)"}]]
state " " as d7a928894ab0e5d05bf0d480334b1069_exit  <<exitPoint>>
}
state " " as 26bc5aa02236df4aae623a93992c6016_exit  <<exitPoint>>
}


start --> 26bc5aa02236df4aae623a93992c6016_entry 
26bc5aa02236df4aae623a93992c6016_entry --> 71818d196cf21d7be00342173073a4bd 
71818d196cf21d7be00342173073a4bd --> 26bc5aa02236df4aae623a93992c6016_exit  : yes
71818d196cf21d7be00342173073a4bd -[#red]-> d7a928894ab0e5d05bf0d480334b1069_entry  : no

d7a928894ab0e5d05bf0d480334b1069_entry --> 86bddc14b4432d264746ce3313063438 
86bddc14b4432d264746ce3313063438 --> d7a928894ab0e5d05bf0d480334b1069_exit  : yes
86bddc14b4432d264746ce3313063438 -[#red]-> 7fa812da9fb88f416f1c2440f10215f1  : no

7fa812da9fb88f416f1c2440f10215f1 --> d7a928894ab0e5d05bf0d480334b1069_exit  : yes
7fa812da9fb88f416f1c2440f10215f1 -[#red]-> end  : no
d7a928894ab0e5d05bf0d480334b1069_exit --> 26bc5aa02236df4aae623a93992c6016_exit 
26bc5aa02236df4aae623a93992c6016_exit --> end 


@enduml
```

#### 条件说明

##### (START_AT) 小于等于(<=) 数据对象属性 (END_AT) :id=a7fa812da9fb88f416f1c2440f10215f1



`START_AT(开始时间)` LTANDEQ  `END_AT`

> [!ATTENTION|label:规则信息|icon:fa fa-warning]
> 开始时间必须小于等于结束时间


##### (END_AT) 值为空(Nil) :id=a86bddc14b4432d264746ce3313063438



`END_AT(结束时间)` ISNULL 

##### (START_AT) 值为空(Nil) :id=a71818d196cf21d7be00342173073a4bd



`START_AT(开始时间)` ISNULL 






