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
state "[条件组]OR" as 482695162d7deb6695fcb103771136df [[$./start_at#a482695162d7deb6695fcb103771136df {"[条件组]OR"}]] {
state " " as 482695162d7deb6695fcb103771136df_entry  <<entryPoint>>
state "(START_AT) 值为空(Nil)" as 44cfafc9ae6b519e6693ecfe2ddc8a2d [[$./start_at#a44cfafc9ae6b519e6693ecfe2ddc8a2d {"[常规条件] 值为空(Nil)"}]]
state "[条件组]OR" as 92d013e604af92e8bf8035565fe6f840 [[$./start_at#a92d013e604af92e8bf8035565fe6f840 {"[条件组]OR"}]] {
state " " as 92d013e604af92e8bf8035565fe6f840_entry  <<entryPoint>>
state "(END_AT) 值为空(Nil)" as c06d949ed31b6241863198580a59e384 [[$./start_at#ac06d949ed31b6241863198580a59e384 {"[常规条件] 值为空(Nil)"}]]
state "(START_AT) 小于等于(<=) 数据对象属性 (END_AT)" as f46f1a289f91d8996d90e395e8fa2ddc [[$./start_at#af46f1a289f91d8996d90e395e8fa2ddc {"[常规条件] 小于等于(<=) 数据对象属性 (END_AT)"}]]
state " " as 92d013e604af92e8bf8035565fe6f840_exit  <<exitPoint>>
}
state " " as 482695162d7deb6695fcb103771136df_exit  <<exitPoint>>
}


start --> 482695162d7deb6695fcb103771136df_entry 
482695162d7deb6695fcb103771136df_entry --> 44cfafc9ae6b519e6693ecfe2ddc8a2d 
44cfafc9ae6b519e6693ecfe2ddc8a2d --> 482695162d7deb6695fcb103771136df_exit  : yes
44cfafc9ae6b519e6693ecfe2ddc8a2d -[#red]-> 92d013e604af92e8bf8035565fe6f840_entry  : no

92d013e604af92e8bf8035565fe6f840_entry --> c06d949ed31b6241863198580a59e384 
c06d949ed31b6241863198580a59e384 --> 92d013e604af92e8bf8035565fe6f840_exit  : yes
c06d949ed31b6241863198580a59e384 -[#red]-> f46f1a289f91d8996d90e395e8fa2ddc  : no

f46f1a289f91d8996d90e395e8fa2ddc --> 92d013e604af92e8bf8035565fe6f840_exit  : yes
f46f1a289f91d8996d90e395e8fa2ddc -[#red]-> end  : no
92d013e604af92e8bf8035565fe6f840_exit --> 482695162d7deb6695fcb103771136df_exit 
482695162d7deb6695fcb103771136df_exit --> end 


@enduml
```

#### 条件说明

##### (END_AT) 值为空(Nil) :id=ac06d949ed31b6241863198580a59e384



`END_AT(计划结束)` ISNULL 

##### (START_AT) 值为空(Nil) :id=a44cfafc9ae6b519e6693ecfe2ddc8a2d



`START_AT(计划开始)` ISNULL 

##### (START_AT) 小于等于(<=) 数据对象属性 (END_AT) :id=af46f1a289f91d8996d90e395e8fa2ddc



`START_AT(计划开始)` LTANDEQ  `END_AT`

> [!ATTENTION|label:规则信息|icon:fa fa-warning]
> 开始时间必须小于等于发布时间







