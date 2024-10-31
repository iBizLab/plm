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
state "[条件组]OR" as cf08ba6e14b8cd4aac03f3518d32a4da [[$./start_at#acf08ba6e14b8cd4aac03f3518d32a4da {"[条件组]OR"}]] {
state " " as cf08ba6e14b8cd4aac03f3518d32a4da_entry  <<entryPoint>>
state "(START_AT) 值为空(Nil)" as d2969fbdfdaca65d6a027a839fb39a7a [[$./start_at#ad2969fbdfdaca65d6a027a839fb39a7a {"[常规条件] 值为空(Nil)"}]]
state "[条件组]OR" as 012f7ad6950889781e36589cf1c82499 [[$./start_at#a012f7ad6950889781e36589cf1c82499 {"[条件组]OR"}]] {
state " " as 012f7ad6950889781e36589cf1c82499_entry  <<entryPoint>>
state "(END_AT) 值为空(Nil)" as df742dc3a444ae530d02d70674f5edc0 [[$./start_at#adf742dc3a444ae530d02d70674f5edc0 {"[常规条件] 值为空(Nil)"}]]
state "(START_AT) 小于等于(<=) 数据对象属性 (END_AT)" as 28530137f6bca8edfd3482b7510785b2 [[$./start_at#a28530137f6bca8edfd3482b7510785b2 {"[常规条件] 小于等于(<=) 数据对象属性 (END_AT)"}]]
state " " as 012f7ad6950889781e36589cf1c82499_exit  <<exitPoint>>
}
state " " as cf08ba6e14b8cd4aac03f3518d32a4da_exit  <<exitPoint>>
}


start --> cf08ba6e14b8cd4aac03f3518d32a4da_entry 
cf08ba6e14b8cd4aac03f3518d32a4da_entry --> d2969fbdfdaca65d6a027a839fb39a7a 
d2969fbdfdaca65d6a027a839fb39a7a --> cf08ba6e14b8cd4aac03f3518d32a4da_exit  : yes
d2969fbdfdaca65d6a027a839fb39a7a -[#red]-> 012f7ad6950889781e36589cf1c82499_entry  : no

012f7ad6950889781e36589cf1c82499_entry --> df742dc3a444ae530d02d70674f5edc0 
df742dc3a444ae530d02d70674f5edc0 --> 012f7ad6950889781e36589cf1c82499_exit  : yes
df742dc3a444ae530d02d70674f5edc0 -[#red]-> 28530137f6bca8edfd3482b7510785b2  : no

28530137f6bca8edfd3482b7510785b2 --> 012f7ad6950889781e36589cf1c82499_exit  : yes
28530137f6bca8edfd3482b7510785b2 -[#red]-> end  : no
012f7ad6950889781e36589cf1c82499_exit --> cf08ba6e14b8cd4aac03f3518d32a4da_exit 
cf08ba6e14b8cd4aac03f3518d32a4da_exit --> end 


@enduml
```

#### 条件说明

##### (START_AT) 小于等于(<=) 数据对象属性 (END_AT) :id=a28530137f6bca8edfd3482b7510785b2



`START_AT(计划开始)` LTANDEQ  `END_AT`

> [!ATTENTION|label:规则信息|icon:fa fa-warning]
> 开始时间必须小于等于发布时间


##### (START_AT) 值为空(Nil) :id=ad2969fbdfdaca65d6a027a839fb39a7a



`START_AT(计划开始)` ISNULL 

##### (END_AT) 值为空(Nil) :id=adf742dc3a444ae530d02d70674f5edc0



`END_AT(计划结束)` ISNULL 






