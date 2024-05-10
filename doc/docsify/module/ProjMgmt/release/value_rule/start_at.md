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
state "[条件组]OR" as 4a93b5954931b07a7c5e12dcbf5012db [[$./start_at#a4a93b5954931b07a7c5e12dcbf5012db {"[条件组]OR"}]] {
state " " as 4a93b5954931b07a7c5e12dcbf5012db_entry  <<entryPoint>>
state "(START_AT) 值为空(Nil)" as a6364657efff62d91c4a3c956f80c0d2 [[$./start_at#aa6364657efff62d91c4a3c956f80c0d2 {"[常规条件] 值为空(Nil)"}]]
state "[条件组]OR" as 2b49ebfe1b10abc1d4ee2d16361e4aa9 [[$./start_at#a2b49ebfe1b10abc1d4ee2d16361e4aa9 {"[条件组]OR"}]] {
state " " as 2b49ebfe1b10abc1d4ee2d16361e4aa9_entry  <<entryPoint>>
state "(END_AT) 值为空(Nil)" as bf3ce9e336f5b6597b0edd53405b6419 [[$./start_at#abf3ce9e336f5b6597b0edd53405b6419 {"[常规条件] 值为空(Nil)"}]]
state "(START_AT) 小于等于(<=) 数据对象属性 (END_AT)" as 1134d964b9bb7f294afe983fcb4f8e51 [[$./start_at#a1134d964b9bb7f294afe983fcb4f8e51 {"[常规条件] 小于等于(<=) 数据对象属性 (END_AT)"}]]
state " " as 2b49ebfe1b10abc1d4ee2d16361e4aa9_exit  <<exitPoint>>
}
state " " as 4a93b5954931b07a7c5e12dcbf5012db_exit  <<exitPoint>>
}


start --> 4a93b5954931b07a7c5e12dcbf5012db_entry 
4a93b5954931b07a7c5e12dcbf5012db_entry --> a6364657efff62d91c4a3c956f80c0d2 
a6364657efff62d91c4a3c956f80c0d2 --> 4a93b5954931b07a7c5e12dcbf5012db_exit  : yes
a6364657efff62d91c4a3c956f80c0d2 -[#red]-> 2b49ebfe1b10abc1d4ee2d16361e4aa9_entry  : no

2b49ebfe1b10abc1d4ee2d16361e4aa9_entry --> bf3ce9e336f5b6597b0edd53405b6419 
bf3ce9e336f5b6597b0edd53405b6419 --> 2b49ebfe1b10abc1d4ee2d16361e4aa9_exit  : yes
bf3ce9e336f5b6597b0edd53405b6419 -[#red]-> 1134d964b9bb7f294afe983fcb4f8e51  : no

1134d964b9bb7f294afe983fcb4f8e51 --> 2b49ebfe1b10abc1d4ee2d16361e4aa9_exit  : yes
1134d964b9bb7f294afe983fcb4f8e51 -[#red]-> end  : no
2b49ebfe1b10abc1d4ee2d16361e4aa9_exit --> 4a93b5954931b07a7c5e12dcbf5012db_exit 
4a93b5954931b07a7c5e12dcbf5012db_exit --> end 


@enduml
```

#### 条件说明

##### (START_AT) 小于等于(<=) 数据对象属性 (END_AT) :id=a1134d964b9bb7f294afe983fcb4f8e51



`START_AT(开始时间)` LTANDEQ  `END_AT`

> [!ATTENTION|label:规则信息|icon:fa fa-warning]
> 开始时间必须小于等于发布时间


##### (END_AT) 值为空(Nil) :id=abf3ce9e336f5b6597b0edd53405b6419



`END_AT(发布时间)` ISNULL 

##### (START_AT) 值为空(Nil) :id=aa6364657efff62d91c4a3c956f80c0d2



`START_AT(开始时间)` ISNULL 






