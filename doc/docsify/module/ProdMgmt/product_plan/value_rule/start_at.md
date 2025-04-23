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
state "[条件组]OR" as e02e7ffedaee0e5d9195b4ab9b3871da [[$./start_at#ae02e7ffedaee0e5d9195b4ab9b3871da {"[条件组]OR"}]] {
state " " as e02e7ffedaee0e5d9195b4ab9b3871da_entry  <<entryPoint>>
state "(START_AT) 值为空(Nil)" as d8786be7558368821eeab492aa630f77 [[$./start_at#ad8786be7558368821eeab492aa630f77 {"[常规条件] 值为空(Nil)"}]]
state "[条件组]OR" as 8c8052f06e06ad437a8fee015fec1f6b [[$./start_at#a8c8052f06e06ad437a8fee015fec1f6b {"[条件组]OR"}]] {
state " " as 8c8052f06e06ad437a8fee015fec1f6b_entry  <<entryPoint>>
state "(END_AT) 值为空(Nil)" as ae4bd6c6d5505bd0626172f51e15a47a [[$./start_at#aae4bd6c6d5505bd0626172f51e15a47a {"[常规条件] 值为空(Nil)"}]]
state "(START_AT) 小于等于(<=) 数据对象属性 (END_AT)" as f03fc11233a5f454912f9d93b198dff0 [[$./start_at#af03fc11233a5f454912f9d93b198dff0 {"[常规条件] 小于等于(<=) 数据对象属性 (END_AT)"}]]
state " " as 8c8052f06e06ad437a8fee015fec1f6b_exit  <<exitPoint>>
}
state " " as e02e7ffedaee0e5d9195b4ab9b3871da_exit  <<exitPoint>>
}


start --> e02e7ffedaee0e5d9195b4ab9b3871da_entry 
e02e7ffedaee0e5d9195b4ab9b3871da_entry --> d8786be7558368821eeab492aa630f77 
d8786be7558368821eeab492aa630f77 --> e02e7ffedaee0e5d9195b4ab9b3871da_exit  : yes
d8786be7558368821eeab492aa630f77 -[#red]-> 8c8052f06e06ad437a8fee015fec1f6b_entry  : no

8c8052f06e06ad437a8fee015fec1f6b_entry --> ae4bd6c6d5505bd0626172f51e15a47a 
ae4bd6c6d5505bd0626172f51e15a47a --> 8c8052f06e06ad437a8fee015fec1f6b_exit  : yes
ae4bd6c6d5505bd0626172f51e15a47a -[#red]-> f03fc11233a5f454912f9d93b198dff0  : no

f03fc11233a5f454912f9d93b198dff0 --> 8c8052f06e06ad437a8fee015fec1f6b_exit  : yes
f03fc11233a5f454912f9d93b198dff0 -[#red]-> end  : no
8c8052f06e06ad437a8fee015fec1f6b_exit --> e02e7ffedaee0e5d9195b4ab9b3871da_exit 
e02e7ffedaee0e5d9195b4ab9b3871da_exit --> end 


@enduml
```

#### 条件说明

##### (START_AT) 值为空(Nil) :id=ad8786be7558368821eeab492aa630f77



`START_AT(计划开始)` ISNULL 

##### (END_AT) 值为空(Nil) :id=aae4bd6c6d5505bd0626172f51e15a47a



`END_AT(计划结束)` ISNULL 

##### (START_AT) 小于等于(<=) 数据对象属性 (END_AT) :id=af03fc11233a5f454912f9d93b198dff0



`START_AT(计划开始)` LTANDEQ  `END_AT`

> [!ATTENTION|label:规则信息|icon:fa fa-warning]
> 开始时间必须小于等于发布时间







