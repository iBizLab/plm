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
state "[条件组]OR" as f179e4db9aaa9411cf712c51a8e1b7ed [[$./start_at#af179e4db9aaa9411cf712c51a8e1b7ed {"[条件组]OR"}]] {
state " " as f179e4db9aaa9411cf712c51a8e1b7ed_entry  <<entryPoint>>
state "(START_AT) 值为空(Nil)" as 9b2fb006e3294c00e811588c93af47d3 [[$./start_at#a9b2fb006e3294c00e811588c93af47d3 {"[常规条件] 值为空(Nil)"}]]
state "[条件组]OR" as 894732cff213f43dd02693c594e63184 [[$./start_at#a894732cff213f43dd02693c594e63184 {"[条件组]OR"}]] {
state " " as 894732cff213f43dd02693c594e63184_entry  <<entryPoint>>
state "(END_AT) 值为空(Nil)" as df5c08cbc958137b68aaba176427216d [[$./start_at#adf5c08cbc958137b68aaba176427216d {"[常规条件] 值为空(Nil)"}]]
state "(START_AT) 小于等于(<=) 数据对象属性 (END_AT)" as a56d805c711bc17a8f501bf3080b9ae7 [[$./start_at#aa56d805c711bc17a8f501bf3080b9ae7 {"[常规条件] 小于等于(<=) 数据对象属性 (END_AT)"}]]
state " " as 894732cff213f43dd02693c594e63184_exit  <<exitPoint>>
}
state " " as f179e4db9aaa9411cf712c51a8e1b7ed_exit  <<exitPoint>>
}


start --> f179e4db9aaa9411cf712c51a8e1b7ed_entry 
f179e4db9aaa9411cf712c51a8e1b7ed_entry --> 9b2fb006e3294c00e811588c93af47d3 
9b2fb006e3294c00e811588c93af47d3 --> f179e4db9aaa9411cf712c51a8e1b7ed_exit  : yes
9b2fb006e3294c00e811588c93af47d3 -[#red]-> 894732cff213f43dd02693c594e63184_entry  : no

894732cff213f43dd02693c594e63184_entry --> df5c08cbc958137b68aaba176427216d 
df5c08cbc958137b68aaba176427216d --> 894732cff213f43dd02693c594e63184_exit  : yes
df5c08cbc958137b68aaba176427216d -[#red]-> a56d805c711bc17a8f501bf3080b9ae7  : no

a56d805c711bc17a8f501bf3080b9ae7 --> 894732cff213f43dd02693c594e63184_exit  : yes
a56d805c711bc17a8f501bf3080b9ae7 -[#red]-> end  : no
894732cff213f43dd02693c594e63184_exit --> f179e4db9aaa9411cf712c51a8e1b7ed_exit 
f179e4db9aaa9411cf712c51a8e1b7ed_exit --> end 


@enduml
```

#### 条件说明

##### (END_AT) 值为空(Nil) :id=adf5c08cbc958137b68aaba176427216d



`END_AT(计划结束)` ISNULL 

##### (START_AT) 小于等于(<=) 数据对象属性 (END_AT) :id=aa56d805c711bc17a8f501bf3080b9ae7



`START_AT(计划开始)` LTANDEQ  `END_AT`

> [!ATTENTION|label:规则信息|icon:fa fa-warning]
> 开始时间必须小于等于发布时间


##### (START_AT) 值为空(Nil) :id=a9b2fb006e3294c00e811588c93af47d3



`START_AT(计划开始)` ISNULL 






