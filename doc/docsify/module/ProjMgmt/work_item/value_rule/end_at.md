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
state "[条件组]OR" as 62519607828c0cb08a8b5958d2587dc6 [[$./end_at#a62519607828c0cb08a8b5958d2587dc6 {"[条件组]OR"}]] {
state " " as 62519607828c0cb08a8b5958d2587dc6_entry  <<entryPoint>>
state "(END_AT) 值为空(Nil)" as 0bcb100fcfbcd025b629c30d6fb79372 [[$./end_at#a0bcb100fcfbcd025b629c30d6fb79372 {"[常规条件] 值为空(Nil)"}]]
state "[条件组]OR" as 25cc7c7e2bd06a8c5da39166feca15e8 [[$./end_at#a25cc7c7e2bd06a8c5da39166feca15e8 {"[条件组]OR"}]] {
state " " as 25cc7c7e2bd06a8c5da39166feca15e8_entry  <<entryPoint>>
state "(END_AT) 大于等于(>=) 数据对象属性 (START_AT)" as a11981f97548f83ad2642b9baa2bd560 [[$./end_at#aa11981f97548f83ad2642b9baa2bd560 {"[常规条件] 大于等于(>=) 数据对象属性 (START_AT)"}]]
state "(START_AT) 值为空(Nil)" as 26361545a1e81a21f9c1ea5357c915e0 [[$./end_at#a26361545a1e81a21f9c1ea5357c915e0 {"[常规条件] 值为空(Nil)"}]]
state " " as 25cc7c7e2bd06a8c5da39166feca15e8_exit  <<exitPoint>>
}
state " " as 62519607828c0cb08a8b5958d2587dc6_exit  <<exitPoint>>
}


start --> 62519607828c0cb08a8b5958d2587dc6_entry 
62519607828c0cb08a8b5958d2587dc6_entry --> 0bcb100fcfbcd025b629c30d6fb79372 
0bcb100fcfbcd025b629c30d6fb79372 --> 62519607828c0cb08a8b5958d2587dc6_exit  : yes
0bcb100fcfbcd025b629c30d6fb79372 -[#red]-> 25cc7c7e2bd06a8c5da39166feca15e8_entry  : no

25cc7c7e2bd06a8c5da39166feca15e8_entry --> a11981f97548f83ad2642b9baa2bd560 
a11981f97548f83ad2642b9baa2bd560 --> 25cc7c7e2bd06a8c5da39166feca15e8_exit  : yes
a11981f97548f83ad2642b9baa2bd560 -[#red]-> 26361545a1e81a21f9c1ea5357c915e0  : no

26361545a1e81a21f9c1ea5357c915e0 --> 25cc7c7e2bd06a8c5da39166feca15e8_exit  : yes
26361545a1e81a21f9c1ea5357c915e0 -[#red]-> end  : no
25cc7c7e2bd06a8c5da39166feca15e8_exit --> 62519607828c0cb08a8b5958d2587dc6_exit 
62519607828c0cb08a8b5958d2587dc6_exit --> end 


@enduml
```

#### 条件说明

##### (END_AT) 大于等于(>=) 数据对象属性 (START_AT) :id=aa11981f97548f83ad2642b9baa2bd560



`END_AT(截止时间)` GTANDEQ  `START_AT`

> [!ATTENTION|label:规则信息|icon:fa fa-warning]
> 结束时间必须大于等于开始时间


##### (START_AT) 值为空(Nil) :id=a26361545a1e81a21f9c1ea5357c915e0



`START_AT(开始时间)` ISNULL 

##### (END_AT) 值为空(Nil) :id=a0bcb100fcfbcd025b629c30d6fb79372



`END_AT(截止时间)` ISNULL 






