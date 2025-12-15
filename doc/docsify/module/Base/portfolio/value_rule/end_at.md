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
state "[条件组]OR" as a561f1f42b369b032ff1da95ddadae3d [[$./end_at#aa561f1f42b369b032ff1da95ddadae3d {"[条件组]OR"}]] {
state " " as a561f1f42b369b032ff1da95ddadae3d_entry  <<entryPoint>>
state "(END_AT) 值为空(Nil)" as 574ea1c827857809cd728bcec9709b70 [[$./end_at#a574ea1c827857809cd728bcec9709b70 {"[常规条件] 值为空(Nil)"}]]
state "[条件组]OR" as 14515a1da020e172181ac1a6494cd460 [[$./end_at#a14515a1da020e172181ac1a6494cd460 {"[条件组]OR"}]] {
state " " as 14515a1da020e172181ac1a6494cd460_entry  <<entryPoint>>
state "(START_AT) 值为空(Nil)" as 6bc45dc34472b7d65d9b158a4a85b6de [[$./end_at#a6bc45dc34472b7d65d9b158a4a85b6de {"[常规条件] 值为空(Nil)"}]]
state "(END_AT) 大于等于(>=) 数据对象属性 (START_AT)" as a59994c1a4c8578bcca1923225054157 [[$./end_at#aa59994c1a4c8578bcca1923225054157 {"[常规条件] 大于等于(>=) 数据对象属性 (START_AT)"}]]
state " " as 14515a1da020e172181ac1a6494cd460_exit  <<exitPoint>>
}
state " " as a561f1f42b369b032ff1da95ddadae3d_exit  <<exitPoint>>
}


start --> a561f1f42b369b032ff1da95ddadae3d_entry 
a561f1f42b369b032ff1da95ddadae3d_entry --> 574ea1c827857809cd728bcec9709b70 
574ea1c827857809cd728bcec9709b70 --> a561f1f42b369b032ff1da95ddadae3d_exit  : yes
574ea1c827857809cd728bcec9709b70 -[#red]-> 14515a1da020e172181ac1a6494cd460_entry  : no

14515a1da020e172181ac1a6494cd460_entry --> 6bc45dc34472b7d65d9b158a4a85b6de 
6bc45dc34472b7d65d9b158a4a85b6de --> 14515a1da020e172181ac1a6494cd460_exit  : yes
6bc45dc34472b7d65d9b158a4a85b6de -[#red]-> a59994c1a4c8578bcca1923225054157  : no

a59994c1a4c8578bcca1923225054157 --> 14515a1da020e172181ac1a6494cd460_exit  : yes
a59994c1a4c8578bcca1923225054157 -[#red]-> end  : no
14515a1da020e172181ac1a6494cd460_exit --> a561f1f42b369b032ff1da95ddadae3d_exit 
a561f1f42b369b032ff1da95ddadae3d_exit --> end 


@enduml
```

#### 条件说明

##### (END_AT) 值为空(Nil) :id=a574ea1c827857809cd728bcec9709b70



`END_AT(结束时间)` ISNULL 

##### (START_AT) 值为空(Nil) :id=a6bc45dc34472b7d65d9b158a4a85b6de



`START_AT(开始时间)` ISNULL 

##### (END_AT) 大于等于(>=) 数据对象属性 (START_AT) :id=aa59994c1a4c8578bcca1923225054157



`END_AT(结束时间)` GTANDEQ  `START_AT`

> [!ATTENTION|label:规则信息|icon:fa fa-warning]
> 结束时间必须大于等于开始时间







