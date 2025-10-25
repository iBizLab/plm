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
state "[条件组]OR" as 74cb917c88e73b18b3ad8c4fb5cc74da [[$./end_at#a74cb917c88e73b18b3ad8c4fb5cc74da {"[条件组]OR"}]] {
state " " as 74cb917c88e73b18b3ad8c4fb5cc74da_entry  <<entryPoint>>
state "(END_AT) 值为空(Nil)" as 89466afdcfdb0a45917005a420ebd3b1 [[$./end_at#a89466afdcfdb0a45917005a420ebd3b1 {"[常规条件] 值为空(Nil)"}]]
state "[条件组]OR" as f25e46f83b043bb1097134eced0c1aa1 [[$./end_at#af25e46f83b043bb1097134eced0c1aa1 {"[条件组]OR"}]] {
state " " as f25e46f83b043bb1097134eced0c1aa1_entry  <<entryPoint>>
state "(END_AT) 大于等于(>=) 数据对象属性 (START_AT)" as b0d4def3e55013b4a8c1158babcbb0ff [[$./end_at#ab0d4def3e55013b4a8c1158babcbb0ff {"[常规条件] 大于等于(>=) 数据对象属性 (START_AT)"}]]
state "(START_AT) 值为空(Nil)" as bcf588abd6d319a1d3afbe3f0dbec0c2 [[$./end_at#abcf588abd6d319a1d3afbe3f0dbec0c2 {"[常规条件] 值为空(Nil)"}]]
state " " as f25e46f83b043bb1097134eced0c1aa1_exit  <<exitPoint>>
}
state " " as 74cb917c88e73b18b3ad8c4fb5cc74da_exit  <<exitPoint>>
}


start --> 74cb917c88e73b18b3ad8c4fb5cc74da_entry 
74cb917c88e73b18b3ad8c4fb5cc74da_entry --> 89466afdcfdb0a45917005a420ebd3b1 
89466afdcfdb0a45917005a420ebd3b1 --> 74cb917c88e73b18b3ad8c4fb5cc74da_exit  : yes
89466afdcfdb0a45917005a420ebd3b1 -[#red]-> f25e46f83b043bb1097134eced0c1aa1_entry  : no

f25e46f83b043bb1097134eced0c1aa1_entry --> b0d4def3e55013b4a8c1158babcbb0ff 
b0d4def3e55013b4a8c1158babcbb0ff --> f25e46f83b043bb1097134eced0c1aa1_exit  : yes
b0d4def3e55013b4a8c1158babcbb0ff -[#red]-> bcf588abd6d319a1d3afbe3f0dbec0c2  : no

bcf588abd6d319a1d3afbe3f0dbec0c2 --> f25e46f83b043bb1097134eced0c1aa1_exit  : yes
bcf588abd6d319a1d3afbe3f0dbec0c2 -[#red]-> end  : no
f25e46f83b043bb1097134eced0c1aa1_exit --> 74cb917c88e73b18b3ad8c4fb5cc74da_exit 
74cb917c88e73b18b3ad8c4fb5cc74da_exit --> end 


@enduml
```

#### 条件说明

##### (START_AT) 值为空(Nil) :id=abcf588abd6d319a1d3afbe3f0dbec0c2



`START_AT(计划开始)` ISNULL 

##### (END_AT) 大于等于(>=) 数据对象属性 (START_AT) :id=ab0d4def3e55013b4a8c1158babcbb0ff



`END_AT(计划结束)` GTANDEQ  `START_AT`

> [!ATTENTION|label:规则信息|icon:fa fa-warning]
> 发布时间必须大于等于开始时间


##### (END_AT) 值为空(Nil) :id=a89466afdcfdb0a45917005a420ebd3b1



`END_AT(计划结束)` ISNULL 






