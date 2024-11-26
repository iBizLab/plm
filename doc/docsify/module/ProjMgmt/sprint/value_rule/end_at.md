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
state "[条件组]OR" as bae3dce7e2621a33ab15e3af0caa220a [[$./end_at#abae3dce7e2621a33ab15e3af0caa220a {"[条件组]OR"}]] {
state " " as bae3dce7e2621a33ab15e3af0caa220a_entry  <<entryPoint>>
state "(END_AT) 值为空(Nil)" as 15982819b908212ab609ef3b1b14b131 [[$./end_at#a15982819b908212ab609ef3b1b14b131 {"[常规条件] 值为空(Nil)"}]]
state "[条件组]OR" as f3657014cfa297efca89d916b5bb23bd [[$./end_at#af3657014cfa297efca89d916b5bb23bd {"[条件组]OR"}]] {
state " " as f3657014cfa297efca89d916b5bb23bd_entry  <<entryPoint>>
state "(START_AT) 值为空(Nil)" as b9e81ff0c30005b80b5223d25167daa2 [[$./end_at#ab9e81ff0c30005b80b5223d25167daa2 {"[常规条件] 值为空(Nil)"}]]
state "(END_AT) 大于等于(>=) 数据对象属性 (START_AT)" as 7ba3e2802aedfc4ff690020d1fff950d [[$./end_at#a7ba3e2802aedfc4ff690020d1fff950d {"[常规条件] 大于等于(>=) 数据对象属性 (START_AT)"}]]
state " " as f3657014cfa297efca89d916b5bb23bd_exit  <<exitPoint>>
}
state " " as bae3dce7e2621a33ab15e3af0caa220a_exit  <<exitPoint>>
}


start --> bae3dce7e2621a33ab15e3af0caa220a_entry 
bae3dce7e2621a33ab15e3af0caa220a_entry --> 15982819b908212ab609ef3b1b14b131 
15982819b908212ab609ef3b1b14b131 --> bae3dce7e2621a33ab15e3af0caa220a_exit  : yes
15982819b908212ab609ef3b1b14b131 -[#red]-> f3657014cfa297efca89d916b5bb23bd_entry  : no

f3657014cfa297efca89d916b5bb23bd_entry --> b9e81ff0c30005b80b5223d25167daa2 
b9e81ff0c30005b80b5223d25167daa2 --> f3657014cfa297efca89d916b5bb23bd_exit  : yes
b9e81ff0c30005b80b5223d25167daa2 -[#red]-> 7ba3e2802aedfc4ff690020d1fff950d  : no

7ba3e2802aedfc4ff690020d1fff950d --> f3657014cfa297efca89d916b5bb23bd_exit  : yes
7ba3e2802aedfc4ff690020d1fff950d -[#red]-> end  : no
f3657014cfa297efca89d916b5bb23bd_exit --> bae3dce7e2621a33ab15e3af0caa220a_exit 
bae3dce7e2621a33ab15e3af0caa220a_exit --> end 


@enduml
```

#### 条件说明

##### (END_AT) 大于等于(>=) 数据对象属性 (START_AT) :id=a7ba3e2802aedfc4ff690020d1fff950d



`END_AT(结束时间)` GTANDEQ  `START_AT`

> [!ATTENTION|label:规则信息|icon:fa fa-warning]
> 结束时间必须大于等于开始时间


##### (END_AT) 值为空(Nil) :id=a15982819b908212ab609ef3b1b14b131



`END_AT(结束时间)` ISNULL 

##### (START_AT) 值为空(Nil) :id=ab9e81ff0c30005b80b5223d25167daa2



`START_AT(开始时间)` ISNULL 






