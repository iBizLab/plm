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
state "[条件组]OR" as 99b299f459ac779b29a1647ed051566c [[$./start_at#a99b299f459ac779b29a1647ed051566c {"[条件组]OR"}]] {
state " " as 99b299f459ac779b29a1647ed051566c_entry  <<entryPoint>>
state "(START_AT) 值为空(Nil)" as ed973e25475ab41997ef3c16684cf508 [[$./start_at#aed973e25475ab41997ef3c16684cf508 {"[常规条件] 值为空(Nil)"}]]
state "[条件组]OR" as f5f12e72e47279102a0d5cd6671bcb85 [[$./start_at#af5f12e72e47279102a0d5cd6671bcb85 {"[条件组]OR"}]] {
state " " as f5f12e72e47279102a0d5cd6671bcb85_entry  <<entryPoint>>
state "(END_AT) 值为空(Nil)" as 04b25d44d8af01f214e971b3670fdefa [[$./start_at#a04b25d44d8af01f214e971b3670fdefa {"[常规条件] 值为空(Nil)"}]]
state "(START_AT) 小于等于(<=) 数据对象属性 (END_AT)" as f3eebffee5612c677d54b297a33622e8 [[$./start_at#af3eebffee5612c677d54b297a33622e8 {"[常规条件] 小于等于(<=) 数据对象属性 (END_AT)"}]]
state " " as f5f12e72e47279102a0d5cd6671bcb85_exit  <<exitPoint>>
}
state " " as 99b299f459ac779b29a1647ed051566c_exit  <<exitPoint>>
}


start --> 99b299f459ac779b29a1647ed051566c_entry 
99b299f459ac779b29a1647ed051566c_entry --> ed973e25475ab41997ef3c16684cf508 
ed973e25475ab41997ef3c16684cf508 --> 99b299f459ac779b29a1647ed051566c_exit  : yes
ed973e25475ab41997ef3c16684cf508 -[#red]-> f5f12e72e47279102a0d5cd6671bcb85_entry  : no

f5f12e72e47279102a0d5cd6671bcb85_entry --> 04b25d44d8af01f214e971b3670fdefa 
04b25d44d8af01f214e971b3670fdefa --> f5f12e72e47279102a0d5cd6671bcb85_exit  : yes
04b25d44d8af01f214e971b3670fdefa -[#red]-> f3eebffee5612c677d54b297a33622e8  : no

f3eebffee5612c677d54b297a33622e8 --> f5f12e72e47279102a0d5cd6671bcb85_exit  : yes
f3eebffee5612c677d54b297a33622e8 -[#red]-> end  : no
f5f12e72e47279102a0d5cd6671bcb85_exit --> 99b299f459ac779b29a1647ed051566c_exit 
99b299f459ac779b29a1647ed051566c_exit --> end 


@enduml
```

#### 条件说明

##### (START_AT) 值为空(Nil) :id=aed973e25475ab41997ef3c16684cf508



`START_AT(计划开始)` ISNULL 

##### (END_AT) 值为空(Nil) :id=a04b25d44d8af01f214e971b3670fdefa



`END_AT(计划结束)` ISNULL 

##### (START_AT) 小于等于(<=) 数据对象属性 (END_AT) :id=af3eebffee5612c677d54b297a33622e8



`START_AT(计划开始)` LTANDEQ  `END_AT`

> [!ATTENTION|label:规则信息|icon:fa fa-warning]
> 开始时间必须小于等于发布时间







