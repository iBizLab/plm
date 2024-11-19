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
state "[条件组]OR" as efce89ac9eb24087e11b7bd776a9fd65 [[$./end_at#aefce89ac9eb24087e11b7bd776a9fd65 {"[条件组]OR"}]] {
state " " as efce89ac9eb24087e11b7bd776a9fd65_entry  <<entryPoint>>
state "(END_AT) 值为空(Nil)" as ba7325e335ecd4f14f073a874f34d652 [[$./end_at#aba7325e335ecd4f14f073a874f34d652 {"[常规条件] 值为空(Nil)"}]]
state "[条件组]OR" as bfa27ac59a143145b3aeacbdea35057d [[$./end_at#abfa27ac59a143145b3aeacbdea35057d {"[条件组]OR"}]] {
state " " as bfa27ac59a143145b3aeacbdea35057d_entry  <<entryPoint>>
state "(END_AT) 大于等于(>=) 数据对象属性 (START_AT)" as 24837267aff98c9c3095e9c65fe60687 [[$./end_at#a24837267aff98c9c3095e9c65fe60687 {"[常规条件] 大于等于(>=) 数据对象属性 (START_AT)"}]]
state "(START_AT) 值为空(Nil)" as 138011728460a5e3329af1ee31626249 [[$./end_at#a138011728460a5e3329af1ee31626249 {"[常规条件] 值为空(Nil)"}]]
state " " as bfa27ac59a143145b3aeacbdea35057d_exit  <<exitPoint>>
}
state " " as efce89ac9eb24087e11b7bd776a9fd65_exit  <<exitPoint>>
}


start --> efce89ac9eb24087e11b7bd776a9fd65_entry 
efce89ac9eb24087e11b7bd776a9fd65_entry --> ba7325e335ecd4f14f073a874f34d652 
ba7325e335ecd4f14f073a874f34d652 --> efce89ac9eb24087e11b7bd776a9fd65_exit  : yes
ba7325e335ecd4f14f073a874f34d652 -[#red]-> bfa27ac59a143145b3aeacbdea35057d_entry  : no

bfa27ac59a143145b3aeacbdea35057d_entry --> 24837267aff98c9c3095e9c65fe60687 
24837267aff98c9c3095e9c65fe60687 --> bfa27ac59a143145b3aeacbdea35057d_exit  : yes
24837267aff98c9c3095e9c65fe60687 -[#red]-> 138011728460a5e3329af1ee31626249  : no

138011728460a5e3329af1ee31626249 --> bfa27ac59a143145b3aeacbdea35057d_exit  : yes
138011728460a5e3329af1ee31626249 -[#red]-> end  : no
bfa27ac59a143145b3aeacbdea35057d_exit --> efce89ac9eb24087e11b7bd776a9fd65_exit 
efce89ac9eb24087e11b7bd776a9fd65_exit --> end 


@enduml
```

#### 条件说明

##### (END_AT) 大于等于(>=) 数据对象属性 (START_AT) :id=a24837267aff98c9c3095e9c65fe60687



`END_AT(计划结束)` GTANDEQ  `START_AT`

> [!ATTENTION|label:规则信息|icon:fa fa-warning]
> 发布时间必须大于等于开始时间


##### (START_AT) 值为空(Nil) :id=a138011728460a5e3329af1ee31626249



`START_AT(计划开始)` ISNULL 

##### (END_AT) 值为空(Nil) :id=aba7325e335ecd4f14f073a874f34d652



`END_AT(计划结束)` ISNULL 






