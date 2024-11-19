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
state "[条件组]OR" as 018382294217e604fa2e2f1e986a9dc7 [[$./start_at#a018382294217e604fa2e2f1e986a9dc7 {"[条件组]OR"}]] {
state " " as 018382294217e604fa2e2f1e986a9dc7_entry  <<entryPoint>>
state "(START_AT) 值为空(Nil)" as 4593d814038e71a0d0747f194d5ce5b6 [[$./start_at#a4593d814038e71a0d0747f194d5ce5b6 {"[常规条件] 值为空(Nil)"}]]
state "[条件组]OR" as ced71d32a5fa62073d7fe93766a285c5 [[$./start_at#aced71d32a5fa62073d7fe93766a285c5 {"[条件组]OR"}]] {
state " " as ced71d32a5fa62073d7fe93766a285c5_entry  <<entryPoint>>
state "(END_AT) 值为空(Nil)" as 2c1b066fbea022efc3c72002fbb44cdd [[$./start_at#a2c1b066fbea022efc3c72002fbb44cdd {"[常规条件] 值为空(Nil)"}]]
state "(START_AT) 小于等于(<=) 数据对象属性 (END_AT)" as 40da04f6af936ebb892c4d6f6b549a23 [[$./start_at#a40da04f6af936ebb892c4d6f6b549a23 {"[常规条件] 小于等于(<=) 数据对象属性 (END_AT)"}]]
state " " as ced71d32a5fa62073d7fe93766a285c5_exit  <<exitPoint>>
}
state " " as 018382294217e604fa2e2f1e986a9dc7_exit  <<exitPoint>>
}


start --> 018382294217e604fa2e2f1e986a9dc7_entry 
018382294217e604fa2e2f1e986a9dc7_entry --> 4593d814038e71a0d0747f194d5ce5b6 
4593d814038e71a0d0747f194d5ce5b6 --> 018382294217e604fa2e2f1e986a9dc7_exit  : yes
4593d814038e71a0d0747f194d5ce5b6 -[#red]-> ced71d32a5fa62073d7fe93766a285c5_entry  : no

ced71d32a5fa62073d7fe93766a285c5_entry --> 2c1b066fbea022efc3c72002fbb44cdd 
2c1b066fbea022efc3c72002fbb44cdd --> ced71d32a5fa62073d7fe93766a285c5_exit  : yes
2c1b066fbea022efc3c72002fbb44cdd -[#red]-> 40da04f6af936ebb892c4d6f6b549a23  : no

40da04f6af936ebb892c4d6f6b549a23 --> ced71d32a5fa62073d7fe93766a285c5_exit  : yes
40da04f6af936ebb892c4d6f6b549a23 -[#red]-> end  : no
ced71d32a5fa62073d7fe93766a285c5_exit --> 018382294217e604fa2e2f1e986a9dc7_exit 
018382294217e604fa2e2f1e986a9dc7_exit --> end 


@enduml
```

#### 条件说明

##### (START_AT) 值为空(Nil) :id=a4593d814038e71a0d0747f194d5ce5b6



`START_AT(开始时间)` ISNULL 

##### (END_AT) 值为空(Nil) :id=a2c1b066fbea022efc3c72002fbb44cdd



`END_AT(结束时间)` ISNULL 

##### (START_AT) 小于等于(<=) 数据对象属性 (END_AT) :id=a40da04f6af936ebb892c4d6f6b549a23



`START_AT(开始时间)` LTANDEQ  `END_AT`

> [!ATTENTION|label:规则信息|icon:fa fa-warning]
> 开始时间必须小于等于结束时间







