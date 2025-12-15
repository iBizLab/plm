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
state "[条件组]OR" as 91dad2786bcec3cb3593e46cc6b99ce9 [[$./end_at#a91dad2786bcec3cb3593e46cc6b99ce9 {"[条件组]OR"}]] {
state " " as 91dad2786bcec3cb3593e46cc6b99ce9_entry  <<entryPoint>>
state "(END_AT) 值为空(Nil)" as 72412dcb5ddaff886434d8f8bf8c77fa [[$./end_at#a72412dcb5ddaff886434d8f8bf8c77fa {"[常规条件] 值为空(Nil)"}]]
state "[条件组]OR" as 40db5d4667ae0e55854ca1125cfe0761 [[$./end_at#a40db5d4667ae0e55854ca1125cfe0761 {"[条件组]OR"}]] {
state " " as 40db5d4667ae0e55854ca1125cfe0761_entry  <<entryPoint>>
state "(END_AT) 大于等于(>=) 数据对象属性 (START_AT)" as 87a8c624dfb7009e5c77de2be18df48d [[$./end_at#a87a8c624dfb7009e5c77de2be18df48d {"[常规条件] 大于等于(>=) 数据对象属性 (START_AT)"}]]
state "(START_AT) 值为空(Nil)" as a315395376b03a2603567eb210edc7fb [[$./end_at#aa315395376b03a2603567eb210edc7fb {"[常规条件] 值为空(Nil)"}]]
state " " as 40db5d4667ae0e55854ca1125cfe0761_exit  <<exitPoint>>
}
state " " as 91dad2786bcec3cb3593e46cc6b99ce9_exit  <<exitPoint>>
}


start --> 91dad2786bcec3cb3593e46cc6b99ce9_entry 
91dad2786bcec3cb3593e46cc6b99ce9_entry --> 72412dcb5ddaff886434d8f8bf8c77fa 
72412dcb5ddaff886434d8f8bf8c77fa --> 91dad2786bcec3cb3593e46cc6b99ce9_exit  : yes
72412dcb5ddaff886434d8f8bf8c77fa -[#red]-> 40db5d4667ae0e55854ca1125cfe0761_entry  : no

40db5d4667ae0e55854ca1125cfe0761_entry --> 87a8c624dfb7009e5c77de2be18df48d 
87a8c624dfb7009e5c77de2be18df48d --> 40db5d4667ae0e55854ca1125cfe0761_exit  : yes
87a8c624dfb7009e5c77de2be18df48d -[#red]-> a315395376b03a2603567eb210edc7fb  : no

a315395376b03a2603567eb210edc7fb --> 40db5d4667ae0e55854ca1125cfe0761_exit  : yes
a315395376b03a2603567eb210edc7fb -[#red]-> end  : no
40db5d4667ae0e55854ca1125cfe0761_exit --> 91dad2786bcec3cb3593e46cc6b99ce9_exit 
91dad2786bcec3cb3593e46cc6b99ce9_exit --> end 


@enduml
```

#### 条件说明

##### (START_AT) 值为空(Nil) :id=aa315395376b03a2603567eb210edc7fb



`START_AT(计划开始)` ISNULL 

##### (END_AT) 大于等于(>=) 数据对象属性 (START_AT) :id=a87a8c624dfb7009e5c77de2be18df48d



`END_AT(计划结束)` GTANDEQ  `START_AT`

> [!ATTENTION|label:规则信息|icon:fa fa-warning]
> 发布时间必须大于等于开始时间


##### (END_AT) 值为空(Nil) :id=a72412dcb5ddaff886434d8f8bf8c77fa



`END_AT(计划结束)` ISNULL 






