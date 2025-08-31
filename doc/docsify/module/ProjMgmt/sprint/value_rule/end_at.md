## 结束时间(END_AT) <!-- {docsify-ignore-all} -->

   

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
state "[条件组]OR" as aa5306f28877cdc553bdb879a20ac9fc [[$./end_at#aaa5306f28877cdc553bdb879a20ac9fc {"[条件组]OR"}]] {
state " " as aa5306f28877cdc553bdb879a20ac9fc_entry  <<entryPoint>>
state "(END_AT) 值为空(Nil)" as 42947e6e01a16f8069042d50cfb23778 [[$./end_at#a42947e6e01a16f8069042d50cfb23778 {"[常规条件] 值为空(Nil)"}]]
state "[条件组]OR" as 169bafbb0a68c03876acb7e6c8956587 [[$./end_at#a169bafbb0a68c03876acb7e6c8956587 {"[条件组]OR"}]] {
state " " as 169bafbb0a68c03876acb7e6c8956587_entry  <<entryPoint>>
state "(START_AT) 值为空(Nil)" as 073b0f2a061adac1963dcfc269b5e848 [[$./end_at#a073b0f2a061adac1963dcfc269b5e848 {"[常规条件] 值为空(Nil)"}]]
state "(END_AT) 大于等于(>=) 数据对象属性 (START_AT)" as 96e46b2f1f3340cf3900754ce34f6e45 [[$./end_at#a96e46b2f1f3340cf3900754ce34f6e45 {"[常规条件] 大于等于(>=) 数据对象属性 (START_AT)"}]]
state " " as 169bafbb0a68c03876acb7e6c8956587_exit  <<exitPoint>>
}
state " " as aa5306f28877cdc553bdb879a20ac9fc_exit  <<exitPoint>>
}


start --> aa5306f28877cdc553bdb879a20ac9fc_entry 
aa5306f28877cdc553bdb879a20ac9fc_entry --> 42947e6e01a16f8069042d50cfb23778 
42947e6e01a16f8069042d50cfb23778 --> aa5306f28877cdc553bdb879a20ac9fc_exit  : yes
42947e6e01a16f8069042d50cfb23778 -[#red]-> 169bafbb0a68c03876acb7e6c8956587_entry  : no

169bafbb0a68c03876acb7e6c8956587_entry --> 073b0f2a061adac1963dcfc269b5e848 
073b0f2a061adac1963dcfc269b5e848 --> 169bafbb0a68c03876acb7e6c8956587_exit  : yes
073b0f2a061adac1963dcfc269b5e848 -[#red]-> 96e46b2f1f3340cf3900754ce34f6e45  : no

96e46b2f1f3340cf3900754ce34f6e45 --> 169bafbb0a68c03876acb7e6c8956587_exit  : yes
96e46b2f1f3340cf3900754ce34f6e45 -[#red]-> end  : no
169bafbb0a68c03876acb7e6c8956587_exit --> aa5306f28877cdc553bdb879a20ac9fc_exit 
aa5306f28877cdc553bdb879a20ac9fc_exit --> end 


@enduml
```

#### 条件说明

##### (END_AT) 大于等于(>=) 数据对象属性 (START_AT) :id=a96e46b2f1f3340cf3900754ce34f6e45



`END_AT(结束时间)` GTANDEQ  `START_AT`

> [!ATTENTION|label:规则信息|icon:fa fa-warning]
> 结束时间必须大于等于开始时间


##### (END_AT) 值为空(Nil) :id=a42947e6e01a16f8069042d50cfb23778



`END_AT(结束时间)` ISNULL 

##### (START_AT) 值为空(Nil) :id=a073b0f2a061adac1963dcfc269b5e848



`START_AT(开始时间)` ISNULL 






