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
state "[条件组]OR" as 0dd76f0eb3bf572003c68302e6bebcad [[$./end_at#a0dd76f0eb3bf572003c68302e6bebcad {"[条件组]OR"}]] {
state " " as 0dd76f0eb3bf572003c68302e6bebcad_entry  <<entryPoint>>
state "(END_AT) 值为空(Nil)" as 496d749747ce5d7aa915d7dbbab2c374 [[$./end_at#a496d749747ce5d7aa915d7dbbab2c374 {"[常规条件] 值为空(Nil)"}]]
state "[条件组]OR" as 256bec1a370fb45d63e72764376f685b [[$./end_at#a256bec1a370fb45d63e72764376f685b {"[条件组]OR"}]] {
state " " as 256bec1a370fb45d63e72764376f685b_entry  <<entryPoint>>
state "(END_AT) 大于等于(>=) 数据对象属性 (START_AT)" as 3af8cc981419ff409296f752efef505d [[$./end_at#a3af8cc981419ff409296f752efef505d {"[常规条件] 大于等于(>=) 数据对象属性 (START_AT)"}]]
state "(START_AT) 值为空(Nil)" as f59849fb6aee88484faf1af0eef30f4a [[$./end_at#af59849fb6aee88484faf1af0eef30f4a {"[常规条件] 值为空(Nil)"}]]
state " " as 256bec1a370fb45d63e72764376f685b_exit  <<exitPoint>>
}
state " " as 0dd76f0eb3bf572003c68302e6bebcad_exit  <<exitPoint>>
}


start --> 0dd76f0eb3bf572003c68302e6bebcad_entry 
0dd76f0eb3bf572003c68302e6bebcad_entry --> 496d749747ce5d7aa915d7dbbab2c374 
496d749747ce5d7aa915d7dbbab2c374 --> 0dd76f0eb3bf572003c68302e6bebcad_exit  : yes
496d749747ce5d7aa915d7dbbab2c374 -[#red]-> 256bec1a370fb45d63e72764376f685b_entry  : no

256bec1a370fb45d63e72764376f685b_entry --> 3af8cc981419ff409296f752efef505d 
3af8cc981419ff409296f752efef505d --> 256bec1a370fb45d63e72764376f685b_exit  : yes
3af8cc981419ff409296f752efef505d -[#red]-> f59849fb6aee88484faf1af0eef30f4a  : no

f59849fb6aee88484faf1af0eef30f4a --> 256bec1a370fb45d63e72764376f685b_exit  : yes
f59849fb6aee88484faf1af0eef30f4a -[#red]-> end  : no
256bec1a370fb45d63e72764376f685b_exit --> 0dd76f0eb3bf572003c68302e6bebcad_exit 
0dd76f0eb3bf572003c68302e6bebcad_exit --> end 


@enduml
```

#### 条件说明

##### (END_AT) 值为空(Nil) :id=a496d749747ce5d7aa915d7dbbab2c374



`END_AT(计划结束)` ISNULL 

##### (START_AT) 值为空(Nil) :id=af59849fb6aee88484faf1af0eef30f4a



`START_AT(计划开始)` ISNULL 

##### (END_AT) 大于等于(>=) 数据对象属性 (START_AT) :id=a3af8cc981419ff409296f752efef505d



`END_AT(计划结束)` GTANDEQ  `START_AT`

> [!ATTENTION|label:规则信息|icon:fa fa-warning]
> 发布时间必须大于等于开始时间







