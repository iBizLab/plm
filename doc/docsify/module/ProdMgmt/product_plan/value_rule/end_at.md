## 计划结束(END_AT) <!-- {docsify-ignore-all} -->

   

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
state "[条件组]OR" as 044136d69a0750f33c8edd0d4778a266 [[$./end_at#a044136d69a0750f33c8edd0d4778a266 {"[条件组]OR"}]] {
state " " as 044136d69a0750f33c8edd0d4778a266_entry  <<entryPoint>>
state "(END_AT) 值为空(Nil)" as 84d03d642f4dc63b3ee8576af15fb5b5 [[$./end_at#a84d03d642f4dc63b3ee8576af15fb5b5 {"[常规条件] 值为空(Nil)"}]]
state "[条件组]OR" as 4ddcc260c8084d95047c6f73f9e75667 [[$./end_at#a4ddcc260c8084d95047c6f73f9e75667 {"[条件组]OR"}]] {
state " " as 4ddcc260c8084d95047c6f73f9e75667_entry  <<entryPoint>>
state "(END_AT) 大于等于(>=) 数据对象属性 (START_AT)" as c0f3e67ef590508b5bad9d4219644a7f [[$./end_at#ac0f3e67ef590508b5bad9d4219644a7f {"[常规条件] 大于等于(>=) 数据对象属性 (START_AT)"}]]
state "(START_AT) 值为空(Nil)" as b2b24ccacb735bec7f341c0953137837 [[$./end_at#ab2b24ccacb735bec7f341c0953137837 {"[常规条件] 值为空(Nil)"}]]
state " " as 4ddcc260c8084d95047c6f73f9e75667_exit  <<exitPoint>>
}
state " " as 044136d69a0750f33c8edd0d4778a266_exit  <<exitPoint>>
}


start --> 044136d69a0750f33c8edd0d4778a266_entry 
044136d69a0750f33c8edd0d4778a266_entry --> 84d03d642f4dc63b3ee8576af15fb5b5 
84d03d642f4dc63b3ee8576af15fb5b5 --> 044136d69a0750f33c8edd0d4778a266_exit  : yes
84d03d642f4dc63b3ee8576af15fb5b5 -[#red]-> 4ddcc260c8084d95047c6f73f9e75667_entry  : no

4ddcc260c8084d95047c6f73f9e75667_entry --> c0f3e67ef590508b5bad9d4219644a7f 
c0f3e67ef590508b5bad9d4219644a7f --> 4ddcc260c8084d95047c6f73f9e75667_exit  : yes
c0f3e67ef590508b5bad9d4219644a7f -[#red]-> b2b24ccacb735bec7f341c0953137837  : no

b2b24ccacb735bec7f341c0953137837 --> 4ddcc260c8084d95047c6f73f9e75667_exit  : yes
b2b24ccacb735bec7f341c0953137837 -[#red]-> end  : no
4ddcc260c8084d95047c6f73f9e75667_exit --> 044136d69a0750f33c8edd0d4778a266_exit 
044136d69a0750f33c8edd0d4778a266_exit --> end 


@enduml
```

#### 条件说明

##### (END_AT) 值为空(Nil) :id=a84d03d642f4dc63b3ee8576af15fb5b5



`END_AT(计划结束)` ISNULL 

##### (END_AT) 大于等于(>=) 数据对象属性 (START_AT) :id=ac0f3e67ef590508b5bad9d4219644a7f



`END_AT(计划结束)` GTANDEQ  `START_AT`

> [!ATTENTION|label:规则信息|icon:fa fa-warning]
> 发布时间必须大于等于开始时间


##### (START_AT) 值为空(Nil) :id=ab2b24ccacb735bec7f341c0953137837



`START_AT(计划开始)` ISNULL 






