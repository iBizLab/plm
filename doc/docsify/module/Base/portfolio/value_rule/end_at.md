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
state "[条件组]OR" as 93c1492c7f06369efcf06a5a7f9b0502 [[$./end_at#a93c1492c7f06369efcf06a5a7f9b0502 {"[条件组]OR"}]] {
state " " as 93c1492c7f06369efcf06a5a7f9b0502_entry  <<entryPoint>>
state "(END_AT) 值为空(Nil)" as 5dcf76d8667050c5d82602f5c3bc33bf [[$./end_at#a5dcf76d8667050c5d82602f5c3bc33bf {"[常规条件] 值为空(Nil)"}]]
state "[条件组]OR" as acd68aceef86a4f283f2f4be820bd3bb [[$./end_at#aacd68aceef86a4f283f2f4be820bd3bb {"[条件组]OR"}]] {
state " " as acd68aceef86a4f283f2f4be820bd3bb_entry  <<entryPoint>>
state "(START_AT) 值为空(Nil)" as 13ab267914ade4f8cdafdde7017ace8f [[$./end_at#a13ab267914ade4f8cdafdde7017ace8f {"[常规条件] 值为空(Nil)"}]]
state "(END_AT) 大于等于(>=) 数据对象属性 (START_AT)" as 0ce317ade6c0b86df0f4ad1b7cdcff1f [[$./end_at#a0ce317ade6c0b86df0f4ad1b7cdcff1f {"[常规条件] 大于等于(>=) 数据对象属性 (START_AT)"}]]
state " " as acd68aceef86a4f283f2f4be820bd3bb_exit  <<exitPoint>>
}
state " " as 93c1492c7f06369efcf06a5a7f9b0502_exit  <<exitPoint>>
}


start --> 93c1492c7f06369efcf06a5a7f9b0502_entry 
93c1492c7f06369efcf06a5a7f9b0502_entry --> 5dcf76d8667050c5d82602f5c3bc33bf 
5dcf76d8667050c5d82602f5c3bc33bf --> 93c1492c7f06369efcf06a5a7f9b0502_exit  : yes
5dcf76d8667050c5d82602f5c3bc33bf -[#red]-> acd68aceef86a4f283f2f4be820bd3bb_entry  : no

acd68aceef86a4f283f2f4be820bd3bb_entry --> 13ab267914ade4f8cdafdde7017ace8f 
13ab267914ade4f8cdafdde7017ace8f --> acd68aceef86a4f283f2f4be820bd3bb_exit  : yes
13ab267914ade4f8cdafdde7017ace8f -[#red]-> 0ce317ade6c0b86df0f4ad1b7cdcff1f  : no

0ce317ade6c0b86df0f4ad1b7cdcff1f --> acd68aceef86a4f283f2f4be820bd3bb_exit  : yes
0ce317ade6c0b86df0f4ad1b7cdcff1f -[#red]-> end  : no
acd68aceef86a4f283f2f4be820bd3bb_exit --> 93c1492c7f06369efcf06a5a7f9b0502_exit 
93c1492c7f06369efcf06a5a7f9b0502_exit --> end 


@enduml
```

#### 条件说明

##### (END_AT) 值为空(Nil) :id=a5dcf76d8667050c5d82602f5c3bc33bf



`END_AT(结束时间)` ISNULL 

##### (START_AT) 值为空(Nil) :id=a13ab267914ade4f8cdafdde7017ace8f



`START_AT(开始时间)` ISNULL 

##### (END_AT) 大于等于(>=) 数据对象属性 (START_AT) :id=a0ce317ade6c0b86df0f4ad1b7cdcff1f



`END_AT(结束时间)` GTANDEQ  `START_AT`

> [!ATTENTION|label:规则信息|icon:fa fa-warning]
> 结束时间必须大于等于开始时间







