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
state "[条件组]OR" as 07afd5b5213fcd93a2bc937382800f06 [[$./start_at#a07afd5b5213fcd93a2bc937382800f06 {"[条件组]OR"}]] {
state " " as 07afd5b5213fcd93a2bc937382800f06_entry  <<entryPoint>>
state "(START_AT) 值为空(Nil)" as 08c0fd0019f6b2bfd97a887858c34fb9 [[$./start_at#a08c0fd0019f6b2bfd97a887858c34fb9 {"[常规条件] 值为空(Nil)"}]]
state "[条件组]OR" as 9096517100ccf18b10deb03302b4facc [[$./start_at#a9096517100ccf18b10deb03302b4facc {"[条件组]OR"}]] {
state " " as 9096517100ccf18b10deb03302b4facc_entry  <<entryPoint>>
state "(END_AT) 值为空(Nil)" as 055f2138e5837f141e49810b3ce8d35d [[$./start_at#a055f2138e5837f141e49810b3ce8d35d {"[常规条件] 值为空(Nil)"}]]
state "(START_AT) 小于等于(<=) 数据对象属性 (END_AT)" as 2a926a609717a1ec8894c16ed4a8f0ad [[$./start_at#a2a926a609717a1ec8894c16ed4a8f0ad {"[常规条件] 小于等于(<=) 数据对象属性 (END_AT)"}]]
state " " as 9096517100ccf18b10deb03302b4facc_exit  <<exitPoint>>
}
state " " as 07afd5b5213fcd93a2bc937382800f06_exit  <<exitPoint>>
}


start --> 07afd5b5213fcd93a2bc937382800f06_entry 
07afd5b5213fcd93a2bc937382800f06_entry --> 08c0fd0019f6b2bfd97a887858c34fb9 
08c0fd0019f6b2bfd97a887858c34fb9 --> 07afd5b5213fcd93a2bc937382800f06_exit  : yes
08c0fd0019f6b2bfd97a887858c34fb9 -[#red]-> 9096517100ccf18b10deb03302b4facc_entry  : no

9096517100ccf18b10deb03302b4facc_entry --> 055f2138e5837f141e49810b3ce8d35d 
055f2138e5837f141e49810b3ce8d35d --> 9096517100ccf18b10deb03302b4facc_exit  : yes
055f2138e5837f141e49810b3ce8d35d -[#red]-> 2a926a609717a1ec8894c16ed4a8f0ad  : no

2a926a609717a1ec8894c16ed4a8f0ad --> 9096517100ccf18b10deb03302b4facc_exit  : yes
2a926a609717a1ec8894c16ed4a8f0ad -[#red]-> end  : no
9096517100ccf18b10deb03302b4facc_exit --> 07afd5b5213fcd93a2bc937382800f06_exit 
07afd5b5213fcd93a2bc937382800f06_exit --> end 


@enduml
```

#### 条件说明

##### (START_AT) 小于等于(<=) 数据对象属性 (END_AT) :id=a2a926a609717a1ec8894c16ed4a8f0ad



`START_AT(开始时间)` LTANDEQ  `END_AT`

> [!ATTENTION|label:规则信息|icon:fa fa-warning]
> 开始时间必须小于等于结束时间


##### (END_AT) 值为空(Nil) :id=a055f2138e5837f141e49810b3ce8d35d



`END_AT(结束时间)` ISNULL 

##### (START_AT) 值为空(Nil) :id=a08c0fd0019f6b2bfd97a887858c34fb9



`START_AT(开始时间)` ISNULL 






