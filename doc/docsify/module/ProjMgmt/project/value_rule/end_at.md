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
state "[条件组]OR" as 1a1e91a285e0b396d87d7cb44bfea040 [[$./end_at#a1a1e91a285e0b396d87d7cb44bfea040 {"[条件组]OR"}]] {
state " " as 1a1e91a285e0b396d87d7cb44bfea040_entry  <<entryPoint>>
state "(END_AT) 值为空(Nil)" as 17b0950535750f1599ffd78c3721685c [[$./end_at#a17b0950535750f1599ffd78c3721685c {"[常规条件] 值为空(Nil)"}]]
state "[条件组]OR" as 457d71ec5fcf9b7ddc9435f34e73fc84 [[$./end_at#a457d71ec5fcf9b7ddc9435f34e73fc84 {"[条件组]OR"}]] {
state " " as 457d71ec5fcf9b7ddc9435f34e73fc84_entry  <<entryPoint>>
state "(START_AT) 值为空(Nil)" as 6267706ad7893811e86e2c0ff1f9a143 [[$./end_at#a6267706ad7893811e86e2c0ff1f9a143 {"[常规条件] 值为空(Nil)"}]]
state "(END_AT) 大于等于(>=) 数据对象属性 (START_AT)" as ea76d1c39a0ee66f8969197a5ed95f30 [[$./end_at#aea76d1c39a0ee66f8969197a5ed95f30 {"[常规条件] 大于等于(>=) 数据对象属性 (START_AT)"}]]
state " " as 457d71ec5fcf9b7ddc9435f34e73fc84_exit  <<exitPoint>>
}
state " " as 1a1e91a285e0b396d87d7cb44bfea040_exit  <<exitPoint>>
}


start --> 1a1e91a285e0b396d87d7cb44bfea040_entry 
1a1e91a285e0b396d87d7cb44bfea040_entry --> 17b0950535750f1599ffd78c3721685c 
17b0950535750f1599ffd78c3721685c --> 1a1e91a285e0b396d87d7cb44bfea040_exit  : yes
17b0950535750f1599ffd78c3721685c -[#red]-> 457d71ec5fcf9b7ddc9435f34e73fc84_entry  : no

457d71ec5fcf9b7ddc9435f34e73fc84_entry --> 6267706ad7893811e86e2c0ff1f9a143 
6267706ad7893811e86e2c0ff1f9a143 --> 457d71ec5fcf9b7ddc9435f34e73fc84_exit  : yes
6267706ad7893811e86e2c0ff1f9a143 -[#red]-> ea76d1c39a0ee66f8969197a5ed95f30  : no

ea76d1c39a0ee66f8969197a5ed95f30 --> 457d71ec5fcf9b7ddc9435f34e73fc84_exit  : yes
ea76d1c39a0ee66f8969197a5ed95f30 -[#red]-> end  : no
457d71ec5fcf9b7ddc9435f34e73fc84_exit --> 1a1e91a285e0b396d87d7cb44bfea040_exit 
1a1e91a285e0b396d87d7cb44bfea040_exit --> end 


@enduml
```

#### 条件说明

##### (END_AT) 值为空(Nil) :id=a17b0950535750f1599ffd78c3721685c



`END_AT(结束时间)` ISNULL 

##### (END_AT) 大于等于(>=) 数据对象属性 (START_AT) :id=aea76d1c39a0ee66f8969197a5ed95f30



`END_AT(结束时间)` GTANDEQ  `START_AT`

> [!ATTENTION|label:规则信息|icon:fa fa-warning]
> 结束时间必须大于等于开始时间


##### (START_AT) 值为空(Nil) :id=a6267706ad7893811e86e2c0ff1f9a143



`START_AT(开始时间)` ISNULL 






