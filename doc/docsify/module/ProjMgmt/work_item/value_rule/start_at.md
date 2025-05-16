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
state "[条件组]OR" as 0831ecfde627fa52c0ce6d3b55578e90 [[$./start_at#a0831ecfde627fa52c0ce6d3b55578e90 {"[条件组]OR"}]] {
state " " as 0831ecfde627fa52c0ce6d3b55578e90_entry  <<entryPoint>>
state "(START_AT) 值为空(Nil)" as b4b657bd3b02b723a7b0819e96cf76ee [[$./start_at#ab4b657bd3b02b723a7b0819e96cf76ee {"[常规条件] 值为空(Nil)"}]]
state "[条件组]OR" as dd42b51e645cfd6fe5ae90986f2f5290 [[$./start_at#add42b51e645cfd6fe5ae90986f2f5290 {"[条件组]OR"}]] {
state " " as dd42b51e645cfd6fe5ae90986f2f5290_entry  <<entryPoint>>
state "(END_AT) 值为空(Nil)" as b7ea0283dc3707ec56cf9df58e7704ff [[$./start_at#ab7ea0283dc3707ec56cf9df58e7704ff {"[常规条件] 值为空(Nil)"}]]
state "(START_AT) 小于等于(<=) 数据对象属性 (END_AT)" as b6954ab0fb9733d4caafedd26f138a12 [[$./start_at#ab6954ab0fb9733d4caafedd26f138a12 {"[常规条件] 小于等于(<=) 数据对象属性 (END_AT)"}]]
state " " as dd42b51e645cfd6fe5ae90986f2f5290_exit  <<exitPoint>>
}
state " " as 0831ecfde627fa52c0ce6d3b55578e90_exit  <<exitPoint>>
}


start --> 0831ecfde627fa52c0ce6d3b55578e90_entry 
0831ecfde627fa52c0ce6d3b55578e90_entry --> b4b657bd3b02b723a7b0819e96cf76ee 
b4b657bd3b02b723a7b0819e96cf76ee --> 0831ecfde627fa52c0ce6d3b55578e90_exit  : yes
b4b657bd3b02b723a7b0819e96cf76ee -[#red]-> dd42b51e645cfd6fe5ae90986f2f5290_entry  : no

dd42b51e645cfd6fe5ae90986f2f5290_entry --> b7ea0283dc3707ec56cf9df58e7704ff 
b7ea0283dc3707ec56cf9df58e7704ff --> dd42b51e645cfd6fe5ae90986f2f5290_exit  : yes
b7ea0283dc3707ec56cf9df58e7704ff -[#red]-> b6954ab0fb9733d4caafedd26f138a12  : no

b6954ab0fb9733d4caafedd26f138a12 --> dd42b51e645cfd6fe5ae90986f2f5290_exit  : yes
b6954ab0fb9733d4caafedd26f138a12 -[#red]-> end  : no
dd42b51e645cfd6fe5ae90986f2f5290_exit --> 0831ecfde627fa52c0ce6d3b55578e90_exit 
0831ecfde627fa52c0ce6d3b55578e90_exit --> end 


@enduml
```

#### 条件说明

##### (END_AT) 值为空(Nil) :id=ab7ea0283dc3707ec56cf9df58e7704ff



`END_AT(截止时间)` ISNULL 

##### (START_AT) 小于等于(<=) 数据对象属性 (END_AT) :id=ab6954ab0fb9733d4caafedd26f138a12



`START_AT(开始时间)` LTANDEQ  `END_AT`

> [!ATTENTION|label:规则信息|icon:fa fa-warning]
> 开始时间必须小于等于结束时间


##### (START_AT) 值为空(Nil) :id=ab4b657bd3b02b723a7b0819e96cf76ee



`START_AT(开始时间)` ISNULL 






