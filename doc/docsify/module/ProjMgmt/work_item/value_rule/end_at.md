## 截止时间(END_AT) <!-- {docsify-ignore-all} -->

   

### 结束时间 :id=END_AT

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
state "[条件组]OR" as 7215fded458df5f27bf6ed5bba7bc85a [[$./end_at#a7215fded458df5f27bf6ed5bba7bc85a {"[条件组]OR"}]] {
state " " as 7215fded458df5f27bf6ed5bba7bc85a_entry  <<entryPoint>>
state "(END_AT) 值为空(Nil)" as 81c0420f805f432cc2e2fa574c2fd73b [[$./end_at#a81c0420f805f432cc2e2fa574c2fd73b {"[常规条件] 值为空(Nil)"}]]
state "[条件组]OR" as c565acea3c326dd0588d859ee78f8b60 [[$./end_at#ac565acea3c326dd0588d859ee78f8b60 {"[条件组]OR"}]] {
state " " as c565acea3c326dd0588d859ee78f8b60_entry  <<entryPoint>>
state "(END_AT) 大于等于(>=) 数据对象属性 (START_AT)" as b3fe75aaea9bd3f572de977e944d876c [[$./end_at#ab3fe75aaea9bd3f572de977e944d876c {"[常规条件] 大于等于(>=) 数据对象属性 (START_AT)"}]]
state "(START_AT) 值为空(Nil)" as 26c4993a78e0009d131e68e2e3bf6c48 [[$./end_at#a26c4993a78e0009d131e68e2e3bf6c48 {"[常规条件] 值为空(Nil)"}]]
state " " as c565acea3c326dd0588d859ee78f8b60_exit  <<exitPoint>>
}
state " " as 7215fded458df5f27bf6ed5bba7bc85a_exit  <<exitPoint>>
}


start --> 7215fded458df5f27bf6ed5bba7bc85a_entry 
7215fded458df5f27bf6ed5bba7bc85a_entry --> 81c0420f805f432cc2e2fa574c2fd73b 
81c0420f805f432cc2e2fa574c2fd73b --> 7215fded458df5f27bf6ed5bba7bc85a_exit  : yes
81c0420f805f432cc2e2fa574c2fd73b -[#red]-> c565acea3c326dd0588d859ee78f8b60_entry  : no

c565acea3c326dd0588d859ee78f8b60_entry --> b3fe75aaea9bd3f572de977e944d876c 
b3fe75aaea9bd3f572de977e944d876c --> c565acea3c326dd0588d859ee78f8b60_exit  : yes
b3fe75aaea9bd3f572de977e944d876c -[#red]-> 26c4993a78e0009d131e68e2e3bf6c48  : no

26c4993a78e0009d131e68e2e3bf6c48 --> c565acea3c326dd0588d859ee78f8b60_exit  : yes
26c4993a78e0009d131e68e2e3bf6c48 -[#red]-> end  : no
c565acea3c326dd0588d859ee78f8b60_exit --> 7215fded458df5f27bf6ed5bba7bc85a_exit 
7215fded458df5f27bf6ed5bba7bc85a_exit --> end 


@enduml
```

#### 条件说明

##### (END_AT) 值为空(Nil) :id=a81c0420f805f432cc2e2fa574c2fd73b



`END_AT(截止时间)` ISNULL 

##### (START_AT) 值为空(Nil) :id=a26c4993a78e0009d131e68e2e3bf6c48



`START_AT(开始时间)` ISNULL 

##### (END_AT) 大于等于(>=) 数据对象属性 (START_AT) :id=ab3fe75aaea9bd3f572de977e944d876c



`END_AT(截止时间)` GTANDEQ  `START_AT`

> [!ATTENTION|label:规则信息|icon:fa fa-warning]
> 结束时间必须大于等于开始时间







