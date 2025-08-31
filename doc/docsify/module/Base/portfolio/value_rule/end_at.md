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
state "[条件组]OR" as c4d2cd1bb90fd7a18519312ff2326466 [[$./end_at#ac4d2cd1bb90fd7a18519312ff2326466 {"[条件组]OR"}]] {
state " " as c4d2cd1bb90fd7a18519312ff2326466_entry  <<entryPoint>>
state "(END_AT) 值为空(Nil)" as 6ec0ca3551ecb69ebd354f64dc0ca4b5 [[$./end_at#a6ec0ca3551ecb69ebd354f64dc0ca4b5 {"[常规条件] 值为空(Nil)"}]]
state "[条件组]OR" as e51251fab050a045433cc0f01171828b [[$./end_at#ae51251fab050a045433cc0f01171828b {"[条件组]OR"}]] {
state " " as e51251fab050a045433cc0f01171828b_entry  <<entryPoint>>
state "(START_AT) 值为空(Nil)" as 0ce317ade6c0b86df0f4ad1b7cdcff1f [[$./end_at#a0ce317ade6c0b86df0f4ad1b7cdcff1f {"[常规条件] 值为空(Nil)"}]]
state "(END_AT) 大于等于(>=) 数据对象属性 (START_AT)" as 207718f7c06f3a60dbb5d3e90cab6cf3 [[$./end_at#a207718f7c06f3a60dbb5d3e90cab6cf3 {"[常规条件] 大于等于(>=) 数据对象属性 (START_AT)"}]]
state " " as e51251fab050a045433cc0f01171828b_exit  <<exitPoint>>
}
state " " as c4d2cd1bb90fd7a18519312ff2326466_exit  <<exitPoint>>
}


start --> c4d2cd1bb90fd7a18519312ff2326466_entry 
c4d2cd1bb90fd7a18519312ff2326466_entry --> 6ec0ca3551ecb69ebd354f64dc0ca4b5 
6ec0ca3551ecb69ebd354f64dc0ca4b5 --> c4d2cd1bb90fd7a18519312ff2326466_exit  : yes
6ec0ca3551ecb69ebd354f64dc0ca4b5 -[#red]-> e51251fab050a045433cc0f01171828b_entry  : no

e51251fab050a045433cc0f01171828b_entry --> 0ce317ade6c0b86df0f4ad1b7cdcff1f 
0ce317ade6c0b86df0f4ad1b7cdcff1f --> e51251fab050a045433cc0f01171828b_exit  : yes
0ce317ade6c0b86df0f4ad1b7cdcff1f -[#red]-> 207718f7c06f3a60dbb5d3e90cab6cf3  : no

207718f7c06f3a60dbb5d3e90cab6cf3 --> e51251fab050a045433cc0f01171828b_exit  : yes
207718f7c06f3a60dbb5d3e90cab6cf3 -[#red]-> end  : no
e51251fab050a045433cc0f01171828b_exit --> c4d2cd1bb90fd7a18519312ff2326466_exit 
c4d2cd1bb90fd7a18519312ff2326466_exit --> end 


@enduml
```

#### 条件说明

##### (END_AT) 大于等于(>=) 数据对象属性 (START_AT) :id=a207718f7c06f3a60dbb5d3e90cab6cf3



`END_AT(结束时间)` GTANDEQ  `START_AT`

> [!ATTENTION|label:规则信息|icon:fa fa-warning]
> 结束时间必须大于等于开始时间


##### (END_AT) 值为空(Nil) :id=a6ec0ca3551ecb69ebd354f64dc0ca4b5



`END_AT(结束时间)` ISNULL 

##### (START_AT) 值为空(Nil) :id=a0ce317ade6c0b86df0f4ad1b7cdcff1f



`START_AT(开始时间)` ISNULL 






