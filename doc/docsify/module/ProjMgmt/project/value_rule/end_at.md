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
state "[条件组]OR" as a7e44c689f057aad92fe1f7e3482eab5 [[$./end_at#aa7e44c689f057aad92fe1f7e3482eab5 {"[条件组]OR"}]] {
state " " as a7e44c689f057aad92fe1f7e3482eab5_entry  <<entryPoint>>
state "(END_AT) 值为空(Nil)" as df9b862bf254592aade74f819842e653 [[$./end_at#adf9b862bf254592aade74f819842e653 {"[常规条件] 值为空(Nil)"}]]
state "[条件组]OR" as dd5e3f4b22c6f963b651db74380998d1 [[$./end_at#add5e3f4b22c6f963b651db74380998d1 {"[条件组]OR"}]] {
state " " as dd5e3f4b22c6f963b651db74380998d1_entry  <<entryPoint>>
state "(START_AT) 值为空(Nil)" as c6f34911c0a76d7affe641d26c197163 [[$./end_at#ac6f34911c0a76d7affe641d26c197163 {"[常规条件] 值为空(Nil)"}]]
state "(END_AT) 大于等于(>=) 数据对象属性 (START_AT)" as 9848269f0a484e0201720a5033ba2c57 [[$./end_at#a9848269f0a484e0201720a5033ba2c57 {"[常规条件] 大于等于(>=) 数据对象属性 (START_AT)"}]]
state " " as dd5e3f4b22c6f963b651db74380998d1_exit  <<exitPoint>>
}
state " " as a7e44c689f057aad92fe1f7e3482eab5_exit  <<exitPoint>>
}


start --> a7e44c689f057aad92fe1f7e3482eab5_entry 
a7e44c689f057aad92fe1f7e3482eab5_entry --> df9b862bf254592aade74f819842e653 
df9b862bf254592aade74f819842e653 --> a7e44c689f057aad92fe1f7e3482eab5_exit  : yes
df9b862bf254592aade74f819842e653 -[#red]-> dd5e3f4b22c6f963b651db74380998d1_entry  : no

dd5e3f4b22c6f963b651db74380998d1_entry --> c6f34911c0a76d7affe641d26c197163 
c6f34911c0a76d7affe641d26c197163 --> dd5e3f4b22c6f963b651db74380998d1_exit  : yes
c6f34911c0a76d7affe641d26c197163 -[#red]-> 9848269f0a484e0201720a5033ba2c57  : no

9848269f0a484e0201720a5033ba2c57 --> dd5e3f4b22c6f963b651db74380998d1_exit  : yes
9848269f0a484e0201720a5033ba2c57 -[#red]-> end  : no
dd5e3f4b22c6f963b651db74380998d1_exit --> a7e44c689f057aad92fe1f7e3482eab5_exit 
a7e44c689f057aad92fe1f7e3482eab5_exit --> end 


@enduml
```

#### 条件说明

##### (END_AT) 值为空(Nil) :id=adf9b862bf254592aade74f819842e653



`END_AT(结束时间)` ISNULL 

##### (END_AT) 大于等于(>=) 数据对象属性 (START_AT) :id=a9848269f0a484e0201720a5033ba2c57



`END_AT(结束时间)` GTANDEQ  `START_AT`

> [!ATTENTION|label:规则信息|icon:fa fa-warning]
> 结束时间必须大于等于开始时间


##### (START_AT) 值为空(Nil) :id=ac6f34911c0a76d7affe641d26c197163



`START_AT(开始时间)` ISNULL 






