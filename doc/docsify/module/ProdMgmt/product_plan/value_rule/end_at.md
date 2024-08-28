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
state "[条件组]OR" as 674de6dbee79285c5db9bb183de10ea1 [[$./end_at#a674de6dbee79285c5db9bb183de10ea1 {"[条件组]OR"}]] {
state " " as 674de6dbee79285c5db9bb183de10ea1_entry  <<entryPoint>>
state "(END_AT) 值为空(Nil)" as 738b239713933a12e811b90db0424cfb [[$./end_at#a738b239713933a12e811b90db0424cfb {"[常规条件] 值为空(Nil)"}]]
state "[条件组]OR" as 85ab59d8729855c1803e5a723d071931 [[$./end_at#a85ab59d8729855c1803e5a723d071931 {"[条件组]OR"}]] {
state " " as 85ab59d8729855c1803e5a723d071931_entry  <<entryPoint>>
state "(END_AT) 大于等于(>=) 数据对象属性 (START_AT)" as 3f1b75b97e37cd01463b09f034aedcff [[$./end_at#a3f1b75b97e37cd01463b09f034aedcff {"[常规条件] 大于等于(>=) 数据对象属性 (START_AT)"}]]
state "(START_AT) 值为空(Nil)" as e8a020d85340bace6d5c391af2c98901 [[$./end_at#ae8a020d85340bace6d5c391af2c98901 {"[常规条件] 值为空(Nil)"}]]
state " " as 85ab59d8729855c1803e5a723d071931_exit  <<exitPoint>>
}
state " " as 674de6dbee79285c5db9bb183de10ea1_exit  <<exitPoint>>
}


start --> 674de6dbee79285c5db9bb183de10ea1_entry 
674de6dbee79285c5db9bb183de10ea1_entry --> 738b239713933a12e811b90db0424cfb 
738b239713933a12e811b90db0424cfb --> 674de6dbee79285c5db9bb183de10ea1_exit  : yes
738b239713933a12e811b90db0424cfb -[#red]-> 85ab59d8729855c1803e5a723d071931_entry  : no

85ab59d8729855c1803e5a723d071931_entry --> 3f1b75b97e37cd01463b09f034aedcff 
3f1b75b97e37cd01463b09f034aedcff --> 85ab59d8729855c1803e5a723d071931_exit  : yes
3f1b75b97e37cd01463b09f034aedcff -[#red]-> e8a020d85340bace6d5c391af2c98901  : no

e8a020d85340bace6d5c391af2c98901 --> 85ab59d8729855c1803e5a723d071931_exit  : yes
e8a020d85340bace6d5c391af2c98901 -[#red]-> end  : no
85ab59d8729855c1803e5a723d071931_exit --> 674de6dbee79285c5db9bb183de10ea1_exit 
674de6dbee79285c5db9bb183de10ea1_exit --> end 


@enduml
```

#### 条件说明

##### (END_AT) 值为空(Nil) :id=a738b239713933a12e811b90db0424cfb



`END_AT(计划结束)` ISNULL 

##### (END_AT) 大于等于(>=) 数据对象属性 (START_AT) :id=a3f1b75b97e37cd01463b09f034aedcff



`END_AT(计划结束)` GTANDEQ  `START_AT`

> [!ATTENTION|label:规则信息|icon:fa fa-warning]
> 发布时间必须大于等于开始时间


##### (START_AT) 值为空(Nil) :id=ae8a020d85340bace6d5c391af2c98901



`START_AT(计划开始)` ISNULL 






