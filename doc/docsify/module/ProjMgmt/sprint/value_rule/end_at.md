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
state "[条件组]OR" as 49e65d986921cb42b07bee0afd3c6c1b [[$./end_at#a49e65d986921cb42b07bee0afd3c6c1b {"[条件组]OR"}]] {
state " " as 49e65d986921cb42b07bee0afd3c6c1b_entry  <<entryPoint>>
state "(END_AT) 值为空(Nil)" as 2075ec8f5657a052bc94027ffb94ada0 [[$./end_at#a2075ec8f5657a052bc94027ffb94ada0 {"[常规条件] 值为空(Nil)"}]]
state "[条件组]OR" as 0e889c412b4e7721420e2d2b90a4ebb1 [[$./end_at#a0e889c412b4e7721420e2d2b90a4ebb1 {"[条件组]OR"}]] {
state " " as 0e889c412b4e7721420e2d2b90a4ebb1_entry  <<entryPoint>>
state "(START_AT) 值为空(Nil)" as d6dd0524cdc4ef32436cdb121bc21128 [[$./end_at#ad6dd0524cdc4ef32436cdb121bc21128 {"[常规条件] 值为空(Nil)"}]]
state "(END_AT) 大于等于(>=) 数据对象属性 (START_AT)" as 6f9f30f99ec117c6000b9bed745b37bd [[$./end_at#a6f9f30f99ec117c6000b9bed745b37bd {"[常规条件] 大于等于(>=) 数据对象属性 (START_AT)"}]]
state " " as 0e889c412b4e7721420e2d2b90a4ebb1_exit  <<exitPoint>>
}
state " " as 49e65d986921cb42b07bee0afd3c6c1b_exit  <<exitPoint>>
}


start --> 49e65d986921cb42b07bee0afd3c6c1b_entry 
49e65d986921cb42b07bee0afd3c6c1b_entry --> 2075ec8f5657a052bc94027ffb94ada0 
2075ec8f5657a052bc94027ffb94ada0 --> 49e65d986921cb42b07bee0afd3c6c1b_exit  : yes
2075ec8f5657a052bc94027ffb94ada0 -[#red]-> 0e889c412b4e7721420e2d2b90a4ebb1_entry  : no

0e889c412b4e7721420e2d2b90a4ebb1_entry --> d6dd0524cdc4ef32436cdb121bc21128 
d6dd0524cdc4ef32436cdb121bc21128 --> 0e889c412b4e7721420e2d2b90a4ebb1_exit  : yes
d6dd0524cdc4ef32436cdb121bc21128 -[#red]-> 6f9f30f99ec117c6000b9bed745b37bd  : no

6f9f30f99ec117c6000b9bed745b37bd --> 0e889c412b4e7721420e2d2b90a4ebb1_exit  : yes
6f9f30f99ec117c6000b9bed745b37bd -[#red]-> end  : no
0e889c412b4e7721420e2d2b90a4ebb1_exit --> 49e65d986921cb42b07bee0afd3c6c1b_exit 
49e65d986921cb42b07bee0afd3c6c1b_exit --> end 


@enduml
```

#### 条件说明

##### (END_AT) 大于等于(>=) 数据对象属性 (START_AT) :id=a6f9f30f99ec117c6000b9bed745b37bd



`END_AT(结束时间)` GTANDEQ  `START_AT`

> [!ATTENTION|label:规则信息|icon:fa fa-warning]
> 结束时间必须大于等于开始时间


##### (END_AT) 值为空(Nil) :id=a2075ec8f5657a052bc94027ffb94ada0



`END_AT(结束时间)` ISNULL 

##### (START_AT) 值为空(Nil) :id=ad6dd0524cdc4ef32436cdb121bc21128



`START_AT(开始时间)` ISNULL 






