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
state "[条件组]OR" as 0769f98d31d3f05855dab5eace0b2387 [[$./start_at#a0769f98d31d3f05855dab5eace0b2387 {"[条件组]OR"}]] {
state " " as 0769f98d31d3f05855dab5eace0b2387_entry  <<entryPoint>>
state "(START_AT) 值为空(Nil)" as f7dc3281e0a20903328def1424a10429 [[$./start_at#af7dc3281e0a20903328def1424a10429 {"[常规条件] 值为空(Nil)"}]]
state "[条件组]OR" as dee929f145faef2e7f36c08280edf20f [[$./start_at#adee929f145faef2e7f36c08280edf20f {"[条件组]OR"}]] {
state " " as dee929f145faef2e7f36c08280edf20f_entry  <<entryPoint>>
state "(END_AT) 值为空(Nil)" as fc6a01f1ead9313059a096823d7e4895 [[$./start_at#afc6a01f1ead9313059a096823d7e4895 {"[常规条件] 值为空(Nil)"}]]
state "(START_AT) 小于等于(<=) 数据对象属性 (END_AT)" as 59dc8499c147a39ebe91139da7d79aff [[$./start_at#a59dc8499c147a39ebe91139da7d79aff {"[常规条件] 小于等于(<=) 数据对象属性 (END_AT)"}]]
state " " as dee929f145faef2e7f36c08280edf20f_exit  <<exitPoint>>
}
state " " as 0769f98d31d3f05855dab5eace0b2387_exit  <<exitPoint>>
}


start --> 0769f98d31d3f05855dab5eace0b2387_entry 
0769f98d31d3f05855dab5eace0b2387_entry --> f7dc3281e0a20903328def1424a10429 
f7dc3281e0a20903328def1424a10429 --> 0769f98d31d3f05855dab5eace0b2387_exit  : yes
f7dc3281e0a20903328def1424a10429 -[#red]-> dee929f145faef2e7f36c08280edf20f_entry  : no

dee929f145faef2e7f36c08280edf20f_entry --> fc6a01f1ead9313059a096823d7e4895 
fc6a01f1ead9313059a096823d7e4895 --> dee929f145faef2e7f36c08280edf20f_exit  : yes
fc6a01f1ead9313059a096823d7e4895 -[#red]-> 59dc8499c147a39ebe91139da7d79aff  : no

59dc8499c147a39ebe91139da7d79aff --> dee929f145faef2e7f36c08280edf20f_exit  : yes
59dc8499c147a39ebe91139da7d79aff -[#red]-> end  : no
dee929f145faef2e7f36c08280edf20f_exit --> 0769f98d31d3f05855dab5eace0b2387_exit 
0769f98d31d3f05855dab5eace0b2387_exit --> end 


@enduml
```

#### 条件说明

##### (START_AT) 值为空(Nil) :id=af7dc3281e0a20903328def1424a10429



`START_AT(计划开始)` ISNULL 

##### (END_AT) 值为空(Nil) :id=afc6a01f1ead9313059a096823d7e4895



`END_AT(计划结束)` ISNULL 

##### (START_AT) 小于等于(<=) 数据对象属性 (END_AT) :id=a59dc8499c147a39ebe91139da7d79aff



`START_AT(计划开始)` LTANDEQ  `END_AT`

> [!ATTENTION|label:规则信息|icon:fa fa-warning]
> 开始时间必须小于等于发布时间







