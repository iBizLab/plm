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
state "[条件组]OR" as dc9bb4c8985d71c1d4535f00b31d3853 [[$./end_at#adc9bb4c8985d71c1d4535f00b31d3853 {"[条件组]OR"}]] {
state " " as dc9bb4c8985d71c1d4535f00b31d3853_entry  <<entryPoint>>
state "(END_AT) 值为空(Nil)" as d092e9166824cded13d4827f2c3957ee [[$./end_at#ad092e9166824cded13d4827f2c3957ee {"[常规条件] 值为空(Nil)"}]]
state "[条件组]OR" as 776753421059a4ffc57b85cd43be46a0 [[$./end_at#a776753421059a4ffc57b85cd43be46a0 {"[条件组]OR"}]] {
state " " as 776753421059a4ffc57b85cd43be46a0_entry  <<entryPoint>>
state "(START_AT) 值为空(Nil)" as 0bee2ded9a324ef60f7fb3a8f0dc0614 [[$./end_at#a0bee2ded9a324ef60f7fb3a8f0dc0614 {"[常规条件] 值为空(Nil)"}]]
state "(END_AT) 大于等于(>=) 数据对象属性 (START_AT)" as acfc20ae413732863982640f64d1d4a4 [[$./end_at#aacfc20ae413732863982640f64d1d4a4 {"[常规条件] 大于等于(>=) 数据对象属性 (START_AT)"}]]
state " " as 776753421059a4ffc57b85cd43be46a0_exit  <<exitPoint>>
}
state " " as dc9bb4c8985d71c1d4535f00b31d3853_exit  <<exitPoint>>
}


start --> dc9bb4c8985d71c1d4535f00b31d3853_entry 
dc9bb4c8985d71c1d4535f00b31d3853_entry --> d092e9166824cded13d4827f2c3957ee 
d092e9166824cded13d4827f2c3957ee --> dc9bb4c8985d71c1d4535f00b31d3853_exit  : yes
d092e9166824cded13d4827f2c3957ee -[#red]-> 776753421059a4ffc57b85cd43be46a0_entry  : no

776753421059a4ffc57b85cd43be46a0_entry --> 0bee2ded9a324ef60f7fb3a8f0dc0614 
0bee2ded9a324ef60f7fb3a8f0dc0614 --> 776753421059a4ffc57b85cd43be46a0_exit  : yes
0bee2ded9a324ef60f7fb3a8f0dc0614 -[#red]-> acfc20ae413732863982640f64d1d4a4  : no

acfc20ae413732863982640f64d1d4a4 --> 776753421059a4ffc57b85cd43be46a0_exit  : yes
acfc20ae413732863982640f64d1d4a4 -[#red]-> end  : no
776753421059a4ffc57b85cd43be46a0_exit --> dc9bb4c8985d71c1d4535f00b31d3853_exit 
dc9bb4c8985d71c1d4535f00b31d3853_exit --> end 


@enduml
```

#### 条件说明

##### (START_AT) 值为空(Nil) :id=a0bee2ded9a324ef60f7fb3a8f0dc0614



`START_AT(开始时间)` ISNULL 

##### (END_AT) 大于等于(>=) 数据对象属性 (START_AT) :id=aacfc20ae413732863982640f64d1d4a4



`END_AT(结束时间)` GTANDEQ  `START_AT`

> [!ATTENTION|label:规则信息|icon:fa fa-warning]
> 结束时间必须大于等于开始时间


##### (END_AT) 值为空(Nil) :id=ad092e9166824cded13d4827f2c3957ee



`END_AT(结束时间)` ISNULL 






