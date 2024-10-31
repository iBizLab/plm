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
state "[条件组]OR" as c5f61b562eb73a760178c9b107127a26 [[$./start_at#ac5f61b562eb73a760178c9b107127a26 {"[条件组]OR"}]] {
state " " as c5f61b562eb73a760178c9b107127a26_entry  <<entryPoint>>
state "(START_AT) 值为空(Nil)" as 8acecb870c7b24c7391009b2d51a1d99 [[$./start_at#a8acecb870c7b24c7391009b2d51a1d99 {"[常规条件] 值为空(Nil)"}]]
state "[条件组]OR" as eae4a7a2d646c43b050466fc68703877 [[$./start_at#aeae4a7a2d646c43b050466fc68703877 {"[条件组]OR"}]] {
state " " as eae4a7a2d646c43b050466fc68703877_entry  <<entryPoint>>
state "(END_AT) 值为空(Nil)" as 288788948c9a0b3bb7ffb38a7a39155a [[$./start_at#a288788948c9a0b3bb7ffb38a7a39155a {"[常规条件] 值为空(Nil)"}]]
state "(START_AT) 小于等于(<=) 数据对象属性 (END_AT)" as 15867ed50e8b644f9848996377f20fe6 [[$./start_at#a15867ed50e8b644f9848996377f20fe6 {"[常规条件] 小于等于(<=) 数据对象属性 (END_AT)"}]]
state " " as eae4a7a2d646c43b050466fc68703877_exit  <<exitPoint>>
}
state " " as c5f61b562eb73a760178c9b107127a26_exit  <<exitPoint>>
}


start --> c5f61b562eb73a760178c9b107127a26_entry 
c5f61b562eb73a760178c9b107127a26_entry --> 8acecb870c7b24c7391009b2d51a1d99 
8acecb870c7b24c7391009b2d51a1d99 --> c5f61b562eb73a760178c9b107127a26_exit  : yes
8acecb870c7b24c7391009b2d51a1d99 -[#red]-> eae4a7a2d646c43b050466fc68703877_entry  : no

eae4a7a2d646c43b050466fc68703877_entry --> 288788948c9a0b3bb7ffb38a7a39155a 
288788948c9a0b3bb7ffb38a7a39155a --> eae4a7a2d646c43b050466fc68703877_exit  : yes
288788948c9a0b3bb7ffb38a7a39155a -[#red]-> 15867ed50e8b644f9848996377f20fe6  : no

15867ed50e8b644f9848996377f20fe6 --> eae4a7a2d646c43b050466fc68703877_exit  : yes
15867ed50e8b644f9848996377f20fe6 -[#red]-> end  : no
eae4a7a2d646c43b050466fc68703877_exit --> c5f61b562eb73a760178c9b107127a26_exit 
c5f61b562eb73a760178c9b107127a26_exit --> end 


@enduml
```

#### 条件说明

##### (START_AT) 小于等于(<=) 数据对象属性 (END_AT) :id=a15867ed50e8b644f9848996377f20fe6



`START_AT(开始时间)` LTANDEQ  `END_AT`

> [!ATTENTION|label:规则信息|icon:fa fa-warning]
> 开始时间必须小于等于发布时间


##### (START_AT) 值为空(Nil) :id=a8acecb870c7b24c7391009b2d51a1d99



`START_AT(开始时间)` ISNULL 

##### (END_AT) 值为空(Nil) :id=a288788948c9a0b3bb7ffb38a7a39155a



`END_AT(发布时间)` ISNULL 






