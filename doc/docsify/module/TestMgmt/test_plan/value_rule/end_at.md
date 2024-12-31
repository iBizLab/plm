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
state "[条件组]OR" as 03e84278d94c6b6dc039d4ae030dd229 [[$./end_at#a03e84278d94c6b6dc039d4ae030dd229 {"[条件组]OR"}]] {
state " " as 03e84278d94c6b6dc039d4ae030dd229_entry  <<entryPoint>>
state "(END_AT) 值为空(Nil)" as b55d01af6fa30bb2ef1ed875b6087863 [[$./end_at#ab55d01af6fa30bb2ef1ed875b6087863 {"[常规条件] 值为空(Nil)"}]]
state "[条件组]OR" as bf82e7881080a1fe0ba44e88a9a36460 [[$./end_at#abf82e7881080a1fe0ba44e88a9a36460 {"[条件组]OR"}]] {
state " " as bf82e7881080a1fe0ba44e88a9a36460_entry  <<entryPoint>>
state "(END_AT) 大于等于(>=) 数据对象属性 (START_AT)" as 5616cd4c92cb08cd707f185fa42a4220 [[$./end_at#a5616cd4c92cb08cd707f185fa42a4220 {"[常规条件] 大于等于(>=) 数据对象属性 (START_AT)"}]]
state "(START_AT) 值为空(Nil)" as c793573061d7bcff30d366b03215dcf5 [[$./end_at#ac793573061d7bcff30d366b03215dcf5 {"[常规条件] 值为空(Nil)"}]]
state " " as bf82e7881080a1fe0ba44e88a9a36460_exit  <<exitPoint>>
}
state " " as 03e84278d94c6b6dc039d4ae030dd229_exit  <<exitPoint>>
}


start --> 03e84278d94c6b6dc039d4ae030dd229_entry 
03e84278d94c6b6dc039d4ae030dd229_entry --> b55d01af6fa30bb2ef1ed875b6087863 
b55d01af6fa30bb2ef1ed875b6087863 --> 03e84278d94c6b6dc039d4ae030dd229_exit  : yes
b55d01af6fa30bb2ef1ed875b6087863 -[#red]-> bf82e7881080a1fe0ba44e88a9a36460_entry  : no

bf82e7881080a1fe0ba44e88a9a36460_entry --> 5616cd4c92cb08cd707f185fa42a4220 
5616cd4c92cb08cd707f185fa42a4220 --> bf82e7881080a1fe0ba44e88a9a36460_exit  : yes
5616cd4c92cb08cd707f185fa42a4220 -[#red]-> c793573061d7bcff30d366b03215dcf5  : no

c793573061d7bcff30d366b03215dcf5 --> bf82e7881080a1fe0ba44e88a9a36460_exit  : yes
c793573061d7bcff30d366b03215dcf5 -[#red]-> end  : no
bf82e7881080a1fe0ba44e88a9a36460_exit --> 03e84278d94c6b6dc039d4ae030dd229_exit 
03e84278d94c6b6dc039d4ae030dd229_exit --> end 


@enduml
```

#### 条件说明

##### (END_AT) 大于等于(>=) 数据对象属性 (START_AT) :id=a5616cd4c92cb08cd707f185fa42a4220



`END_AT(计划结束)` GTANDEQ  `START_AT`

> [!ATTENTION|label:规则信息|icon:fa fa-warning]
> 发布时间必须大于等于开始时间


##### (START_AT) 值为空(Nil) :id=ac793573061d7bcff30d366b03215dcf5



`START_AT(计划开始)` ISNULL 

##### (END_AT) 值为空(Nil) :id=ab55d01af6fa30bb2ef1ed875b6087863



`END_AT(计划结束)` ISNULL 






