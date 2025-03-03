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
state "[条件组]OR" as 2855fe789c6e46c489cba4b692c4a51d [[$./end_at#a2855fe789c6e46c489cba4b692c4a51d {"[条件组]OR"}]] {
state " " as 2855fe789c6e46c489cba4b692c4a51d_entry  <<entryPoint>>
state "(END_AT) 值为空(Nil)" as 248be1572d15be44a6aac9a8a8e47799 [[$./end_at#a248be1572d15be44a6aac9a8a8e47799 {"[常规条件] 值为空(Nil)"}]]
state "[条件组]OR" as c1122698c12692d23407f1393ff3bfd4 [[$./end_at#ac1122698c12692d23407f1393ff3bfd4 {"[条件组]OR"}]] {
state " " as c1122698c12692d23407f1393ff3bfd4_entry  <<entryPoint>>
state "(END_AT) 大于等于(>=) 数据对象属性 (START_AT)" as e9e870199668decdc92df2f7ad9c139d [[$./end_at#ae9e870199668decdc92df2f7ad9c139d {"[常规条件] 大于等于(>=) 数据对象属性 (START_AT)"}]]
state "(START_AT) 值为空(Nil)" as d1ff2ac741970254a1bff9660728852b [[$./end_at#ad1ff2ac741970254a1bff9660728852b {"[常规条件] 值为空(Nil)"}]]
state " " as c1122698c12692d23407f1393ff3bfd4_exit  <<exitPoint>>
}
state " " as 2855fe789c6e46c489cba4b692c4a51d_exit  <<exitPoint>>
}


start --> 2855fe789c6e46c489cba4b692c4a51d_entry 
2855fe789c6e46c489cba4b692c4a51d_entry --> 248be1572d15be44a6aac9a8a8e47799 
248be1572d15be44a6aac9a8a8e47799 --> 2855fe789c6e46c489cba4b692c4a51d_exit  : yes
248be1572d15be44a6aac9a8a8e47799 -[#red]-> c1122698c12692d23407f1393ff3bfd4_entry  : no

c1122698c12692d23407f1393ff3bfd4_entry --> e9e870199668decdc92df2f7ad9c139d 
e9e870199668decdc92df2f7ad9c139d --> c1122698c12692d23407f1393ff3bfd4_exit  : yes
e9e870199668decdc92df2f7ad9c139d -[#red]-> d1ff2ac741970254a1bff9660728852b  : no

d1ff2ac741970254a1bff9660728852b --> c1122698c12692d23407f1393ff3bfd4_exit  : yes
d1ff2ac741970254a1bff9660728852b -[#red]-> end  : no
c1122698c12692d23407f1393ff3bfd4_exit --> 2855fe789c6e46c489cba4b692c4a51d_exit 
2855fe789c6e46c489cba4b692c4a51d_exit --> end 


@enduml
```

#### 条件说明

##### (END_AT) 值为空(Nil) :id=a248be1572d15be44a6aac9a8a8e47799



`END_AT(计划结束)` ISNULL 

##### (END_AT) 大于等于(>=) 数据对象属性 (START_AT) :id=ae9e870199668decdc92df2f7ad9c139d



`END_AT(计划结束)` GTANDEQ  `START_AT`

> [!ATTENTION|label:规则信息|icon:fa fa-warning]
> 发布时间必须大于等于开始时间


##### (START_AT) 值为空(Nil) :id=ad1ff2ac741970254a1bff9660728852b



`START_AT(计划开始)` ISNULL 






