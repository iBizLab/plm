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
state "[条件组]OR" as 5641d2f755f0961890c5496d19fe630c [[$./end_at#a5641d2f755f0961890c5496d19fe630c {"[条件组]OR"}]] {
state " " as 5641d2f755f0961890c5496d19fe630c_entry  <<entryPoint>>
state "(END_AT) 值为空(Nil)" as a57a725c2ebb26ad97a28cc192446f07 [[$./end_at#aa57a725c2ebb26ad97a28cc192446f07 {"[常规条件] 值为空(Nil)"}]]
state "[条件组]OR" as 0b059c8907a06acec0174b40a0f54e88 [[$./end_at#a0b059c8907a06acec0174b40a0f54e88 {"[条件组]OR"}]] {
state " " as 0b059c8907a06acec0174b40a0f54e88_entry  <<entryPoint>>
state "(END_AT) 大于等于(>=) 数据对象属性 (START_AT)" as 4ab2228b6a8547e6ae66525dfd320db6 [[$./end_at#a4ab2228b6a8547e6ae66525dfd320db6 {"[常规条件] 大于等于(>=) 数据对象属性 (START_AT)"}]]
state "(START_AT) 值为空(Nil)" as 94ee3714b742fb221c9bbb5856dd30d7 [[$./end_at#a94ee3714b742fb221c9bbb5856dd30d7 {"[常规条件] 值为空(Nil)"}]]
state " " as 0b059c8907a06acec0174b40a0f54e88_exit  <<exitPoint>>
}
state " " as 5641d2f755f0961890c5496d19fe630c_exit  <<exitPoint>>
}


start --> 5641d2f755f0961890c5496d19fe630c_entry 
5641d2f755f0961890c5496d19fe630c_entry --> a57a725c2ebb26ad97a28cc192446f07 
a57a725c2ebb26ad97a28cc192446f07 --> 5641d2f755f0961890c5496d19fe630c_exit  : yes
a57a725c2ebb26ad97a28cc192446f07 -[#red]-> 0b059c8907a06acec0174b40a0f54e88_entry  : no

0b059c8907a06acec0174b40a0f54e88_entry --> 4ab2228b6a8547e6ae66525dfd320db6 
4ab2228b6a8547e6ae66525dfd320db6 --> 0b059c8907a06acec0174b40a0f54e88_exit  : yes
4ab2228b6a8547e6ae66525dfd320db6 -[#red]-> 94ee3714b742fb221c9bbb5856dd30d7  : no

94ee3714b742fb221c9bbb5856dd30d7 --> 0b059c8907a06acec0174b40a0f54e88_exit  : yes
94ee3714b742fb221c9bbb5856dd30d7 -[#red]-> end  : no
0b059c8907a06acec0174b40a0f54e88_exit --> 5641d2f755f0961890c5496d19fe630c_exit 
5641d2f755f0961890c5496d19fe630c_exit --> end 


@enduml
```

#### 条件说明

##### (END_AT) 大于等于(>=) 数据对象属性 (START_AT) :id=a4ab2228b6a8547e6ae66525dfd320db6



`END_AT(截止时间)` GTANDEQ  `START_AT`

> [!ATTENTION|label:规则信息|icon:fa fa-warning]
> 结束时间必须大于等于开始时间


##### (END_AT) 值为空(Nil) :id=aa57a725c2ebb26ad97a28cc192446f07



`END_AT(截止时间)` ISNULL 

##### (START_AT) 值为空(Nil) :id=a94ee3714b742fb221c9bbb5856dd30d7



`START_AT(开始时间)` ISNULL 






