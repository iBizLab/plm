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
state "[条件组]OR" as d23bf59df8aef19d0b1fab3bfb022631 [[$./end_at#ad23bf59df8aef19d0b1fab3bfb022631 {"[条件组]OR"}]] {
state " " as d23bf59df8aef19d0b1fab3bfb022631_entry  <<entryPoint>>
state "(END_AT) 值为空(Nil)" as 077fcedbe99fea68110108cd49bbbeb1 [[$./end_at#a077fcedbe99fea68110108cd49bbbeb1 {"[常规条件] 值为空(Nil)"}]]
state "[条件组]OR" as ae9699e3c6de4ade7b4444d5c544d4e2 [[$./end_at#aae9699e3c6de4ade7b4444d5c544d4e2 {"[条件组]OR"}]] {
state " " as ae9699e3c6de4ade7b4444d5c544d4e2_entry  <<entryPoint>>
state "(END_AT) 大于等于(>=) 数据对象属性 (START_AT)" as 3d289ba0494a69b10a0976259c063d73 [[$./end_at#a3d289ba0494a69b10a0976259c063d73 {"[常规条件] 大于等于(>=) 数据对象属性 (START_AT)"}]]
state "(START_AT) 值为空(Nil)" as e2f81f1cdc86a1be9ad8977b8158b880 [[$./end_at#ae2f81f1cdc86a1be9ad8977b8158b880 {"[常规条件] 值为空(Nil)"}]]
state " " as ae9699e3c6de4ade7b4444d5c544d4e2_exit  <<exitPoint>>
}
state " " as d23bf59df8aef19d0b1fab3bfb022631_exit  <<exitPoint>>
}


start --> d23bf59df8aef19d0b1fab3bfb022631_entry 
d23bf59df8aef19d0b1fab3bfb022631_entry --> 077fcedbe99fea68110108cd49bbbeb1 
077fcedbe99fea68110108cd49bbbeb1 --> d23bf59df8aef19d0b1fab3bfb022631_exit  : yes
077fcedbe99fea68110108cd49bbbeb1 -[#red]-> ae9699e3c6de4ade7b4444d5c544d4e2_entry  : no

ae9699e3c6de4ade7b4444d5c544d4e2_entry --> 3d289ba0494a69b10a0976259c063d73 
3d289ba0494a69b10a0976259c063d73 --> ae9699e3c6de4ade7b4444d5c544d4e2_exit  : yes
3d289ba0494a69b10a0976259c063d73 -[#red]-> e2f81f1cdc86a1be9ad8977b8158b880  : no

e2f81f1cdc86a1be9ad8977b8158b880 --> ae9699e3c6de4ade7b4444d5c544d4e2_exit  : yes
e2f81f1cdc86a1be9ad8977b8158b880 -[#red]-> end  : no
ae9699e3c6de4ade7b4444d5c544d4e2_exit --> d23bf59df8aef19d0b1fab3bfb022631_exit 
d23bf59df8aef19d0b1fab3bfb022631_exit --> end 


@enduml
```

#### 条件说明

##### (END_AT) 大于等于(>=) 数据对象属性 (START_AT) :id=a3d289ba0494a69b10a0976259c063d73



`END_AT(计划结束)` GTANDEQ  `START_AT`

> [!ATTENTION|label:规则信息|icon:fa fa-warning]
> 发布时间必须大于等于开始时间


##### (END_AT) 值为空(Nil) :id=a077fcedbe99fea68110108cd49bbbeb1



`END_AT(计划结束)` ISNULL 

##### (START_AT) 值为空(Nil) :id=ae2f81f1cdc86a1be9ad8977b8158b880



`START_AT(计划开始)` ISNULL 






