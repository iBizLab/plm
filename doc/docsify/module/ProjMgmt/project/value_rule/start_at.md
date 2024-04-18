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
state "[条件组]OR" as 9ea75ce8c1b84d153fd0a01fb9b90802 [[$./start_at#a9ea75ce8c1b84d153fd0a01fb9b90802 {"[条件组]OR"}]] {
state " " as 9ea75ce8c1b84d153fd0a01fb9b90802_entry  <<entryPoint>>
state "(START_AT) 值为空(Nil)" as 98976a4ee5af82c8a3a0df5e65118c9b [[$./start_at#a98976a4ee5af82c8a3a0df5e65118c9b {"[常规条件] 值为空(Nil)"}]]
state "[条件组]OR" as 0fe2e60762e3c4b19580f3a54e016d90 [[$./start_at#a0fe2e60762e3c4b19580f3a54e016d90 {"[条件组]OR"}]] {
state " " as 0fe2e60762e3c4b19580f3a54e016d90_entry  <<entryPoint>>
state "(END_AT) 值为空(Nil)" as 0fe2c2d71eaa99780b99dd715b62aa0a [[$./start_at#a0fe2c2d71eaa99780b99dd715b62aa0a {"[常规条件] 值为空(Nil)"}]]
state "(START_AT) 小于等于(<=) 数据对象属性 (END_AT)" as c68545c59758803d9589c285b572dffb [[$./start_at#ac68545c59758803d9589c285b572dffb {"[常规条件] 小于等于(<=) 数据对象属性 (END_AT)"}]]
state " " as 0fe2e60762e3c4b19580f3a54e016d90_exit  <<exitPoint>>
}
state " " as 9ea75ce8c1b84d153fd0a01fb9b90802_exit  <<exitPoint>>
}


start --> 9ea75ce8c1b84d153fd0a01fb9b90802_entry 
9ea75ce8c1b84d153fd0a01fb9b90802_entry --> 98976a4ee5af82c8a3a0df5e65118c9b 
98976a4ee5af82c8a3a0df5e65118c9b --> 9ea75ce8c1b84d153fd0a01fb9b90802_exit  : yes
98976a4ee5af82c8a3a0df5e65118c9b -[#red]-> 0fe2e60762e3c4b19580f3a54e016d90_entry  : no

0fe2e60762e3c4b19580f3a54e016d90_entry --> 0fe2c2d71eaa99780b99dd715b62aa0a 
0fe2c2d71eaa99780b99dd715b62aa0a --> 0fe2e60762e3c4b19580f3a54e016d90_exit  : yes
0fe2c2d71eaa99780b99dd715b62aa0a -[#red]-> c68545c59758803d9589c285b572dffb  : no

c68545c59758803d9589c285b572dffb --> 0fe2e60762e3c4b19580f3a54e016d90_exit  : yes
c68545c59758803d9589c285b572dffb -[#red]-> end  : no
0fe2e60762e3c4b19580f3a54e016d90_exit --> 9ea75ce8c1b84d153fd0a01fb9b90802_exit 
9ea75ce8c1b84d153fd0a01fb9b90802_exit --> end 


@enduml
```

#### 条件说明

##### (START_AT) 值为空(Nil) :id=a98976a4ee5af82c8a3a0df5e65118c9b



`START_AT(开始时间)` ISNULL 

##### (START_AT) 小于等于(<=) 数据对象属性 (END_AT) :id=ac68545c59758803d9589c285b572dffb



`START_AT(开始时间)` LTANDEQ  `END_AT`

> [!ATTENTION|label:规则信息|icon:fa fa-warning]
> 开始时间必须小于等于结束时间


##### (END_AT) 值为空(Nil) :id=a0fe2c2d71eaa99780b99dd715b62aa0a



`END_AT(结束时间)` ISNULL 






