## 结束时间(END_AT) <!-- {docsify-ignore-all} -->

   

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
state "[条件组]OR" as bd622cd1f5b4e22e2356345c31ec2b8d [[$./end_at#abd622cd1f5b4e22e2356345c31ec2b8d {"[条件组]OR"}]] {
state " " as bd622cd1f5b4e22e2356345c31ec2b8d_entry  <<entryPoint>>
state "(END_AT) 值为空(Nil)" as b59950e37c486507d513320dedfa31dd [[$./end_at#ab59950e37c486507d513320dedfa31dd {"[常规条件] 值为空(Nil)"}]]
state "[条件组]OR" as 3a65185b620d6bcc4aeea6e0e5156f3c [[$./end_at#a3a65185b620d6bcc4aeea6e0e5156f3c {"[条件组]OR"}]] {
state " " as 3a65185b620d6bcc4aeea6e0e5156f3c_entry  <<entryPoint>>
state "(START_AT) 值为空(Nil)" as d3506e03c8a5d6f0086d86e9cc2bc470 [[$./end_at#ad3506e03c8a5d6f0086d86e9cc2bc470 {"[常规条件] 值为空(Nil)"}]]
state "(END_AT) 大于等于(>=) 数据对象属性 (START_AT)" as 45dde6ea1bed65e5d7c5f3869941b21c [[$./end_at#a45dde6ea1bed65e5d7c5f3869941b21c {"[常规条件] 大于等于(>=) 数据对象属性 (START_AT)"}]]
state " " as 3a65185b620d6bcc4aeea6e0e5156f3c_exit  <<exitPoint>>
}
state " " as bd622cd1f5b4e22e2356345c31ec2b8d_exit  <<exitPoint>>
}


start --> bd622cd1f5b4e22e2356345c31ec2b8d_entry 
bd622cd1f5b4e22e2356345c31ec2b8d_entry --> b59950e37c486507d513320dedfa31dd 
b59950e37c486507d513320dedfa31dd --> bd622cd1f5b4e22e2356345c31ec2b8d_exit  : yes
b59950e37c486507d513320dedfa31dd -[#red]-> 3a65185b620d6bcc4aeea6e0e5156f3c_entry  : no

3a65185b620d6bcc4aeea6e0e5156f3c_entry --> d3506e03c8a5d6f0086d86e9cc2bc470 
d3506e03c8a5d6f0086d86e9cc2bc470 --> 3a65185b620d6bcc4aeea6e0e5156f3c_exit  : yes
d3506e03c8a5d6f0086d86e9cc2bc470 -[#red]-> 45dde6ea1bed65e5d7c5f3869941b21c  : no

45dde6ea1bed65e5d7c5f3869941b21c --> 3a65185b620d6bcc4aeea6e0e5156f3c_exit  : yes
45dde6ea1bed65e5d7c5f3869941b21c -[#red]-> end  : no
3a65185b620d6bcc4aeea6e0e5156f3c_exit --> bd622cd1f5b4e22e2356345c31ec2b8d_exit 
bd622cd1f5b4e22e2356345c31ec2b8d_exit --> end 


@enduml
```

#### 条件说明

##### (END_AT) 大于等于(>=) 数据对象属性 (START_AT) :id=a45dde6ea1bed65e5d7c5f3869941b21c



`END_AT(结束时间)` GTANDEQ  `START_AT`

> [!ATTENTION|label:规则信息|icon:fa fa-warning]
> 结束时间必须大于等于开始时间


##### (END_AT) 值为空(Nil) :id=ab59950e37c486507d513320dedfa31dd



`END_AT(结束时间)` ISNULL 

##### (START_AT) 值为空(Nil) :id=ad3506e03c8a5d6f0086d86e9cc2bc470



`START_AT(开始时间)` ISNULL 






