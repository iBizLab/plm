## 开始时间(START_AT) <!-- {docsify-ignore-all} -->

   

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
state "[条件组]OR" as 8e6348c277b6e10032975379e01f7638 [[$./start_at#a8e6348c277b6e10032975379e01f7638 {"[条件组]OR"}]] {
state " " as 8e6348c277b6e10032975379e01f7638_entry  <<entryPoint>>
state "(START_AT) 值为空(Nil)" as 14a2d0b8c2c013f4800007c62d6d9b43 [[$./start_at#a14a2d0b8c2c013f4800007c62d6d9b43 {"[常规条件] 值为空(Nil)"}]]
state "[条件组]OR" as 5f307558192f26d45668f1f1da66c6f2 [[$./start_at#a5f307558192f26d45668f1f1da66c6f2 {"[条件组]OR"}]] {
state " " as 5f307558192f26d45668f1f1da66c6f2_entry  <<entryPoint>>
state "(END_AT) 值为空(Nil)" as f43a0cca81baf5cde1ba8542b047dd2f [[$./start_at#af43a0cca81baf5cde1ba8542b047dd2f {"[常规条件] 值为空(Nil)"}]]
state "(START_AT) 小于等于(<=) 数据对象属性 (END_AT)" as 8f288cdc2d25e4e0b95ad0fddd3e7df9 [[$./start_at#a8f288cdc2d25e4e0b95ad0fddd3e7df9 {"[常规条件] 小于等于(<=) 数据对象属性 (END_AT)"}]]
state " " as 5f307558192f26d45668f1f1da66c6f2_exit  <<exitPoint>>
}
state " " as 8e6348c277b6e10032975379e01f7638_exit  <<exitPoint>>
}


start --> 8e6348c277b6e10032975379e01f7638_entry 
8e6348c277b6e10032975379e01f7638_entry --> 14a2d0b8c2c013f4800007c62d6d9b43 
14a2d0b8c2c013f4800007c62d6d9b43 --> 8e6348c277b6e10032975379e01f7638_exit  : yes
14a2d0b8c2c013f4800007c62d6d9b43 -[#red]-> 5f307558192f26d45668f1f1da66c6f2_entry  : no

5f307558192f26d45668f1f1da66c6f2_entry --> f43a0cca81baf5cde1ba8542b047dd2f 
f43a0cca81baf5cde1ba8542b047dd2f --> 5f307558192f26d45668f1f1da66c6f2_exit  : yes
f43a0cca81baf5cde1ba8542b047dd2f -[#red]-> 8f288cdc2d25e4e0b95ad0fddd3e7df9  : no

8f288cdc2d25e4e0b95ad0fddd3e7df9 --> 5f307558192f26d45668f1f1da66c6f2_exit  : yes
8f288cdc2d25e4e0b95ad0fddd3e7df9 -[#red]-> end  : no
5f307558192f26d45668f1f1da66c6f2_exit --> 8e6348c277b6e10032975379e01f7638_exit 
8e6348c277b6e10032975379e01f7638_exit --> end 


@enduml
```

#### 条件说明

##### (START_AT) 值为空(Nil) :id=a14a2d0b8c2c013f4800007c62d6d9b43



`START_AT(开始时间)` ISNULL 

##### (START_AT) 小于等于(<=) 数据对象属性 (END_AT) :id=a8f288cdc2d25e4e0b95ad0fddd3e7df9



`START_AT(开始时间)` LTANDEQ  `END_AT`

> [!ATTENTION|label:规则信息|icon:fa fa-warning]
> 开始时间必须小于等于发布时间


##### (END_AT) 值为空(Nil) :id=af43a0cca81baf5cde1ba8542b047dd2f



`END_AT(发布时间)` ISNULL 






