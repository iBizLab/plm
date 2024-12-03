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
state "[条件组]OR" as e2e3e1c9c1f76e2c611fbc3b76d13d4a [[$./end_at#ae2e3e1c9c1f76e2c611fbc3b76d13d4a {"[条件组]OR"}]] {
state " " as e2e3e1c9c1f76e2c611fbc3b76d13d4a_entry  <<entryPoint>>
state "(END_AT) 值为空(Nil)" as 696d0846a380b54d0048127790c2dcf9 [[$./end_at#a696d0846a380b54d0048127790c2dcf9 {"[常规条件] 值为空(Nil)"}]]
state "[条件组]OR" as b77e68e87a3dc04b976cd6319b0f9c7a [[$./end_at#ab77e68e87a3dc04b976cd6319b0f9c7a {"[条件组]OR"}]] {
state " " as b77e68e87a3dc04b976cd6319b0f9c7a_entry  <<entryPoint>>
state "(END_AT) 大于等于(>=) 数据对象属性 (START_AT)" as 4101c802e396aac6f8d61fd5a715aa8a [[$./end_at#a4101c802e396aac6f8d61fd5a715aa8a {"[常规条件] 大于等于(>=) 数据对象属性 (START_AT)"}]]
state "(START_AT) 值为空(Nil)" as 5ac0a4b22fc29b503b4d916ce2dc466c [[$./end_at#a5ac0a4b22fc29b503b4d916ce2dc466c {"[常规条件] 值为空(Nil)"}]]
state " " as b77e68e87a3dc04b976cd6319b0f9c7a_exit  <<exitPoint>>
}
state " " as e2e3e1c9c1f76e2c611fbc3b76d13d4a_exit  <<exitPoint>>
}


start --> e2e3e1c9c1f76e2c611fbc3b76d13d4a_entry 
e2e3e1c9c1f76e2c611fbc3b76d13d4a_entry --> 696d0846a380b54d0048127790c2dcf9 
696d0846a380b54d0048127790c2dcf9 --> e2e3e1c9c1f76e2c611fbc3b76d13d4a_exit  : yes
696d0846a380b54d0048127790c2dcf9 -[#red]-> b77e68e87a3dc04b976cd6319b0f9c7a_entry  : no

b77e68e87a3dc04b976cd6319b0f9c7a_entry --> 4101c802e396aac6f8d61fd5a715aa8a 
4101c802e396aac6f8d61fd5a715aa8a --> b77e68e87a3dc04b976cd6319b0f9c7a_exit  : yes
4101c802e396aac6f8d61fd5a715aa8a -[#red]-> 5ac0a4b22fc29b503b4d916ce2dc466c  : no

5ac0a4b22fc29b503b4d916ce2dc466c --> b77e68e87a3dc04b976cd6319b0f9c7a_exit  : yes
5ac0a4b22fc29b503b4d916ce2dc466c -[#red]-> end  : no
b77e68e87a3dc04b976cd6319b0f9c7a_exit --> e2e3e1c9c1f76e2c611fbc3b76d13d4a_exit 
e2e3e1c9c1f76e2c611fbc3b76d13d4a_exit --> end 


@enduml
```

#### 条件说明

##### (END_AT) 值为空(Nil) :id=a696d0846a380b54d0048127790c2dcf9



`END_AT(截止时间)` ISNULL 

##### (START_AT) 值为空(Nil) :id=a5ac0a4b22fc29b503b4d916ce2dc466c



`START_AT(开始时间)` ISNULL 

##### (END_AT) 大于等于(>=) 数据对象属性 (START_AT) :id=a4101c802e396aac6f8d61fd5a715aa8a



`END_AT(截止时间)` GTANDEQ  `START_AT`

> [!ATTENTION|label:规则信息|icon:fa fa-warning]
> 结束时间必须大于等于开始时间







