## 发布时间(END_AT) <!-- {docsify-ignore-all} -->

   

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
state "[条件组]OR" as 13d5edfe1d2e0175ca51cb9fd2c4b769 [[$./end_at#a13d5edfe1d2e0175ca51cb9fd2c4b769 {"[条件组]OR"}]] {
state " " as 13d5edfe1d2e0175ca51cb9fd2c4b769_entry  <<entryPoint>>
state "(END_AT) 值为空(Nil)" as f37e057217385a6cdf6027bf440c5ed1 [[$./end_at#af37e057217385a6cdf6027bf440c5ed1 {"[常规条件] 值为空(Nil)"}]]
state "[条件组]OR" as b708a6d8be7ce6255f4ee37a804d95cc [[$./end_at#ab708a6d8be7ce6255f4ee37a804d95cc {"[条件组]OR"}]] {
state " " as b708a6d8be7ce6255f4ee37a804d95cc_entry  <<entryPoint>>
state "(END_AT) 大于等于(>=) 数据对象属性 (START_AT)" as af46f9416d22511c68371e91b28fcdaa [[$./end_at#aaf46f9416d22511c68371e91b28fcdaa {"[常规条件] 大于等于(>=) 数据对象属性 (START_AT)"}]]
state "(START_AT) 值为空(Nil)" as a1251bc3bfb428d46b79ef9b5e30cfb3 [[$./end_at#aa1251bc3bfb428d46b79ef9b5e30cfb3 {"[常规条件] 值为空(Nil)"}]]
state " " as b708a6d8be7ce6255f4ee37a804d95cc_exit  <<exitPoint>>
}
state " " as 13d5edfe1d2e0175ca51cb9fd2c4b769_exit  <<exitPoint>>
}


start --> 13d5edfe1d2e0175ca51cb9fd2c4b769_entry 
13d5edfe1d2e0175ca51cb9fd2c4b769_entry --> f37e057217385a6cdf6027bf440c5ed1 
f37e057217385a6cdf6027bf440c5ed1 --> 13d5edfe1d2e0175ca51cb9fd2c4b769_exit  : yes
f37e057217385a6cdf6027bf440c5ed1 -[#red]-> b708a6d8be7ce6255f4ee37a804d95cc_entry  : no

b708a6d8be7ce6255f4ee37a804d95cc_entry --> af46f9416d22511c68371e91b28fcdaa 
af46f9416d22511c68371e91b28fcdaa --> b708a6d8be7ce6255f4ee37a804d95cc_exit  : yes
af46f9416d22511c68371e91b28fcdaa -[#red]-> a1251bc3bfb428d46b79ef9b5e30cfb3  : no

a1251bc3bfb428d46b79ef9b5e30cfb3 --> b708a6d8be7ce6255f4ee37a804d95cc_exit  : yes
a1251bc3bfb428d46b79ef9b5e30cfb3 -[#red]-> end  : no
b708a6d8be7ce6255f4ee37a804d95cc_exit --> 13d5edfe1d2e0175ca51cb9fd2c4b769_exit 
13d5edfe1d2e0175ca51cb9fd2c4b769_exit --> end 


@enduml
```

#### 条件说明

##### (START_AT) 值为空(Nil) :id=aa1251bc3bfb428d46b79ef9b5e30cfb3



`START_AT(开始时间)` ISNULL 

##### (END_AT) 值为空(Nil) :id=af37e057217385a6cdf6027bf440c5ed1



`END_AT(发布时间)` ISNULL 

##### (END_AT) 大于等于(>=) 数据对象属性 (START_AT) :id=aaf46f9416d22511c68371e91b28fcdaa



`END_AT(发布时间)` GTANDEQ  `START_AT`

> [!ATTENTION|label:规则信息|icon:fa fa-warning]
> 发布时间必须大于等于开始时间







