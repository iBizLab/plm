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
state "[条件组]OR" as b2a5e9a9ced011e0d3f6a951ac748f6e [[$./start_at#ab2a5e9a9ced011e0d3f6a951ac748f6e {"[条件组]OR"}]] {
state " " as b2a5e9a9ced011e0d3f6a951ac748f6e_entry  <<entryPoint>>
state "(START_AT) 值为空(Nil)" as 044bac3ea8c33b980c987b83dfd23612 [[$./start_at#a044bac3ea8c33b980c987b83dfd23612 {"[常规条件] 值为空(Nil)"}]]
state "[条件组]OR" as 5855644f230b0d86f268795ac63b68c4 [[$./start_at#a5855644f230b0d86f268795ac63b68c4 {"[条件组]OR"}]] {
state " " as 5855644f230b0d86f268795ac63b68c4_entry  <<entryPoint>>
state "(END_AT) 值为空(Nil)" as 9ee79bb67084cdb5a2ae7c9cc2a4314a [[$./start_at#a9ee79bb67084cdb5a2ae7c9cc2a4314a {"[常规条件] 值为空(Nil)"}]]
state "(START_AT) 小于等于(<=) 数据对象属性 (END_AT)" as c42fef7609e3d8eb4f35fe6f12b073de [[$./start_at#ac42fef7609e3d8eb4f35fe6f12b073de {"[常规条件] 小于等于(<=) 数据对象属性 (END_AT)"}]]
state " " as 5855644f230b0d86f268795ac63b68c4_exit  <<exitPoint>>
}
state " " as b2a5e9a9ced011e0d3f6a951ac748f6e_exit  <<exitPoint>>
}


start --> b2a5e9a9ced011e0d3f6a951ac748f6e_entry 
b2a5e9a9ced011e0d3f6a951ac748f6e_entry --> 044bac3ea8c33b980c987b83dfd23612 
044bac3ea8c33b980c987b83dfd23612 --> b2a5e9a9ced011e0d3f6a951ac748f6e_exit  : yes
044bac3ea8c33b980c987b83dfd23612 -[#red]-> 5855644f230b0d86f268795ac63b68c4_entry  : no

5855644f230b0d86f268795ac63b68c4_entry --> 9ee79bb67084cdb5a2ae7c9cc2a4314a 
9ee79bb67084cdb5a2ae7c9cc2a4314a --> 5855644f230b0d86f268795ac63b68c4_exit  : yes
9ee79bb67084cdb5a2ae7c9cc2a4314a -[#red]-> c42fef7609e3d8eb4f35fe6f12b073de  : no

c42fef7609e3d8eb4f35fe6f12b073de --> 5855644f230b0d86f268795ac63b68c4_exit  : yes
c42fef7609e3d8eb4f35fe6f12b073de -[#red]-> end  : no
5855644f230b0d86f268795ac63b68c4_exit --> b2a5e9a9ced011e0d3f6a951ac748f6e_exit 
b2a5e9a9ced011e0d3f6a951ac748f6e_exit --> end 


@enduml
```

#### 条件说明

##### (END_AT) 值为空(Nil) :id=a9ee79bb67084cdb5a2ae7c9cc2a4314a



`END_AT(计划结束)` ISNULL 

##### (START_AT) 值为空(Nil) :id=a044bac3ea8c33b980c987b83dfd23612



`START_AT(计划开始)` ISNULL 

##### (START_AT) 小于等于(<=) 数据对象属性 (END_AT) :id=ac42fef7609e3d8eb4f35fe6f12b073de



`START_AT(计划开始)` LTANDEQ  `END_AT`

> [!ATTENTION|label:规则信息|icon:fa fa-warning]
> 开始时间必须小于等于发布时间







