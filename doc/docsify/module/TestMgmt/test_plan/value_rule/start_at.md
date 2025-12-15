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
state "[条件组]OR" as 918d0debe7f1fcd1659d6c3ca0e6b965 [[$./start_at#a918d0debe7f1fcd1659d6c3ca0e6b965 {"[条件组]OR"}]] {
state " " as 918d0debe7f1fcd1659d6c3ca0e6b965_entry  <<entryPoint>>
state "(START_AT) 值为空(Nil)" as aaf388c8d299e9dc46ef661a886bfe5e [[$./start_at#aaaf388c8d299e9dc46ef661a886bfe5e {"[常规条件] 值为空(Nil)"}]]
state "[条件组]OR" as 15c267d2a7c557d9a06efa70413a6567 [[$./start_at#a15c267d2a7c557d9a06efa70413a6567 {"[条件组]OR"}]] {
state " " as 15c267d2a7c557d9a06efa70413a6567_entry  <<entryPoint>>
state "(END_AT) 值为空(Nil)" as 3361fc2ec7e8966d24e12bfb0db671c3 [[$./start_at#a3361fc2ec7e8966d24e12bfb0db671c3 {"[常规条件] 值为空(Nil)"}]]
state "(START_AT) 小于等于(<=) 数据对象属性 (END_AT)" as 297bfed5a8c7c03c3965b054977aa3f2 [[$./start_at#a297bfed5a8c7c03c3965b054977aa3f2 {"[常规条件] 小于等于(<=) 数据对象属性 (END_AT)"}]]
state " " as 15c267d2a7c557d9a06efa70413a6567_exit  <<exitPoint>>
}
state " " as 918d0debe7f1fcd1659d6c3ca0e6b965_exit  <<exitPoint>>
}


start --> 918d0debe7f1fcd1659d6c3ca0e6b965_entry 
918d0debe7f1fcd1659d6c3ca0e6b965_entry --> aaf388c8d299e9dc46ef661a886bfe5e 
aaf388c8d299e9dc46ef661a886bfe5e --> 918d0debe7f1fcd1659d6c3ca0e6b965_exit  : yes
aaf388c8d299e9dc46ef661a886bfe5e -[#red]-> 15c267d2a7c557d9a06efa70413a6567_entry  : no

15c267d2a7c557d9a06efa70413a6567_entry --> 3361fc2ec7e8966d24e12bfb0db671c3 
3361fc2ec7e8966d24e12bfb0db671c3 --> 15c267d2a7c557d9a06efa70413a6567_exit  : yes
3361fc2ec7e8966d24e12bfb0db671c3 -[#red]-> 297bfed5a8c7c03c3965b054977aa3f2  : no

297bfed5a8c7c03c3965b054977aa3f2 --> 15c267d2a7c557d9a06efa70413a6567_exit  : yes
297bfed5a8c7c03c3965b054977aa3f2 -[#red]-> end  : no
15c267d2a7c557d9a06efa70413a6567_exit --> 918d0debe7f1fcd1659d6c3ca0e6b965_exit 
918d0debe7f1fcd1659d6c3ca0e6b965_exit --> end 


@enduml
```

#### 条件说明

##### (START_AT) 值为空(Nil) :id=aaaf388c8d299e9dc46ef661a886bfe5e



`START_AT(计划开始)` ISNULL 

##### (END_AT) 值为空(Nil) :id=a3361fc2ec7e8966d24e12bfb0db671c3



`END_AT(计划结束)` ISNULL 

##### (START_AT) 小于等于(<=) 数据对象属性 (END_AT) :id=a297bfed5a8c7c03c3965b054977aa3f2



`START_AT(计划开始)` LTANDEQ  `END_AT`

> [!ATTENTION|label:规则信息|icon:fa fa-warning]
> 开始时间必须小于等于发布时间







