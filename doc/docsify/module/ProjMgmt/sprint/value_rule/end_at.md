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
state "[条件组]OR" as 76ff70c52dd61a4c0b930306b4805da5 [[$./end_at#a76ff70c52dd61a4c0b930306b4805da5 {"[条件组]OR"}]] {
state " " as 76ff70c52dd61a4c0b930306b4805da5_entry  <<entryPoint>>
state "(END_AT) 值为空(Nil)" as 3af5ea48695eafbd8feb9c07471fdfe7 [[$./end_at#a3af5ea48695eafbd8feb9c07471fdfe7 {"[常规条件] 值为空(Nil)"}]]
state "[条件组]OR" as 8d82d26e68faee17c28a6b2af19a5766 [[$./end_at#a8d82d26e68faee17c28a6b2af19a5766 {"[条件组]OR"}]] {
state " " as 8d82d26e68faee17c28a6b2af19a5766_entry  <<entryPoint>>
state "(START_AT) 值为空(Nil)" as 7542e7ee9535dc64aba821aed42c8ecd [[$./end_at#a7542e7ee9535dc64aba821aed42c8ecd {"[常规条件] 值为空(Nil)"}]]
state "(END_AT) 大于等于(>=) 数据对象属性 (START_AT)" as 3af8cc981419ff409296f752efef505d [[$./end_at#a3af8cc981419ff409296f752efef505d {"[常规条件] 大于等于(>=) 数据对象属性 (START_AT)"}]]
state " " as 8d82d26e68faee17c28a6b2af19a5766_exit  <<exitPoint>>
}
state " " as 76ff70c52dd61a4c0b930306b4805da5_exit  <<exitPoint>>
}


start --> 76ff70c52dd61a4c0b930306b4805da5_entry 
76ff70c52dd61a4c0b930306b4805da5_entry --> 3af5ea48695eafbd8feb9c07471fdfe7 
3af5ea48695eafbd8feb9c07471fdfe7 --> 76ff70c52dd61a4c0b930306b4805da5_exit  : yes
3af5ea48695eafbd8feb9c07471fdfe7 -[#red]-> 8d82d26e68faee17c28a6b2af19a5766_entry  : no

8d82d26e68faee17c28a6b2af19a5766_entry --> 7542e7ee9535dc64aba821aed42c8ecd 
7542e7ee9535dc64aba821aed42c8ecd --> 8d82d26e68faee17c28a6b2af19a5766_exit  : yes
7542e7ee9535dc64aba821aed42c8ecd -[#red]-> 3af8cc981419ff409296f752efef505d  : no

3af8cc981419ff409296f752efef505d --> 8d82d26e68faee17c28a6b2af19a5766_exit  : yes
3af8cc981419ff409296f752efef505d -[#red]-> end  : no
8d82d26e68faee17c28a6b2af19a5766_exit --> 76ff70c52dd61a4c0b930306b4805da5_exit 
76ff70c52dd61a4c0b930306b4805da5_exit --> end 


@enduml
```

#### 条件说明

##### (END_AT) 值为空(Nil) :id=a3af5ea48695eafbd8feb9c07471fdfe7



`END_AT(结束时间)` ISNULL 

##### (END_AT) 大于等于(>=) 数据对象属性 (START_AT) :id=a3af8cc981419ff409296f752efef505d



`END_AT(结束时间)` GTANDEQ  `START_AT`

> [!ATTENTION|label:规则信息|icon:fa fa-warning]
> 结束时间必须大于等于开始时间


##### (START_AT) 值为空(Nil) :id=a7542e7ee9535dc64aba821aed42c8ecd



`START_AT(开始时间)` ISNULL 






