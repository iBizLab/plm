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
state "[条件组]OR" as 41c662ab64e195aa01cd920fb99cc2a0 [[$./end_at#a41c662ab64e195aa01cd920fb99cc2a0 {"[条件组]OR"}]] {
state " " as 41c662ab64e195aa01cd920fb99cc2a0_entry  <<entryPoint>>
state "(END_AT) 值为空(Nil)" as 18144f3015329d4cf8f185a5a17950fd [[$./end_at#a18144f3015329d4cf8f185a5a17950fd {"[常规条件] 值为空(Nil)"}]]
state "[条件组]OR" as 42e1b2be41780375be9c12096ce5f6bd [[$./end_at#a42e1b2be41780375be9c12096ce5f6bd {"[条件组]OR"}]] {
state " " as 42e1b2be41780375be9c12096ce5f6bd_entry  <<entryPoint>>
state "(END_AT) 大于等于(>=) 数据对象属性 (START_AT)" as dbd02b4422aa8ab676ce6583811974ca [[$./end_at#adbd02b4422aa8ab676ce6583811974ca {"[常规条件] 大于等于(>=) 数据对象属性 (START_AT)"}]]
state "(START_AT) 值为空(Nil)" as 738b239713933a12e811b90db0424cfb [[$./end_at#a738b239713933a12e811b90db0424cfb {"[常规条件] 值为空(Nil)"}]]
state " " as 42e1b2be41780375be9c12096ce5f6bd_exit  <<exitPoint>>
}
state " " as 41c662ab64e195aa01cd920fb99cc2a0_exit  <<exitPoint>>
}


start --> 41c662ab64e195aa01cd920fb99cc2a0_entry 
41c662ab64e195aa01cd920fb99cc2a0_entry --> 18144f3015329d4cf8f185a5a17950fd 
18144f3015329d4cf8f185a5a17950fd --> 41c662ab64e195aa01cd920fb99cc2a0_exit  : yes
18144f3015329d4cf8f185a5a17950fd -[#red]-> 42e1b2be41780375be9c12096ce5f6bd_entry  : no

42e1b2be41780375be9c12096ce5f6bd_entry --> dbd02b4422aa8ab676ce6583811974ca 
dbd02b4422aa8ab676ce6583811974ca --> 42e1b2be41780375be9c12096ce5f6bd_exit  : yes
dbd02b4422aa8ab676ce6583811974ca -[#red]-> 738b239713933a12e811b90db0424cfb  : no

738b239713933a12e811b90db0424cfb --> 42e1b2be41780375be9c12096ce5f6bd_exit  : yes
738b239713933a12e811b90db0424cfb -[#red]-> end  : no
42e1b2be41780375be9c12096ce5f6bd_exit --> 41c662ab64e195aa01cd920fb99cc2a0_exit 
41c662ab64e195aa01cd920fb99cc2a0_exit --> end 


@enduml
```

#### 条件说明

##### (END_AT) 大于等于(>=) 数据对象属性 (START_AT) :id=adbd02b4422aa8ab676ce6583811974ca



`END_AT(计划结束)` GTANDEQ  `START_AT`

> [!ATTENTION|label:规则信息|icon:fa fa-warning]
> 发布时间必须大于等于开始时间


##### (END_AT) 值为空(Nil) :id=a18144f3015329d4cf8f185a5a17950fd



`END_AT(计划结束)` ISNULL 

##### (START_AT) 值为空(Nil) :id=a738b239713933a12e811b90db0424cfb



`START_AT(计划开始)` ISNULL 






