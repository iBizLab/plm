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
state "[条件组]OR" as f98fe4ff17aabfee31a30bfd1924f9f5 [[$./start_at#af98fe4ff17aabfee31a30bfd1924f9f5 {"[条件组]OR"}]] {
state " " as f98fe4ff17aabfee31a30bfd1924f9f5_entry  <<entryPoint>>
state "(START_AT) 值为空(Nil)" as cbeb5c5e660565de4141875064339032 [[$./start_at#acbeb5c5e660565de4141875064339032 {"[常规条件] 值为空(Nil)"}]]
state "[条件组]OR" as c9aef0e1bcca9f3f2ef7ecea3afe62f1 [[$./start_at#ac9aef0e1bcca9f3f2ef7ecea3afe62f1 {"[条件组]OR"}]] {
state " " as c9aef0e1bcca9f3f2ef7ecea3afe62f1_entry  <<entryPoint>>
state "(END_AT) 值为空(Nil)" as de6c6318b591cb98c4d16ea30e7e1237 [[$./start_at#ade6c6318b591cb98c4d16ea30e7e1237 {"[常规条件] 值为空(Nil)"}]]
state "(START_AT) 小于等于(<=) 数据对象属性 (END_AT)" as 64b058ecd314cf987b34273f1a2cefce [[$./start_at#a64b058ecd314cf987b34273f1a2cefce {"[常规条件] 小于等于(<=) 数据对象属性 (END_AT)"}]]
state " " as c9aef0e1bcca9f3f2ef7ecea3afe62f1_exit  <<exitPoint>>
}
state " " as f98fe4ff17aabfee31a30bfd1924f9f5_exit  <<exitPoint>>
}


start --> f98fe4ff17aabfee31a30bfd1924f9f5_entry 
f98fe4ff17aabfee31a30bfd1924f9f5_entry --> cbeb5c5e660565de4141875064339032 
cbeb5c5e660565de4141875064339032 --> f98fe4ff17aabfee31a30bfd1924f9f5_exit  : yes
cbeb5c5e660565de4141875064339032 -[#red]-> c9aef0e1bcca9f3f2ef7ecea3afe62f1_entry  : no

c9aef0e1bcca9f3f2ef7ecea3afe62f1_entry --> de6c6318b591cb98c4d16ea30e7e1237 
de6c6318b591cb98c4d16ea30e7e1237 --> c9aef0e1bcca9f3f2ef7ecea3afe62f1_exit  : yes
de6c6318b591cb98c4d16ea30e7e1237 -[#red]-> 64b058ecd314cf987b34273f1a2cefce  : no

64b058ecd314cf987b34273f1a2cefce --> c9aef0e1bcca9f3f2ef7ecea3afe62f1_exit  : yes
64b058ecd314cf987b34273f1a2cefce -[#red]-> end  : no
c9aef0e1bcca9f3f2ef7ecea3afe62f1_exit --> f98fe4ff17aabfee31a30bfd1924f9f5_exit 
f98fe4ff17aabfee31a30bfd1924f9f5_exit --> end 


@enduml
```

#### 条件说明

##### (START_AT) 值为空(Nil) :id=acbeb5c5e660565de4141875064339032



`START_AT(开始时间)` ISNULL 

##### (START_AT) 小于等于(<=) 数据对象属性 (END_AT) :id=a64b058ecd314cf987b34273f1a2cefce



`START_AT(开始时间)` LTANDEQ  `END_AT`

> [!ATTENTION|label:规则信息|icon:fa fa-warning]
> 开始时间必须小于等于结束时间


##### (END_AT) 值为空(Nil) :id=ade6c6318b591cb98c4d16ea30e7e1237



`END_AT(结束时间)` ISNULL 






