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
state "[条件组]OR" as 7da874d5bf1c0645a207515f79af2071 [[$./end_at#a7da874d5bf1c0645a207515f79af2071 {"[条件组]OR"}]] {
state " " as 7da874d5bf1c0645a207515f79af2071_entry  <<entryPoint>>
state "(END_AT) 值为空(Nil)" as 447e8baa99fe0afd3a6e3f594ce902d5 [[$./end_at#a447e8baa99fe0afd3a6e3f594ce902d5 {"[常规条件] 值为空(Nil)"}]]
state "[条件组]OR" as affcf9eca36f596c59672cfd8ea2001d [[$./end_at#aaffcf9eca36f596c59672cfd8ea2001d {"[条件组]OR"}]] {
state " " as affcf9eca36f596c59672cfd8ea2001d_entry  <<entryPoint>>
state "(END_AT) 大于等于(>=) 数据对象属性 (START_AT)" as 9baa329b60070f89df12d16ad6de4ac3 [[$./end_at#a9baa329b60070f89df12d16ad6de4ac3 {"[常规条件] 大于等于(>=) 数据对象属性 (START_AT)"}]]
state "(START_AT) 值为空(Nil)" as c0f3e67ef590508b5bad9d4219644a7f [[$./end_at#ac0f3e67ef590508b5bad9d4219644a7f {"[常规条件] 值为空(Nil)"}]]
state " " as affcf9eca36f596c59672cfd8ea2001d_exit  <<exitPoint>>
}
state " " as 7da874d5bf1c0645a207515f79af2071_exit  <<exitPoint>>
}


start --> 7da874d5bf1c0645a207515f79af2071_entry 
7da874d5bf1c0645a207515f79af2071_entry --> 447e8baa99fe0afd3a6e3f594ce902d5 
447e8baa99fe0afd3a6e3f594ce902d5 --> 7da874d5bf1c0645a207515f79af2071_exit  : yes
447e8baa99fe0afd3a6e3f594ce902d5 -[#red]-> affcf9eca36f596c59672cfd8ea2001d_entry  : no

affcf9eca36f596c59672cfd8ea2001d_entry --> 9baa329b60070f89df12d16ad6de4ac3 
9baa329b60070f89df12d16ad6de4ac3 --> affcf9eca36f596c59672cfd8ea2001d_exit  : yes
9baa329b60070f89df12d16ad6de4ac3 -[#red]-> c0f3e67ef590508b5bad9d4219644a7f  : no

c0f3e67ef590508b5bad9d4219644a7f --> affcf9eca36f596c59672cfd8ea2001d_exit  : yes
c0f3e67ef590508b5bad9d4219644a7f -[#red]-> end  : no
affcf9eca36f596c59672cfd8ea2001d_exit --> 7da874d5bf1c0645a207515f79af2071_exit 
7da874d5bf1c0645a207515f79af2071_exit --> end 


@enduml
```

#### 条件说明

##### (START_AT) 值为空(Nil) :id=ac0f3e67ef590508b5bad9d4219644a7f



`START_AT(计划开始)` ISNULL 

##### (END_AT) 值为空(Nil) :id=a447e8baa99fe0afd3a6e3f594ce902d5



`END_AT(计划结束)` ISNULL 

##### (END_AT) 大于等于(>=) 数据对象属性 (START_AT) :id=a9baa329b60070f89df12d16ad6de4ac3



`END_AT(计划结束)` GTANDEQ  `START_AT`

> [!ATTENTION|label:规则信息|icon:fa fa-warning]
> 发布时间必须大于等于开始时间







