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
state "[条件组]OR" as 9c0038223969fa328676bdffb8c76e27 [[$./end_at#a9c0038223969fa328676bdffb8c76e27 {"[条件组]OR"}]] {
state " " as 9c0038223969fa328676bdffb8c76e27_entry  <<entryPoint>>
state "(END_AT) 值为空(Nil)" as 730191594ef670b95f1ba7c86b37895b [[$./end_at#a730191594ef670b95f1ba7c86b37895b {"[常规条件] 值为空(Nil)"}]]
state "[条件组]OR" as 7e9a3e394a2163a042db4835b1f7d3d1 [[$./end_at#a7e9a3e394a2163a042db4835b1f7d3d1 {"[条件组]OR"}]] {
state " " as 7e9a3e394a2163a042db4835b1f7d3d1_entry  <<entryPoint>>
state "(END_AT) 大于等于(>=) 数据对象属性 (START_AT)" as f23a0d20a8e86165f30b7d07c34269cf [[$./end_at#af23a0d20a8e86165f30b7d07c34269cf {"[常规条件] 大于等于(>=) 数据对象属性 (START_AT)"}]]
state "(START_AT) 值为空(Nil)" as 767c2a6f34ddb1fef25a7c609e867801 [[$./end_at#a767c2a6f34ddb1fef25a7c609e867801 {"[常规条件] 值为空(Nil)"}]]
state " " as 7e9a3e394a2163a042db4835b1f7d3d1_exit  <<exitPoint>>
}
state " " as 9c0038223969fa328676bdffb8c76e27_exit  <<exitPoint>>
}


start --> 9c0038223969fa328676bdffb8c76e27_entry 
9c0038223969fa328676bdffb8c76e27_entry --> 730191594ef670b95f1ba7c86b37895b 
730191594ef670b95f1ba7c86b37895b --> 9c0038223969fa328676bdffb8c76e27_exit  : yes
730191594ef670b95f1ba7c86b37895b -[#red]-> 7e9a3e394a2163a042db4835b1f7d3d1_entry  : no

7e9a3e394a2163a042db4835b1f7d3d1_entry --> f23a0d20a8e86165f30b7d07c34269cf 
f23a0d20a8e86165f30b7d07c34269cf --> 7e9a3e394a2163a042db4835b1f7d3d1_exit  : yes
f23a0d20a8e86165f30b7d07c34269cf -[#red]-> 767c2a6f34ddb1fef25a7c609e867801  : no

767c2a6f34ddb1fef25a7c609e867801 --> 7e9a3e394a2163a042db4835b1f7d3d1_exit  : yes
767c2a6f34ddb1fef25a7c609e867801 -[#red]-> end  : no
7e9a3e394a2163a042db4835b1f7d3d1_exit --> 9c0038223969fa328676bdffb8c76e27_exit 
9c0038223969fa328676bdffb8c76e27_exit --> end 


@enduml
```

#### 条件说明

##### (END_AT) 值为空(Nil) :id=a730191594ef670b95f1ba7c86b37895b



`END_AT(截止时间)` ISNULL 

##### (START_AT) 值为空(Nil) :id=a767c2a6f34ddb1fef25a7c609e867801



`START_AT(开始时间)` ISNULL 

##### (END_AT) 大于等于(>=) 数据对象属性 (START_AT) :id=af23a0d20a8e86165f30b7d07c34269cf



`END_AT(截止时间)` GTANDEQ  `START_AT`

> [!ATTENTION|label:规则信息|icon:fa fa-warning]
> 结束时间必须大于等于开始时间







