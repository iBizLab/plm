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
state "[条件组]OR" as 82bb9284a96c94a323ab12cf03571bf3 [[$./start_at#a82bb9284a96c94a323ab12cf03571bf3 {"[条件组]OR"}]] {
state " " as 82bb9284a96c94a323ab12cf03571bf3_entry  <<entryPoint>>
state "(START_AT) 值为空(Nil)" as b0ddae0a6591b63532bb51de940263fc [[$./start_at#ab0ddae0a6591b63532bb51de940263fc {"[常规条件] 值为空(Nil)"}]]
state "[条件组]OR" as c10a77723f32f8c39f2ed04e70e26c09 [[$./start_at#ac10a77723f32f8c39f2ed04e70e26c09 {"[条件组]OR"}]] {
state " " as c10a77723f32f8c39f2ed04e70e26c09_entry  <<entryPoint>>
state "(END_AT) 值为空(Nil)" as df7f6c57700a83a1d18cb37d7aee2a07 [[$./start_at#adf7f6c57700a83a1d18cb37d7aee2a07 {"[常规条件] 值为空(Nil)"}]]
state "(START_AT) 小于等于(<=) 数据对象属性 (END_AT)" as 42947e6e01a16f8069042d50cfb23778 [[$./start_at#a42947e6e01a16f8069042d50cfb23778 {"[常规条件] 小于等于(<=) 数据对象属性 (END_AT)"}]]
state " " as c10a77723f32f8c39f2ed04e70e26c09_exit  <<exitPoint>>
}
state " " as 82bb9284a96c94a323ab12cf03571bf3_exit  <<exitPoint>>
}


start --> 82bb9284a96c94a323ab12cf03571bf3_entry 
82bb9284a96c94a323ab12cf03571bf3_entry --> b0ddae0a6591b63532bb51de940263fc 
b0ddae0a6591b63532bb51de940263fc --> 82bb9284a96c94a323ab12cf03571bf3_exit  : yes
b0ddae0a6591b63532bb51de940263fc -[#red]-> c10a77723f32f8c39f2ed04e70e26c09_entry  : no

c10a77723f32f8c39f2ed04e70e26c09_entry --> df7f6c57700a83a1d18cb37d7aee2a07 
df7f6c57700a83a1d18cb37d7aee2a07 --> c10a77723f32f8c39f2ed04e70e26c09_exit  : yes
df7f6c57700a83a1d18cb37d7aee2a07 -[#red]-> 42947e6e01a16f8069042d50cfb23778  : no

42947e6e01a16f8069042d50cfb23778 --> c10a77723f32f8c39f2ed04e70e26c09_exit  : yes
42947e6e01a16f8069042d50cfb23778 -[#red]-> end  : no
c10a77723f32f8c39f2ed04e70e26c09_exit --> 82bb9284a96c94a323ab12cf03571bf3_exit 
82bb9284a96c94a323ab12cf03571bf3_exit --> end 


@enduml
```

#### 条件说明

##### (START_AT) 值为空(Nil) :id=ab0ddae0a6591b63532bb51de940263fc



`START_AT(开始时间)` ISNULL 

##### (START_AT) 小于等于(<=) 数据对象属性 (END_AT) :id=a42947e6e01a16f8069042d50cfb23778



`START_AT(开始时间)` LTANDEQ  `END_AT`

> [!ATTENTION|label:规则信息|icon:fa fa-warning]
> 开始时间必须小于等于结束时间


##### (END_AT) 值为空(Nil) :id=adf7f6c57700a83a1d18cb37d7aee2a07



`END_AT(结束时间)` ISNULL 






