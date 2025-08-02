## 计划开始(START_AT) <!-- {docsify-ignore-all} -->

   

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
state "[条件组]OR" as fefa4525b8dc73dda92bbc5f3d4d9e61 [[$./start_at#afefa4525b8dc73dda92bbc5f3d4d9e61 {"[条件组]OR"}]] {
state " " as fefa4525b8dc73dda92bbc5f3d4d9e61_entry  <<entryPoint>>
state "(START_AT) 值为空(Nil)" as 0a82f1324bc567b89bee53dc8cd3d051 [[$./start_at#a0a82f1324bc567b89bee53dc8cd3d051 {"[常规条件] 值为空(Nil)"}]]
state "[条件组]OR" as 34fa48db7e0b689a07be354874ecfb55 [[$./start_at#a34fa48db7e0b689a07be354874ecfb55 {"[条件组]OR"}]] {
state " " as 34fa48db7e0b689a07be354874ecfb55_entry  <<entryPoint>>
state "(END_AT) 值为空(Nil)" as 81ec9a6696189a18cc8c9b88fef1e6bf [[$./start_at#a81ec9a6696189a18cc8c9b88fef1e6bf {"[常规条件] 值为空(Nil)"}]]
state "(START_AT) 小于等于(<=) 数据对象属性 (END_AT)" as 349895ed738253ba5f18509171e57c83 [[$./start_at#a349895ed738253ba5f18509171e57c83 {"[常规条件] 小于等于(<=) 数据对象属性 (END_AT)"}]]
state " " as 34fa48db7e0b689a07be354874ecfb55_exit  <<exitPoint>>
}
state " " as fefa4525b8dc73dda92bbc5f3d4d9e61_exit  <<exitPoint>>
}


start --> fefa4525b8dc73dda92bbc5f3d4d9e61_entry 
fefa4525b8dc73dda92bbc5f3d4d9e61_entry --> 0a82f1324bc567b89bee53dc8cd3d051 
0a82f1324bc567b89bee53dc8cd3d051 --> fefa4525b8dc73dda92bbc5f3d4d9e61_exit  : yes
0a82f1324bc567b89bee53dc8cd3d051 -[#red]-> 34fa48db7e0b689a07be354874ecfb55_entry  : no

34fa48db7e0b689a07be354874ecfb55_entry --> 81ec9a6696189a18cc8c9b88fef1e6bf 
81ec9a6696189a18cc8c9b88fef1e6bf --> 34fa48db7e0b689a07be354874ecfb55_exit  : yes
81ec9a6696189a18cc8c9b88fef1e6bf -[#red]-> 349895ed738253ba5f18509171e57c83  : no

349895ed738253ba5f18509171e57c83 --> 34fa48db7e0b689a07be354874ecfb55_exit  : yes
349895ed738253ba5f18509171e57c83 -[#red]-> end  : no
34fa48db7e0b689a07be354874ecfb55_exit --> fefa4525b8dc73dda92bbc5f3d4d9e61_exit 
fefa4525b8dc73dda92bbc5f3d4d9e61_exit --> end 


@enduml
```

#### 条件说明

##### (START_AT) 小于等于(<=) 数据对象属性 (END_AT) :id=a349895ed738253ba5f18509171e57c83



`START_AT(计划开始)` LTANDEQ  `END_AT`

> [!ATTENTION|label:规则信息|icon:fa fa-warning]
> 开始时间必须小于等于发布时间


##### (END_AT) 值为空(Nil) :id=a81ec9a6696189a18cc8c9b88fef1e6bf



`END_AT(计划结束)` ISNULL 

##### (START_AT) 值为空(Nil) :id=a0a82f1324bc567b89bee53dc8cd3d051



`START_AT(计划开始)` ISNULL 






