## 计划结束(END_AT) <!-- {docsify-ignore-all} -->

   

### 结束时间 :id=END_AT

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
state "[条件组]OR" as 9245d0f0398471b00f35ee948b0c10c1 [[$./end_at#a9245d0f0398471b00f35ee948b0c10c1 {"[条件组]OR"}]] {
state " " as 9245d0f0398471b00f35ee948b0c10c1_entry  <<entryPoint>>
state "(END_AT) 值为空(Nil)" as 569ed26b4082d8855481e929dbf8204b [[$./end_at#a569ed26b4082d8855481e929dbf8204b {"[常规条件] 值为空(Nil)"}]]
state "[条件组]OR" as 17b5b021720b3b4506398248f7576976 [[$./end_at#a17b5b021720b3b4506398248f7576976 {"[条件组]OR"}]] {
state " " as 17b5b021720b3b4506398248f7576976_entry  <<entryPoint>>
state "(END_AT) 大于等于(>=) 数据对象属性 (START_AT)" as 62c04b6da3b5dab3f0bd663d4261d8f5 [[$./end_at#a62c04b6da3b5dab3f0bd663d4261d8f5 {"[常规条件] 大于等于(>=) 数据对象属性 (START_AT)"}]]
state "(START_AT) 值为空(Nil)" as da6eea783ca6df407f307dc715d1fa62 [[$./end_at#ada6eea783ca6df407f307dc715d1fa62 {"[常规条件] 值为空(Nil)"}]]
state " " as 17b5b021720b3b4506398248f7576976_exit  <<exitPoint>>
}
state " " as 9245d0f0398471b00f35ee948b0c10c1_exit  <<exitPoint>>
}


start --> 9245d0f0398471b00f35ee948b0c10c1_entry 
9245d0f0398471b00f35ee948b0c10c1_entry --> 569ed26b4082d8855481e929dbf8204b 
569ed26b4082d8855481e929dbf8204b --> 9245d0f0398471b00f35ee948b0c10c1_exit  : yes
569ed26b4082d8855481e929dbf8204b -[#red]-> 17b5b021720b3b4506398248f7576976_entry  : no

17b5b021720b3b4506398248f7576976_entry --> 62c04b6da3b5dab3f0bd663d4261d8f5 
62c04b6da3b5dab3f0bd663d4261d8f5 --> 17b5b021720b3b4506398248f7576976_exit  : yes
62c04b6da3b5dab3f0bd663d4261d8f5 -[#red]-> da6eea783ca6df407f307dc715d1fa62  : no

da6eea783ca6df407f307dc715d1fa62 --> 17b5b021720b3b4506398248f7576976_exit  : yes
da6eea783ca6df407f307dc715d1fa62 -[#red]-> end  : no
17b5b021720b3b4506398248f7576976_exit --> 9245d0f0398471b00f35ee948b0c10c1_exit 
9245d0f0398471b00f35ee948b0c10c1_exit --> end 


@enduml
```

#### 条件说明

##### (END_AT) 大于等于(>=) 数据对象属性 (START_AT) :id=a62c04b6da3b5dab3f0bd663d4261d8f5



`END_AT(计划结束)` GTANDEQ  `START_AT`

> [!ATTENTION|label:规则信息|icon:fa fa-warning]
> 发布时间必须大于等于开始时间


##### (START_AT) 值为空(Nil) :id=ada6eea783ca6df407f307dc715d1fa62



`START_AT(计划开始)` ISNULL 

##### (END_AT) 值为空(Nil) :id=a569ed26b4082d8855481e929dbf8204b



`END_AT(计划结束)` ISNULL 






