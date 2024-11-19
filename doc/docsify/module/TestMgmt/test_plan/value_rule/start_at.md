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
state "[条件组]OR" as dbcfaafa021571ac3c418c1ebba9c834 [[$./start_at#adbcfaafa021571ac3c418c1ebba9c834 {"[条件组]OR"}]] {
state " " as dbcfaafa021571ac3c418c1ebba9c834_entry  <<entryPoint>>
state "(START_AT) 值为空(Nil)" as 810643235565355635e906c06fb4913a [[$./start_at#a810643235565355635e906c06fb4913a {"[常规条件] 值为空(Nil)"}]]
state "[条件组]OR" as 9885c804931b97235679072e6dc19583 [[$./start_at#a9885c804931b97235679072e6dc19583 {"[条件组]OR"}]] {
state " " as 9885c804931b97235679072e6dc19583_entry  <<entryPoint>>
state "(END_AT) 值为空(Nil)" as fbfe5fc3bb673f3ceb187f31708bf3a0 [[$./start_at#afbfe5fc3bb673f3ceb187f31708bf3a0 {"[常规条件] 值为空(Nil)"}]]
state "(START_AT) 小于等于(<=) 数据对象属性 (END_AT)" as 88e92cc28f3cca0bcd0c7be258fc441f [[$./start_at#a88e92cc28f3cca0bcd0c7be258fc441f {"[常规条件] 小于等于(<=) 数据对象属性 (END_AT)"}]]
state " " as 9885c804931b97235679072e6dc19583_exit  <<exitPoint>>
}
state " " as dbcfaafa021571ac3c418c1ebba9c834_exit  <<exitPoint>>
}


start --> dbcfaafa021571ac3c418c1ebba9c834_entry 
dbcfaafa021571ac3c418c1ebba9c834_entry --> 810643235565355635e906c06fb4913a 
810643235565355635e906c06fb4913a --> dbcfaafa021571ac3c418c1ebba9c834_exit  : yes
810643235565355635e906c06fb4913a -[#red]-> 9885c804931b97235679072e6dc19583_entry  : no

9885c804931b97235679072e6dc19583_entry --> fbfe5fc3bb673f3ceb187f31708bf3a0 
fbfe5fc3bb673f3ceb187f31708bf3a0 --> 9885c804931b97235679072e6dc19583_exit  : yes
fbfe5fc3bb673f3ceb187f31708bf3a0 -[#red]-> 88e92cc28f3cca0bcd0c7be258fc441f  : no

88e92cc28f3cca0bcd0c7be258fc441f --> 9885c804931b97235679072e6dc19583_exit  : yes
88e92cc28f3cca0bcd0c7be258fc441f -[#red]-> end  : no
9885c804931b97235679072e6dc19583_exit --> dbcfaafa021571ac3c418c1ebba9c834_exit 
dbcfaafa021571ac3c418c1ebba9c834_exit --> end 


@enduml
```

#### 条件说明

##### (START_AT) 值为空(Nil) :id=a810643235565355635e906c06fb4913a



`START_AT(计划开始)` ISNULL 

##### (END_AT) 值为空(Nil) :id=afbfe5fc3bb673f3ceb187f31708bf3a0



`END_AT(计划结束)` ISNULL 

##### (START_AT) 小于等于(<=) 数据对象属性 (END_AT) :id=a88e92cc28f3cca0bcd0c7be258fc441f



`START_AT(计划开始)` LTANDEQ  `END_AT`

> [!ATTENTION|label:规则信息|icon:fa fa-warning]
> 开始时间必须小于等于发布时间







