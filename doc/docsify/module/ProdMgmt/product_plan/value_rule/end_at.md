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
state "[条件组]OR" as 3a8924f62b00e9c68c952c3b5e0b30c4 [[$./end_at#a3a8924f62b00e9c68c952c3b5e0b30c4 {"[条件组]OR"}]] {
state " " as 3a8924f62b00e9c68c952c3b5e0b30c4_entry  <<entryPoint>>
state "(END_AT) 值为空(Nil)" as 46551cfdd7fd7d2771806468dea07dec [[$./end_at#a46551cfdd7fd7d2771806468dea07dec {"[常规条件] 值为空(Nil)"}]]
state "[条件组]OR" as 0ab3f3ed282b19ee5311ac9c9574791c [[$./end_at#a0ab3f3ed282b19ee5311ac9c9574791c {"[条件组]OR"}]] {
state " " as 0ab3f3ed282b19ee5311ac9c9574791c_entry  <<entryPoint>>
state "(END_AT) 大于等于(>=) 数据对象属性 (START_AT)" as 3bbf60a5a2dcf9b44827dff6bab7b430 [[$./end_at#a3bbf60a5a2dcf9b44827dff6bab7b430 {"[常规条件] 大于等于(>=) 数据对象属性 (START_AT)"}]]
state "(START_AT) 值为空(Nil)" as 2656e19ea4ecda590060e5b82153c11a [[$./end_at#a2656e19ea4ecda590060e5b82153c11a {"[常规条件] 值为空(Nil)"}]]
state " " as 0ab3f3ed282b19ee5311ac9c9574791c_exit  <<exitPoint>>
}
state " " as 3a8924f62b00e9c68c952c3b5e0b30c4_exit  <<exitPoint>>
}


start --> 3a8924f62b00e9c68c952c3b5e0b30c4_entry 
3a8924f62b00e9c68c952c3b5e0b30c4_entry --> 46551cfdd7fd7d2771806468dea07dec 
46551cfdd7fd7d2771806468dea07dec --> 3a8924f62b00e9c68c952c3b5e0b30c4_exit  : yes
46551cfdd7fd7d2771806468dea07dec -[#red]-> 0ab3f3ed282b19ee5311ac9c9574791c_entry  : no

0ab3f3ed282b19ee5311ac9c9574791c_entry --> 3bbf60a5a2dcf9b44827dff6bab7b430 
3bbf60a5a2dcf9b44827dff6bab7b430 --> 0ab3f3ed282b19ee5311ac9c9574791c_exit  : yes
3bbf60a5a2dcf9b44827dff6bab7b430 -[#red]-> 2656e19ea4ecda590060e5b82153c11a  : no

2656e19ea4ecda590060e5b82153c11a --> 0ab3f3ed282b19ee5311ac9c9574791c_exit  : yes
2656e19ea4ecda590060e5b82153c11a -[#red]-> end  : no
0ab3f3ed282b19ee5311ac9c9574791c_exit --> 3a8924f62b00e9c68c952c3b5e0b30c4_exit 
3a8924f62b00e9c68c952c3b5e0b30c4_exit --> end 


@enduml
```

#### 条件说明

##### (START_AT) 值为空(Nil) :id=a2656e19ea4ecda590060e5b82153c11a



`START_AT(计划开始)` ISNULL 

##### (END_AT) 大于等于(>=) 数据对象属性 (START_AT) :id=a3bbf60a5a2dcf9b44827dff6bab7b430



`END_AT(计划结束)` GTANDEQ  `START_AT`

> [!ATTENTION|label:规则信息|icon:fa fa-warning]
> 发布时间必须大于等于开始时间


##### (END_AT) 值为空(Nil) :id=a46551cfdd7fd7d2771806468dea07dec



`END_AT(计划结束)` ISNULL 






