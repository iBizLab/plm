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
state "[条件组]OR" as 2b49ebfe1b10abc1d4ee2d16361e4aa9 [[$./end_at#a2b49ebfe1b10abc1d4ee2d16361e4aa9 {"[条件组]OR"}]] {
state " " as 2b49ebfe1b10abc1d4ee2d16361e4aa9_entry  <<entryPoint>>
state "(END_AT) 值为空(Nil)" as be317e682753631a008a310c7a7625e5 [[$./end_at#abe317e682753631a008a310c7a7625e5 {"[常规条件] 值为空(Nil)"}]]
state "[条件组]OR" as 030cbf8ce2a24075a9125766816aa461 [[$./end_at#a030cbf8ce2a24075a9125766816aa461 {"[条件组]OR"}]] {
state " " as 030cbf8ce2a24075a9125766816aa461_entry  <<entryPoint>>
state "(START_AT) 值为空(Nil)" as c36c06f05bee2ff18916f1e25b0c47c0 [[$./end_at#ac36c06f05bee2ff18916f1e25b0c47c0 {"[常规条件] 值为空(Nil)"}]]
state "(END_AT) 大于等于(>=) 数据对象属性 (START_AT)" as 3a0f2b234629d3c7a4efc494f850fc17 [[$./end_at#a3a0f2b234629d3c7a4efc494f850fc17 {"[常规条件] 大于等于(>=) 数据对象属性 (START_AT)"}]]
state " " as 030cbf8ce2a24075a9125766816aa461_exit  <<exitPoint>>
}
state " " as 2b49ebfe1b10abc1d4ee2d16361e4aa9_exit  <<exitPoint>>
}


start --> 2b49ebfe1b10abc1d4ee2d16361e4aa9_entry 
2b49ebfe1b10abc1d4ee2d16361e4aa9_entry --> be317e682753631a008a310c7a7625e5 
be317e682753631a008a310c7a7625e5 --> 2b49ebfe1b10abc1d4ee2d16361e4aa9_exit  : yes
be317e682753631a008a310c7a7625e5 -[#red]-> 030cbf8ce2a24075a9125766816aa461_entry  : no

030cbf8ce2a24075a9125766816aa461_entry --> c36c06f05bee2ff18916f1e25b0c47c0 
c36c06f05bee2ff18916f1e25b0c47c0 --> 030cbf8ce2a24075a9125766816aa461_exit  : yes
c36c06f05bee2ff18916f1e25b0c47c0 -[#red]-> 3a0f2b234629d3c7a4efc494f850fc17  : no

3a0f2b234629d3c7a4efc494f850fc17 --> 030cbf8ce2a24075a9125766816aa461_exit  : yes
3a0f2b234629d3c7a4efc494f850fc17 -[#red]-> end  : no
030cbf8ce2a24075a9125766816aa461_exit --> 2b49ebfe1b10abc1d4ee2d16361e4aa9_exit 
2b49ebfe1b10abc1d4ee2d16361e4aa9_exit --> end 


@enduml
```

#### 条件说明

##### (END_AT) 大于等于(>=) 数据对象属性 (START_AT) :id=a3a0f2b234629d3c7a4efc494f850fc17



`END_AT(结束时间)` GTANDEQ  `START_AT`

> [!ATTENTION|label:规则信息|icon:fa fa-warning]
> 结束时间必须大于等于开始时间


##### (START_AT) 值为空(Nil) :id=ac36c06f05bee2ff18916f1e25b0c47c0



`START_AT(开始时间)` ISNULL 

##### (END_AT) 值为空(Nil) :id=abe317e682753631a008a310c7a7625e5



`END_AT(结束时间)` ISNULL 






